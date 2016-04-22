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
      return (
        <div className="list-recommend layout-center-box">
          <ul className="recomd-nav-3">
            {
              _.map(this.props.data, (v,k)=>{
                if (v.linkUrl && v.linkUrl !== '') {
                  return (
                    <li key={k} className="item-box">
                      <a href={v.linkUrl} className="img-box">
                        <MediaItem
                          height={299}
                          aspectRatio={'398:299'}
                          mediaUrl={v.coverUrlWeb}
                          water={false}
                          platformType={this.props.platformType}
                        />
                        <div className="cover-layer"/>
                      </a>
                    </li>
                  )
                } else {
                  return (
                    <li key={k} className="item-box">
                      <a className="img-box">
                        <MediaItem
                          height={299}
                          aspectRatio={'398:299'}
                          mediaUrl={v.coverUrlWeb}
                          water={false}
                          platformType={this.props.platformType}
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
    } else if (this.props.data.length < 3) {
      // 采用一个广告的模板
      return (
        <div className="photo-box layout-center-box">
          <a href={this.props.data[0].linkUrl} target='_blank'>
            <MediaItem
              width={1200}
              aspectRatio={'1200:-1'}
              mediaUrl={v.coverUrlWeb}
              water={false}
              platformType={this.props.platformType}
            />
            <div className="cover-layer"/>
          </a>
        </div>
      )
    } else {
      // 采用五个广告的模板
      let one = null;
      if (this.props.data[0].linkUrl && this.props.data[0].linkUrl != '') {
        one=(
          <a href={this.props.data[0].linkUrl} className="img-box" target='_blank'>
            <MediaItem
              height={600}
              aspectRatio={'398:600'}
              mediaUrl={this.props.data[0].coverUrlWeb}
              water={false}
              platformType={this.props.platformType}
            />
            <div className="cover-layer"></div>
          </a>
        )
      } else {
        one=(
          <a className="img-box" target='_blank'>
            <MediaItem
              height={600}
              aspectRatio={'398:600'}
              mediaUrl={this.props.data[0].coverUrlWeb}
              water={false}
              platformType={this.props.platformType}
            />
            <div className="cover-layer"></div>
          </a>
        )
      }

      return (
        <div className="list-recommend layout-center-box">
          <div className="item-recomd-adv">
            {
              one
            }
          </div>
          <ul className="recomd-nav">
            {
              _.map(this.props.data, (v,k)=>{
                if(k > 0) {
                  if (v.linkUrl && v.linkUrl !== '') {
                    return (
                      <li key={k} className="item-box">
                        <a href={v.linkUrl}>
                          <MediaItem
                            height={299}
                            aspectRatio={'398:299'}
                            mediaUrl={v.coverUrlWeb}
                            water={false}
                            platformType={this.props.platformType}
                          />
                          <div className="cover-layer"/>
                        </a>
                      </li>
                    )
                  } else {
                    return (
                      <li key={k} className="item-box">
                        <a>
                          <MediaItem
                            height={299}
                            aspectRatio={'398:299'}
                            mediaUrl={v.coverUrlWeb}
                            water={false}
                            platformType={this.props.platformType}
                          />
                          <div className="cover-layer"/>
                        </a>
                      </li>
                    )
                  }
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
