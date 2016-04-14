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
    return(
      <div className="detail-view">

        <div className="photo-box layout-center-box">
          <img src={PringlesDetailsConfig['Banner'][0].imageUrl} />
        </div>
        <div className="block-tit-box">
          <div className="border-box">
            <h1><span>金色旅拍</span><b>三亚客片</b></h1>
            <h2></h2>
          </div>
          <p>Golden trip, so it's really good.</p>
        </div>

        <div className="layout-center-box" id="photo_slider">
          <div className="photo-show-box">
            <div className="big-img-box">
              <div className="img-box">
                <img className='big-img' src='http://placehold.it/1200x800' />
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
                    return(
                      <li key={k} className="item item-current"
                          data-big-img-url={v+'@90Q|watermark=1&object=c2h1aXlpbi5wbmc&t=80&p=5&y=10&x=10'}>
                        <a className="img-box">
                          <img src={v+'@130w_130h_90Q'} />
                        </a>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
        </div>

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

    const setUp = ()=> {
      var winW = $(window).width()
      var J_menu_btn = $('#J_menu_btn')
      var J_drop_down_menu = $('#J_drop_down_menu')
      var J_win_rig_btn = $('#J_win_rig_btn')
      var J_app_view = $('#J_app_view')
      var J_layer = $('#J_layer')
      var B_drop_down = false;
      var $select_module = $('.select-module');
      var $app_header = $('.app-header');

      J_win_rig_btn.bind('click',function(){
        console.log('dfdfdf');
        J_app_view.animate({
          marginLeft:-winW+50
        })

        J_layer.css('display','block').animate({
          opacity:0.4
        })
      })

      J_layer.bind('click',function(){
        J_app_view.animate({
          marginLeft:0
        })

        $(this).animate({
          opacity:0
        },function(){
          $(this).css('display','none')
        })
      })

      J_menu_btn.bind('click',function(){
        (B_drop_down === false &&
        J_menu_btn.find('i').attr('class','arrow-1 arrow-b-1 transition') &&
        J_drop_down_menu.animate({
          height:50 * 3
        },300,function(){B_drop_down = true})) ||
        (B_drop_down === true &&
        J_menu_btn.find('i').attr('class','arrow-1 arrow-r-1 transition') &&
        J_drop_down_menu.animate({
          height:0
        },300,function(){B_drop_down = false}))
      })

      $select_module.on('click','.close-box',function(){
        $select_module.animate({opacity:0},function(){
          $(this).css('display','none');
        });
      });
      $app_header.on('click','.select-box',function(){
        $select_module.css('display','block').animate({opacity:1});
      });

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
