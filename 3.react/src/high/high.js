// 高阶函数
/**
 * 传入一个函数，返回一个新的函数
 * Js高阶函数要比一般语言中的高级一些,其他语言例如Java是不能把其他函数作为函数的参数，也不能把函数作为返回值的
 */
function calculate(fn) {
  return function(a, b) {
    return fn(a, b)
  }
}
function sum(a, b) {
  return a+b;
}

let newFunc = calculate(sum);
let result = newFunc(1,2);
console.log(result);