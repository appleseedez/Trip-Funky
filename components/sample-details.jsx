/**
 * Created by chenjianjun on 16/3/9.
 */
import React, { PropTypes } from 'react'
import _ from 'lodash'

import { MediaItem } from './common/media-item.jsx'
import { MediaSlider } from './common/media-slider.jsx'
import { SampleDetailsConfig } from './config/sample-details-config'

/**
 组件结构
 <SampleDetails> <= styles,scenes,list
 </SampleDetails>
 **/

const SampleDetails = React.createClass({
  render() {
    let attractionsName = ''
    if (this.state.details.attractionsName && this.state.details.attractionsName.length>0) {
      attractionsName = this.state.details.attractionsName.slice(0,-1);
    }

    return(
      <div className="detail-view">

        <div className="photo-box layout-center-box">
          <img src={SampleDetailsConfig['Banner'][0].imageUrl} />
        </div>

        <div className="separation-line" id="separation-line">
          <div className="left-bg"></div>
          <div className="right-bg"></div>
        </div>

        <div className="layout-center-box">
          <div className="photo-show-box">
            <div className="cover-box">
              <MediaItem aspectRatio='2:3' height={210} mediaUrl={this.state.details.coverUrlWeb} water={false} platformType={this.props.dataParams.platformType}/>
              <div className='info-box'>
                <h1>{this.state.details.name}</h1>
                <p>
                  <span>拍摄地点：</span><span>{attractionsName}</span>
                </p>
                <p>
                  <span>上传日期：</span><span>{this.state.details.updateTime}</span>
                </p>
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
              <div className="small-img-box">
                {
                  _.map(this.state.details.pcDetailImages, (v,k)=>{
                    let srcUrl = v;
                    if(this.props.dataParams.platformType === 0) {// 如果是pc端,需要切图
                      srcUrl += '@90q|1e_1c_0o_0l_130h_130w_90q.src';
                      return(
                        <a key={k} className="item item-current img-box"
                           data-uk-lightbox="{'group':'sample-img'}"
                           data-lightbox-type='image'
                           href={v+'@95q|watermark=1&object=c2h1aXlpbi5wbmc&t=80&p=5&y=10&x=10'} >
                          <img src={srcUrl} />
                          <div className="round-shade-10"></div>
                        </a>
                      )
                    } else {// 移动端
                      srcUrl += '@85q|watermark=1&object=c2h1aXlpbi5wbmc&t=80&p=5&y=10&x=10';
                      return(
                        <li key={k} className="item item-current"
                            data-big-img-url={srcUrl}>
                          <a className="img-box">
                            <img src={srcUrl} />
                            <div className="round-shade-10"></div>
                          </a>
                        </li>
                      )
                    }
                  })
                }
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
        'attractionsName':'',
        'updateTime':'',
        'coverUrlWeb':'',
        'name':'',
        'pcDetailImages':[]
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
      window.location.href="#separation-line"
    }

    let cfg = SampleDetailsConfig['SampleDetails']
    let fetchUrl = cfg['buildUrl'](this.props.dataParams,cfg['dataUrl'])

    if(fetchUrl){
      fetch(fetchUrl)
        .then(res => {return res.json()})
        .then(j=>{
          if(j.success && j.data.length>0) {
            this.setState({details:j.data[0]}, setUp);
          }
        })
    }
  }
});

export { SampleDetails }
