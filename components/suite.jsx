import React, {PropTypes} from 'react'
import _ from 'lodash'

import { MediaSlider } from './common/media-slider.jsx'
import { SuiteConfig } from './config/suite-config'
import { TripListItem } from './common/trip-list-item.jsx'

const SuiteItemInfo = React.createClass({
  render() {
    return (
      <div className="info">
        <div className="overview">
          <h1>秋日物语</h1>
          <p>
            <span>服务团队：</span><span>自造，自设，紫灯</span>
          </p>
          <p>
            <span>服务：</span><span>一对二</span>
          </p>
          <p>
            <span>服装：</span><span>3套</span>
          </p>
          <p>
            <span>照片：</span><span>拍摄100张，精修30张</span>
          </p>
          <p>
            <span>景点：</span><span>3000平米</span>
          </p>
          <p>
            <span>精致产品：</span>
            <p>1、免费拍摄100张</p>
            <p>2、精修30张入盘</p>
            <p>3、赠送精致优盘</p>
          </p>
        </div>
      </div>
    )
  }
})

const SuiteList = React.createClass({
  render() {
    return (
      <div className="gray-bg-box">
        <div className="border-box wx-border-box">
          <h1><span>金色旅拍</span><b>三亚套系报价</b></h1>
          <h2></h2>
        </div>
        <p>Golden trip, so it's really good.</p>
        <ul className="suites-list layout-center-box">
          {
            _.map(this.props.data, (v,k) => {
              return (
                <li className="item">
                  <a href="" className="img-box">
                    <img src="/images/tour-artwork-img3.jpg" />
                  </a>
                  <div className="scrollbarall">
                    <div className="scrollbar">
                      <div className="track">
                        <div className="thumb">
                          <div className="end">
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="viewport">
                      {
                        <SuiteItemInfo />
                      }
                    </div>
                  </div>
                  <div className='price-box'>
                    <div className='price'><span>2999</span><b>RMB</b></div>
                    <a className='btn-detail'>查看详情</a>
                  </div>
                </li>
              )
            })
          }
        </ul>
        <div className="list-more-btn" onClick={this.loadMore}>
          <span>查看更多</span>
        </div>
      </div>
    )
  },

  propTypes: {
    data: PropTypes.array,
    index: PropTypes.number
  },

  getDefaultProps(){
    return { dataUrl:'' }
  },

  getInitialState() {
    return {
      data: [],
      count:0,
      isMore:true
    }
  },

  componentDidMount() {
    const setupScrollbar = ()=>{
      $('.scrollbarall').length > 0 &&
      _.each($(".scrollbarall"),(v,k) => {
        let e = $(v)
        e.tinyscrollbar();
        e.find('.scrollbar').css({
          opacity: 0
        });

        e.bind('mouseenter', function() {
          $('.scrollbar', e).animate({
            opacity: 1
          }, 300);
        });

        e.bind('mouseleave', function() {
          $('.scrollbar', e).animate({
            opacity: 0
          }, 300);
        });
      });
    }

    if (this.props.dataUrl !== undefined) {
      fetch(this.props.baseUrl + this.props.dataUrl + '?cityId=' + this.props.cityId)
        .then(res => {
          return res.json()
        })
        .then(j => {
          if(j.success) {
            let tIsMore = true;
            let tCount = this.state.count;
            tCount += j.data.length;
            if (tCount < j.count) {
              tIsMore = true;
            } else {
              tIsMore = false;
            }
            this.setState({ data:j.data,count:tCount,isMore:tIsMore }, setupScrollbar)
          }
        })
    }
  },

  loadMore() {
    console.log('is more more .....')
  }

})

const Suite = React.createClass({
  render() {
    return (
      <div className="suites-view">
        <div className='bannar-all-box' >
          <div className='slider-box bannar' style={{height:SuiteConfig['MediaSlider']['height']}} id='slider_top'>
            <MediaSlider {...SuiteConfig['MediaSlider']} params={{'cityId':this.props.dataParams.cityId}} />
          </div>
        </div>
        <div className="gray-bg-box">
          <div className="photo-box layout-center-box">
            <img src="/images/static-7.jpg" />
          </div>
        </div>
        {
          <SuiteList {...SuiteConfig['TripListItem']} cityId={this.props.dataParams.cityId} />
        }
      </div>
    )
  },
  getDefaultProps(){
    return {
      dataParams:{
        cityId:-1
      }
    }
  },
  componentDidMount() {
  }
})

export { Suite }
