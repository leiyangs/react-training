import { createStore } from 'redux' // , bindActionCreators
import reducer from './reducer'
let initState = 0;
let store = createStore(reducer, initState);
export default store;
