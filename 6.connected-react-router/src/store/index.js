import {createStore, applyMiddleware, compose} from 'redux'
import reducers from './reducers'
import { routerMiddleware } from 'connected-react-router'
import history from '../history'
import { persistStore, persistReducer } from '../redux-persist'
import storage from '../redux-persist/lib/storage' // redux-persist/lib/storage
const persistConfig = {
  key: 'root',
  storage
}
const persistedReducer = persistReducer(persistConfig, reducers);
// const coposeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// 创建仓库的几种写法
// let store = createStore(reducers);
// let store applyMiddleware(routerMiddleware(history))(createStore)(reducers);
// let store = createStore(reducers, applyMiddleware(routerMiddleware(history)));
let store = createStore(persistedReducer, applyMiddleware(routerMiddleware(history)));
let persistor = persistStore(store);
window.store = store; // 为了方便调试
export {store,persistor}; 