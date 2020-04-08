import React from "react";
import ReactDom from "react-dom";

// jsx是一个普通的js对象，可以用在if while for方法的参数返回值里
let name = 'react';
function greeting(name) {
  if(name) {
    return <h1>hello {name}</h1>
  }else {
    return <h1>hello 无名</h1>
  }
}
let element = greeting(name);
console.log(element)
ReactDom.render(element, document.getElementById('root'));
