import React, {PropTypes} from 'react'
import _ from 'lodash'
import { SuiteDetailsConfig } from './config/suite-details-config'
import { MediaItem } from './common/media-item.jsx'

const SuiteDetails = React.createClass({
  render () {
    return (
      <div className='layout-center-box'>
        <div className='container wedding-detail clearfix'>
          <div className='detail-box container mgt30 clearfix'>
            <div className='photo-box mgb30 clearfix'>
              {
                _.map(this.state.details,(v,k)=>{
                  return (
                    <div key={k} className='bottom' style={{height:'auto'}}>
                      <div className='img-box'>
                        <MediaItem width={1200} aspectRadio={'1:-1'} mediaUrl={v} water={false} />
                      </div>
                    </div>
                  )
                })
              }
            </div>
            <div className='content mgb30 clearfix'></div>
          </div>
        </div>
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
    let fetchUrl = cfg['baseUrl']+cfg['dataUrl']+this.props.dataParams.id
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