import * as types from '../action-types'
let actions = {
  increment() {
    return {type: types.INCREMENT}
  },
  decrement() {
    return {type: types.DECREMENT}
  },
  asyncincrement() {
    return function(dispatch, getState, amount) {
      setTimeout(() => {
        dispatch({type: types.INCREMENT, payload: amount});
      }, 1000);
    }
  }
}
export default actions;