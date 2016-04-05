import _ from 'lodash'
const Mode = process.env.NODE_ENV || $('#J_Matrix').attr('data-mode')
const BaseConfig = {
  mode:Mode,
  baseUrl:(Mode === 'production')?'//trip.jsbn.com/api/':'//trip-dev.jsbn.com:8001/api/'
}
export { BaseConfig }
