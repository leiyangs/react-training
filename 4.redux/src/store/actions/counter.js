import * as types from '../action-types'
let actions = {
  increment() {
    return {type: types.INCREMENT}
  },
  decrement() {
    return {type: types.DECREMENT}
  },
  asyncincrement() {
    return function(dispatch, getState) {
      setTimeout(() => {
        dispatch({type: types.INCREMENT});
      }, 1000);
    }
  }
}
export default actions;