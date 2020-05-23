import * as types from '../action-types'
let actions = {
  increment() {
    return {type: types.INCREMENT1}
  },
  decrement() {
    return {type: types.DECREMENT1}
  }
}
export default actions;