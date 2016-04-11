import React, {PropTypes} from 'react'
import {MenuConfig} from './config/menu-config'
import _ from 'lodash'
const Navigation = React.createClass({

    render() {

        return (
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

        )
    }
})

export {Navigation}
