/**
 * Created by chenjianjun on 16/4/5.
 */
var env=require("../../config");
var type=env.Thinky.type;

// 旅拍城市景点模型
const Attraction = env.Thinky.createModel('attraction', {
  // Id
  id: type.number(),
  // 名称
  name: type.string(),
  // 城市ID(旅拍地ID)
  placeId: type.number(),
  // 描述
  description: type.string(),
  // 权重
  weight: type.number()
})

Attraction.ensureIndex('weight');

module.exports=Attraction;
