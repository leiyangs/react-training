import React, { Component } from 'react'

export default class Login extends Component {
  handleLogin = () => {
    localStorage.setItem('islogin', true);
    if(this.props.location.state) { // 如果是点了其他页面然后登录，登录后直接跳转到之前访问的页面
      this.props.history.push(this.props.location.state.from);
    }else {
      this.props.history.push('/')
    }
  }
  render() {
    return (
      <div>
        <button onClick={this.handleLogin}>登录</button>
      </div>
    )
  }
}
