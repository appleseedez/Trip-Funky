/**
 * Created by chenjianjun on 16/4/12.
 */
import _ from 'lodash'
import { BaseConfig } from './base'

const SuiteConfig = {
  // 广告轮播
  'MediaSlider': _.merge({
    'dataUrl': 'adv/suite_top',
    'aspectRatio': '1920:577',
    'height': 577
  }, BaseConfig),

  'Banner':[
    {
      'imageUrl': '/images/static-7.jpg'
    }
  ],

  'TripListItem':_.merge({
    dataUrl:'suite',
    params:{
      'pageSize':8,
      'pageIndex':1
    }
  },BaseConfig)
}

export { SuiteConfig }