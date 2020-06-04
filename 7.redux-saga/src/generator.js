function* gen() {
  console.log(1);
  yield 'a';
  console.log(2);
  yield 'b';
  console.log(3);
  return 'c';
}

let fn = gen();
let result = fn.next();
console.log(result) // { value: 'a', done: false }
let result1 = fn.next();
console.log(result1) //{ value: 'b', done: false }
let result2 = fn.next();
console.log(result2) //{ value: 'c', done: true }
