import React from "react";
import ReactDom from "react-dom";

/**
 * 我们可以把页面分成若干个独立的部分，单独编写，单独维护
 * 1) 一个返回普通react元素的函数就是一个合法的React组件
 * 2) 组件需要返回一个并且仅能返回一个React元素
 * 3) 组件名称必须大写字母开头
 */
// 1、函数组件
// 收集属性对象 props { name:'react', age: 18 }
// 会把props对象传入Welcome函数,并得到一个返回值(React元素)

// function Welcome(props) {
// return <h1>hello {props.name} {props.age}岁</h1>
// }
// ReactDom.render(<Welcome name="react" age={18}/>, document.getElementById('root'));

// function Welcome({name, age}) {
//   return <h1>hello {name} {age}岁</h1>
// }
// let data = {name: 'react', age: 18};
// ReactDom.render(<Welcome {...data}/>, document.getElementById('root'));

// 2、类组件
// 收集属性对象 props { name:'react', age: 18 }
// 把属性对象传递 给Welcome类的构造函数，并得到Welcome类的实例
// 调用render方法获取返回值(React元素)
class Welcome extends React.Component {
  render() {
    return <h1>hello {this.props.name} {this.props.age}岁</h1>
  }
}
ReactDom.render(<Welcome name="react" age="18"/>, document.getElementById('root'));
 