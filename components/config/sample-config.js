import _ from 'lodash'
import { BaseConfig } from './base'

const SampleConfig = {
  // 广告轮播
  'MediaSlider': _.merge({
    'dataUrl': 'adv/sample_top',
    'aspectRatio': '1920:577',
    'height': 577
  }, BaseConfig),

  'TripListItem':_.merge({
    dataUrl:'sample',
    params:{
      'pageSize':10,
      'pageIndex':1
    }
  },BaseConfig)
}

export { SampleConfig }
