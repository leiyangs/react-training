import { createStore } from 'redux' // , bindActionCreators
import reducers from './reducers'
// let initState = 0;
let store = createStore(reducers, {counter1: 0, counter2: 0});
console.log(store.getState())

export default store;
