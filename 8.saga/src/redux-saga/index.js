export function createSagaMiddleware() {
  function sagaMiddlewate(dispatch, getState) {
    // 使用中间件惯用套路
    // return function(next) {
    //   return function(action) {

    //   }
    // }
    return next=>action=>{

    }
    
  }
  return sagaMiddlewate;
}