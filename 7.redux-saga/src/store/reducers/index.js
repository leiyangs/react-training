import {combineReducers} from 'redux'
import counter from './counter'
import login from './login'
let reducers = combineReducers({
  counter,
  login
})
export default reducers;