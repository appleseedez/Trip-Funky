/**
 * Created by chenjianjun on 15/12/15.
 */
var env=require("../../config");
var type=env.Thinky.type;

/*
 */

// 广告模型
const Adv = env.Thinky.createModel('adv', {
    // Id
    id: type.number(),
    // 广告名称
    name: type.string(),
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
