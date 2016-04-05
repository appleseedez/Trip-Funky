/**
 * Created by chenjianjun on 16/4/5.
 */
var env=require("../../config");
var type=env.Thinky.type;

// 旅拍城市站点模型
const CitySite = env.Thinky.createModel('citySite', {
  // Id
  id: type.number(),
  // 名称
  name: type.string(),
  // 描述
  description: type.string(),
  // 权重
  weight: type.number()
})

CitySite.ensureIndex('weight');

module.exports=CitySite;
