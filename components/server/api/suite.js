/**
 * Created by chenjianjun on 16/4/5.
 */
import suite from '../cache/db/module/suite.js'

const suiteApi = {
  // 套系列表
  'get+/api/suite': function*(next) {
    this.APIKey = 'Suite'
    //if (this.params.position === 'all') {
    //  this.model = suite.filter({})
    //} else {
    //  this.model = suite.filter({
    //    position: this.params.position
    //  })
    //}
    this.model = suite;

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
        this.model = this.model.filter({placeId:parseInt(this.request.query['placeId'])})
      } else if(k.indexOf('attractionsId') !== -1) {// 旅拍景点Id
        this.model = this.model.filter({attractionsId:parseInt(this.request.query['attractionsId'])})
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

    yield next
  },
  // 套系详情
  'get+/suite/detail/:id': function*(next) {
    this.APIKey = 'Suite'

    this.model = suite.filter({
      id: parseInt(this.params.id)
    })

    yield next
  }

}

export default suiteApi
