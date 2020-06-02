import React, { Component } from 'react'
import {WithRouter} from '../react-router-dom'

class NavHeader extends Component {
  render() {
    return (
      <div className="navbar-heading">
        <a onClick={()=>this.props.history.push('/')} className="navbar-brand">ERP管理系统</a>
      </div>
    )
  }
}
export default WithRouter(NavHeader);
