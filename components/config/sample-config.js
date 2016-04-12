import _ from 'lodash'
import { BaseConfig } from './base'
const SampleConfig = {
  'MediaSlider': _.merge({
  'dataUrl': 'adv/index_top',
  'aspectRatio': '192:68',
  'height': 680
}, BaseConfig), // 广告轮播
'SuiteRecommand': _.merge({
    dataUrl: 'suite',
    params: {
        'pageSize': 4,
        'pageIndex': 1
    }
}, BaseConfig)
}


export { SampleConfig }
