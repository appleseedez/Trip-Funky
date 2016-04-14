import React, { PropTypes } from 'react'
import { PageFooter } from './common/page-footer.jsx'
import { MediaSlider } from './common/media-slider.jsx'
import { SampleConfig } from './config/sample-config'
import { SuiteRecommand } from './common/suite-recommand.jsx'
import { TripListItem } from './common/trip-list-item.jsx'
import _ from 'lodash'

const Sample = React.createClass({
  render () {
    return (
      <div className='samples-view'>
        <div className='bannar-all-box' >
          <div className='slider-box bannar' style={{height:SampleConfig['MediaSlider']['height']}} id='slider_top'>
            <MediaSlider {...SampleConfig['MediaSlider']} params={{'cityId':this.props.dataParams.cityId}} />
          </div>
        </div>
        <div className='gray-bg-box'>

          <div className="photo-box layout-center-box"><img src="/images/ypxx-sy.png" /></div>
          <div className="block-tit-box">
            <h1><b>样片欣赏</b></h1>
            <h2>Golden trip, so it's really good.</h2>
          </div>

          <TripListItem {...SampleConfig['TripListItem']}
            type={'sample'}
            params={_.merge({'cityId':this.props.dataParams.cityId,'type':this.props.dataParams.type},SampleConfig['TripListItem'].params)}/>

          <div className="list-more-btn" id='J_MoreButton'>
              <span>查看更多</span>
          </div>
        </div>
        <PageFooter />
      </div>
    )
  },
  getDefaultProps(){
    return {
      dataParams:{
        cityId:-1
      }
    }
  }
})

export { Sample }
