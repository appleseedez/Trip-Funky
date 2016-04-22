import React, {PropTypes} from 'react'
import _ from 'lodash'
import { SuiteDetailsConfig } from './config/suite-details-config'
import { MediaItem } from './common/media-item.jsx'

const SuiteDetails = React.createClass({
  render () {
    return (
      <div className='layout-center-box'>
        {
          _.map(this.state.details,(v,k)=>{
            return (
              <div key={k} className='bottom' style={{height:'auto'}}>
                <div className='img-box'>
                  <img src={v+'@95q'} />
                </div>
              </div>
            )
          })
        }
        <div className="photo-box-border"></div>
      </div>
    )
  },
  propTypes: {
    dataParams: React.PropTypes.object
  },
  getDefaultProps(){
    return {}
  },
  getInitialState() {
    return {
      details:[]
    }
  },
  componentDidMount() {
    let cfg = SuiteDetailsConfig['SuiteDetails']
    let fetchUrl = cfg['buildUrl'](this.props.dataParams,cfg['dataUrl'])
    if(fetchUrl){
      fetch(fetchUrl)
        .then(res => {return res.json()})
        .then(j=>{
          if(j.success && j.data.length > 0) {
            let images = []
            let origin = JSON.parse(j.data[0]['pcDetailImages'])
            let keys = [
              'pc_detailImages',
              'pc_serviceImages',
              'pc_cosmeticImages',
              'pc_clothShootImages',
              'pc_baseSampleImages',
              'pc_processImages'
            ]
            _.each(keys, function(v) {
              _.each(origin[v] || [], function(v1) {
                images.push(v1)
              })
            })

            // 因为后台返回的pcDetailImages是一个字符串,所以要转换成json
            this.setState({details:images});
          }
        })
    }
  }
})

export { SuiteDetails }