import React, { PropTypes } from 'react'
import _ from 'lodash'
import { MediaItem } from 'media-item.jsx'

const SuiteListItem = React.createClass({
  render () {
    return (
      <ul className='suite-list layout-center-box'>
        {
          _.map(this.state.data,(v,k)=>{
            return (
              <li key={k} className="item-box">
                <a href={'/suite/' + v.id} target='_blank'>
                  <div className="img-box">
                    <MediaItem aspectRatio={'-1:1'} height={320}  mediaUrl={v.coverUrlWeb} />
                    <div className="layer-box"></div>
                  </div>
                  <div className="info-box">
                    <h3>{v.name}</h3>
                    <span>{v.description}</span>
                  </div>
                </a>
              </li>
            )
          })
        }
      </ul>
    )
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
      /*
        因为是加载页面 将dataStore=[]
        请求数据
        如果具备分页条件，展示分页按钮。传入的配置中包含pageSize和pageIndex参数
        绑定点击事件：
          改变pageIndex 注意此次的pageIndex 改变时不应该直接造成组件render 而是pageIndex的改变
          导致选取的dataStore的范围变化，进而改变state中data的值造成render
          故将pageIndex的更新保持在一个私有变量中 可是，由于初始的pageIndex是还在props里面的
          这样就造成了一个情况：
          其他的筛选参数是外部条件，依赖外部的传入
          而pageIndex是一个组件的内部条件， 而且不应该直接造成render。
          由于点击按钮改变的pageIndex 会触发fetch操作

          依据pageIndex 看dataStore是否有数据，如果有直接使用
          如果没有才请求相应pageIndex的数据 成功后放到dataStore的对应下标的数组中
          设置state 显示数据
      */
    BaseConfig['fetchFunc'](this,null)(this)
  }
})

export { SuiteListItem }
