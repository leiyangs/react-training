import isPlainObject from './utils/isPlainObject'
export default function createStore(reducer, preloadState) {
  if(typeof reducer !== 'function') {
    throw new Error('reducer必须是一个函数');
  }
  let currentReducer = reducer; // 当前处理器
  let currentState = preloadState; // 当前状态
  function getState() { // 返回当前状态
    return currentState;
  }
  function dispatch(action) {
    if(!isPlainObject(action)) { // 必须是new出来的
      throw new Error('action必须是一个纯对象')
    }
  }
  function subscribe() {

  }
  return {
    getState,
    subscribe,
    dispatch
  }
}