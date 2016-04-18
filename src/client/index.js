import { Index } from '../../components/index.jsx'
import { Navigation } from '../../components/navigation.jsx'
import 'es6-promise'
import 'fetch-detector'
import 'fetch-ie8'

let platform = $('#J_Matrix').attr('data-platform') || '0'

/*渲染本模块的菜单*/
ReactDOM.render(<Navigation currentUrl={'/'}  platform={platform} />, document.getElementById('J_Nav'))
ReactDOM.render(<Index />,document.getElementById('J_Main'))
