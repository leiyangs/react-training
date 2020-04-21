// 快捷键 rfc创建react function组件
// rcc创建react class组件
import React, { Component } from 'react'

export default class LifeCycle extends Component {
  static defaultPops = {
    name: '计数器'
  }
  constructor(props) {
    super(props)
    this.state = { number: 0 }; // 初始化默认的状态对象
    console.log('1. 初始化props and state');
  }
  UNSAFE_componentWillMount() { //componentWillMount react17将要删除
    console.log('2. 组件将要挂载')
  }
  componentDidMount() {
    console.log('4. 组件已经挂载')
  }
  add = () => {
    this.setState({number: this.state.number+1});
  }
  render() {
    console.log('3. render渲染，也就是挂载')
    return (
      <div>
        <p>{this.state.number}</p>
        <button onClick={this.add}>+</button>
      </div>
    )
  }
}

