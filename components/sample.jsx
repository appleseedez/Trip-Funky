import React, { PropTypes } from 'react'
import _ from 'lodash'

import { MediaSlider } from './common/media-slider.jsx'
import { SampleConfig } from './config/sample-config'
import { TripListItem } from './common/trip-list-item.jsx'
import { AdvLangConfig,StyleImg } from './config/adv-lang-config'

const Sample = React.createClass({
  render () {
    let desc = '幸福可以绽放的如此耀眼';
    if(AdvLangConfig[this.props.dataParams.cityName]) {
      desc=AdvLangConfig[this.props.dataParams.cityName]['SAMPLE']
    }
    return (
      <div className='samples-view'>
        <div className='bannar-all-box' >
          <div className='slider-box bannar' id='slider_top'>
            <MediaSlider {...SampleConfig['MediaSlider']} params={{'cityId':this.props.dataParams.cityId}} platformType={this.props.dataParams.platformType} />
          </div>
        </div>
        <div className='gray-bg-box'>
          <div className="block-tit-box-1">
            <img src={StyleImg['head']} />
            <div className="english-title">
            </div>
            <div className="chinese-title">
              <i></i>
              <p><span>{desc}</span></p>
            </div>
            <div className="list-title">
              <h1><span>金色旅拍</span><b>{this.props.dataParams.cityName+'作品'}</b></h1>
            </div>
            <img src={StyleImg['footer']} />
          </div>

          <TripListItem {...SampleConfig['TripListItem']}
            type={'sample'}
            platformType={this.props.dataParams.platformType}
            params={_.merge({'cityId':this.props.dataParams.cityId},SampleConfig['TripListItem'].params)}/>

          <div className="list-more-btn" id='J_MoreButton'>
              <span>查看更多</span>
          </div>
        </div>
        <div className="photo-box-border"></div>
      </div>
    )
  },
  getDefaultProps(){
    return {
      dataParams:{
        cityId:-1,
        cityName:'',
        platformType:0
      }
    }
  }
})

export { Sample }
