/**
 * Created by chenjianjun on 16/4/5.
 */
var env=require("../../config");
var type=env.Thinky.type;

/*
 {
 "id": 7,
 "name": "Marride",
 "description": "",
 "coverUrlWeb": "http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/trip/pringles/20160409/14601697143615247_800x1200.jpg",
 "coverUrlWx": "http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/trip/pringles/20160409/14601697145001420_800x1200.jpg",
 "coverUrlApp": "http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/trip/pringles/20160409/14601697144315001_800x1200.jpg",
 "actorFemaleName": "戴欣芸",
 "actorMaleName": "陈祥",
 "cityId": 4,
 "cityName": "三亚",
 "attractionsId": 4,
 "attractionsName": "海滩",
 "pcDetailImages": [
 "http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/trip/pringles/20160409/14601698306706793_1920x1167.jpg",
 "http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/trip/pringles/20160409/14601698303974029_1920x1166.jpg",
 "http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/trip/pringles/20160409/14601698303190851_1920x1167.jpg",
 ],
 "appDetailImages": [],
 "wxDetailImages": [],
 "weight": 100
 }
* */
// 客片模型
const Pringles = env.Thinky.createModel('pringles', {
  // Id
  id: type.number(),
  // 客片名称
  name: type.string(),
  // 客片描述
  description: type.string(),
  // 网站封面图片地址
  coverUrlWeb: type.string(),
  // 微信封面图片地址
  coverUrlWx: type.string(),
  // APP封面图片地址
  coverUrlApp: type.string(),
  // 女主角
  actorFemaleName: type.string(),
  // 男主角
  actorMaleName: type.string(),
  // 旅拍分站城市ID
  cityId: type.number(),
  // 旅拍分站城市名称
  cityName: type.string(),
  // 景点ID
  attractionsId: type.number(),
  // 景点名称
  attractionsName: type.string(),
  // 网站详细图片集
  pcDetailImages: type.array(),
  // APP详细图片集
  appDetailImages: type.array(),
  // 微信详细图片集
  wxDetailImages: type.array(),
  // 权重
  weight: type.number()
})

Pringles.ensureIndex('weight');

module.exports=Pringles;
