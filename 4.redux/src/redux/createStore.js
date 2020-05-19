import isPlainObject from './utils/isPlainObject'
import ActionTypes from './utils/actionTypes';
export default function createStore(reducer, preloadState) {
  if(typeof reducer !== 'function') {
    throw new Error('reducer必须是一个函数');
  }
  let currentReducer = reducer; // 当前处理器
  let currentState = preloadState; // 当前状态
  let currentListeners = []; // 保存当前的监听函数
  function getState() { // 返回当前状态
    return currentState;
  }
  function dispatch(action) {
    if(!isPlainObject(action)) { // 必须是new出来的
      throw new Error('action必须是一个纯对象')
    }
    if(typeof action === 'undefined') {
      throw new Error('action的type属性不能是undefined')
    }
    currentState = currentReducer(currentState, action); // 把state和action传入reducer返回reducer处理后新的state
    for (let i = 0; i < currentListeners.length; i++) {
      const listener = currentListeners[i]; 
      listener();
    }
  }
  dispatch({type: ActionTypes.INIT}); // 默认执行一次，为了处理如果没有在preloadState赋默认值，reducer参数赋了默认值，执行一次会拿到state的参数默认
  function subscribe(listener) {
    let subscribed = true; // flag
    currentListeners.push(listener);
    return function unsubscribe() {
      if(!subscribed) return;
      const index = currentListeners.indexOf(listener);
      currentListeners.splice(index,1);
      subscribed = false;
    }
  }
  return {
    getState,
    subscribe,
    dispatch
  }
}