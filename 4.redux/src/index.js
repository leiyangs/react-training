// redux和react没有任何关系，这里没有react也在使用redux
/**
 * 整个应用的 state 被储存在一棵 object tree 中，并且这个 object tree 只存在于唯一一个 store 中
 * State 是只读的，惟一改变 state 的方法就是触发 action，action 是一个用于描述已发生事件的普通对象 使用纯函数来执行修改，为了描述action如何改变state tree ，你需要编写 reducers
 * 单一数据源的设计让React的组件之间的通信更加方便，同时也便于状态的统一管理
 */

import { createStore } from './redux'
let initState = 0; // 声明state 的默认值
const INCREMENT = 'INCREMENT'; // 定义+的type
const DECREMENT = 'DECREMENT'; // 定义-的type
// 在redux中动作是有规定的，规定必须有一个不为undefined的type属性，用来表示动作类型
function reducer(state, action) { // state=initState
  switch (action.type) {
    case INCREMENT:
      return state + 1; // 返回+1的新状态
    case DECREMENT:
      return state - 1; // 返回-1的新状态
    default:
      return state;
  }
}
let store = createStore(reducer, initState); // 返回一个仓库 createStore接收两个参数1.reducer 2.初始状态
let state = store.getState(); // 返回当前state的值
console.log(state);

let counterValue = document.getElementById('counter-value');
let incrementBtn = document.getElementById('increment-btn');
let decrementBtn = document.getElementById('decrement-btn');
function render() {
 counterValue.innerHTML = store.getState();
}
render();
let unsubscribe = store.subscribe(render); // subscribe订阅 每次store发生变化执行render

// 取消订阅
setTimeout(() => {
  unsubscribe();
}, 5000);
incrementBtn.addEventListener('click', function () {
  store.dispatch({type: INCREMENT});
})
decrementBtn.addEventListener('click', function () {
  store.dispatch({type: DECREMENT});
})