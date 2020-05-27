// 中间件检测actions是不是一个函数，如果是那么就会处理
// 源码包要单独安装npm install --save redux-thunk
function createThunkMiddleware(extraArgument) {
  return ({dispatch, getState}) => next => action => {
    if(typeof action === 'function') {
      action(dispatch, getState,extraArgument);
    }else {
      next(action);
    }
  }
}
const thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;
export default thunk;