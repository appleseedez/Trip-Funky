import React, { PropTypes } from 'react'
import { PageFooter } from './common/page-footer.jsx'
import { MediaSlider } from './common/media-slider.jsx'
import { HomeConfig } from './config/home-config'
import { Recommand } from './common/recommand.jsx'
import { SampleRecommand } from './common/sample-recommand.jsx'
import { PringlesRecommand } from './common/pringles-recommand.jsx'
import { SuiteRecommand } from './common/suite-recommand.jsx'
const Home = React.createClass({
  render () {
    return (
      <div className='home-view'>
        <div className='bannar-all-box' >
          <div className='slider-box bannar' style={{height:HomeConfig['MediaSlider']['height']}} id='slider_top'>
            <MediaSlider {...HomeConfig['MediaSlider']} />
          </div>
        </div>
        <div className="gray-bg-box">
          <div className="photo-box layout-center-box"><img src="/images/static-1.jpg" /></div>
          <Recommand {...this.props.dataParams} />
          <div className="photo-box layout-center-box"><img src="/images/static-2.jpg" /></div>
        </div>
        <div className="block-tit-box">
          <div className="border-box">
            <h1><span>金色旅拍</span><b>三亚样片</b></h1>
            <h2></h2>
          </div>
          <p>Golden trip, so it's really good.</p>
        </div>
        <SampleRecommand {...HomeConfig['SampleRecommand']} cityId={this.props.dataParams.cityId}/>
        <div className="photo-box photo-box-border layout-center-box"><img src="/images/static-3.jpg" /></div>
        <div className="photo-box layout-center-box"><img src="/images/static-4.jpg" /></div>
        <div className="photo-box layout-center-box"><img src="/images/static-6.jpg" /></div>
        <div className="block-tit-box">
          <div className="border-box">
            <h1><span>金色旅拍</span><b>三亚客片</b></h1>
            <h2></h2>
          </div>
          <p>Golden trip, so it's really good.</p>
        </div>
        <PringlesRecommand />
        <div className="photo-box layout-center-box"><img src="/images/static-5.jpg" /></div>
        <div className="block-tit-box" id='suiteAchor'>
            <div className="border-box">
              <h1><span>金色旅拍</span><b>套系热卖</b></h1>
              <h2></h2>
            </div>
            <p>Golden trip, so it's really good.</p>
        </div>
        <SuiteRecommand />
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

export { Home }
