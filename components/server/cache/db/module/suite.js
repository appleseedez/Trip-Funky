/**
 * Created by chenjianjun on 16/4/5.
 */
var env=require("../../config");
var type=env.Thinky.type;

// 旅拍城市站点模型
const Suite = env.Thinky.createModel('suite', {
  // Id
  id: type.number(),
  // 客片名称
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
  /************************************start************************************/
  // 网站详细图片集 TODO:api的列表无此项,需要增加
  pcDetailImages: type.string(),
  // APP详细图片集
  appDetailImages: type.string(),
  // 微信详细图片集
  wxDetailImages: type.string(),
  /************************************end************************************/
  // 权重
  weight: type.number()
})

Suite.ensureIndex('weight');

module.exports=Suite;
