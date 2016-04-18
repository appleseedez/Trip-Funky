/**
 * Created by chenjianjun on 16/4/12.
 */
import _ from 'lodash'
import { BaseConfig } from './base'

const SuiteConfig = {
  // 广告轮播
  'MediaSlider': _.merge({
    'dataUrl': 'adv/suite_top',
    'aspectRatio': '3:1',
    'height': 640
  }, BaseConfig),

  'Banner':[
    {
      'imageUrl': '/images/static-7.jpg'
    }
  ],

  'TripListItem':_.merge({
    dataUrl:'suite',
    params:{
      'pageSize':4,
      'pageIndex':1
    }
  },BaseConfig)
}

export { SuiteConfig }