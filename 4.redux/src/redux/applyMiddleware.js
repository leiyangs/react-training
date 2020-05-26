// redux中间件
export default function applyMiddleware(middleware) {
  return function(createStore) {
    return function(reducers) {
      let store = createStore(reducers); // 原始的仓库
      let dispatch = () => {throw new Error('现在还不能用')};
      middleware = middleware(store);
      dispatch = middleware(store.dispatch);
      return {
        ...store,
        dispatch
      };
    }
  }
}