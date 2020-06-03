import {createStore} from 'redux'
import reducers from './reducers'
let store = createStore(reducers);
window.store = store; // 为了方便调试
export default store;