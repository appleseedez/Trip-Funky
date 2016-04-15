/**
 * Created by chenjianjun on 16/4/5.
 */
var env=require("../../config");
var type=env.Thinky.type;

/*
 {
 "id": 10,
 "type": 1,
 "name": "青岛",
 "description": "好地方，不多说。",
 "weight": "1000"
 }
* */
// 旅拍城市站点模型
const CitySite = env.Thinky.createModel('citySite', {
  // Id
  id: type.number(),
  // 名称
  name: type.string(),
  // type 1：国内、2：海外
  type: type.number(),
  // 描述
  description: type.string(),
  // 权重
  weight: type.number()
})

CitySite.ensureIndex('weight');

module.exports=CitySite;
