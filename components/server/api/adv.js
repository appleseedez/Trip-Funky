import adv from '../cache/db/module/adv.js'
import _ from 'lodash'
import env from '../cache/config'
let r = env.Thinky.r

const advApi = {
  // 广告
  'get+/adv/:position': function*(next) {

    this.APIKey = 'Adv'
    if (this.params.position === 'all') {
      this.model = adv.filter({})
    } else {
      this.model = adv.filter({
        position: this.params.position
      })
    }

    let pageIndex = 0;
    let pageSize = 10;
    _.each(this.request.query, (v, k) => {
      if (k.indexOf('pageIndex') !== -1) {
        pageIndex = parseInt(this.request.query['pageIndex'] || '1') - 1
        if (pageIndex < 0) {
          pageIndex = 0
        }
      } else if(k.indexOf('pageSize') !== -1) {
        pageSize = parseInt(this.request.query['pageSize'] || '1')
        if (pageSize < 0) {
          pageSize = 1
        }
      } else if(k.indexOf('cityId') !== -1) {
        // 旅拍分站城市ID
        this.model = this.model.filter({cityId:parseInt(this.request.query['cityId'])})
      }
    })

    this.model = this.model.orderBy(r.desc('weight'))
    this.model = this.model.skip(pageIndex * pageSize).limit(pageSize);

    // 只取有用的字段
    this.model = this.model.pluck("coverUrlWeb","linkUrl","videoUrl");

    yield next
  }
}

export default advApi
