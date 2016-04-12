import _ from 'lodash'
import { BaseConfig } from './base'
const HomeConfig = {
  'MediaSlider': _.merge({
  'dataUrl': 'adv/index_top',
  'aspectRatio': '192:68',
  'height': 680
}, BaseConfig), // 广告轮播
  'SampleRecommand':_.merge({
    dataUrl: 'sample',
    params:{
      'pageSize':5,
      'pageIndex':1
    }
  },BaseConfig)
}


export { HomeConfig }
