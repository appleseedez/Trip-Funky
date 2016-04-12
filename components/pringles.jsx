import React, { PropTypes } from 'react'
import { MediaSlider } from './common/media-slider.jsx'
import { PringlesConfig } from './config/pringles-config'
import { SuiteRecommand } from './common/suite-recommand.jsx'
import { PageFooter } from './common/page-footer.jsx'
import { TripListItem } from './common/trip-list-item.jsx'
import _ from 'lodash'
const Pringles = React.createClass({
  render () {
    return (
      <div className='pringles-view'>
        <div className='bannar-all-box' >
          <div className='slider-box bannar' style={{height:PringlesConfig['MediaSlider']['height']}} id='slider_top'>
            <MediaSlider {...PringlesConfig['MediaSlider']} />
          </div>
        </div>
        <div className="gray-bg-box">
          <div className="photo-box layout-center-box">
            <img src="/images/ypxx-sy.png" />
          </div>
          <div className="block-tit-box">
            <h1><b>客片欣赏</b></h1>
            <h2>Golden trip, so it's really good.</h2>
          </div>
          <TripListItem {...PringlesConfig['TripListItem']} type={'pringles'} params={_.merge({'cityId':this.props.dataParams.cityId},PringlesConfig['TripListItem'].params)}/>
          <div className="list-more-btn" id='J_MoreButton'>
            <span>查看更多</span>
          </div>
        </div>
        <div className="block-tit-box" id='suite'>
            <div className="border-box">
              <h1><span>金色旅拍</span><b>套系热卖</b></h1>
              <h2></h2>
            </div>
            <p>Golden trip, so it's really good.</p>
        </div>
        <SuiteRecommand {...PringlesConfig['SuiteRecommand']} cityId={this.props.dataParams.cityId}/>
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
