/**
 * Created by chenjianjun on 16/4/13.
 */
import _ from 'lodash'
import { BaseConfig } from './base'

const SuiteDetailConfig = {
  'SuiteDetails':_.merge({
    dataUrl:'suite/detail/'
  },BaseConfig)
}

export { SuiteDetailConfig }
