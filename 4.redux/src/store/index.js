import { createStore, applyMiddleware, thunk } from '../redux' // , bindActionCreators applayMiddleware
// import thunk from 'redux-thunk' // 原生包
import reducers from './reducers'
import logger from './redux-logger'
import logger1 from './redux-logger1'
// let initState = 0;
// 普通创建store方法
// let store = createStore(reducers, {counter1: 0, counter2: 0});
// redux中间件使用方法
// thunk传递其他参数
let $thunk = thunk.withExtraArgument(5);
let store = applyMiddleware($thunk,logger,logger1)(createStore)(reducers,{counter1: 1, counter2: 0});
export default store;

// let dispatch = store.dispatch; // 老的dispatch方法
// store.dispatch = function(action) {
//   console.log(store.getState(),'老状态');
//   dispatch(action);
//   console.log(store.getState(), '新状态');
// }
