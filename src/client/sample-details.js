/**
 * Created by chenjianjun on 16/3/9.
 */
import { SampleDetails } from '../../components/sample-details.jsx'
import { Navigation } from '../../components/navigation.jsx'
import 'es6-promise'
import 'fetch-detector'
import 'fetch-ie8'

let paramsString = $('#J_Matrix').attr('data-params') || '{}' //从J_Matrix标签获取传入的参数
let params = JSON.parse(paramsString)
params = adpateParam(params)

/*渲染本模块的菜单*/
ReactDOM.render(<Navigation currentUrl={'/sample'} dataParams={params} />, document.getElementById('J_Nav'))
ReactDOM.render(<SampleDetails dataParams={params} />,document.getElementById('J_Main'))
