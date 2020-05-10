// 高阶组件
/**
 * 高阶组件就是一个函数，传给它一个组件，它返回一个新的组件
 * 高阶组件的作用就是为了组件之间的代码复用
 */

//  计算组件加载的时间，任何组件在用的时候直接WithLogger(Comp)就可以了，实现了封装和复用，不会影响其他组件
import React, { Component } from 'react'
import WithLogger from './WithLogger' //高阶组件

class Logger extends Component {
  render() {
    return (
      <div>
        Logger
      </div>
    )
  }
}

export default WithLogger(Logger);
