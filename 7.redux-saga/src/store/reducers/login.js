import * as types from '../action-types'
let initialState = {}
export default function(state=initialState, action) {
  switch(action.type) {
    case types.LOGIN_SUCCESS:
      return {} = action.payload;
    case types.LOGIN_ERROR:
      return {error: action.error};
    case types.LOGOUT_SUCCESS:
      return {}
    default:
      return state;
  }
}