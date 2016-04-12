import React, {PropTypes} from 'react'
import {MediaItem} from '../common/media-item.jsx'
import _ from 'lodash'
const SuiteRecommand = React.createClass({
    render() {
        return (
            <div className="gray-bg-box layout-center-box">
                <ul className="suite-list layout-center-box">
                  {
                    _.map(this.state.data,(v,k)=>{
                      return (
                        <li key={k} className="item-box">
                            <a href>
                                <div className="img-box">
                                    <MediaItem width={595} aspectRatio={'595:396'} mediaUrl={v.coverUrlWeb} />
                                    <div className="layer-box"/>
                                </div>
                            </a>
                            <div className="info-box">
                                <a href>
                                    <h1>
                                        <b>{parseFloat(v.salePrice||0.0).toFixed(2)}</b>
                                        <span>元</span>
                                    </h1>
                                    <div className="jsbn">
                                        {v.name ||'GOLDEN WEDDING'}
                                    </div>
                                </a>
                                <div className="btn-box">
                                    <a href></a>
                                    <a className="btn-1">
                                        <b>{v.cityName || '天堂'}</b>
                                        <span>
                                            {v.attractionsName || 'Haven'}
                                        </span>
                                    </a>
                                    <a style={{display:'none'}} className="btn-2">马上抢订</a>
                                </div>
                            </div>
                        </li>
                      )
                    })
                  }


                </ul>
            </div>

        )
    },
    getInitialState() {
        return {data: []}
    },
    componentDidMount() {
        if (this.props.dataUrl !== undefined && this.props.cityId !== -1) {
            let p = _.merge(this.props.params, {'cityId': this.props.cityId})
            fetch(this.props.baseUrl + this.props.dataUrl + '?' + $.param(p)).then(res => {
                return res.json()
            }).then(j => {
                let five = j.data
                let size = _.size(five)
                _.times(4 - size, () => {
                    five.push({coverUrlWeb: '//placehold.it/800x1200', name: '金色百年'})
                })
                this.setState({data: j.data})
            })
        }
    }
})

export {SuiteRecommand}
