import React, {PropTypes} from 'react'
import _ from 'lodash'

import {MenuConfig} from './config/menu-config'
import {BaseConfig} from './config/base'

const CityChooser = React.createClass({
  render () {
    let kClass = "select-module select-style-2"
    if(this.props.type === "1") {
      kClass = "select-module select-style-1"
    }
    return (
      <div className="sliding-window">
        <div className="content-view">
          <div className={kClass}>
            <div className='box-bg' />
            <div className="nav-local">
              <div className="close-box">
                <a></a>
              </div>
              <div className="menu-box J_MenuBox">
                <div className="tab-box inland tab-current">
                  <a href="javascript:void(0)">
                    <span className="tab-title"></span>
                  </a>
                  <ul className="tab-item">
                    {
                      _.map(this.props.homeCity, (v, k) => {
                        return (
                          <li key={k}>
                            <a href={'/index?cityId='+v.id+'&cityName='+encodeURIComponent(v.name)}>{v.name}</a>
                          </li>
                        )
                      })
                    }
                  </ul>
                </div>
                <div className="tab-box oversea">
                  <a href="javascript:void(0)">
                    <span className="tab-title"></span>
                  </a>
                  <ul className="tab-item">
                    {
                      _.map(this.props.overseaCity, (v, k) => {
                        return (
                          <li key={k}>
                            <a href={'/index?cityId='+v.id+'&cityName='+encodeURIComponent(v.name)}>{v.name}</a>
                          </li>
                        )
                      })
                    }
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  componentDidMount() {
    $('.J_MenuBox').on('click','.tab-box',(evt)=>{
      $(evt.currentTarget).addClass('tab-current').siblings().removeClass('tab-current')
    })
  }
})

const Navigation = React.createClass({
  render() {
    if (this.props.currentUrl === '/') {// 主页的样式与分站首页的样式不一样,通过type区分
      return (
        <CityChooser homeCity={this.state.homeCity} overseaCity={this.state.overseaCity} type="1" />
      )
    }

    return (
      <div>
        <CityChooser homeCity={this.state.homeCity} overseaCity={this.state.overseaCity} type="2" />
        <div className="app-top">
          <div className="relative-box">
            <span className="lef"></span>
            <span className="rig"></span>
          </div>
        </div>
        <div className="app-header">
          <div className="relative-box">
            <a href={'/'} className="logo-pc"/>
            <span className="city-name">{this.props.dataParams.cityName}</span>
            <div className="title-box" id="J_menu_btn">
              <i className="arrow-1 arrow-r-1 transition"/>
              {
                this.props.dataParams.cityName && <h1>{this.props.dataParams.cityName}</h1>
              }
            </div>
            <div className="win-rig-btn" id="J_win_rig_btn">
              <div className="menu-box">
                <div className="wx-menu-btn">
                  <span className="wx-city-name">
                    {this.props.dataParams.cityName ? this.props.dataParams.cityName : ''}
                  </span>
                  <div className="address-ico"></div>
                  <div className="back-btn"></div>
                </div>
              </div>
            </div>
            <div className="select-box">
              <a/>
            </div>
            <ul className="drop-down-menu" id="J_drop_down_menu">
              <li>
                <a href={'/index' } className={(this.props.currentUrl==='/home')?'current':''} >
                  {this.props.dataParams.platformType===1?'首页':'首页'}
                </a>
              </li>
              <li>
                <a href={'/sample'} className={(this.props.currentUrl === '/sample')?'current': ''}>
                  {this.props.dataParams.platformType===1?'作品':'作品欣赏'}
                </a>
              </li>
              <li>
                <a href={'/pringles' } className={(this.props.currentUrl === '/pringles')?'current':''}>
                  {this.props.dataParams.platformType===1?'客片':'客片欣赏'}
                </a>
              </li>
              <li>
                <a href={'/suite' } className={(this.props.currentUrl === '/suite')?'current':''}>
                  {this.props.dataParams.platformType===1?'报价':'套系报价'}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="wx-layer-box" id="J_layer" style={{opacity:0}}></div>
      </div>
    )
  },

  getDefaultProps() {
    return {
      dataUrl: 'city',
      dataParams: {
        cityId: -1,
        cityName: ''
      }
    }
  },

  getInitialState() {
    return {homeCity: [],overseaCity:[],city:[]}
  },

  componentWillReceiveProps(nextProps) {
    console.log('nav:', nextProps);
  },

  componentDidMount() {
    const setup = () => {
      var winW = $(window).width()
      var J_menu_btn = $('#J_menu_btn')
      var J_drop_down_menu = $('#J_drop_down_menu')
      var J_win_rig_btn = $('#J_win_rig_btn')
      var J_app_view = $('#J_app_view')
      var J_layer = $('#J_layer')
      var $sliding_window = $('.sliding-window');
      var B_drop_down = false;
      var $select_module = $('.select-module');
      var $app_container = $('.app-container');

      if (this.props.dataParams.platformType == 1 && this.props.currentUrl === '/') {
        // 微信端的大首页
        $sliding_window.width(winW);
        J_win_rig_btn.bind('click', function() {
          J_app_view.css({overflow: 'visible'});
          J_app_view.animate({
            marginLeft: -winW
          }, function() {
            $('.wx-menu-btn', J_win_rig_btn).addClass('close');
          })

          J_layer.css('display', 'block').animate({opacity: 0.4})
        })
      } else {
        $sliding_window.width(winW - 50);
        J_win_rig_btn.bind('click', function() {
          J_app_view.css({overflow: 'visible'});
          J_app_view.animate({
            marginLeft: -winW + 50
          }, function() {
            $('.wx-menu-btn', J_win_rig_btn).addClass('close');
          })

          J_layer.css('display', 'block').animate({opacity: 0.4})
        })
      }

      J_layer.bind('click', function() {
        J_app_view.animate({
          marginLeft: 0
        }, function() {
          $('.wx-menu-btn', J_win_rig_btn).removeClass('close');
          $(this).css({overflow: 'hidden'});
        })

        $(this).animate({
          opacity: 0
        }, function() {
          $(this).css('display', 'none')
        })
      })

      J_menu_btn.bind('click', function() {
        (B_drop_down === false && J_menu_btn.find('i').attr('class', 'arrow-1 arrow-b-1 transition') && J_drop_down_menu.animate({
          height: 50 * 4
        }, 300, function() {
          B_drop_down = true
        })) || (B_drop_down === true && J_menu_btn.find('i').attr('class', 'arrow-1 arrow-r-1 transition') && J_drop_down_menu.animate({
          height: 0
        }, 300, function() {
          B_drop_down = false
        }))
      })

      $select_module.on('click', '.close-box', function() {
        $select_module.animate({
          opacity: 0
        }, function() {
          $(this).css('display', 'none');
          var $sliding_window = $('.sliding-window');
          $sliding_window.css('margin-left', '100%').animate({});
          $sliding_window.css('z-index', 0).animate({});
        });
      });
      $app_container.on('click', '.select-box', function() {
        $select_module.css('display', 'block').animate({opacity: 1});
        var $sliding_window = $('.sliding-window');
        $sliding_window.css('margin-left', 0).animate({});
        $sliding_window.css('z-index', 100).animate({});
      });
    }

    //点击事件绑定
    setup()

    if (this.props.dataUrl !== undefined) {
      fetch(BaseConfig.baseUrl + this.props.dataUrl).then(res => {
        return res.json()
      }).then(j => {
        let homeCity = _.filter(j.data,(v)=>{
          return v.type === 1
        })
        let overseaCity = _.filter(j.data,(v)=>{
          return v.type === 2
        })
        this.setState({'homeCity': homeCity,'overseaCity':overseaCity,'city':j.data})
      })
    }
  }
})

export { Navigation }
