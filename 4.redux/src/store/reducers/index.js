// 合并多个reducer
import { combineReducers } from '../../redux'

import counter from './counter'
import counter1 from './counter1'
import counter2 from './counter2'

let reducers = combineReducers({
  counter,
  counter1,
  counter2
})
export default reducers;