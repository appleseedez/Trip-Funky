/**
 * Created by chenjianjun on 16/4/15.
 */
import _ from 'lodash'
import { BaseConfig } from './base'

const IndexConfig = {
  // 全站首页的热门城市广告区
  'HotAdv1': _.merge({
    dataUrl: 'adv/home_middle_adv',
    params: {
      'pageSize': 20,
      'pageIndex': 1
    }
  }, BaseConfig)
}

export { IndexConfig }
