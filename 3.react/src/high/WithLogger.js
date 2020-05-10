// 高阶组件
import React, { Component } from 'react'
export default function(Comp) {
  return class extends React.Component{
    componentWillMount() {
      this.start = Date.now();
      console.time('cost')
    }
    componentDidMount() {
      console.log((Date.now() - this.start)+'ms')
      console.timeEnd('cost')
    }
    render() {
      return <Comp {...this.props}/>
    }
  }
}