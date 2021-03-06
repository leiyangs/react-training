import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../store/actions'
// 纯UI组件
class Counter extends Component {
  render() {
    return (
      <div>
        <p>{this.props.number}</p>
        <button onClick={this.props.increment}>+</button>
        <button onClick={this.props.decrement}>-</button>
        <button onClick={this.props.goHome}>首页</button>
      </div>
    )
  }
}
// state和actions全部都会映射到props中
export default connect(
  state => state.counter, // 映射state state就是{counter: {number: 0}}
  actions // 映射dispatch 也就是执行方法映射为当前组件的属性对象
)(Counter); // 连接store