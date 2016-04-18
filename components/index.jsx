import React, {PropTypes} from 'react'

const Index = React.createClass({
    render() {
        return (
            <div className="mainhome-view">
                <div className="main-top">
                    <div className="top-box">
                        <div className="relative-box">
                            <div className="left-box ico-mainhome"/>
                            <div className="right-box ico-text"/>
                        </div>
                        <div className="relative-box">
                            <div className="left-box ico-lp select-box"/>
                        </div>
                    </div>
                    <div className="bannar-all-box">
                        <div className="header bannar">
                            <ul className="slider">
                                <li className="item">
                                    <a href={'/'} className="img-box">
                                        <img src="//img2.jsbn.com/trip/assets/images/home_banner_bg.jpg"/>
                                        <div className="cover-layer"/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="main-content">
                    <div className="block-tit-box-1">
                        <img src="/images/tit-box-1.png"/>
                        <div className="english-title"></div>
                        <div className="chinese-title">
                            <i/>
                            <p>
                                <span>幸福可以绽放的如此耀眼</span>
                            </p>
                        </div>
                        <div className="list-title">
                            <h1>
                                <span>金色旅拍</span>
                                <b>热门城市</b>
                            </h1>
                        </div>
                        <img src="/images/tit-box-detail-1.png"/>
                    </div>
                    <div className="list-box layout-center-box clearfix">
                        <ul className="adv-list-sy">
                            <li className="item">
                                <div className="box-1">
                                    <div className="img-box">
                                        <img src="http://pic6.wed114.cn/20140601/2014060121300339.jpg"/>
                                        <a className="cover-layer"/>
                                    </div>
                                </div>
                                <div className="box-1 box-2">
                                    <div className="img-box">
                                        <img src="http://pic6.wed114.cn/20140601/2014060121300339.jpg"/>
                                        <a className="cover-layer"/>
                                    </div>
                                </div>
                            </li>
                            <li className="item">
                                <div className="img-box">
                                    <img src="http://ww2.sinaimg.cn/large/7890e6cfgw1eqs7jwr7bcj21kw2dcnea.jpg"/>
                                    <a className="cover-layer"/>
                                </div>
                            </li>
                            <li className="item item-last">
                                <div className="box-1 ">
                                    <div className="img-box">
                                        <img src="http://pic6.wed114.cn/20140601/2014060121300339.jpg"/>
                                        <a className="cover-layer"/>
                                    </div>
                                </div>
                                <div className="box-1 box-2">
                                    <div className="img-box">
                                        <img src="http://pic6.wed114.cn/20140601/2014060121300339.jpg"/>
                                        <a className="cover-layer"/>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

        )
    }

})

export {Index}
