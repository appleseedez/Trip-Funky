import Koa from 'koa'
import ejsEngine from 'koa-ejs'
import Path from 'path'
import Favicon from 'koa-favicon'
import Logger from 'koa-logger'
import StaticFile from 'koa-static'
import thunkify from 'thunkify-wrap'
import { apiRouter } from './routes'
import { siteRouter } from './routes'
import _ from 'lodash'
import db from './components/server/cache/db/dbUtil'
import memCacheMgr from './components/server/cache/mem/manager'

const ReactServer = Koa()
const DBUtil = db.Instance()
const MEMUtil = memCacheMgr.Instance()
/**
初始化模板引擎 使用ejs作为页面引擎
可以在中间件中用this.render('templateName',jsonData)
来生成页面
api请查看 [http://www.embeddedjs.com/]
**/
ejsEngine(ReactServer, {
  root: Path.join(__dirname, 'views'),
  layout: 'layout',
  viewExt: 'html',
  cache: true,
  debug: true
})

/**

路由分成两部分。
第一部分是api的 以 /api开头

第二部分是针对客户端的

由于是服务端渲染到数据，那么基本到规则就是渲染初始状态。

这里就有两种设计选择：
1. 当用户请求某个资源时，开始发起
数据预取请求， 待数据返回后才渲染页面返回。
2. 服务端渲染只是做页面框架。渲染时把针对数据请求到js作为数据输出
那么客户端在收到此页面后即开始发起数据请求。

实践中选择了方案二。当然这样做有一个大的问题就是SEO时，机器人爬到的页面只有框架部分没有动态数据。 因为动态数据都是在js加载以后通过xhr请求的。

**/

/**
结构示意图;

  ----- api routes ----------   <== set the keys
  ----- data fetcher --------
  ----- site routes ---------
 **/

process.env.NODE_ENV === 'development' && ReactServer.use(Logger()) // 只有在NODE_ENV为development才加载日志
ReactServer.use(Favicon(__dirname + '/assets/images/favicon.png')) // favico
ReactServer.use(StaticFile('./assets',{'maxage':3*60*1000})) // 其他静态资源：js/images/css
/** 准备进入路由层。 先确保一切为默认 **/
ReactServer.use(function*(next){
  this.APIKey = null
  /**如果域名是mt开头就是微信 this.platformClass 将会通过render变量被写到根div的class上**/
  if (this.request.header.host.indexOf('mt') === 0) {
    this.platformClass = 'adaptation-mobile'
  }else {
    this.platformClass = 'adaptation-1200'
  }
  yield next
})
ReactServer.use(apiRouter.routes()) // api路由
/**

 如果经过了api路由层，则APIKey 就一定会被设置上. APIKey如果为null 表示最初状态
 我们的数据抓取层也是用这个APIKey 去进行相应的缓存命中和数据抓取的
 这样就保证了命中了api层路由的就会进行数据抓取。

 dataFetchMiddleWare的工作就是依据已经设置的APIKey 进行数据抓取工作。

 **/


 /** 先创建一个thunkify的版本 **/
 // 为了能够使用yield 需要此处对函数进行偏函数化。
 // 就是将一个带callback的任意函数转换为
 // 只带callback的函数
let proxyFetcher = thunkify.genify(MEMUtil.getData)

let dataFetchMiddleWare = function*(next) {

  let resData = {
    success: true,
    message: "",
    data: {},
    code: 200,
    count: 0
  }

  if (this.APIKey) {

    // api的数据先到内存去查询,查询不到再走后续流程
    let resCacheData = MEMUtil.getMemCache(this.request.url)
    if (resCacheData != null) {
      console.log('memCache:', this.request.url);
      this.body = resCacheData
    } else {
      // DBUtil.isCacheDataUsable 方法 返回真表示数据缓存可用。否则表示数据正在同步。不可以从缓存拉
      if (DBUtil.isCacheDataUsable(this.APIKey)) {
        console.log('db:', this.request.url);
        try {
          //从缓存数据库中去查询。
          if (this.model) {
            resData.data = yield this.model.run()
            resData.code = 200
            resData.success = true
            resData.count = this.count || resData.data.length
          }
        } catch (err) {
          console.log('数据库异常mem:', this.request.url);
          //缓存数据不可用。 去做代理数据请求
          resData  = yield* proxyFetcher(this.request.url,this.request.url)
        }
      } else {
        console.log('mem:', this.request.url);
        //缓存数据不可用。 去做代理数据请求
        resData  = yield* proxyFetcher(this.request.url,this.request.url)
      }

      // 把结果缓存到内存
      if(resData.success) {
        MEMUtil.setMemCache(this.request.url, resData)
      }

      this.body = resData
    }

  }
  yield next
}

ReactServer.use(dataFetchMiddleWare)

ReactServer.use(siteRouter.routes()) // 网站路由


/**服务器异常处理**/
if (process.env.NODE_ENV === 'test') {
  module.exports = ReactServer.callback();
} else {
  ReactServer.listen(8001);
  console.log(process.env.NODE_ENV);
  //console.log((process.env.NODE_ENV === 'production')?'open http://tt.jsbn.com':'open http://trip-dev.jsbn.com:8001')
}

ReactServer.on('error', function (err) {
  console.log(err.stack)
})
