import React, { PropTypes } from 'react'
import _ from 'lodash'

import { MediaSlider } from './common/media-slider.jsx'
import { MediaItem } from './common/media-item.jsx'
import { IndexConfig } from './config/index-config'
import { AdvTemplate } from './common/adv-template.jsx'
import { AdvLangConfig,StyleImg } from './config/adv-lang-config'
import { PageFooter } from './common/page-footer.jsx'

const RecommendList = React.createClass({
  render () {
    let brandUrl = '//img2.jsbn.com/trip/assets/images/follow-me-default.jpg';
    if (AdvLangConfig[this.props.cityName]) {
      brandUrl = AdvLangConfig[this.props.cityName]['FOLLOW']
    }

    return (
      <div className="gray-bg-box">
        <div className="photo-box layout-center-box">
          <img src={brandUrl} />
        </div>
        <AdvTemplate data={this.state.data} platformType={this.props.platformType} />
      </div>
    )
  },

  getInitialState() {
    return {
      data: []
    }
  },

  componentDidMount() {
    if (IndexConfig['RecommendHot1'].dataUrl !== undefined && this.props.cityId !== -1) {
      let p = _.merge(IndexConfig['RecommendHot1'].params, {'cityId': this.props.cityId})
      fetch(IndexConfig['RecommendHot1'].baseUrl + IndexConfig['RecommendHot1'].dataUrl + '?' + $.param(p)).then(res => {
        return res.json()
      }).then(j => {
        if(j.success && j.data.length > 0) {
          this.setState({data:j.data});
        }
      })
    }
  }
})

