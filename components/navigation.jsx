import React, {PropTypes} from 'react'
import {MenuConfig} from './config/menu-config'
import _ from 'lodash'
const Navigation = React.createClass({

    render() {
        if (this.props.currentUrl === '/') {
            return (
              <div>
                <div className="sliding-window">
                    <div className="content-view">
                        <div className="select-module">
                            <div className="close-box">
                                <a/>
                            </div>
                            <div className="menu-box">
                                <ul>
                                    <li className="item item-current">
                                        <a href="#">
                                            <img src="/images/home_btn_1.png" alt/>
                                        </a>
                                    </li>
                                    <li className="item ">
                                        <a href="#">
                                            <img src="/images/home_btn_2.png" alt/>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="tab-box scroll-view">
                                <ul className="nav-local">
                                    <li>
                                        <a href="#">香格里拉</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="layer-box" id="J_layer" style={{display:'none',opacity:0}}></div>
              </div>
            )
        }
        return (
            <div>
                <div className="app-top">
                    <div className="relative-box">
                        <span className="lef"></span>
                        <span className="rig"></span>
                    </div>
                </div>
                <div className="app-header">
                    <div className="relative-box">
                        <a className="logo-pc"/>
                        <span className="city-name">三亚</span>
                        <div className="title-box" id="J_menu_btn">
                            <i className="arrow-1 arrow-r-1 transition"/>
                            <h1>标题</h1>
                        </div>
                        <div className="win-rig-btn" id="J_win_rig_btn">
                            <div className="point-box">
                                <i/>
                                <i/>
                                <i/>
                            </div>
                        </div>
                        <div className="select-box">
                            <a/>
                        </div>
                        <ul className="drop-down-menu" id="J_drop_down_menu">
                            <li>
                                <a className="current">三亚首页</a>
                            </li>
                            <li>
                                <a>作品欣赏</a>
                            </li>
                            <li>
                                <a>客片欣赏</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        )
    }
})

export {Navigation}
