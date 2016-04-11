/**
 * Created by chenjianjun on 16/4/5.
 */
var env=require("../../config");
var type=env.Thinky.type;

/*
 {
 "id": 20040,
 "name": "1899元艺术照套系",
 "level": 3,
 "coverUrl": "http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/suite/20160202/14543827715230577_1200x800.jpg",
 "wechatUrl": "http://image.jsbn.com/WebImage/CQ/zip/20160107/96654119652085266705/20160107185853944281_550x320.jpg",
 "mobileUrl": "http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/suite/20160202/14543827717449066_1200x800.jpg",
 "description": "1899元艺术照套系",
 "detail": "服务团队：| 专业摄影师拍摄",
 "salePrice": 999,
 "originalPrice": 999,
 "originalSuiteId": "2",
 "pcDetailImages": "{"pc_processImages":["http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/suite/20160202/14543827725152552_1920x1263.jpg","http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/suite/20160202/14543827716387588_1920x1558.jpg","http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/suite/20160202/14543827719084114_1920x1119.jpg"],"pc_baseSampleImages":["http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/suite/20160202/14543827721271441_1920x1000.jpg"],"pc_slidesImages":["http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/suite/20160202/14543827726301118_1200x800.jpg","http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/suite/20160202/14543827720985091_1200x800.jpg","http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/suite/20160202/14543827730033738_1200x800.jpg","http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/suite/20160202/14543827724150162_1200x800.jpg"],"pc_detailImages":["http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/suite/20160202/14543827716857698_1920x1098.jpg"],"pc_clothShootImages":["http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/suite/20160202/14543827732088711_1920x787.jpg"],"pc_cosmeticImages":["http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/suite/20160202/14543827726985944_1920x760.jpg"],"pc_serviceImages":["http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/suite/20160202/14543827725748596_1920x574.jpg"]}",
 "appDetailImages": "{"app_baseSampleImages":["http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/suite/20160202/14543827722749582_1920x1000.jpg"],"app_clothShootImages":["http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/suite/20160202/14543827717900214_1920x787.jpg"],"app_processImages":["http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/suite/20160202/14543827726721152_1920x1263.jpg","http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/suite/20160202/14543827720153810_1920x1558.jpg","http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/suite/20160202/14543827714604154_1920x1119.jpg"],"app_slidesImages":["http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/suite/20160202/14543827728864505_1200x800.jpg","http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/suite/20160202/14543827730633815_1200x800.jpg","http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/suite/20160202/14543827724760159_1200x800.jpg","http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/suite/20160202/14543827731208702_1200x800.jpg"],"app_detailImages":["http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/suite/20160202/14543827718829922_1920x1098.jpg"],"app_cosmeticImages":["http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/suite/20160202/14543827720363435_1920x760.jpg"],"app_serviceImages":["http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/suite/20160202/14543827717648772_1920x574.jpg"]}",
 "wxDetailImages": "{"wx_slidesImages":["http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/suite/20160202/14543827721905752_1200x800.jpg","http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/suite/20160202/14543827723346304_1200x800.jpg","http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/suite/20160202/14543827731833072_1200x800.jpg","http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/suite/20160202/14543827714101925_1200x800.jpg"],"wx_detailImages":["http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/suite/20160202/14543827718367249_1920x1098.jpg"],"wx_clothShootImages":["http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/suite/20160202/14543827723574842_1920x787.jpg"],"wx_serviceImages":["http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/suite/20160202/14543827714314590_1920x574.jpg"],"wx_processImages":["http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/suite/20160202/14543827725555323_1920x1263.jpg","http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/suite/20160202/14543827727486503_1920x1558.jpg","http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/suite/20160202/14543827727980294_1920x1119.jpg"],"wx_cosmeticImages":["http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/suite/20160202/14543827727700841_1920x760.jpg"],"wx_baseSampleImages":["http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/suite/20160202/14543827728295206_1920x1000.jpg"]}",
 "position": null,
 "weight": 100
 }
* */
// 套系模型
const Suite = env.Thinky.createModel('suite', {
  // Id
  id: type.number(),
  // 套系名称
  name: type.string(),
  // 套系等级 1 高套，2 中套，3 低套
  level: type.number(),
  // 网站封面图片地址
  coverUrlWeb: type.string(),
  // 微信封面图片地址
  coverUrlWx: type.string(),
  // APP封面图片地址
  coverUrlApp: type.string(),
  // 套系描述
  description: type.string(),
  // 套系详情
  detail: type.string(),
  // 现价
  salePrice: type.number(),
  // 原价
  originalPrice: type.number(),
  // 熊宝贝Id
  originalSuiteId: type.string(),
  // 旅拍分站城市ID
  cityId: type.number(),
  // 旅拍城市名称
  cityName: type.string(),
  // 景点Id
  attractionsId: type.number(),
  // 景点名称
  attractionsName: type.string(),
  // 网站详细图片集
  pcDetailImages: type.string(),
  // APP详细图片集
  appDetailImages: type.string(),
  // 微信详细图片集
  wxDetailImages: type.string(),
  // 权重
  weight: type.number()
})

Suite.ensureIndex('weight');

module.exports=Suite;
