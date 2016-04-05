/**
 * Created by chenjianjun on 16/4/5.
 */
var env=require("../../config");
var type=env.Thinky.type;

// 旅拍城市站点模型
const Sample = env.Thinky.createModel('sample', {
  // Id
  id: type.number(),
  // 客片名称
  name: type.string(),
  // 网站封面图片地址
  coverUrl: type.string(),
  // 微信封面图片地址
  wechatUrl: type.string(),
  // APP封面图片地址
  mobileUrl: type.string(),
  // 客片描述
  description: type.string(),
  // 城市ID(旅拍地ID)
  placeId: type.number(),
  // 景点ID
  attractionsId: type.number(),
  /************************************start************************************/
  // 网站详细图片集
  pcDetailImages: type.string(),
  // APP详细图片集
  appDetailImages: type.string(),
  // 微信详细图片集
  wxDetailImages: type.string(),
  /************************************end************************************/
  // 权重
  weight: type.number()
})

Sample.ensureIndex('weight');

module.exports=Sample;

