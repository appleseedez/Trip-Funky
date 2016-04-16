import React, { PropTypes } from 'react'
import _ from 'lodash'

import { MediaItem } from './media-item.jsx'

const AdvTemplate=React.createClass({
  render() {
    if (this.props.data.length == 0) {
      return null;
    }

    if (this.props.data.length < 5 && this.props.data.length > 2) {
      // 采用三个广告的模板
    } else if (this.props.data.length < 3) {
      // 采用一个广告的模板
      return (
        <div className="photo-box layout-center-box">
          <a href={this.props.data[0].linkUrl} target='_blank'>
            <img src={this.props.data[0].coverUrlWeb} />
            <div className="cover-layer"></div>
          </a>
        </div>
      )
    } else {
      // 采用五个广告的模板
      return (
        <div className="list-recommend layout-center-box">
          <div className="item-recomd-adv">
            <a href={this.props.data[0].linkUrl} className="img-box" target='_blank'>
              <MediaItem
                height={600}
                aspectRatio={'395:600'}
                mediaUrl={this.props.data[0].coverUrlWeb}
                water={false}
              />
              <div className="cover-layer"></div>
            </a>
          </div>
          <ul className="recomd-nav">
            {
              _.map(this.props.data, (v,k)=>{
                if(k > 0) {
                  return (
                    <li key={k} className="item-box">
                      <a href={v.linkUrl}>
                        <MediaItem
                          height={296}
                          aspectRatio={'395:296'}
                          mediaUrl={v.coverUrlWeb}
                          water={false}
                        />
                        <div className="cover-layer"/>
                      </a>
                    </li>
                  )
                }
              })
            }
          </ul>
        </div>
      )
    }
  },

  getDefaultProps() {
    return {
      data:[]
    }
  }

})

export { AdvTemplate }
