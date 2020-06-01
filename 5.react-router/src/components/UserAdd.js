import React, { Component } from 'react'
import local from '../local'

export default class UserAdd extends Component {
  constructor() {
    super();
    this.usernameRef = React.createRef();
    this.emailRef = React.createRef();
  }
  handleSubmit = (event) => {
    event.preventDefault(); // 阻止默认事件
    let username = this.usernameRef.current.value;
    let email = this.emailRef.current.value;
    let formdata = {id: Date.now(), username, email};
    local.add(formdata);
    this.props.history.push('/user/list')
  }
  render() {
    return (
      <form>
        <div className="form-group">
          <label className="control-label">用户名</label>
          <input className="form-control" ref={this.usernameRef}></input>
        </div>
        <div className="form-group">
          <label className="control-label">邮箱</label>
          <input className="form-control" ref={this.emailRef}></input>
        </div>
        <div className="form-group">
          <button className="btn btn-primary" type="submit" onClick={this.handleSubmit}>提交</button>
        </div>
      </form>
    )
  }
}
