import React, { Component } from 'react'
import { Prompt } from '../react-router-dom'
import local from '../local'

export default class UserAdd extends Component {
  state = {blocking: false}
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
        <Prompt
          when={this.state.blocking}
          message={location=>`你确定要跳转到${location.pathname}吗?`}
        />
        <div className="form-group">
          <label className="control-label">用户名</label>
          <input className="form-control" ref={this.usernameRef} onChange={event=>this.setState({blocking: this.state.blocking || event.target.value.length>0})}></input>
        </div>
        <div className="form-group">
          <label className="control-label">邮箱</label>
          <input className="form-control" ref={this.emailRef} onChange={event=>this.setState({blocking: this.state.blocking || event.target.value.length>0})}></input>
        </div>
        <div className="form-group">
          <button className="btn btn-primary" type="submit" onClick={this.handleSubmit}>提交</button>
        </div>
      </form>
    )
  }
}
