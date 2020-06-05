import {createStore, applyMiddleware} from 'redux'
import reducers from './reducers'
import createSagaMiddleware from 'redux-saga'
// import saga from './saga/saga'
import saga from './saga/'

 // createSagaMiddleware是一个函数需要执行
let sagaMiddleware = createSagaMiddleware();
// let store = createStore(reducers);
let store = applyMiddleware(sagaMiddleware)(createStore)(reducers);
// sagaMiddleware就是一个执行器，可以启动hellowSaga的generator执行
sagaMiddleware.run(saga);
window.store = store;
export default store;
