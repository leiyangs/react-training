// 是一个组件
import React, { Component } from 'react'
import ReduxContext from './context'

export default class Provider extends Component {
  render() {
    return (
      <ReduxContext.Provider value={{store: this.props.store}}>
        {/* 
          就是 <Provider store={store}></Provider> 包裹的字组件
        */}
        {this.props.children}
      </ReduxContext.Provider>
    )
  }
}
