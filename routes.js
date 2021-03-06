import Router from 'koa-router'
import React, { PropTypes } from 'react'
import _ from 'lodash'
import { renderToString } from 'react-dom/server'
import { ComponentsIndex, ComponentsSeo } from './components/config/components-index'
import { Navigation } from './components/navigation.jsx'

/** api的路由逻辑**/
import advApi from './components/server/api/adv'
import citySiteApi from './components/server/api/city'
import pringlesApi from './components/server/api/pringles'
import sampleApi from './components/server/api/sample'
import suiteApi from './components/server/api/suite'
import cacheManagerApi from './components/server/api/cache-manager.js'

const apiRouter = new Router({
  'prefix':'/api'
})
apiRouter.get('/',function* apiIndex(next){
  yield next
  this.body={
    '/':'Api Index',
    '/api/adv/:position':'广告',
    '/api/city':'旅拍城市列表',
    '/api/attractions/:cityId':'根据旅拍城市Id获取景点',
    '/api/pringles?cityId=旅拍城市ID&attractionsId=景点ID':'客片列表',
    '/api/pringles/detail/:id':'客片详情',
    '/api/sample?cityId=旅拍城市ID&attractionsId=景点ID':'样片列表',
    '/api/sample/detail/:id':'样片详情',
    '/api/suite?cityId=旅拍城市ID&attractionsId=景点ID':'套系列表',
    '/api/suite/detail/:id':'套系详情',
    'Adv,Sample,Pringles,Suite,CitySite,Attraction': '^_^'
  }
})

/** 把api的router在此生成 **/
const apiRouterList = [
  advApi,
  citySiteApi,
  pringlesApi,
  sampleApi,
  suiteApi,
  cacheManagerApi
]
_.each(apiRouterList,(route,index)=>{
  _.each(route,(value,key)=>{
    apiRouter[key.split('+')[0]](key.split('+')[1], value)
  })
})

export { apiRouter }


const siteRouter = new Router()

const renderOption = (templateName, currentUrl,platformClass,params,wrapperClass) =>{

  let p = params || {}

  let platformType = 0;// 0:是pc 1:移动端
  if(platformClass === 'adaptation-mobile') {
    platformType = 1;
  }

  // 把平台类型放到参数里面带给客户端
  _.merge(p,{'platformType':platformType})

  return {
    'title':ComponentsSeo[templateName].seoTitle || '',
    'seoKeywords':ComponentsSeo[templateName].seoKeywords || '',
    'seoDescription':ComponentsSeo[templateName].seoDescription || '',
    'reactMarkup': renderToString(ComponentsIndex[templateName]),
    'reactNavMarkup': renderToString(<Navigation currentUrl={currentUrl||'/'} dataParams={p} />),
    'wrapperClass':wrapperClass || 't', // t: 顶部有菜单的margin un: 无margin b:底部有margin tb 顶部底部都有margin
    'platformClass':platformClass || 'adaptation-1200',
    'main': templateName,// 客户端渲染使用的脚本名称和模板名称一致
    'params':JSON.stringify(p),
    'mode':(process.env.NODE_ENV === 'production')?'production':'development'
  }
}
/** this.platformClass 是通过前置的中间件设置。 这里有点丑，想办法优化**/
siteRouter.get('/',function* (next){
  if(this.platformClass === 'adaptation-mobile') {
    yield this.render('modules/default',renderOption('home','/',this.platformClass, this.request.query, 'un'))
  } else {
    yield this.render('modules/default',renderOption('home','/',this.platformClass))
  }
})
siteRouter.get('/index',function* (next){
  yield this.render('modules/default',renderOption('index','/index',this.platformClass,this.request.query))
})

siteRouter.get('/sample',function* (next){
  yield this.render('modules/default',renderOption('sample','/sample',this.platformClass,this.request.query))
})
/** 作品详情 **/
siteRouter.get('/sample-details/:id', function* index(next){
  yield this.render('modules/default',renderOption('sample-details','/sample',this.platformClass,_.merge(this.params,this.request.query)))
})

siteRouter.get('/pringles',function* (next){
  yield this.render('modules/default',renderOption('pringles','/pringles',this.platformClass,this.request.query))
})
/** 客片详情 **/
siteRouter.get('/pringles-details/:id', function* index(next) {
  yield this.render('modules/default',renderOption('pringles-details','/pringles',this.platformClass,_.merge(this.params,this.request.query)))
})

siteRouter.get('/suite',function* (next){
  yield this.render('modules/default',renderOption('suite','/suite',this.platformClass,this.request.query))
})
siteRouter.get('/suite-details/:id',function* (next){
  yield this.render('modules/default',renderOption('suite-details','/suite',this.platformClass,_.merge(this.params,this.request.query)))
})

export { siteRouter }
