export default function isPlainObject(obj) {
  if(typeof obj !== 'object' || obj === null){
    return false;
  }
  let $proto = obj;
  while(Object.getPrototypeOf($proto)){ // 方法返回指定对象的原型（内部[[Prototype]]属性的值）。相当于$proto.__proto__
    $proto = Object.getPrototypeOf($proto)
  }
  return Object.getPrototypeOf(obj) === $proto;
}
// var a = {};
// var b = Object.create(a);
// console.log(Object.getPrototypeOf(b) == a.__proto__);