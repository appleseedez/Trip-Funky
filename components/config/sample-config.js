import _ from 'lodash'
import { BaseConfig } from './base'

const SampleConfig = {
  // 广告轮播
  'MediaSlider': _.merge({
    'dataUrl': 'adv/sample_top',
    'aspectRatio': '3:1',
    'height': 640
  }, BaseConfig),

  'TripListItem':_.merge({
    dataUrl:'sample',
    params:{
      'pageSize':6,
      'pageIndex':1
    }
  },BaseConfig)
}

export { SampleConfig }
