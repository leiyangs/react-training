// 片段
import React, { Component } from 'react'

/**
 * React中一个常见的模式是为一个组件返回多个元素
 * 片段(Fragment)可以将子元素列表添加到一个分组中，并且不会在DOM中增加额外节点
 * 相当于<></>
 */
export default class Fragment extends Component {
  render() {
    return (
      <React.Fragment>
        <p>a</p>
        <p>b</p>
        <p>c</p>
      </React.Fragment>
    )
  }
}
