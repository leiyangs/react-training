import React, { Component } from 'react'
import Context from './context'

let odlPsuhState = window.history.pushState;
window.history.pushState = (state, title, url) => {
  window.onpushstate.call(this, state, url);
  odlPsuhState.call(window.history, state, title, url);
}
// 会传给组件一些默认状态
export default class BrowserRouter extends Component {
  state = {
    location: { pathname: window.location.pathname, state: null } // 当前路径和路径状态
  }
  componentDidMount() {
    window.onpopstate = event => { // 路径出栈触发
      this.setState({
        location: {
          ...this.state.location, // 默认location的pathname
          pathname: window.location.pathname, //如果有值会覆盖上面
          state: event.state
        }
      })
    }
    window.onpushstate = (state,pathname) => { // 手写路径入栈触发
      this.setState({
        location: {
          ...this.state.location,
          pathname,
          state
        }
      })
    }
  }
  render() {
    let that = this;
    let value = {
      location: that.state.location,
      history: {
        push(to) { // 有一个push方法来跳转路径
          if(that.message) {
            let confirm = window.confirm(that.message(typeof to==='object'? to:{ pathname: to }));
            if(!confirm) {
              return 
            }
          }
          if(typeof to === 'object') {
            let { pathname, state } = to;
            window.history.pushState(state, null, pathname);
          }else {
            window.history.pushState(null, null, to);
          }
        },
        block(message) {
          that.message = message;
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
