import React from "react";
import ReactDOM from "react-dom";

// 受控组件: DOM元素的值存在DOM元素内部，受React控制(input)
// 非受控组件: DOM元素的值存在DOM元素内部，不受React控制
// ref对组件的使用
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }
  getFocus = () => {
    console.log(this.textInput)
    this.textInput.current.textInput.current.focus();
  }
  render() {
    return (
      <>
         {/* Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()? */}
        <TextInput3 ref={this.textInput}/>
        <TextInput ref={this.textInput}/>
        <button onClick={this.getFocus}>focus</button>
      </>
    )
  }
}
class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }
  render() {
    return <input ref={this.textInput}/>
  }
}
// 函数组件不支持ref 要用转发
// function TextInput2() {
//   return <input/>
// }
function TextInput2(props, ref) {
  return <input ref={ref}/>
}
let TextInput3 = React.forwardRef(TextInput2);

ReactDOM.render(<Form/>, document.getElementById('root'));

