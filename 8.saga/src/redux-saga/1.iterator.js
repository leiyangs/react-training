// 迭代器 自带方法
let arr = [1,2,3];
let it = arr[Symbol.iterator]();
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())