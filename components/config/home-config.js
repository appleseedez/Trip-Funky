import _ from 'lodash'
import {
    BaseConfig
} from './base'
const HomeConfig = {
    'MediaSlider': _.merge({
        'dataUrl': 'adv/index_top',
        'aspectRatio': '192:68',
        'height': 680
    }, BaseConfig), // 广告轮播
    'IndexHot1':_.merge({
        'dataUrl': 'adv/index_hot1',
    }, BaseConfig),
    'SampleRecommand': _.merge({
        dataUrl: 'sample',
        params: {
            'pageSize': 5,
            'pageIndex': 1
        }
    }, BaseConfig),
    'PringlesRecommand': _.merge({
        dataUrl: 'pringles',
        params: {
            'pageSize': 4,
            'pageIndex': 1
        }
    }, BaseConfig),
    'SuiteRecommand': _.merge({
        dataUrl: 'suite',
        params: {
            'pageSize': 4,
            'pageIndex': 1
        }
    }, BaseConfig),
}


export {
    HomeConfig
}
