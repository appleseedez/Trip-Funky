import { Index } from '../../components/index.jsx'
import { Navigation } from '../../components/navigation.jsx'
import 'es6-promise'
import 'fetch-detector'
import 'fetch-ie8'
/*渲染本模块的菜单*/
ReactDOM.render(<Navigation currentUrl={'/'} />, document.getElementById('J_Nav'))
ReactDOM.render(<Index />,document.getElementById('J_Main'))
