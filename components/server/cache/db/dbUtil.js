/**
 * Created by chenjianjun on 15/12/8.
 */
var http = require('http');
var qs = require('querystring');
var _ = require('lodash')

var Config = require("../config.js");
var Adv = require("./module/adv.js");


var models = {
  "Adv": Adv
}

var dbTool = null;
var mSyncFlg = {
  "Adv": false
};

//查询工具类
function DBUtil() {};

/**
 * 从后台获取数据
 * @param path URL的接口地址如：/api/adv/list?pageIndex=1&pageSize=2
 * @param cb
 * @constructor
 */
function GetData(path, cb) {
  var options = {
    host: Config.APIHost,
    port: Config.APIPort,
    path: path,
    method: "GET"
  };

  var req = http.request(options, function(res) {
    res.setEncoding('utf8');
    var chunks = "";
    res.on('data', function(chunk) {
      chunks += chunk;
    });
    res.on('end', function() {
      if (res.statusCode != 200) {
        var err = new Error('资源请求异常,URI:'+options.path);
        cb(err);
      } else {
        if (chunks === "") {
          var err = new Error('服务器异常,拉取数据失败');
          cb(err);
        } else {
          try {
            var json = JSON.parse(chunks);
            if (json.code == 200) {
              cb(null, json);
            } else {
              var err = new Error('服务器异常');
              cb(err);
            }
          } catch (e) {
            var err = new Error('服务器异常');
            cb(err);
          }
        }
      }
    });
    res.on('error', function(e) {
      cb(e);
    });
  });

  // 设置请求超时15秒
  req.setTimeout(15000);

  req.on('error', function(e) {
    if(req.res && req.res.abort && (typeof req.res.abort === 'function')) {
      req.res.abort();
    }
    req.abort();
    var err = new Error('服务器异常');
    cb(err);
  }).on('timeout', function() {
    if(req.res && req.res.abort && (typeof req.res.abort === 'function')) {
      req.res.abort();
    }
    req.abort();
    var err = new Error('服务器超时');
    cb(err);
  });

  req.end();
}
/**
 * 同步数据
 * @param module 模块名称
 * @param sumCount 记录已拉取的条数
 * @param index 分页数
 * @param count 拉取数量
 * @param cb 数据回调
 * @constructor
 */
function SyncFun(module, sumCount, dataList, index, count, cb) {

  let path = Config.DBConfig[module + 'Path'] + '?' + qs.stringify({
      pageSize: count,
      pageIndex: index
    });

  GetData(path, function(err, data) {
    if (err) {
      cb(err);
    } else {
      // 存储数据
      if (sumCount < data.count)
      {
        sumCount += data.data.length;
        models[module].save(data.data).then(function(result, error) {
          if (error) {
            cb(error);
          } else {
            SyncFun(module, sumCount, dataList, index + 1, count, cb);
          }
        });
      }
      else
      {
        cb(null);
      }
    }
  });
}

/**
 * 同步数据
 * @param type 0:酒店
 * @constructor
 */
function Sync(type) {
  mSyncFlg[type] = false;
  let sumCount = 0;
  let dataList = new Map();
  models[type].delete().run().then(function(rel) {
    SyncFun(type, sumCount, dataList, 1, 10, function(err) {
      if (err) {
        console.log('拉取数据失败['+type+']', err);
      } else {
        mSyncFlg[type] = true;
        console.log('拉取数据成功['+type+']');
      }
    });
  });
}

DBUtil.prototype.isCacheDataUsable = function(moduleName) {
  return mSyncFlg[moduleName];
};

DBUtil.prototype.updateDBCacheData = function(moduleName) {
  if(moduleName in mSyncFlg) {
    Sync(moduleName);
  }
};

exports.Instance = function() {
  // 分三级数据拉取级别
  // 一级资源,更新比较频繁的资源
  var tasks1 = ['Adv'];

  // 二级资源,更新不是很平凡的资源
  var tasks2 = [];

  // 三级资源,不经常更新的资源
  var tasks3 = [];

  if (dbTool == null) {
    dbTool = new DBUtil();

    if (Config.DBConfig.cache_flg) {
      // 程序启动取一次数据
      _.each(tasks1, function(v) {
        Sync(v)
      });
      _.each(tasks2, function(v) {
        Sync(v)
      });
      _.each(tasks3, function(v) {
        Sync(v)
      });

      // 定时器，根据配置时间拉取静态资源
      setInterval(function() {
        _.each(tasks1, function(v) {
          Sync(v)
        })
      }, Config.DBConfig.cache_time_check);

      setInterval(function() {
        _.each(tasks2, function(v) {
          Sync(v)
        })
      }, Config.DBConfig.cache_time_check*2);

      setInterval(function() {
        _.each(tasks3, function(v) {
          Sync(v)
        })
      }, Config.DBConfig.cache_time_check*4);
    }
  }
  return dbTool;
};
