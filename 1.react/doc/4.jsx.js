import React from "react";
import ReactDom from "react-dom";

// 元素的更新 元素是不可变的(只读)

setInterval(() => {
  let element = <div><span>时间:</span>{new Date().toLocaleTimeString()}</div>
  ReactDom.render(element, document.getElementById('root'));
},1000)