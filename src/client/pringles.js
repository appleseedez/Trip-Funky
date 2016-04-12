import { Pringles } from '../../components/pringles.jsx'
import { Navigation } from '../../components/navigation.jsx'
import 'es6-promise'
import 'fetch-detector'
import 'fetch-ie8'
/*渲染本模块的菜单*/
let paramsString = $('#J_Matrix').attr('data-params') || '{}' //从J_Matrix标签获取传入的参数
let params = JSON.parse(paramsString)
ReactDOM.render(<Navigation currentUrl={'/pringles'} dataParams={params} />, document.getElementById('J_Nav'))
ReactDOM.render(<Pringles dataParams={params} />,document.getElementById('J_Main'))
