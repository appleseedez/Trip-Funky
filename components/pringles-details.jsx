/**
 * Created by chenjianjun on 16/3/9.
 */
import React, { PropTypes } from 'react'
import _ from 'lodash'
import { MediaItem } from './common/media-item.jsx'
import { PringlesDetailsConfig } from './config/pringles-details-config'
/**
 组件结构
 <PringlesDetails> <= styles,scenes,list
 </PringlesDetails>
 **/

const PringlesDetails = React.createClass({
  render() {
    return(
      <div className="detail-view">
      </div>
    );
  },

  getInitialState: function() {
    return {
      details: {}
    };
  },

  getDefaultProps(){
    return {
      dataParams:{
        cityId:-1
      }
    }
  },

  componentDidMount() {
    let cfg = PringlesDetailsConfig['PringlesDetails']
    let fetchUrl = cfg['buildUrl'](this.props.dataParams,cfg['dataUrl'])
    if(fetchUrl){
      fetch(fetchUrl)
        .then(res => {return res.json()})
        .then(j=>{
          if(j.success && j.data.length > 0) {
            // 因为后天返回的pcDetailImages是一个字符串,所以要转换成json
            this.setState({details:j.data[0]});
          }
        })
    }
  }
});

export { PringlesDetails }
