import React from "react";
import ReactDOM from "react-dom";

// 受控组件，非受控组件，ref
/**
 * 1. ref===字符串
 * 2. ref===函数
 */
class Sum extends React.Component {
  // 1. ref===字符串
  // add = () => {
  //   let numA = this.refs.numA.value;
  //   let numB = this.refs.numB.value;
  //   this.refs.result.value=parseFloat(numA) + parseFloat(numB);
  // }
  // render() {
  //   return (
  //     <>
  //       <input ref="numA"/>+<input ref="numB"/><button onClick={this.add}>=</button><input ref="result"/>
  //     </>
  //   )
  // }

  // 2. ref===函数
  // inst就是input,相当于把input赋给numA,numB
  // add = () => {
  //   let numA = this.numA.value;
  //   let numB = this.numB.value;
  //   this.result.value=parseFloat(numA) + parseFloat(numB);
  // }
  // render() {
  //   return (
  //     <>
  //       <input ref={inst=>this.numA = inst}/>+<input ref={inst=>this.numB=inst}/><button onClick={this.add}>=</button><input ref={inst=>this.result=inst}/>
  //     </>
  //   )
  // }
  

  // 3. 最新版用法(标准写法)
  constructor(props) {
    super(props);
    this.numA = React.createRef();
    this.numB = React.createRef();
    this.result = React.createRef();
  }
  add = () => {
    let numA = this.numA.current.value;
    let numB = this.numB.current.value;
    this.result.current.value=parseFloat(numA) + parseFloat(numB);
  }
  render() {
    return (
      <>
        <input ref={this.numA}/>+<input ref={this.numB}/><button onClick={this.add}>=</button><input ref={this.result}/>
      </>
    )
  }
}
ReactDOM.render(<Sum/>, document.getElementById('root'));

function createRef() {
  return {current: null};
}