const SuiteList = React.createClass({
  render () {

    if (this.state.data.length === 0) {
      return null;
    }

    let hrefUrl='/suite';
    let desc = '幸福可以绽放的如此耀眼';
    if(AdvLangConfig[this.props.cityName]) {
      desc=AdvLangConfig[this.props.cityName]['SUITE']
    }
    return (
      <div>
        <div className="block-tit-box-1">
          <img src={StyleImg['head']} />
          <a href={hrefUrl}>
            <div className="english-title">
            </div>
            <div className="chinese-title">
              <i></i>
              <p><span>{desc}</span></p>
            </div>
            <div className="list-title">
              <h1><span>金色旅拍</span><b>套系热卖</b></h1>
            </div>
          </a>
          <img src={StyleImg['footer']} />
        </div>

        <div className="gray-bg-box layout-center-box">
          <ul className="suite-list layout-center-box">
            {
              _.map(this.state.data, (v,k)=>{
                return (
                  <li key={k} className="item-box">
                    <a href={'/suite-details/'+v.id} target='_blank'>
                      <div className="img-box">
                        <MediaItem height={320} aspectRatio={'55:32'} mediaUrl={v.coverUrlWeb} water={false} platformType={this.props.platformType} />
                        <div className="layer-box"></div>
                      </div>
                      <div className="info-box">
                        <h1><b>{v.salePrice}</b><span>元</span></h1>
                        <div className="jsbn">{v.name}</div>
                      </div>
                    </a>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    )
  },

  getInitialState() {
    return {
      data: []
    }
  },

  componentDidMount() {
    if (IndexConfig['SuiteRecommend'].dataUrl !== undefined && this.props.cityId !== -1) {
      let p = _.merge(IndexConfig['SuiteRecommend'].params, {'cityId': this.props.cityId})
      fetch(IndexConfig['SuiteRecommend'].baseUrl + IndexConfig['SuiteRecommend'].dataUrl + '?' + $.param(p)).then(res => {
        return res.json()
      }).then(j => {
        if(j.success && j.data.length > 0) {
          this.setState({data:j.data});
        }
      })
    }
  }
})

const PringlesList = React.createClass({
  render() {
    if (this.state.data.length === 0) {
      return null;
    }

    let hrefUrl='/pringles';
    let desc = '幸福可以绽放的如此耀眼';
    if(AdvLangConfig[this.props.cityName]) {
      desc=AdvLangConfig[this.props.cityName]['PRINGLES']
    }

    return (
      <div>
        <div className="block-tit-box-1">
          <img src={StyleImg['head']} />
          <a href={hrefUrl}>
            <div className="english-title">
            </div>
            <div className="chinese-title">
              <i></i>
              <p><span>{desc}</span></p>
            </div>
            <div className="list-title">
              <h1><span>金色旅拍</span><b>{this.props.cityName+'客片'}</b></h1>
            </div>
          </a>
          <img src={StyleImg['footer']} />
        </div>
        <div className="gray-bg-box layout-center-box">
          <ul className="list-pringles layout-center-box">
            {
              _.map(this.state.data, (v, k) => {
              return (
                <li key={k}>
                  <div className="imgbox">
                    <a href={'/pringles-details/'+v.id} target='_blank'>
                      <div className="info-box">
                        <span className="font-bg"/>
                        <h1>
                          <span>{v.actorMaleName}</span>
                          <b>&amp;</b>
                          <span>{v.actorFemaleName}</span>
                        </h1>
                      </div>
                      <div className="mask"/>
                      <div className='img-box'>
                        <MediaItem mediaUrl={v.coverUrlWeb} height={445} aspectRatio={'297:445'} water={false} platformType={this.props.platformType}/>
                      </div>
                      <div className="title-box">
                        <h2>{v.name}</h2>
                        <p>{v.description}</p>
                      </div>
                    </a>
                  </div>
                </li>
              )
              })
            }

          </ul>
        </div>
      </div>
    )
  },

  getInitialState() {
    return {data: []}
  },

  componentDidMount() {
    if (IndexConfig['PringlesRecommend'].dataUrl !== undefined && this.props.cityId !== -1) {
      let p = _.merge(IndexConfig['PringlesRecommend'].params, {'cityId': this.props.cityId})
      fetch(IndexConfig['PringlesRecommend'].baseUrl + IndexConfig['PringlesRecommend'].dataUrl + '?' + $.param(p)).then(res => {
        return res.json()
      }).then(j => {
        if(j.success && j.data.length > 0) {
          this.setState({data:j.data});
        }
      })
    }
  }
})

const SampleList = React.createClass({
  render () {
    let hrefUrl='/sample';
    let desc = '幸福可以绽放的如此耀眼';
    if(AdvLangConfig[this.props.cityName]) {
      desc=AdvLangConfig[this.props.cityName]['SAMPLE']
    }

    return (
      <div>
        <div className="block-tit-box-1">
          <img src={StyleImg['head']} />
          <a href={hrefUrl}>
            <div className="english-title">
            </div>
            <div className="chinese-title">
              <i></i>
              <p><span>{desc}</span></p>
            </div>
            <div className="list-title">
              <h1><span>金色旅拍</span><b>{this.props.cityName+'作品'}</b></h1>
            </div>
          </a>
          <img src={StyleImg['footer']} />
        </div>
        <div className="list-box layout-center-box clearfix">
          <ul className="list-samples">
            {
              _.map(this.state.data,(v,k)=>{
                let item = null
                switch (k) {
                  case 1:
                    item = (
                      <li className="item item-big marginLeft" key={k}>
                        <div className="img-box">
                          <a href={'/sample-details/'+v.id} target='_blank' >
                            <div className="info-box">
                              <span className="font-bg"/>
                              <h1>{v.name}</h1>
                            </div>
                            <div className="mask"/>
                            <MediaItem mediaUrl={v.coverUrlWeb} aspectRatio={'598:900'} width={598} water={false} platformType={this.props.platformType} />
                          </a>
                        </div>
                      </li>
                    )
                    break;
                  case 3:
                    item=(
                      <li className="item item-mgt" key={k}>
                        <div className="img-box">
                          <a href={'/sample-details/'+v.id} target='_blank' >
                            <div className="info-box">
                              <span className="font-bg"/>
                              <h1>{v.name}</h1>
                            </div>
                            <div className="mask"/>
                            <MediaItem mediaUrl={v.coverUrlWeb} aspectRatio={'2:3'} width={300} water={false} platformType={this.props.platformType} />
                          </a>
                        </div>
                      </li>
                    )
                    break;
                  case 4:
                    item=(
                      <li className="item item-last item-mgt" key={k}>
                        <div className="img-box">
                          <a href={'/sample-details/'+v.id} target='_blank'>
                            <div className="info-box">
                              <span className="font-bg"/>
                              <h1>{v.name}</h1>
                            </div>
                            <div className="mask"/>
                            <MediaItem mediaUrl={v.coverUrlWeb} aspectRatio={'2:3'} width={300} water={false} platformType={this.props.platformType} />
                          </a>
                        </div>
                      </li>
                    )
                    break;
                  default:
                    item = (
                      <li className="item" key={k}>
                        <div className="img-box">
                          <a href={'/sample-details/'+v.id} target='_blank'>
                            <div className="info-box">
                              <span className="font-bg"/>
                              <h1>{v.name}</h1>
                            </div>
                            <div className="mask"/>
                            <MediaItem mediaUrl={v.coverUrlWeb} aspectRatio={'2:3'} width={300} water={false} platformType={this.props.platformType} />
                          </a>
                        </div>
                      </li>
                    )
                }
                return item
              })
            }
          </ul>
        </div>
      </div>
    )
  },

  getInitialState() {
    return {
      data:[]
    }
  },
  componentWillReceiveProps(nextProps) {
    /** 数据请求 **/
  },

  componentDidMount() {
    if (IndexConfig['SampleRecommend'].dataUrl !== undefined && this.props.cityId !== -1) {
      let p = _.merge(IndexConfig['SampleRecommend'].params, {'cityId': this.props.cityId})
      fetch(IndexConfig['SampleRecommend'].baseUrl + IndexConfig['SampleRecommend'].dataUrl + '?' + $.param(p)).then(res => {
        return res.json()
      }).then(j => {
        if(j.success && j.data.length > 0) {
          let d =_.concat(_.reverse(j.data.slice(0,2)),j.data.slice(2,3),_.reverse(j.data.slice(3)))
          this.setState({ data:d })
        }
      })
    }
  }
})
//<PageFooter />
const Index = React.createClass({
  render () {
    return (
      <div className='home-view'>
        <div className='bannar-all-box' >
          <div className='slider-box bannar' id='slider_top'>
            <MediaSlider {...IndexConfig['MediaSlider']} params={{'cityId':this.props.dataParams.cityId}} platformType={this.props.dataParams.platformType} />
          </div>
        </div>

        <RecommendList cityId={this.props.dataParams.cityId} cityName={this.props.dataParams.cityName} platformType={this.props.dataParams.platformType} />
        <SampleList cityId={this.props.dataParams.cityId} cityName={this.props.dataParams.cityName} platformType={this.props.dataParams.platformType} />
        <PringlesList cityId={this.props.dataParams.cityId} cityName={this.props.dataParams.cityName} platformType={this.props.dataParams.platformType} />
        <SuiteList cityId={this.props.dataParams.cityId} cityName={this.props.dataParams.cityName} platformType={this.props.dataParams.platformType} />

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

export { Index }
