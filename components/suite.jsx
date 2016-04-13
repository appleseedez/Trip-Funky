import React, {PropTypes} from 'react'
import _ from 'lodash'

import { MediaSlider } from './common/media-slider.jsx'
import { SuiteConfig } from './config/suite-config'
import { TripListItem } from './common/trip-list-item.jsx'

const SuiteItemInfo = React.createClass({
  render() {
    //info信息用|符号做分割
    let infoData = this.props.info && this.props.info.split && this.props.info.split('|') || []
    return (
      <div className="info">
        <div className="overview">
          {
            _.map(infoData,(v,k)=>{
              return (<span key={k}><p>{v}</p></span>)
            })
          }
        </div>
      </div>
    )
  }
})

const SuiteList = React.createClass({
  render() {
    let hrefUrl='/suite-detail?cityId='+this.props.cityId+'&type='+this.props.cityType+'&id='
    return (
      <ul className="suites-list layout-center-box">
        {
          _.map(this.state.data, (v,k) => {
            return (
              <li key={k} className="item">
                <a className="img-box" href={hrefUrl+v.id} target="_brank">
                  <img src={v.coverUrlWeb} />
                </a>
                <div className="tit-box"><h1>{v.name}</h1></div>
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
                      <SuiteItemInfo info={v.detail} />
                    }
                  </div>
                </div>
                <div className='price-box'>
                  <div className='price'><span>{v.salePrice}</span><b>RMB</b></div>
                  <a className='btn-detail' href={hrefUrl+v.id} target="_brank">详情</a>
                </div>
              </li>
            )
          })
        }
      </ul>
    )
  },

  getInitialState() {
    return {
      data:[],
      dataStore:[],
      count:0,
      currentIndex:0
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

    let SuiteList = SuiteConfig['TripListItem']
    SuiteList.params=_.merge(SuiteList.params, {'cityId':this.props.cityId});
    SuiteList['fetchFunc'](this,null,true,setupScrollbar)(this,null,true,setupScrollbar)
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
          <div className="block-tit-box">
            <div className="border-box wx-border-box">
              <h1><span>金色旅拍</span><b>套系报价</b></h1>
              <h2></h2>
            </div>
            <p>Golden trip, so it's really good.</p>
          </div>
          {
            <SuiteList {...SuiteConfig['TripListItem']} cityId={this.props.dataParams.cityId} cityType={this.props.dataParams.type} />
          }
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
