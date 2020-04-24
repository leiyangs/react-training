// 快捷键 rfc创建react function组件
// rcc创建react class组件
import React, { Component } from 'react'

export default class LifeCycle extends Component {
  static defaultPops = {
    name: '计数器'
  }
  constructor(props) {
    super(props); // 组件必须加super(props),要不然拿不到this,React直接会报错
    this.state = { number: 0 }; // 初始化默认的状态对象
    console.log('1. 初始化props and state');
  }
  UNSAFE_componentWillMount() { //componentWillMount react17将要删除
    console.log('2. 组件将要挂载')
  }
  componentDidMount() {
    console.log('4. 组件已经挂载')
  }
  shouldComponentUpdate() {
    console.log('5. 询问组件是否需要更新');
    return true; // 返回true就是要更新
  }
  UNSAFE_componentWillUpdate() { // componentWillUpdate
    console.log('6. 组件将要更新')
  }
  componentDidUpdate() {
    console.log('7. 组件更新完成')
  }
  add = () => {
    this.setState({number: this.state.number+1});
  }
  render() {
    console.log('3. render渲染，也就是挂载')
    return (
      <div style={{border: '6px solid red'}}>
        <p>{this.state.number}</p>
        <button onClick={this.add}>+</button>
        {this.state.number%2 === 0&&<SubCounter number={this.state.number}/>}
      </div>
    )
  }
}

class SubCounter extends Component {
  // 调用此方法的时候会把新的属性对象和醒的状态对象传过来
  componentWillReceiveProps() {
    console.log('1. 子组件componentWillReceiveProps');
  }
  shouldComponentUpdate(nextProps, nextState) {
    if(nextProps.number%3 === 0) {
      return true;
    }else {
      return false;
    }
  }
  componentDidUpdate() {
    console.log('3. 子组件组件更新完成')
  }
  render() {
    console.log('2. 子组件render')
    return (
      <div style={{border: '5px solid green'}}>
        <p>{this.props.number}</p>
      </div>
    )
  }
}

