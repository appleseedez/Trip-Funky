import _ from 'lodash'
import { BaseConfig } from './base'
const PringlesConfig = {
  'MediaSlider': _.merge({
  'dataUrl': 'adv/index_top',
  'aspectRatio': '192:68',
  'height': 680
}, BaseConfig) // 广告轮播
}


export { PringlesConfig }
