import React, {PropTypes} from 'react'

const Recommand = React.createClass({
    render() {
        if (this.props.type === '1') {
            return (
                <div className="list-recommend layout-center-box">
                    <div className="item-recomd-adv">
                        <a className="img-box" href>
                            <img src="/images/tour-artwork-img1.jpg"/>
                            <div className="cover-layer"/>
                        </a>
                    </div>
                    <ul className="recomd-nav">
                        <li className="item-box">
                            <a href="#">
                                <img src="/images/tour-artwork-img2.jpg"/>
                                <div className="cover-layer"/>
                            </a>
                        </li>
                        <li className="item-box">
                            <a href="#">
                                <img src="/images/tour-artwork-img2.jpg"/>
                                <div className="cover-layer"/>
                            </a>
                        </li>
                        <li className="item-box">
                            <a href="#">
                                <img src="/images/tour-artwork-img2.jpg"/>
                                <div className="cover-layer"/>
                            </a>
                        </li>
                        <li className="item-box">
                            <a href="#">
                                <img src="/images/tour-artwork-img2.jpg"/>
                                <div className="cover-layer"/>
                            </a>
                        </li>
                    </ul>
                </div>

            )
        }
        return (
            <div className="list-box layout-center-box clearfix">
                <ul className="adv-list-sy">
                    <li className="item">
                        <div className="box-1">
                            <a className="img-box">
                                <img src="/images/tour-artwork-img2.jpg"/>
                            </a>
                        </div>
                        <div className="box-2 box-3">
                            <a className="img-box">
                                <img src="/images/tour-artwork-img2.jpg"/>
                            </a>
                            <a className="img-box mg0">
                                <img src="/images/tour-artwork-img2.jpg"/>
                            </a>
                        </div>
                    </li>
                    <li className="item">
                        <a className="img-box">
                            <img src="/images/tour-artwork-img2.jpg"/>
                        </a>
                    </li>
                    <li className="item item-last">
                        <div className="box-1 box-3">
                            <a className="img-box">
                                <img src="/images/tour-artwork-img2.jpg"/>
                            </a>
                            <a className="img-box mg0">
                                <img src="/images/tour-artwork-img2.jpg"/>
                            </a>
                        </div>
                        <div className="box-1 box-2">
                            <a className="img-box">
                                <img src="/images/tour-artwork-img2.jpg"/>
                            </a>
                        </div>
                    </li>
                </ul>
            </div>

        )
    }
})

export {Recommand}
