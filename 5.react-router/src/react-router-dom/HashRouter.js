import React, { Component } from 'react'
import Context from './context'

// 会传给组件一些默认状态
export default class HashRouter extends Component {
  state = {
    location: { pathname: window.location.hash.slice(1) }
  }
  componentDidMount() {
    // 给hash默认值
    window.location.hash = window.location.hash.slice(1) || '/';
    // 监听hash的变化
    window.addEventListener('hashchange', (e) => {
      this.setState({
        location: {
          ...this.state.location,
          pathname: window.location.hash.slice(1)
        }
      })
    })
  }
  render() {
    let value = {
      location: this.state.location
    }
    return (
      <Context.Provider value={value}>
        {this.props.children}
      </Context.Provider>
    )
  }
}
