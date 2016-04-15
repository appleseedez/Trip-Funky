import React, {PropTypes} from 'react'
import { MediaItem } from './media-item.jsx'
import _ from 'lodash'
const SampleRecommand = React.createClass({
    render() {
        return (
            <div className="list-box layout-center-box clearfix">
                <ul className="list-samples">
{
  _.map(this.state.data,(v,k)=>{
    let item = null
    switch (k) {
      case 1:
        item = (
          <li className="item item-big marginLeft" key={k}>
              <div className="img-box">
                  <a className="href-box"/>
                  <div className="info-box">
                      <span className="font-bg"/>
                      <h1>{v.name}</h1>
                  </div>
                  <div className="mask"/>
                  <MediaItem mediaUrl={v.coverUrlWeb} aspectRatio={'2:3'} width={600}/>
              </div>
          </li>
        )
        break;
      case 3:
        item=(
          <li className="item  item-mgt" key={k}>
              <div className="img-box">
                  <a className="href-box"/>
                  <div className="info-box">
                      <span className="font-bg"/>
                      <h1>{v.name}</h1>
                  </div>
                  <div className="mask"/>
                  <MediaItem mediaUrl={v.coverUrlWeb} aspectRatio={'2:3'} width={300}/>
              </div>
          </li>
        )
        break;
      case 4:
        item=(
          <li className="item item-last item-mgt" key={k}>
              <div className="img-box">
                  <a className="href-box"/>
                  <div className="info-box">
                      <span className="font-bg"/>
                      <h1>{v.name}</h1>
                  </div>
                  <div className="mask"/>
                  <MediaItem mediaUrl={v.coverUrlWeb} aspectRatio={'2:3'} width={300}/>
              </div>
          </li>
        )
        break;
      default:
        item = (
          <li className="item" key={k}>
              <div className="img-box">
                  <a className="href-box"/>
                  <div className="info-box">
                      <span className="font-bg"/>
                      <h1>{v.name}</h1>
                  </div>
                  <div className="mask"/>
                  <MediaItem mediaUrl={v.coverUrlWeb} aspectRatio={'2:3'} width={300}/>
              </div>
          </li>
        )

    }
    return item
  })
}


                </ul>
            </div>

        )
    },
    getInitialState() {
      return {
        data:[]
      }
    },
    componentWillReceiveProps(nextProps) {
      /** 数据请求 **/

    },
    componentDidMount() {
      if (this.props.dataUrl !== undefined && this.props.cityId !== -1) {
        let p = _.merge(this.props.params,{'cityId':this.props.cityId})
        fetch(this.props.baseUrl + this.props.dataUrl +'?'+$.param(p))
        .then(res => {return res.json()})
        .then(j =>{
          let five = j.data
          let size = _.size(five)
          _.times(5-size,()=>{
            five.push({
              coverUrlWeb:'',
              name:'金色百年'
            })
          })
          let d =_.concat(_.reverse(j.data.slice(0,2)),j.data.slice(2,3),_.reverse(j.data.slice(3)))
          this.setState({ data:d })
        })
      }
    }
})

export {SampleRecommand}
