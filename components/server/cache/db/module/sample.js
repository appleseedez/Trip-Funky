/**
 * Created by chenjianjun on 16/4/5.
 */
var env=require("../../config");
var type=env.Thinky.type;

/*
 {
 "name": "东海一线天",
 "description": "",
 "coverUrlWeb": "http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/trip/sample/20160409/14601685585058732_800x1200.JPG",
 "coverUrlWx": "http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/trip/sample/20160409/14601685585876772_1920x1098.jpg",
 "coverUrlApp": "http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/trip/sample/20160409/14601685585463088_1920x1098.jpg",
 "cityId": 4,
 "cityName": "三亚",
 "attractionsId": 7,
 "attractionsName": "天涯海角",
 "pcDetailImages": [
 "http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/trip/sample/20160409/14601685611305565_1920x904.jpg",
 "http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/trip/sample/20160409/14601685609522047_1920x904.jpg",
 ],
 "appDetailImages": [],
 "wxDetailImages": [],
 "weight": 100
 }
* */
// 样片模型
const Sample = env.Thinky.createModel('sample', {
  // Id
  id: type.number(),
  // 上传日期
  updateTime: type.string(),
  // 客片名称
  name: type.string(),
  // 样片描述
  description: type.string(),
  // 网站封面图片地址
  coverUrlWeb: type.string(),
  // 微信封面图片地址
  coverUrlWx: type.string(),
  // APP封面图片地址
  coverUrlApp: type.string(),
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

Sample.ensureIndex('weight');

module.exports=Sample;

