import React, {PropTypes} from 'react'
import _ from 'lodash'

import { HomeConfig } from './config/home-config'
import { StyleImg } from './config/adv-lang-config'
import { MediaItem } from './common/media-item.jsx'

const RecommendCityList = React.createClass({
  render () {
    return (
      <div className="list-box layout-center-box clearfix">
        <ul className="recommend-list layout-center-box item-count-5">
          {
            _.map(this.state.data,(v,k)=>{
              let kClass="item-box item-"+(k+1);
              if(k == 0) {
                if (v.linkUrl && v.linkUrl !== "") {
                  return(
                    <li key={k} className={kClass}>
                      <a href={v.linkUrl} className="img-box">
                        <MediaItem mediaUrl={v.coverUrlWeb} aspectRatio={'398:600'} width={398} water={false} platformType={this.props.platformType} />
                        <div className="layer-box"></div>
                        <div className="item-shadow"></div>
                      </a>
                    </li>
                  )
                } else {
                  return(
                    <li key={k} className={kClass}>
                      <a className="img-box">
                        <MediaItem mediaUrl={v.coverUrlWeb} aspectRatio={'398:600'} width={398} water={false} platformType={this.props.platformType} />
                        <div className="layer-box"></div>
                        <div className="item-shadow"></div>
                      </a>
                    </li>
                  )
                }

              } else {
                if (v.linkUrl && v.linkUrl !== "") {
                  return(
                    <li key={k} className={kClass}>
                      <a href={v.linkUrl} className="img-box">
                        <MediaItem mediaUrl={v.coverUrlWeb} aspectRatio={'398:299'} width={398} water={false} platformType={this.props.platformType} />
                        <div className="layer-box"></div>
                        <div className="item-shadow"></div>
                      </a>
                    </li>
                  )
                } else {
                  return (
                    <li key={k} className={kClass}>
                      <a className="img-box">
                        <MediaItem mediaUrl={v.coverUrlWeb} aspectRatio={'398:299'} width={398} water={false} platformType={this.props.platformType} />
                        <div className="layer-box"></div>
                        <div className="item-shadow"></div>
                      </a>
                    </li>
                  )
                }
              }
            })
          }
        </ul>
      </div>
    )
  },

  getInitialState() {
    return {
      data: []
    }
  },

  componentDidMount() {
    if (HomeConfig['HotAdv1'].dataUrl !== undefined && this.props.cityId !== -1) {
      let p = HomeConfig['HotAdv1'].params
      fetch(HomeConfig['HotAdv1'].baseUrl + HomeConfig['HotAdv1'].dataUrl + '?' + $.param(p)).then(res => {
        return res.json()
      }).then(j => {
        if(j.success && j.data.length > 0) {
          this.setState({data:j.data});
        }
      })
    }
  }
})

const Home = React.createClass({
  render() {
    let bgUrl = '//img2.jsbn.com/trip/assets/images/home_banner_bg.jpg';
    if (this.props.dataParams.platformType === 1) {
      bgUrl += '@75q'
    }

    return (
      <div className="mainhome-view">
        <div className="main-top">
          <div className="top-box">
            <div className="relative-box">
              <div className="left-box ico-mainhome"/>
              <div className="right-box ico-text"/>
            </div>
            <div className="relative-box">
              <a>
                <div className="left-box ico-lp select-box"/>
              </a>
            </div>
          </div>
          <div className="bannar-all-box">
            <div className="header bannar">
              <ul className="slider">
                <li className="item">
                  <a className="img-box">
                    <img src={bgUrl}/>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="main-content">
          <div className="block-tit-box-1">
            <img src={StyleImg['head']}/>
            <div className="english-title"></div>
            <div className="chinese-title">
              <i/>
              <p>
                <span>幸福可以绽放的如此耀眼</span>
              </p>
            </div>
            <div className="list-title">
              <h1>
                <span>金色旅拍</span>
                <b>热门城市</b>
              </h1>
            </div>
            <img src={StyleImg['footer']}/>
          </div>
          <RecommendCityList platformType={this.props.dataParams.platformType} />
        </div>

      </div>
    )
  },

  getDefaultProps(){
    return {
      dataParams:{
        platformType:0
      }
    }
  }

})

export {Home}
