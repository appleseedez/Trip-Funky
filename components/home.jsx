import React, { PropTypes } from 'react'
import _ from 'lodash'

import { PageFooter } from './common/page-footer.jsx'
import { MediaSlider } from './common/media-slider.jsx'
import { MediaItem } from './common/media-item.jsx'
import { HomeConfig } from './config/home-config'
import { AdvTemplate } from './common/adv-template.jsx'
import { AdvLangConfig,StyleImg } from './config/adv-lang-config'

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
        <AdvTemplate data={this.state.data} />
      </div>
    )
  },

  getInitialState() {
    return {
      data: []
    }
  },

  componentDidMount() {
    if (HomeConfig['RecommendHot1'].dataUrl !== undefined && this.props.cityId !== -1) {
      let p = _.merge(HomeConfig['RecommendHot1'].params, {'cityId': this.props.cityId})
      fetch(HomeConfig['RecommendHot1'].baseUrl + HomeConfig['RecommendHot1'].dataUrl + '?' + $.param(p)).then(res => {
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
                        <MediaItem height={320} aspectRatio={'55:32'} mediaUrl={v.coverUrlWeb} water={false} />
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
    if (HomeConfig['SuiteRecommend'].dataUrl !== undefined && this.props.cityId !== -1) {
      let p = _.merge(HomeConfig['SuiteRecommend'].params, {'cityId': this.props.cityId})
      fetch(HomeConfig['SuiteRecommend'].baseUrl + HomeConfig['SuiteRecommend'].dataUrl + '?' + $.param(p)).then(res => {
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
            {_.map(this.state.data, (v, k) => {
              return (
                <li key={k}>
                  <div className="imgbox">
                    <a href={'/pringles-details/'+v.id} className="href-box" target='_blank'/>
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
                      <MediaItem mediaUrl={v.coverUrlWeb} height={445} aspectRatio={'297:445'} water={false}/>
                    </div>
                  </div>
                  <a href={hrefUrl+'&id='+v.id} className="title-box">
                    <h2>{v.name}</h2>
                    <p>{v.description}</p>
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
    return {data: []}
  },

  componentDidMount() {
    if (HomeConfig['PringlesRecommend'].dataUrl !== undefined && this.props.cityId !== -1) {
      let p = _.merge(HomeConfig['PringlesRecommend'].params, {'cityId': this.props.cityId})
      fetch(HomeConfig['PringlesRecommend'].baseUrl + HomeConfig['PringlesRecommend'].dataUrl + '?' + $.param(p)).then(res => {
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
                          <a className="href-box" href={'/sample-details/'+v.id} target='_blank'/>
                          <div className="info-box">
                            <span className="font-bg"/>
                            <h1>{v.name}</h1>
                          </div>
                          <div className="mask"/>
                          <MediaItem mediaUrl={v.coverUrlWeb} aspectRatio={'2:3'} width={600} water={false} />
                        </div>
                      </li>
                    )
                    break;
                  case 3:
                    item=(
                      <li className="item item-mgt" key={k}>
                        <div className="img-box">
                          <a className="href-box" href={'/sample-details/'+v.id} target='_blank'/>
                          <div className="info-box">
                            <span className="font-bg"/>
                            <h1>{v.name}</h1>
                          </div>
                          <div className="mask"/>
                          <MediaItem mediaUrl={v.coverUrlWeb} aspectRatio={'2:3'} width={300} water={false} />
                        </div>
                      </li>
                    )
                    break;
                  case 4:
                    item=(
                      <li className="item item-last item-mgt" key={k}>
                        <div className="img-box">
                          <a className="href-box" href={'/sample-details/'+v.id} target='_blank'/>
                          <div className="info-box">
                            <span className="font-bg"/>
                            <h1>{v.name}</h1>
                          </div>
                          <div className="mask"/>
                          <MediaItem mediaUrl={v.coverUrlWeb} aspectRatio={'2:3'} width={300} water={false} />
                        </div>
                      </li>
                    )
                    break;
                  default:
                    item = (
                      <li className="item" key={k}>
                        <div className="img-box">
                          <a className="href-box" href={'/sample-details/'+v.id} target='_blank'/>
                          <div className="info-box">
                            <span className="font-bg"/>
                            <h1>{v.name}</h1>
                          </div>
                          <div className="mask"/>
                          <MediaItem mediaUrl={v.coverUrlWeb} aspectRatio={'2:3'} width={300} water={false} />
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
    if (HomeConfig['SampleRecommend'].dataUrl !== undefined && this.props.cityId !== -1) {
      let p = _.merge(HomeConfig['SampleRecommend'].params, {'cityId': this.props.cityId})
      fetch(HomeConfig['SampleRecommend'].baseUrl + HomeConfig['SampleRecommend'].dataUrl + '?' + $.param(p)).then(res => {
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

const Home = React.createClass({
  render () {
    return (
      <div className='home-view'>
        <div className='bannar-all-box' >
          <div className='slider-box bannar' id='slider_top'>
            <MediaSlider {...HomeConfig['MediaSlider']} params={{'cityId':this.props.dataParams.cityId}} />
          </div>
        </div>

        <RecommendList cityId={this.props.dataParams.cityId} cityName={this.props.dataParams.cityName}/>
        <SampleList cityId={this.props.dataParams.cityId} cityName={this.props.dataParams.cityName}/>
        <PringlesList cityId={this.props.dataParams.cityId} cityName={this.props.dataParams.cityName} />
        <SuiteList cityId={this.props.dataParams.cityId} cityName={this.props.dataParams.cityName} />

        <div className="gray-bg-box">
          <div className="promise">
            <div className="block-tit-box">
              <div className="border-box">
                <h1><span>金色旅拍</span><b>九大承诺</b></h1>
                <h2></h2>
              </div>
              <p>Golden trip, so it's really good.</p>
            </div>
            <div className="photo-box photo-box-mgt10 layout-center-box">
              <img src={HomeConfig['Banner'][0].imageUrl} />
            </div>
            <div className="bt-border btborder">
              <ul className="list-promise">
                <li><h2>全城最高性价比</h2><p>City maximum price </p></li>
                <li><h2>先行制定拍摄计划</h2><p>City maximum price </p></li>
                <li><h2>绝无任何隐形消费</h2><p>City maximum price </p></li>
              </ul>
            </div>
            <div className="bt-border">
              <ul className="list-promise">
                <li><h2>不满意免费补拍或重拍</h2><p>City maximum price </p></li>
                <li><h2>重拍不满意退款</h2><p>City maximum price </p></li>
                <li><h2>全城独家激光摄影棚 </h2><p>City maximum price </p></li>
              </ul>
            </div>
            <div className="bt-border">
              <ul className="list-promise">
                <li><h2>全场Dior,CHANEL美妆</h2><p>City maximum price </p></li>
                <li><h2>主城九区免费送件上门</h2><p>City maximum price </p></li>
                <li><h2>400全程回访监督</h2><p>City maximum price </p></li>
              </ul>
            </div>
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

export { Home }
