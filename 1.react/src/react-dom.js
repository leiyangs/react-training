function render(element, parentNode) {
  if(typeof element === 'string') { // 如果渲染的是string: ReactDom.render('hello', document.getElementById('root'));
    return parentNode.appendChild(document.createTextNode(element));
  }
  let {type, props} = element;
  
}
export default { render };