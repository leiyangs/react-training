import * as types from '../action-types'
let actions = {
  increment() {
    return {type: types.INCREMENT2}
  },
  decrement() {
    return {type: types.DECREMENT2}
  }
}
export default actions;