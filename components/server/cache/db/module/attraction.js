/**
 * Created by chenjianjun on 16/4/5.
 */
var env=require("../../config");
var type=env.Thinky.type;

/*
 {
 "id": 4,
 "name": "海滩",
 "description": "10",
 "cityId": 4,
 "cityName": "三亚",
 "weight": "10"
 }
* */
// 旅拍城市景点模型
const Attraction = env.Thinky.createModel('attraction', {
  // Id
  id: type.number(),
  // 名称
  name: type.string(),
  // 旅拍分站城市ID
  cityId: type.number(),
  // 旅拍分站城市名称
  cityName: type.string(),
  // 描述
  description: type.string(),
  // 权重
  weight: type.number()
})

Attraction.ensureIndex('weight');

module.exports=Attraction;
