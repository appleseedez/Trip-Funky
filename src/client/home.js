import { Home } from '../../components/home.jsx'
import { Navigation } from '../../components/navigation.jsx'
import 'es6-promise'
import 'fetch-detector'
import 'fetch-ie8'

let paramsString = $('#J_Matrix').attr('data-params') || '{}' //从J_Matrix标签获取传入的参数
let params = JSON.parse(paramsString)
// 检查本地存储中的cityId和cityName 只有在接收到的参数这两个字段不为空才能更新。


params = adpateParam(params)
/*渲染本模块的菜单*/
ReactDOM.render(<Navigation currentUrl={'/home'} dataParams={params}/>, document.getElementById('J_Nav'))
ReactDOM.render(<Home dataParams={params} />,document.getElementById('J_Main'))
