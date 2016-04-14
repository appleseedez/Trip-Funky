import { BaseConfig } from './base'
import _ from 'lodash'

const PringlesDetailsConfig  = {
  'Banner':[
    {
      'imageUrl': '/images/static-2.jpg'
    }
  ],

  'PringlesDetails':_.merge({
    'dataUrl':'pringles/detail/:id'
  },BaseConfig)
}


export { PringlesDetailsConfig }
