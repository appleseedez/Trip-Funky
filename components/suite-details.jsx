import React, {PropTypes} from 'react'
import _ from 'lodash'
import { SuiteDetailsConfig } from './config/suite-details-config'
import { MediaItem } from './common/media-item.jsx'

const SuiteDetails = React.createClass({
  render () {
    let q = this.props.dataParams.platformType===1?'@85q':'@95q'
    return (
      <div className='topic'>
        {
          _.map(this.state.details,(v,k)=>{
            return (
              <div key={k} className='bottom' style={{height:'auto'}}>
                <div className='img-box'>
                  <img src={v+q} />
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
    return {
      dataParams:{
        platformType:0
      }
    }
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
          let images = []
          if(j.success && j.data.length > 0) {
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
          }

          // 如果详情图片没有,那么就跳转到在线咨询
          if (images.length > 0) {
            this.setState({details:images});
          } else {
            window.location.href="https://static.meiqia.com/dist/standalone.html?eid=12020";
          }
        })
    }
  }
})

export { SuiteDetails }