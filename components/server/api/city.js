/**
 * Created by chenjianjun on 16/4/5.
 */
import citySite from '../cache/db/module/city-site'
import attraction from '../cache/db/module/attraction'
import _ from 'lodash'
import env from '../cache/config'
let r = env.Thinky.r

const citySiteApi = {

  // 获取旅拍城市
  'get+/city': function*(next) {
    this.APIKey = 'CitySite'
    this.model = citySite.orderBy(r.desc('weight'))
    yield next
  },

  // 根据城市ID获取旅拍景点
  'get+/attractions': function*(next) {
    this.APIKey = 'Attraction'
    this.model = attraction;

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

    yield next
  }
}

export default citySiteApi
