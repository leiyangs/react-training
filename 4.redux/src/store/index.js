import { createStore, applyMiddleware } from '../redux' // , bindActionCreators applayMiddleware
import reducers from './reducers'
import logger from './redux-logger'
// let initState = 0;
// 普通创建store方法
// let store = createStore(reducers, {counter1: 0, counter2: 0});
// redux中间件使用方法
let store = applyMiddleware(logger)(createStore)(reducers);
export default store;

// let dispatch = store.dispatch; // 老的dispatch方法
// store.dispatch = function(action) {
//   console.log(store.getState(),'老状态');
//   dispatch(action);
//   console.log(store.getState(), '新状态');
// }
