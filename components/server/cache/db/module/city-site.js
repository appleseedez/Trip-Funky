/**
 * Created by chenjianjun on 16/4/5.
 */
var env=require("../../config");
var type=env.Thinky.type;

/*
 {
 "id": 4,
 "createTime": 1454466087000,
 "updateTime": 1460082893000,
 "operater": 1,
 "isUsed": 1,
 "countryType": 1,
 "name": "三亚",
 "description": "三亚",
 "weight": "5"
 }
* */
// 旅拍城市站点模型
const CitySite = env.Thinky.createModel('citySite', {
  // Id
  id: type.number(),
  // 名称
  name: type.string(),
  // type 0：国内、1：海外
  type: type.number(),
  // 描述
  description: type.string(),
  // 权重
  weight: type.number()
})

CitySite.ensureIndex('weight');

module.exports=CitySite;
