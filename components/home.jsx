import React, { PropTypes } from 'react'
import { PageFooter } from './common/page-footer.jsx'
import { MediaSlider } from './common/media-slider.jsx'
import { HomeConfig } from './config/home-config'
const Home = React.createClass({
  render () {
    return (
      <div className='home-view'>
        <div className='logo-container'>
          <div className='logo-box ico-sanya'></div>
        </div>
        <div className='bannar-all-box' >
          <div className='slider-box bannar' style={{height:HomeConfig['MediaSlider']['height']}} id='slider_top'>
            <MediaSlider {...HomeConfig['MediaSlider']} />
          </div>
        </div>
        <div className="gray-bg-box">
          <div className="photo-box layout-center-box"><img src="/images/bann.jpg" /></div>
          <div className="list-recommend layout-center-box">
            <div className="item-recomd-adv">
                <a className="img-box" href=""><img src="//img.jsbn.com/images/tour-artwork-img1.jpg" /><div className="cover-layer"></div></a>
            </div>
            <ul className="recomd-nav">
              <li className="item-box">
                <a href="/sample"><img src="//img.jsbn.com/images/tour-artwork-Navimg1.jpg" /><div className="cover-layer"></div></a>
              </li>
              <li className="item-box">
                <a href="/pringles"><img src="//img.jsbn.com/images/tour-artwork-Navimg2.jpg" /><div className="cover-layer"></div></a>
              </li>
              <li className="item-box">
                <a href="#"><img src="//img.jsbn.com/images/tour-artwork-Navimg3.jpg" /><div className="cover-layer"></div></a>
              </li>
              <li className="item-box">
                <a href="#"><img src="//img.jsbn.com/images/tour-artwork-Navimg4.jpg" /><div className="cover-layer"></div></a>
              </li>
            </ul>
          </div>
        </div>
        <div className="block-tit-box">
          <h1><span>金色旅拍</span><b>样片好所以真的好</b></h1>
          <h2>Golden trip, so it's really good.</h2>
        </div>
        <div>SampleList</div>
        <div className="gray-bg-box">
          <div className="block-tit-box">
            <h1><span>金色旅拍</span><b>好客片会说话</b></h1>
            <h2>Golden trip, so it's really good.</h2>
          </div>

          <div>PringlesList</div>
        </div>
        <div id='suite' className="block-tit-box">
          <h1><span>金色旅拍</span><b>套系报价</b></h1>
          <h2>Golden trip, so it's really good.</h2>
        </div>
        <div>SuiteList</div>
        <PageFooter />
      </div>
    )
  }
})

export { Home }
