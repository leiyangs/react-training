// 错误边界
import React, { Component } from 'react'

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state={hasError: false};
  }
  // 此生命周期可以捕获错误和信息
  componentDidCatch(error, info) {
    if(error) {
      this.setState({hasError: true});
    }
    console.log(error, info)
  }
  render() {
    if(this.state.hasError) {
      return <div>组件发生未知错误，无法正常显示</div>
    }
    return this.props.children;
  }
}
function Clock() {
  null.toString();
  return <div>{new Date().toString()}</div>
}
function Counter() {
  return <div>计数器</div>
}
export default class Page extends Component {
  render() {
    return(
      <>
        <ErrorBoundary>
          <Clock/>
        </ErrorBoundary>
        <Counter/>
      </>
    )
  }
}
