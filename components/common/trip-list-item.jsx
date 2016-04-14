import React, { PropTypes } from 'react'
import { BaseConfig } from '../config/base'
import { MediaItem } from './media-item.jsx'
import _ from 'lodash'
const TripListItem = React.createClass({
  render () {
    if (this.props.type === 'sample') {
      let hrefUrl='/sample-details?cityId='+this.props.params.cityId+'&type='+this.props.params.type+'&id='
      return (
        <ul className="recommend-list layout-center-box">
          {
            _.map(this.state.data,(v,k)=>{
              return(
                <li key={k} className="item-box">
                  <a href={hrefUrl+v.id} className="img-box" target='_blank'>
                    <MediaItem
                      height={576}
                      aspectRatio={'-1:576'}
                      mediaUrl={v.coverUrlWeb}
                    />
                    <div className="title-box">
                      <h2>{v.name}</h2>
                    </div>
                  </a>
                  <div className="item-shadow"></div>
                </li>
              )
            })
          }
        </ul>

      )
    }else {
      let hrefUrl='/pringles-details?cityId='+this.props.params.cityId+'&type='+this.props.params.type+'&id='
      return (
        <ul className="recommend-list layout-center-box">
          {
            _.map(this.state.data,(v,k)=>{
              return (
                <li key={k} className="item-box">
                  <a href={hrefUrl+v.id} className="img-box" target='_blank'>
                    <MediaItem
                      height={579}
                      aspectRatio={'-1:579'}
                      mediaUrl={v.coverUrlWeb}
                    />
                    <div className="layer-box"></div>
                    <div className="info-box">
                      <em>GoldenWedding</em>
                      <h2>{v.actorMaleName + ' & ' + v.actorFemaleName}</h2>
                    </div>
                  </a>
                  <div className="item-shadow"></div>
                </li>
              )
            })
          }
        </ul>
      )
    }

  },
  propTypes: {
    dataUrl:React.PropTypes.string,
    params:React.PropTypes.object
  },
  getDefaultProps(){
    return {
      dataUrl:undefined,
      params:{}
    }
  },
  getInitialState() {
    return {
      data:[],
      dataStore:[],
      count:0,
      currentIndex:0
    }
  },
  componentWillReceiveProps(nextProps) {
    BaseConfig['fetchFunc'](this,nextProps)(this,nextProps)
  },
  componentDidMount() {
    BaseConfig['fetchFunc'](this,null)(this)
  }
})

export { TripListItem }
