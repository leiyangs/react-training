const PERSIST_INIT = 'PERSIST_INIT';
function persistStore(store) {
  let persistor = {
    ...store,
    initState() {
      store.dispatch({type: PERSIST_INIT})
    }
  }
  return persistor;
}
function persistReducer(persistConfig, reducers) {
  let key = `persist:${persistConfig.key}`;
  let isInited = false;
  return function (state, action) {
    switch (action.type) {
      case PERSIST_INIT:
        isInited = true;
        let value = persistConfig.storage.get(key);
        state = JSON.parse(value);
        return state;
    
      default:
        if(isInited) {
          state = reducers(state, action);
          persistConfig.storage.set(key, JSON.stringify(state));
        }else {
          return reducers(state, action)
        }
        return state;
    }
  }
}
export { persistStore, persistReducer }