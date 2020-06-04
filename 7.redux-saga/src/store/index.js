import {createStore, applyMiddleware} from 'redux'
import reducer from './reducer'
import createSagaMiddleware from 'redux-saga'
import helloSaga from './helloSaga'

 // createSagaMiddleware是一个函数需要执行
let sagaMiddleware = createSagaMiddleware();
console.log(sagaMiddleware)
// let store = createStore(reducer);
let store = applyMiddleware(sagaMiddleware)(createStore)(reducer);
// sagaMiddleware就是一个执行器，可以启动hellowSaga的generator执行
sagaMiddleware.run(helloSaga);
export default store;
