import React, {PropTypes} from 'react'
import _ from 'lodash'

import { IndexConfig } from './config/index-config'
import { StyleImg } from './config/adv-lang-config'
import { MediaItem } from './common/media-item.jsx'

const RecommendCityList = React.createClass({
    render () {
        return (
          <div className="list-box layout-center-box clearfix">
              <ul className="adv-list-sy">
                  <li className="item">
                      {
                        _.map(this.state.data2, (v,k)=>{
                            let kClass = (k==0)?"box-1":"box-1 box-2"
                            return (
                              <div key={k} className={kClass}>
                                  <a href={v.linkUrl} target='_blank'>
                                      <div className="img-box">
                                          <MediaItem mediaUrl={v.coverUrlWeb} aspectRatio={'395:296'} width={395} water={false} />
                                          <div className="cover-layer" />
                                      </div>
                                  </a>
                              </div>
                            )
                        })
                      }
                  </li>
                  <li className="item">
                      {
                          _.map(this.state.data1, (v,k)=>{
                              return (
                                <div key={k} className="img-box">
                                    <a href={v.linkUrl} target='_blank'>
                                        <div className="img-box">
                                            <MediaItem mediaUrl={v.coverUrlWeb} aspectRatio={'395:600'} width={395} water={false} />
                                            <div className="cover-layer" />
                                        </div>
                                    </a>
                                </div>
                              )
                          })
                      }
                  </li>
                  <li className="item item-last">
                      {
                          _.map(this.state.data3, (v,k)=>{
                              let kClass = (k==0)?"box-1":"box-1 box-2"
                              return (
                                <div key={k} className={kClass}>
                                    <a href={v.linkUrl} target='_blank'>
                                        <div className="img-box">
                                            <MediaItem mediaUrl={v.coverUrlWeb} aspectRatio={'395:296'} width={395} water={false} />
                                            <div className="cover-layer"/>
                                        </div>
                                    </a>
                                </div>
                              )
                          })
                      }
                  </li>
              </ul>
          </div>
        )
    },

    getInitialState() {
        return {
            data1: [],
            data2: [],
            data3: []
        }
    },

    componentDidMount() {
        if (IndexConfig['HotAdv1'].dataUrl !== undefined && this.props.cityId !== -1) {
            let p = IndexConfig['HotAdv1'].params
            fetch(IndexConfig['HotAdv1'].baseUrl + IndexConfig['HotAdv1'].dataUrl + '?' + $.param(p)).then(res => {
                return res.json()
            }).then(j => {
                if(j.success && j.data.length > 0) {
                    this.setState({data1:j.data.slice(0,1),data2:j.data.slice(1,3),data3:j.data.slice(3,5)});
                }
            })
        }
    }
})

const Index = React.createClass({
    render() {
        return (
            <div className="mainhome-view">
                <div className="main-top">
                    <div className="top-box">
                        <div className="relative-box">
                            <div className="left-box ico-mainhome"/>
                            <div className="right-box ico-text"/>
                        </div>
                        <div className="relative-box">
                            <div className="left-box ico-lp select-box"/>
                        </div>
                    </div>
                    <div className="bannar-all-box">
                        <div className="header bannar">
                            <ul className="slider">
                                <li className="item">
                                    <a href={'/'} className="img-box">
                                        <img src="//img2.jsbn.com/trip/assets/images/home_banner_bg.jpg"/>
                                        <div className="cover-layer"/>
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
                    <RecommendCityList />
                </div>

            </div>
        )
    }

})

export {Index}
