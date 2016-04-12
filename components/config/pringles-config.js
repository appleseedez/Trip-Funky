import _ from 'lodash'
import { BaseConfig } from './base'

const PringlesConfig = {
  // 广告轮播
  'MediaSlider': _.merge({
    'dataUrl': 'adv/index_top',
    'aspectRatio': '192:68',
    'height': 680
  }, BaseConfig),

  'TripListItem':_.merge({
    dataUrl:'pringles',
    params:{
      'pageSize':10,
      'pageIndex':1
    }
  },BaseConfig)
}

export { PringlesConfig }
