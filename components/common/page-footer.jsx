import React, {PropTypes} from 'react'
import { IndexConfig } from '../config/index-config'

const PageFooter=React.createClass({
  render () {
    return (
      <div className="gray-bg-box">
        <div className="promise">
          <div className="block-tit-box">
            <div className="border-box">
              <h1><span>金色旅拍</span><b>九大承诺</b></h1>
              <h2></h2>
            </div>
            <p>Golden trip, so it's really good.</p>
          </div>
          <div className="photo-box photo-box-mgt10 layout-center-box">
            <img src={IndexConfig['Banner'][0].imageUrl} />
          </div>
          <div className="bt-border btborder">
            <ul className="list-promise">
              <li><h2>拍摄不满意无条件重拍</h2><p>City maximum price </p></li>
              <li><h2>拍摄全程无任何隐形消费</h2><p>City maximum price </p></li>
              <li><h2>拍摄前套系可更换</h2><p>City maximum price </p></li>
            </ul>
          </div>
          <div className="bt-border">
            <ul className="list-promise">
              <li><h2>采用国际一线美妆品牌</h2><p>City maximum price </p></li>
              <li><h2>专业团队全程贴心服务</h2><p>City maximum price </p></li>
              <li><h2>照片品质最高性价比</h2><p>City maximum price </p></li>
            </ul>
          </div>
          <div className="bt-border">
            <ul className="list-promise">
              <li><h2>售前客服全程一对一服务</h2><p>City maximum price </p></li>
              <li><h2>售后统一400电话回访</h2><p>City maximum price </p></li>
              <li><h2>拍摄成品物流统一配送</h2><p>City maximum price </p></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
})

export { PageFooter }
