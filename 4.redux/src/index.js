// redux和react没有任何关系，这里没有react也可以使用redux

import { createStore } from 'redux'
let initState = 0; // 声明state 的默认值
const INCREMENT = 'INCREMENT'; // 定义+的type
const DECREMENT = 'DECREMENT'; // 定义-的type
// 在redux中动作是有规定的，规定必须有一个不为undefined的type属性，用来表示动作类型
function reducer(state=initState, action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1; // 返回+1的新状态
    case DECREMENT:
      return state - 1; // 返回-1的新状态
    default:
      return state;
  }
}
let store = createStore(reducer); // 返回一个仓库
let state = store.getState(); // 返回当前state的值
console.log(state);

let counterValue = document.getElementById('counter-value');
let incrementBtn = document.getElementById('increment-btn');
let decrementBtn = document.getElementById('decrement-btn');
function render() {
 counterValue.innerHTML = store.getState();
}
render();
store.subscribe(render); // subscribe订阅 每次store发生变化执行render

incrementBtn.addEventListener('click', function () {
  store.dispatch({type: INCREMENT});
})
decrementBtn.addEventListener('click', function () {
  store.dispatch({type: DECREMENT});
})