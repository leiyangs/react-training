import * as types from '../action-types'
let actions = {
  increment() {
    return {type: types.INCREMENT}
  },
  decrement() {
    return {type: types.DECREMENT}
  },
  asyncincrement() { // react-thunk
    return function(dispatch, getState, amount) {
      setTimeout(() => {
        dispatch({type: types.INCREMENT, payload: amount});
      }, 1000);
    }
  },
  promiseincrement() { // react-promise
    return {
      type: types.INCREMENT,
      payload: new Promise((resolve, rejcet) => {
        setTimeout(() => {
          let result = Math.random();
          if(result > 0.5) {
            resolve(result);
          }else {
            rejcet(result);
          }
        }, 1500);
      })
    }
  }
}
export default actions;