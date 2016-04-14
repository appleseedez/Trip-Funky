/**
 * Created by chenjianjun on 16/3/5.
 */
const DBConfig = {
  cache_flg: false, // DB数据库缓存开关 true开启 false关闭
  cache_time_check: 60000*60*12, // 缓存清理时间,12小时
  rethink:{
    db:'trip',
    host:'127.0.0.1',
    port:'28015'
  },
  // 广告数据
  AdvPath:"/api/data/adv",
  // 城市站点
  CitySitePath:"/api/data/city",
  // 景点
  AttractionPath:"/api/data/attractions",
  // 样片
  SamplePath: "/api/data/sample",
  // 客片
  PringlesPath: "/api/data/pringles",
  // 套系
  SuitePath: "/api/data/suite"
};

const Thinky = require('thinky')(DBConfig.rethink);

const MemConfig = {
  cache_timeout: 60000*10,// 缓存时间
  cache_max_size: 1000*3 // 最大缓存数
};

module.exports = {
  'APIPort': "8088",
  'APIHost': (process.env.NODE_ENV === 'production')?'127.0.0.1':'120.24.213.186',
  'DBConfig':DBConfig,
  'Thinky':Thinky,
  'MemConfig':MemConfig
};
