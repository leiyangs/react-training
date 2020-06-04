import {createStore, applyMiddleware} from 'redux'
import reducers from './reducers'
import { routerMiddleware } from 'connected-react-router'
import history from '../history'
// 创建仓库的几种写法
// let store = createStore(reducers);
// let store applyMiddleware(routerMiddleware(history))(createStore)(reducers);
let store = createStore(reducers, applyMiddleware(routerMiddleware(history)));
window.store = store; // 为了方便调试
export default store; 