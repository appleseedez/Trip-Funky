/**
 * Created by chenjianjun on 16/3/9.
 */
import React, { PropTypes } from 'react'
import _ from 'lodash'

import { MediaItem } from './common/media-item.jsx'
import { PringlesDetailsConfig } from './config/pringles-details-config'
/**
 组件结构
 <PringlesDetails> <= styles,scenes,list
 </PringlesDetails>
 **/
const PringlesDetails = React.createClass({
  render() {

    let attractionsName = null;
    if (this.state.details.attractionsName && this.state.details.attractionsName.length>0) {
      attractionsName = this.state.details.attractionsName.slice(0,-1);
    }
    let shootingTime = '保密';
    if (this.state.details.shootingTime && this.state.details.shootingTime.length>0) {
      shootingTime = this.state.details.shootingTime;
    }

    return(
      <div className="detail-view">
        <div className="photo-box layout-center-box">
          <img src={PringlesDetailsConfig['Banner'][0].imageUrl} />
        </div>

        <div className="separation-line" id="separation-line">
          <div className="left-bg"></div>
          <div className="right-bg"></div>
        </div>

        <div className="layout-center-box" id="photo_slider">
          <div className="photo-show-box">
            <div className="big-img-box">
              <div className="img-box">
                <img className='big-img' />
              </div>
              <div className="left-hover-box btn-prev">
                <div className="bg-ico"></div>
                <i className="ico-15-js ico-15-lef-js"></i>
              </div>
              <div className="right-hover-box btn-next">
                <div className="bg-ico"></div>
                <i className="ico-15-js ico-15-rig-js"></i>
              </div>
            </div>

            <div className="hidden-box">
              <ul className="small-img-box">
                {
                  _.map(this.state.details.pcDetailImages, (v,k)=> {
                    let srcUrl = v;
                    if(this.props.dataParams.platformType === 0) {// 如果是pc端,需要切图
                      srcUrl += '@90q|1e_1c_0o_0l_130h_130w_90q.src';
                    } else {
                      srcUrl += '@95q|watermark=1&object=c2h1aXlpbi5wbmc&t=80&p=5&y=10&x=10';
                    }
                    return(
                      <li key={k} className="item item-current"
                          data-big-img-url={v+'@95q|watermark=1&object=c2h1aXlpbi5wbmc&t=80&p=5&y=10&x=10'}>
                        <a className="img-box">
                          <img src={srcUrl} />
                          <div className="round-shade-10"></div>
                        </a>
                      </li>
                    )
                  })
                }
              </ul>
            </div>

            <div className="pringles-info-box">
              <div className="theme">
                <h1>{this.state.details.name}</h1>
                <h2>{'拍摄时间 ShootingTime: '+shootingTime}</h2>
              </div>
              <div className="info-box">
                <div className="name">
                  <span className="info-love-ico"></span>
                  <span className="title">{this.state.details.actorMaleName+' ❤ '+this.state.details.actorFemaleName}</span>
                </div>
                <div className="city">
                  <span className="info-time-ico"></span>
                  <span className="title">拍摄城市</span>
                  <span className="content">{this.state.details.cityName}</span>
                </div>
                <div className="address">
                  <span className="info-photo-ico"></span>
                  <span className="title">拍摄景点</span>
                  <span className="content">{attractionsName}</span>
                </div>
              </div>
            </div>

          </div>
          <div className="photo-box-border"></div>
        </div>
      </div>
    );
  },

  getInitialState: function() {
    return {
      details: {
        'pcDetailImages':[],
        'shootingTime':'',
        'actorMaleName':'',
        'actorFemaleName':'',
        'cityName':'',
        'attractionsName':''
      }
    };
  },

  getDefaultProps(){
    return {
      dataParams:{
        platformType:0
      }
    }
  },

  componentDidMount() {
    const setUp = ()=> {
      $('#photo_slider').Slider({type:'Horizontal'});
      window.location.href="#separation-line"
    }

    let cfg = PringlesDetailsConfig['PringlesDetails']
    let fetchUrl = cfg['buildUrl'](this.props.dataParams,cfg['dataUrl'])
    if(fetchUrl){
      fetch(fetchUrl)
        .then(res => {return res.json()})
        .then(j=>{
          if(j.success && j.data.length > 0) {
            this.setState({details:j.data[0]}, setUp);
          }
        })
    }
  }
});

export { PringlesDetails }
