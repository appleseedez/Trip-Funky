/**
 * Created by chenjianjun on 15/12/15.
 */
var env=require("../../config");
var type=env.Thinky.type;

/*
 {
 "id": 446,
 "name": "三亚旅拍",
 "cityId": 5,
 "type": 1,
 "coverUrlWeb": "http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/trip/vda/20160408/14600831616977012_1920x1098.jpg",
 "coverUrlWx": "http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/trip/vda/20160408/14600831617813489_1920x1098.jpg",
 "coverUrlApp": "http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/trip/vda/20160408/14600831617394492_1920x1098.jpg",
 "description": "让你体验不一样的婚纱摄影",
 "linkUrl": "http://trip.jsbn.com/#/sample?_k=ce2ph1",
 "videoUrl": "",
 "position": "index_top",
 "weight": 100
 }
* */

// 广告模型
const Adv = env.Thinky.createModel('adv', {
    // Id
    id: type.number(),
    // 广告名称
    name: type.string(),
    // 发布的旅拍分站城市ID
    cityId: type.number(),
    // 广告类型 0：图片广告 1：视频广告
    type: type.number(),
    // 网站封面图片地址
    coverUrlWeb: type.string(),
    // 微信封面图片地址
    coverUrlWx: type.string(),
    // APP封面图片地址
    coverUrlApp: type.string(),
    // 广告描述
    description: type.string(),
    // 链接地址
    linkUrl: type.string(),
    // 视频地址，广告类型为视频广告有效
    videoUrl: type.string(),
    // 资源位置
    position: type.string(),
    // 权重
    weight: type.number()
})

Adv.ensureIndex('weight');

module.exports=Adv;
