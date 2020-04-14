import React from "react";
import ReactDom from "react-dom";
// 一、state状态

// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {date: new Date().toLocaleTimeString()};
//   }
//   componentDidMount() {
//     this.$timer = setInterval(() => {
//       this.setState({date: new Date().toLocaleTimeString()});
//     },1000)
//   }
//   render() {
//     return <div>时间：{this.state.date}</div>
//   }
// }
// ReactDom.render(<Clock/>, document.getElementById('root'));




// 二、解决类组建中方法(add方法为例)的this是undefined问题的三种策略

/**
 * 1. bind(this)  this.add.bind(this)
 * 2. 匿名函数  () => this.add()
 * 3. ES7新特新，类的公共属性  add = () => {}
 */

// class Counter extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { number: 0 };
//   }
//   // add() {
//   //   // Cannot read property 'setState' of undefined
//   //   this.setState({number: this.state.number+1});
//   // }
//   add = () => {
//     this.setState({number: this.state.number+1});
//   }
//   render() {
//     return (
//       <>
//         <p>{this.state.number}</p>
//         {/* <button onClick={this.add.bind(this)}>+</button> */}
//         {/* <button onClick={() => this.add()}>+</button> */}
//         <button onClick={this.add}>+</button>
//       </>
//     )
//   }
// }
// ReactDom.render(<Counter/>, document.getElementById('root'));



// 三、setState是异步的

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { number: 0 };
  }
  add = () => {
    /* this.setState({number: this.state.number+1}); // 1
    console.log(this.state.number); // 0
    this.setState({number: this.state.number+1}); // 1
    console.log(this.state.number); // 0 */
    
    // 用上次的结果
    this.setState(state => ({number: state.number+1}));
    this.setState(state => ({number: state.number+1}));
  }
  render() {
    return (
      <>
        <p>{this.state.number}</p>
        <button onClick={this.add}>+</button>
      </>
    )
  }
}
ReactDom.render(<Counter/>, document.getElementById('root'));
