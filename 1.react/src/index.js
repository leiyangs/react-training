import React from "react";
import ReactDom from "react-dom";

/**
 * jsx: javascript+xml js和html混合书写的语法
 * jsx用来描述界面上的元素
 */
// 1、 class(class是关键字要用className)  id  style
let name = 'react'
ReactDom.render(<h1 id="title" className="title" style={{color: 'blue'}}>
  hello {name}
  </h1>, document.getElementById('root'));