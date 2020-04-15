import React from "react";
import ReactDOM from "react-dom";
// 一、state状态
/**
 * 不要直接修改 State
 * 构造函数是唯一可以给 this.state 赋值的地方
 */
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
// ReactDOM.render(<Clock/>, document.getElementById('root'));




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
// ReactDOM.render(<Counter/>, document.getElementById('root'));



// 三、State 的更新可能是异步的
/**
 * 出于性能考虑，React 可能会把多个 setState() 调用合并成一个调用
 * 因为 this.props 和 this.state 可能会异步更新，所以你不要依赖他们的值来更新下一个状态
 * 可以让 setState() 接收一个函数而不是一个对象。这个函数用上一个 state 作为第一个参数
 */
// setState有两个参数，第二个参数是回调,回调在所有方法执行完才执行
// class Counter extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { number: 0 };
//   }
//   add = () => {
//     /* this.setState({number: this.state.number+1}); // 1
//     console.log(this.state.number); // 0
//     this.setState({number: this.state.number+1}); // 1
//     console.log(this.state.number); // 0 */
    
//     // 用上次的结果 state是上次执行的结果
//     this.setState(state => ({number: state.number+1}),() =>{
//       console.log(this.state) // 2
//     });
//     this.setState(state => ({number: state.number+1}),() =>{
//       console.log(this.state) // 2
//     });
//   }
//   render() {
//     return (
//       <>
//         <p>{this.state.number}</p>
//         <button onClick={this.add}>+</button>
//       </>
//     )
//   }
// }
// ReactDOM.render(<Counter/>, document.getElementById('root'));



// 四、 State 的更新会被合并
/**
 * 当你调用 setState() 的时候，React 会把你提供的对象合并到当前的 state
//  */
// class Counter extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { money: 0, name: 'yang' };
//   }
//   add = () => {
//     this.setState({money: this.state.money+1});
//     // this.setState({money: this.state.money+1, name: null});
//     // this.replaceState({money: this.state.money+1}) // 方法被废弃掉了
//   }
//   render() {
//     return (
//       <>
//         <p>{this.state.name}{this.state.money}</p>
//         <button onClick={this.add}>+</button>
//       </>
//     )
//   }
// }
// ReactDOM.render(<Counter/>, document.getElementById('root'));



// 五、数据是向下流动的
/**
 * 不管是父组件或是子组件都无法知道某个组件是有状态的还是无状态的，并且它们也并不关心它是函数组件还是 class 组件
 * 这就是为什么称 state 为局部的或是封装的的原因,除了拥有并设置了它的组件，其他组件都无法访问
 * 任何的 state 总是所属于特定的组件，而且从该 state 派生的任何数据或 UI 只能影响树中“低于”它们的组件
 * 如果你把一个以组件构成的树想象成一个 props 的数据瀑布的话，那么每一个组件的 state 就像是在任意一点上给瀑布增加额外的水源，但是它只能向下流动
 */
class Counter extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          name:'zhufeng',
          number: 0
      };
  }
  handleClick = ()=>{
      this.setState((state)=>(
          {number:state.number+1}
      ));
  }
  render() {
      return (
          <div style={{border:'1px solid red'}}>
              <p>{this.state.name}: {this.state.number} </p>
              <button onClick={this.handleClick}>+</button>
              <SubCounter number={this.state.number}/>
          </div>
      );
  }
}
class SubCounter extends React.Component {
render(){
    return <div style={{border:'1px solid blue'}}>子计数器:{this.props.number}</div>;
}
}
ReactDOM.render(
  <Counter />,
  document.getElementById('root')
);
