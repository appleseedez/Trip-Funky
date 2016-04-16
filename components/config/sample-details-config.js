import { BaseConfig } from './base'
import _ from 'lodash'

const SampleDetailsConfig  = {
  'Banner':[
    {
      'imageUrl': '//img2.jsbn.com/trip/assets/images/sample-detail-brand.jpg'
    }
  ],

  'SampleDetails':_.merge({
    'dataUrl':'sample/detail/:id'
  },BaseConfig)
}


export { SampleDetailsConfig }
