/**
 * Created by chenjianjun on 16/3/9.
 */
import React, { PropTypes } from 'react'
import _ from 'lodash'
import { PageFooter } from './common/page-footer.jsx'
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
    return(
      <div className="detail-view">

        <div className="photo-box layout-center-box">
          <img src={SampleDetailsConfig['Banner'][0].imageUrl} />
        </div>
        <div className="block-tit-box">
          <div className="border-box">
            <h1><span>金色旅拍</span><b>样片欣赏</b></h1>
            <h2></h2>
          </div>
          <p>Golden trip, so it's really good.</p>
        </div>

        <div className="layout-center-box" id="photo_slider">
          <div className="photo-show-box">
            <div className="cover-box">
              <MediaItem aspectRatio='2:3' height={210} mediaUrl={this.state.details.coverUrlWeb} water={true} />
              <div className='info-box'>
                <h1>{this.state.details.name}</h1>
                <p>
                  <span>拍摄地点：</span><span>{this.state.details.attractionsName}</span>
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
                    return(
                      <a key={k} className="item item-current img-box"
                         data-uk-lightbox="{'group':'sample-img'}"
                         data-lightbox-type='image'
                         href={v+'@90Q|watermark=1&object=c2h1aXlpbi5wbmc&t=80&p=5&y=10&x=10'} >
                        <img src={v+'@1e_1c_0o_0l_130h_130w_90q.src'} />
                      </a>
                    )
                  })
                }
              </div>
            </div>

          </div>
        </div>

        <PageFooter />

      </div>
    );
  },

  getInitialState: function() {
    return {
      details: {}
    };
  },

  getDefaultProps(){
    return {
      dataParams:{
        cityId:-1
      }
    }
  },

  componentDidMount() {
    let cfg = SampleDetailsConfig['SampleDetails']
    let fetchUrl = cfg['buildUrl'](this.props.dataParams,cfg['dataUrl'])

    if(fetchUrl){
      fetch(fetchUrl)
        .then(res => {return res.json()})
        .then(j=>{
          if(j.success && j.data.length>0) {
            this.setState({details:j.data[0]});
          }
        })
    }
  }
});

export { SampleDetails }
