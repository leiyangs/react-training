import React, { Component } from 'react'
import context from './context'

export default class Link extends Component {
  static contextType = context
  render() {
    return (
      <a onClick={()=> this.context.history.push(this.props.to)} {...this.props}>{this.props.children}</a>
    )
  }
}
// hash路由可以用下面方法，上面要使用通用的
{/* <a href={`#${this.props.to}`}>{this.props.children}</a> */}