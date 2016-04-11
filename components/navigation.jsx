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

                </div>
            )
        }
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
                            <div className="menu-box">
                                <div className="wx-menu-btn">
                                    <div className="bit-1"></div>
                                    <div className="bit-2"></div>
                                    <div className="bit-3"></div>
                                </div>
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
                <div className="wx-layer-box" id="J_layer" style={{
                    opacity: 0
                }}></div>
            </div>

        )
    },
    componentDidMount() {
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
                height: 50 * 3
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
            });
        });
        $app_container.on('click', '.select-box', function() {
            $select_module.css('display', 'block').animate({opacity: 1});
        });

    }
})

export {Navigation}
