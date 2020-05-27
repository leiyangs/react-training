// redux-promise
// 和thunk效果相同，thunk是基于回调
function isPromise(obj) {
  return !!obj && (typeof obj == 'object' || typeof obj == 'function') && (typeof obj.then == 'function')
}
export default function({dispatch, getState}) {
  return next => action => {
    return isPromise(action.payload)?action.payload.then(res=> {
      dispatch({...action,payload: res})
    }).catch(err => {
      dispatch({...action,payload: err});
      return Promise.reject(err)
    }):next(action)
  }
}