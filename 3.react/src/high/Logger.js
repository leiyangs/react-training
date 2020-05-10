// 高阶组件
/**
 * 高阶组件就是一个函数，传给它一个组件，它返回一个新的组件
 * 高阶组件的作用就是为了组件之间的代码复用
 */
import React, { Component } from 'react'

export default class Logger extends Component {
  componentWillMount() {
    this.start = Date.now();
    console.time('cost')
  }
  componentDidMount() {
    console.log((Date.now() - this.start)+'ms')
    console.timeEnd('cost')
  }
  render() {
    return (
      <div>
        Logger
      </div>
    )
  }
}
