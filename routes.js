import Router from 'koa-router'
import React, { PropTypes } from 'react'
import _ from 'lodash'
import { renderToString } from 'react-dom/server'
import { ComponentsIndex, ComponentsSeo } from './components/config/components-index'
import { Navigation } from './components/navigation.jsx'


const apiRouter = new Router({
  'prefix':'/api'
})
apiRouter.get('/',function* apiIndex(next){
  yield next
  this.body={
    '/':'Api Index'
  }
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
