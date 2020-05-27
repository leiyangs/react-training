// 返回一个函数
// import { compose } from "redux";
export default function compose(...funcs) {
  if(funcs.length === 0) {
    return arg=>arg;
  }
  if(funcs.length === 1) {
    return funcs[0];
  }
  return funcs.reduce((a, b) => (...args) => a(b(...args)))
}

// 依次执行,返回结果依次结合
function add1(str) {
  return '1'+str;
}
function add2(str) {
  return '2'+str;
}
function add3(str) {
  return '3'+str;
}

let result = compose(add1,add2,add3)('yang');
// console.log(result)