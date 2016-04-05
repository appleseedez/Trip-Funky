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
  'get+/attractions/:cityId': function*(next) {
    this.APIKey = 'Attraction'
    this.model = attraction.filter({
      placeId: parseInt(this.params.cityId)
    })

    this.model = this.model.orderBy(r.desc('weight'))

    yield next
  }
}

export default citySiteApi
