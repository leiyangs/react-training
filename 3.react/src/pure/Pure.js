import React, { Component } from 'react' // { Component, PureComponent }
import PureComponent from './PureComponent'
// PureComponent 只渲染属性改变的组件，不使用的话Title组件也会一直重新渲染 pure纯的

// 类组件的处理方式PureComponent
class Title1 extends PureComponent {
  render() {
    console.log('Title')
    return <div>{this.props.title}</div>
  }
}
// 函数组件的处理方式memo(备忘录)
function Title(props) {
  console.log('Title')
  return <div>{props.title}</div>
}
Title = React.memo(Title);
// memo的两种实现
function memo1(FuncComponent) {
  return class  extends PureComponent {
    render() {
      return <FuncComponent {...this.props}/>
    }
  }
}
function memo2(FuncComponent) {
  return class  extends PureComponent {
    render() {
      return FuncComponent(this.props)
    }
  }
}

class Counter extends PureComponent  {
  render() {
    console.log('Counter')
    return <div>{this.props.number}</div>
  }s
}

export default class App extends PureComponent {
  constructor(props) {
    super(props)
    this.props = props;
    this.state = { title: '计数器', number: 0 }
    this.inputRef = React.createRef();
  }
  add = () => {
    this.setState({number: this.state.number+parseInt(this.inputRef.current.value)})
  }
  render() {
    console.log('App')
    return(
      <div>
        <Title title={this.state.title}/>
        <Counter number={this.state.number}></Counter>
        <input ref={this.inputRef}/>
        <button onClick={this.add}>+</button>
      </div>
    )
  }
}