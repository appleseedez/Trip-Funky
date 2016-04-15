/**
 * Created by chenjianjun on 16/3/9.
 */
import { PringlesDetails } from '../../components/pringles-details.jsx'
import { Navigation } from '../../components/navigation.jsx'
import 'es6-promise'
import 'fetch-detector'
import 'fetch-ie8'

let paramsString = $('#J_Matrix').attr('data-params') || '{}' //从J_Matrix标签获取传入的参数
let params = JSON.parse(paramsString)

let platform = $('#J_Matrix').attr('data-platform') || '0'

/*渲染本模块的菜单*/
ReactDOM.render(<Navigation currentUrl={'/pringles'} dataParams={params} />, document.getElementById('J_Nav'))
ReactDOM.render(<PringlesDetails dataParams={params} platform={platform} />,document.getElementById('J_Main'))
