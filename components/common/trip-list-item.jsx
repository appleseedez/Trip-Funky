import React, { PropTypes } from 'react'
import { BaseConfig } from '../config/base'
import { MediaItem } from './media-item.jsx'
import _ from 'lodash'
const TripListItem = React.createClass({
  render () {
    if (this.props.type === 'sample') {// 样片列表
      let hrefUrl='/sample-details/'
      return (
        <ul className="recommend-list layout-center-box">
          {
            _.map(this.state.data,(v,k)=>{
              return(
                <li key={k} className="item-box">
                  <a href={hrefUrl+v.id} className="img-box" target='_blank'>
                    <MediaItem
                      height={600}
                      aspectRatio={'2:3'}
                      mediaUrl={v.coverUrlWeb}
                      water={false}
                    />
                    <div className="title-box">
                      <h2>{v.name}</h2>
                      <h1>SWEET JOURNEY</h1>
                    </div>
                    <div className="item-shadow"></div>
                  </a>
                </li>
              )
            })
          }
        </ul>

      )
    } else if (this.props.type === 'pringles') {// 客片列表
      if (this.state.data && this.state.data.length > 0) {
        let hrefUrl='/pringles-details/'
        return (
          <ul className="recommend-list layout-center-box">
            {
              _.map(this.state.data,(v,k)=>{
                let attractionsName = null;
                if (v.attractionsName && v.attractionsName.length>0) {
                  let value = v.attractionsName.slice(0,-1);
                  attractionsName=(<em>{'< 拍摄景点：'+value+' >'}</em>)
                }
                return (
                  <li key={k} className="item-box">
                    <a href={hrefUrl+v.id} className="img-box" target='_blank'>
                      <MediaItem
                        height={600}
                        aspectRatio={'2:3'}
                        mediaUrl={v.coverUrlWeb}
                        water={false}
                      />
                      <div className="layer-box"></div>
                      <div className="info-box">
                        <h2>{v.actorMaleName+' ❤ '+v.actorFemaleName}</h2>
                        {
                          attractionsName
                        }
                      </div>
                    </a>
                    <div className="item-shadow"></div>
                  </li>
                )
              })
            }
          </ul>
        )
      } else {
        // 展示敬请期待图片....
        return (
          <div className="photo-box layout-center-box">
            <img src='//img2.jsbn.com/trip/assets/images/jqqd.jpg' />
          </div>
        )
      }
    } else if (this.props.type === 'suite') {// 套系列表
      if (this.state.data && this.state.data.length > 0) {
        let hrefUrl='/suite-details/'
        return (
          <ul className="suites-list layout-center-box">
            {
              _.map(this.state.data, (v,k) => {
                let infoData = v.detail && v.detail.split && v.detail.split('|') || []
                return (
                  <li key={k} className="item">
                    <a className="img-box" href={hrefUrl+v.id} target="_brank">
                      <MediaItem
                        height={320}
                        aspectRatio={'55:32'}
                        mediaUrl={v.coverUrlWeb}
                        water={false}
                      />
                    </a>
                    <div className="tit-box">
                      <a href={hrefUrl+v.id} target="_brank">
                        <h1>{v.name}</h1>
                      </a>
                    </div>
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
                          <div className="info">
                            <div className="overview">
                              {
                                _.map(infoData,(v,k)=>{
                                  return (
                                    <span key={k}>
                                    <p>{v}</p>
                                  </span>)
                                })
                              }
                            </div>
                          </div>
                        }
                      </div>
                    </div>
                    <div className='price-box'>
                      <a href={hrefUrl+v.id} target="_brank">
                        <div className='price'><span>{v.salePrice}</span><b>RMB</b></div>
                      </a>
                      <a className='btn-detail' href={hrefUrl+v.id} target="_brank">详情</a>
                    </div>
                  </li>
                )
              })
            }
          </ul>
        )
      } else {
        // 展示敬请期待图片....
        return (
          <div className="photo-box layout-center-box">
            <img src='//img2.jsbn.com/trip/assets/images/jqqd.jpg' />
          </div>
        )
      }
    }

  },
  propTypes: {
    dataUrl:React.PropTypes.string,
    params:React.PropTypes.object
  },

  getDefaultProps(){
    return {
      dataUrl:undefined,
      params:{}
    }
  },
  getInitialState() {
    return {
      data:[],
      dataStore:[],
      count:0,
      currentIndex:0
    }
  },

  componentWillReceiveProps(nextProps) {
    if (this.props.type === 'suite') {
      const setUp= ()=>{
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
      BaseConfig['fetchFunc'](this,nextProps,false,setUp)(this,nextProps,false,setUp)
    } else {
      BaseConfig['fetchFunc'](this,nextProps)(this,nextProps)
    }
  },

  componentDidMount() {
    if (this.props.type === 'suite') {
      const setUp= ()=>{
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
      BaseConfig['fetchFunc'](this,null,false,setUp)(this,null,false,setUp)
    } else {
      BaseConfig['fetchFunc'](this,null)(this)
    }
  }
})

export { TripListItem }
