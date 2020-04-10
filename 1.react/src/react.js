class Component {
  static isReactComponent = true; // 类和函数经过babel转换后都是类型都是函数，在react-dom中无法判断，加此属性
  constructor(props) {
    this.props = props;
  }
}
// 返回react元素
function ReactElement(type, props) {
  const element = { type, props };
  return element;
}
// 处理传入的属性和children
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

export default { createElement, Component };