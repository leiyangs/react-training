import compose from './compose'
// redux中间件  级联中间件
export default function applyMiddleware(...middlewares) {
  return function(createStore) {
    return function(reducers) {
      let store = createStore(reducers); // 原始的仓库
      let dispatch = () => {throw new Error('现在还不能用')};
      let middlewareAPI = {
        getState: store.getState,
        dispatch: (...args) =>dispatch(...args)
      }
      const chain = middlewares.map(middleware =>middleware(middlewareAPI));
      // middleware = middleware(store);
      // dispatch = middleware(store.dispatch);
      dispatch = compose(...chain)(store.dispatch);
      return {
        ...store,
        dispatch
      };
    }
  }
}