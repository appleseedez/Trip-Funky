import React, { PropTypes } from 'react'
import { MediaSlider } from './common/media-slider.jsx'
import { PringlesConfig } from './config/pringles-config'
import { PageFooter } from './common/page-footer.jsx'
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
            <img src="./images/ypxx-sy.png" />
          </div>
          <div className="block-tit-box">
            <h1><b>客片欣赏</b></h1>
            <h2>Golden trip, so it's really good.</h2>
          </div>
          <div>PringlesList</div>
          <div className="list-more-btn" id='J_btn_more'>
            <span>查看更多</span>
          </div>
        </div>
        <div id='suite' className="block-tit-box">
          <h1><span>金色旅拍</span><b>套系报价</b></h1>
          <h2>Golden trip, so it's really good.</h2>
        </div>
        <PageFooter />
      </div>
    )
  }
})

export { Pringles }
