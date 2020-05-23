import * as types from './action-types'
export default function reducer(state, action) {
  switch(action.type){
    case types.INCREMENT:
      return state + 1;
    case types.DECREMENT:
      return state - 1;
    default:
      return state;
  }
}