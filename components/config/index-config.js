import _ from 'lodash'
import { BaseConfig } from './base'

const IndexConfig = {
    'MediaSlider': _.merge({
        'dataUrl': 'adv/index_top',
        'aspectRatio': '3:1',
        'height': 640
    }, BaseConfig), // 广告轮播

    'SampleRecommend': _.merge({
        dataUrl: 'sample',
        params: {
            'pageSize': 5,
            'pageIndex': 1
        }
    }, BaseConfig),

    'PringlesRecommend': _.merge({
        dataUrl: 'pringles',
        params: {
            'pageSize': 4,
            'pageIndex': 1
        }
    }, BaseConfig),

    'SuiteRecommend': _.merge({
        dataUrl: 'suite',
        params: {
            'pageSize': 2,
            'pageIndex': 1
        }
    }, BaseConfig),

    'RecommendHot1':_.merge({
        'dataUrl': 'adv/index_hot1',
    }, BaseConfig)
}

export { IndexConfig }
