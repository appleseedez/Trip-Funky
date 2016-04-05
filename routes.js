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
  suiteApi
]
_.each(apiRouterList,(route,index)=>{
  _.each(route,(value,key)=>{
    apiRouter[key.split('+')[0]](key.split('+')[1], value)
  })
})

export { apiRouter }


const siteRouter = new Router()

const renderOption = (templateName, params) =>{
  let p = params || {}
  return {
    'title':ComponentsSeo[templateName].seoTitle || '',
    'seoKeywords':ComponentsSeo[templateName].seoKeywords || '',
    'seoDescription':ComponentsSeo[templateName].seoDescription || '',
    'reactMarkup': renderToString(ComponentsIndex[templateName]),
    'reactNavMarkup': renderToString(<Navigation />),
    'main': templateName,// 客户端渲染使用的脚本名称和模板名称一致
    'params':JSON.stringify(p),
    'mode':(process.env.NODE_ENV === 'production')?'production':'development'
  }
}

siteRouter.get('/',function* (next){
  yield this.render('modules/default',renderOption('home'))
})
siteRouter.get('/home',function* (next){
  yield this.render('modules/default',renderOption('home'))
})

export { siteRouter }
