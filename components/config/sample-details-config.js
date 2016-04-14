import { BaseConfig } from './base'
import _ from 'lodash'

const SampleDetailsConfig  = {
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
