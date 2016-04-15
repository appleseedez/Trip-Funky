import React, { PropTypes } from 'react'
import { BaseConfig } from '../config/base'
import { MediaItem } from './media-item.jsx'
import _ from 'lodash'
const TripListItem = React.createClass({
  render () {
    if (this.props.type === 'sample') {// 样片列表
      let hrefUrl='/sample-details?cityId='+this.props.params.cityId+'&type='+this.props.params.type+'&id='
      return (
        <ul className="recommend-list layout-center-box">
          {
            _.map(this.state.data,(v,k)=>{
              return(
                <li key={k} className="item-box">
                  <a href={hrefUrl+v.id} className="img-box" target='_blank'>
                    <MediaItem
                      height={576}
                      aspectRatio={'-1:576'}
                      mediaUrl={v.coverUrlWeb}
                    />
                    <div className="title-box">
                      <h2>{v.name}</h2>
                    </div>
                  </a>
                  <div className="item-shadow"></div>
                </li>
              )
            })
          }
        </ul>

      )
    } else if (this.props.type === 'pringles') {// 客片列表
      let hrefUrl='/pringles-details?cityId='+this.props.params.cityId+'&type='+this.props.params.type+'&id='
      return (
        <ul className="recommend-list layout-center-box">
          {
            _.map(this.state.data,(v,k)=>{
              return (
                <li key={k} className="item-box">
                  <a href={hrefUrl+v.id} className="img-box" target='_blank'>
                    <MediaItem
                      height={579}
                      aspectRatio={'-1:579'}
                      mediaUrl={v.coverUrlWeb} />
                    <div className="layer-box"></div>
                    <div className="info-box">
                      <em>GoldenWedding</em>
                      <h2>{v.actorMaleName + ' & ' + v.actorFemaleName}</h2>
                    </div>
                  </a>
                  <div className="item-shadow"></div>
                </li>
              )
            })
          }
        </ul>
      )
    } else if (this.props.type === 'suite') {// 套系列表
      let hrefUrl='/suite-details?cityId='+this.props.params.cityId+'&type='+this.props.params.type+'&id='
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
                      mediaUrl={v.coverUrlWeb} />
                  </a>
                  <div className="tit-box">
                    <h1>{v.name}</h1>
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
                    <div className='price'><span>{v.salePrice}</span><b>RMB</b></div>
                    <a className='btn-detail' href={hrefUrl+v.id} target="_brank">详情</a>
                  </div>
                </li>
              )
            })
          }
        </ul>
      )
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
      BaseConfig['fetchFunc'](this,nextProps,false,setUp)(this,nextProps,false,setUp)
    } else {
      BaseConfig['fetchFunc'](this,nextProps)(this,nextProps)
    }
  },
  componentDidMount() {
    if (this.props.type === 'suite') {
      BaseConfig['fetchFunc'](this,null,false,setUp)(this,null,false,setUp)
    } else {
      BaseConfig['fetchFunc'](this,null)(this)
    }
  },

  setUp() {
    if (this.props.type === 'suite') {
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
  }
})

export { TripListItem }
