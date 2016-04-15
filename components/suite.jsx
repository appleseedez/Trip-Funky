import React, {PropTypes} from 'react'
import _ from 'lodash'
import { PageFooter } from './common/page-footer.jsx'
import { MediaSlider } from './common/media-slider.jsx'
import { SuiteConfig } from './config/suite-config'
import { TripListItem } from './common/trip-list-item.jsx'

const Suite = React.createClass({
  render() {
    return (
      <div className="suites-view">
        <div className='bannar-all-box' >
          <div className='slider-box bannar' id='slider_top'>
            <MediaSlider {...SuiteConfig['MediaSlider']} params={{'cityId':this.props.dataParams.cityId}} />
          </div>
        </div>

        <div className="gray-bg-box">
          <div className="photo-box layout-center-box">
            <img src={SuiteConfig['Banner'][0].imageUrl} />
          </div>

          <div className="block-tit-box">
            <div className="border-box wx-border-box">
              <h1><span>金色旅拍</span><b>套系报价</b></h1>
              <h2></h2>
            </div>
            <p>Golden trip, so it's really good.</p>
            </div>

            <TripListItem {...SuiteConfig['TripListItem']}
              type={'suite'}
              params={_.merge({'cityId':this.props.dataParams.cityId,'type':this.props.dataParams.type},SuiteConfig['TripListItem'].params)}
            />

            <div className="list-more-btn" id='J_MoreButton'>
              <span>查看更多</span>
            </div>
        </div>
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

export { Suite }
