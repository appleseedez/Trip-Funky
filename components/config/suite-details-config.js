/**
 * Created by chenjianjun on 16/4/13.
 */
import _ from 'lodash'
import { BaseConfig } from './base'

const SuiteDetailsConfig = {
  'SuiteDetails':_.merge({
    dataUrl:'suite/detail/:id'
  },BaseConfig)
}

export { SuiteDetailsConfig }
