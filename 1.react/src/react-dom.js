function render(element, parentNode) {
  if(typeof element === 'string') { // 如果渲染的是string: ReactDom.render('hello', document.getElementById('root'));
    return parentNode.appendChild(document.createTextNode(element));
  }
  let {type, props} = element;
  let domElement = document.createElement(type);
  for (const propName in object) {
    if (object.hasOwnProperty(propName)) {
      if(propName === 'className') {
        domElement.className = props[propName];
      }else if(propName === 'style') {

      }else {
        domElement.setAttribute(propName, props[propName])
      }
    }
  }
}
export default { render };