import React from "./react";
import ReactDom from "./react-dom";

let element = React.createElement('h1', {
  className: 'react',
  style: {
    color: 'blue',
    fontSize: '25px'
  }
}, 'hello', React.createElement('span', null, 'react'));
ReactDom.render(element, document.getElementById('root'));
