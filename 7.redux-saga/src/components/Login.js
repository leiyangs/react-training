import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../store/actions'

class Login extends Component {
  constructor() {
    super();
    this.usernameRef = React.createRef();
    this.passwordRef = React.createRef();
  }
  handleLogin = (e) => {
    let username = this.usernameRef.current.value;
    let password = this.passwordRef.current.value;
    this.props.login(username,password);
  }
  handleLogout = () => {
    this.props.logout();
  }
  render() {
    let loginForm = (
      <>
        <label>用户名</label><input ref={this.usernameRef}/>
        <label>密码</label><input ref={this.passwordRef}/>
        <button onClick={this.handleLogin}>登录</button>
      </>
    )
    let logoutForm = (
      <>
        <label>用户名</label>{this.props.username}
        <button onClick={this.handleLogout}>退出</button>
      </>
    )
    console.log(this.props)
    return (
      <div>
        {this.props.token?logoutForm:loginForm}
      </div>
    )
  }
}

export default connect(
  state=>state.login,
  actions
)(Login);

/**
 * 整个登录流程(重要)
 * 
 * 点击登录按钮 => 
 * 
 * 触发action中的login方法, action方法返回{ type: types.LOGIN, payload: {username,password} }，向仓库派发了LOGIN的action  => 
 * 
 * loginSga中 yield take(types.LOGIN);监听了LOGIN 获取到了payload并且调用了loginSaga中的login方法 => 
 * 
 * loginSaga中的login执行会掉Api.login返回一个token => 
 * 
 * 拿到token 派发LOGIN_SUCCESS 返回{token: action.payload} =》 
 * 
 * 监听退出动作LOGOUT
 */
