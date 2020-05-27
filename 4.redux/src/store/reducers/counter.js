import * as types from '../action-types'
export default function reducer(state=0, action) {
  switch(action.type){
    case types.INCREMENT:
      // return state + 1;
      return state + (action.payload?action.payload:1);
    case types.DECREMENT:
      return state - 1;
    default:
      return state;
  }
}