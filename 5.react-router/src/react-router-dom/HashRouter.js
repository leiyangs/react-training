import React, { Component } from 'react'
import Context from './context'

// 会传给组件一些默认状态
export default class HashRouter extends Component {
  state = {
    location: { pathname: window.location.hash.slice(1), state: null } // 当前路径和路径状态
  }
  locationState = null;
  componentDidMount() {
    // 给hash默认值
    window.location.hash = window.location.hash.slice(1) || '/';
    // 监听hash的变化
    window.addEventListener('hashchange', (e) => {
      this.setState({
        location: {
          ...this.state.location, // 默认location的pathname
          pathname: window.location.hash.slice(1), //如果有值会覆盖上面
          state: this.locationState
        }
      })
      // console.log(this.state) // {location: {pathname: '/'}}
    })
  }
  render() {
    let that = this;
    let value = {
      location: that.state.location,
      history: {
        push(to) { // 有一个push方法来跳转路径
          if(typeof to === 'object') {
            let { pathname, state } = to;
            window.location.hash = pathname;
            that.locationState = state; // 不能在render中直接改变state的值，会死循环(state变化会重新渲染),所以这里暂存state的值
          }else {
            window.location.hash = to;
            that.locationState = null;
          }
        }
      }
    }
    return (
      <Context.Provider value={value}>
        {this.props.children}
      </Context.Provider>
    )
  }
}
