function render(element, parentNode) {
  if(typeof element === 'string' || typeof element === 'number') { // 如果渲染的是string: ReactDom.render('hello', document.getElementById('root'));
    return parentNode.appendChild(document.createTextNode(element));
  }
  let type, props;
  type = element.type;
  props = element.props;
  if(typeof type === 'function') {
    /**
     * type(props) => <h1 className="welcome" id="welcome">hello yang 10</h1>
     * 然后jsx会被bable转译为下面格式
     * React.createElement("h1", {
        className: "welcome",
        id: "welcome"
      }, "hello ", props.name, " ", props.age);
     */
    let returnedElement = type(props);
    type = returnedElement.type; 
    props = returnedElement.props;
  }
  // 创建element并添加属性
  let domElement = document.createElement(type);
  for (const propName in props) {
    if (props.hasOwnProperty(propName)) {
      if(propName === 'className') { // 如果是class
        domElement.className = props[propName];
      }else if(propName === 'style') { // 如果是style
        let styleObj = props[propName];
        // 第一种方式
        // for (const attr in styleObj) {
        //   domElement.style[attr] = styleObj[attr];
        //   console.log(domElement)
        // }
        // 第二种方式
        // ['color','fontSize'] => ['color: red', 'fontSize: 25px'] => 'color: red; fontSize: 50px;'   fontSize => font-size
        let cssText = Object.keys(styleObj).map(attr => {
          let _attr = attr.replace(/([A-Z])/g, function() {
            // console.log(arguments) // ['S','S',4,'fontSize']
            return "-"+arguments[1].toLowerCase();
          })
          return `${_attr}:${styleObj[attr]}`;
        }).join(';')
        domElement.style.cssText = cssText;
      }else if(propName === 'children'){ // 如果是children
        let children = Array.isArray(props.children) ? props.children : [props.children];
        children.forEach(child => render(child, domElement));
      }else { // 如果是其他属性
        domElement.setAttribute(propName, props[propName])
      }
    }
  }
  parentNode.appendChild(domElement);
}
export default { render };