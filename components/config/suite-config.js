/**
 * Created by chenjianjun on 16/4/12.
 */
import _ from 'lodash'
import { BaseConfig } from './base'

const SuiteConfig = {
  // 广告轮播
  'MediaSlider': _.merge({
    'dataUrl': 'adv/index_top',
    'aspectRatio': '192:68',
    'height': 680
  }, BaseConfig),

  'TripListItem':_.merge({
    dataUrl:'suite',
    params:{
      'pageSize':10,
      'pageIndex':1
    }
  },BaseConfig)
}

export { SuiteConfig }