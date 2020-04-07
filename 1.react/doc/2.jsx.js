import React from "react";
import ReactDom from "react-dom";

// 打包时候bable会把 <h1>hello </h1>转译为React.createElement("h1", null, "hello ")

// ReactDom.render(<h1>
//   hello {name}
//   </h1>, document.getElementById('root'));
// element是被创建出来的 react元素，是一个js对象(虚拟DOM)，用来描述dom
let element = React.createElement("h1", { className: 'title' }, "hello ", React.createElement("span", { className: 'name' }, "react"));
console.log(element)
ReactDom.render(element, document.getElementById('root'));
