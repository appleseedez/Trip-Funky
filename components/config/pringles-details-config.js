import { BaseConfig } from './base'
import _ from 'lodash'

const PringlesDetailsConfig  = {
  'Banner':[
    {
      'imageUrl': '//img2.jsbn.com/trip/assets/images/pringles-detail-brand.jpg'
    }
  ],

  'PringlesDetails':_.merge({
    'dataUrl':'pringles/detail/:id'
  },BaseConfig)
}


export { PringlesDetailsConfig }
