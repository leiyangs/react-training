import { combineReducers } from 'redux'
import counter from './counter'
import { connectRouter } from 'connected-react-router'
import history from '../../history'
let reducers = combineReducers({
  router: connectRouter(history), // 把路径信息(location)存放到仓库router属性里
  counter
})
export default reducers;