import { BaseConfig } from './base'
import _ from 'lodash'

const SampleDetailsConfig  = {
  // 广告轮播
  'MediaSlider': _.merge({
    'dataUrl': 'adv/sample_top',
    'aspectRatio': '192:68',
    'height': 680
  }, BaseConfig),

  'Banner':[
    {
      'imageUrl': '/images/static-2.jpg'
    }
  ],

  'SampleDetails':_.merge({
    'dataUrl':'sample/detail/:id'
  },BaseConfig)
}


export { SampleDetailsConfig }
