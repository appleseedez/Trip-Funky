/**
 * Created by chenjianjun on 16/3/5.
 */
const DBConfig = {
  cache_flg: true, // DB数据库缓存开关 true开启 false关闭
  cache_time_check: 60000*30, // 缓存清理时间,30分钟
  rethink:{
    db:'trip',
    host:'127.0.0.1',
    port:'28015'
  },
  // 广告数据
  AdvPath:"/api/adv/all"
};

const Thinky = require('thinky')(DBConfig.rethink);

const MemConfig = {
  cache_timeout: 60000*5,// 缓存时间
  cache_time_check: 60000*5,// 缓存清理时间
  cache_max_size: 100*100*3 // 最大缓存数
};

module.exports = {
  'APIPort': "8088",
  'APIHost': (process.env.NODE_ENV === 'production')?'10.44.120.114':'192.168.1.6',
  'DBConfig':DBConfig,
  'Thinky':Thinky,
  'MemConfig':MemConfig
};
