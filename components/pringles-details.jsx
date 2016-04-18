/**
 * Created by chenjianjun on 16/3/9.
 */
import React, { PropTypes } from 'react'
import _ from 'lodash'
import { PageFooter } from './common/page-footer.jsx'
import { MediaItem } from './common/media-item.jsx'
import { PringlesDetailsConfig } from './config/pringles-details-config'
/**
 组件结构
 <PringlesDetails> <= styles,scenes,list
 </PringlesDetails>
 **/

const PringlesDetails = React.createClass({
  render() {
    return(
      <div className="detail-view">

        <div className="photo-box layout-center-box">
          <img src={PringlesDetailsConfig['Banner'][0].imageUrl} />
        </div>
        <div className="block-tit-box">
          <div className="border-box">
            <h1><span>金色旅拍</span><b>客片欣赏</b></h1>
            <h2></h2>
          </div>
          <p>Golden trip, so it's really good.</p>
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
                    if(this.props.platform === '0') {// 如果是pc端,需要切图
                      srcUrl += '@1e_1c_0o_0l_130h_130w_90q.src';
                    } else {
                      srcUrl += '@90Q|watermark=1&object=c2h1aXlpbi5wbmc&t=80&p=5&y=10&x=10';
                    }
                    return(
                      <li key={k} className="item item-current"
                          data-big-img-url={v+'@90Q|watermark=1&object=c2h1aXlpbi5wbmc&t=80&p=5&y=10&x=10'}>
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
          </div>
        </div>
        <div className="photo-box-border"></div>
      </div>
    );
  },

  getInitialState: function() {
    return {
      details: {
        'pcDetailImages':[]
      }
    };
  },

  getDefaultProps(){
    return {
      platform:'0'
    }
  },

  componentDidMount() {
    const setUp = ()=> {
      $('#photo_slider').Slider({type:'Horizontal'});
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
