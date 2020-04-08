
function ReactElement(type, props) {
  const element = { type, props };
  return element;
}
function createElement(type, config, children) {
  let propName;
  const props = {}
  // 拷贝传入的属性
  for (propName in config) {
    if (config.hasOwnProperty(propName)) {
      props[propName] = config[propName]
    }
  }
  // 拷贝children
  const childrenLength = arguments.length - 2;
  if(childrenLength === 1) { // 如果只传入一个
    props.children = children;
  }else { // 多个
    props.children = Array.from(arguments).slice(2);
  }
  return ReactElement(type,props);
}

export default { createElement };