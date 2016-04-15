import React, { PropTypes } from 'react'
import { MediaSlider } from './common/media-slider.jsx'
import { PringlesConfig } from './config/pringles-config'
import { PageFooter } from './common/page-footer.jsx'
import { TripListItem } from './common/trip-list-item.jsx'
import _ from 'lodash'

const Pringles = React.createClass({
  render () {
    return (
      <div className='pringles-view'>
        <div className='bannar-all-box' >
          <div className='slider-box bannar' id='slider_top'>
            <MediaSlider {...PringlesConfig['MediaSlider']} params={{'cityId':this.props.dataParams.cityId}} />
          </div>
        </div>
        <div className="gray-bg-box">
          <div className="photo-box layout-center-box">
            <img src={PringlesConfig['Banner'][0].imageUrl} />
          </div>

          <div className="block-tit-box">
            <h1><b>客片欣赏</b></h1>
            <h2>Golden trip, so it's really good.</h2>
          </div>

          <TripListItem {...PringlesConfig['TripListItem']}
            type={'pringles'}
            params={_.merge({'cityId':this.props.dataParams.cityId,'type':this.props.dataParams.type},PringlesConfig['TripListItem'].params)}/>

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

export { Pringles }
