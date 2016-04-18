/**
 * Created by chenjianjun on 16/4/5.
 */
import sample from '../cache/db/module/sample.js'
import _ from 'lodash'
import env from '../cache/config'
let r = env.Thinky.r

const sampleApi = {

  // 样片列表
  'get+/sample': function*(next) {
    this.APIKey = 'Sample'
    this.model = sample;

    let pageIndex = 0;
    let pageSize = 10;
    _.each(this.request.query, (v, k) => {
      if (k.indexOf('pageIndex') !== -1) {
        pageIndex = parseInt(this.request.query['pageIndex'] || '1') - 1
        if (pageIndex < 0) {
          pageIndex = 0
        }
      } else if (k.indexOf('pageSize') !== -1) {
        pageSize = parseInt(this.request.query['pageSize'] || '1')
        if (pageSize < 0) {
          pageSize = 1
        }
      } else if(k.indexOf('cityId') !== -1) {// 旅拍城市Id
        this.model = this.model.filter({cityId:parseInt(this.request.query['cityId'])})
      } else if(k.indexOf('attractionsId') !== -1) {// 旅拍景点Id
        // 风格 TODO:服务器返回的是字符串如"123,275,468,",这里采用"%id,%"的方式匹配
        this.model = this.model.filter(r.row("attractionsId").match(".*?"+this.request.query['attractionsId']+","+".*?"));
      }
    })

    try {
      let all = yield this.model
      this.count = all.length || 0
    } catch (e) {
      this.count = 0
    }

    this.model = this.model.orderBy(r.desc('weight'))
    this.model = this.model.skip(pageIndex * pageSize).limit(pageSize)

    // 只取有用的字段
    this.model = this.model.pluck("id","name","coverUrlWeb","description");

    yield next
  },

  // 样片详情
  'get+/sample/detail/:id': function*(next) {
    this.APIKey = 'Sample'

    this.model = sample.filter({
      id:parseInt(this.params.id)
    })

    yield next
  }

}

export default sampleApi
