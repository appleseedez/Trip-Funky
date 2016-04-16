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
                    <img src="//img2.jsbn.com/trip/assets/images/home_content_bg.jpg" alt/>
                </div>
            </div>

        )
    }

})

export {Index}
