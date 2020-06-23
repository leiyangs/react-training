import {createStore, applyMiddleware} from 'redux'
import reducers from './reducers'
import { routerMiddleware } from 'connected-react-router'
import { persistStore, persistReducer } from '../redux-persist'
import storage from '../redux-persist/lib/storage' // redux-persist/lib/storage
import history from '../history'
console.log(storage)
const persistConfig = {
  key: 'root',
  storage
}
const persistedReducer = persistReducer(persistConfig, reducers);
// 创建仓库的几种写法
// let store = createStore(reducers);
// let store applyMiddleware(routerMiddleware(history))(createStore)(reducers);
// let store = createStore(reducers, applyMiddleware(routerMiddleware(history)));
let store = createStore(persistedReducer, applyMiddleware(routerMiddleware(history)));
let persistor = persistStore(store);
window.store = store; // 为了方便调试
export {store,persistor}; 