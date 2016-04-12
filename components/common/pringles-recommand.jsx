import React, {PropTypes} from 'react'
import {MediaItem} from '../common/media-item.jsx'
import _ from 'lodash'
const PringlesRecommand = React.createClass({
    render() {
        return (
            <div className="gray-bg-box layout-center-box">
                <ul className="list-pringles layout-center-box">
                    {_.map(this.state.data, (v, k) => {
                        return (
                            <li key={k}>
                                <div className="imgbox">
                                    <a href="#" className="href-box"/>
                                    <div className="info-box">
                                        <span className="font-bg"/>
                                        <h1>
                                            <span>{v.actorMaleName || '小金' }</span>
                                            <b>&amp;</b>
                                            <span>{v.actorFemaleName || '小百'}</span>
                                        </h1>
                                    </div>
                                    <div className="mask"/>
                                    <div className='img-box'>
                                        <MediaItem mediaUrl={v.coverUrlWeb} height={445} aspectRatio={'297:445'}/>
                                    </div>
                                </div>
                                <a href="#" className="title-box">
                                    <h2>{v.name}</h2>
                                    <p>{v.description}</p>
                                </a>
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

export {PringlesRecommand}
