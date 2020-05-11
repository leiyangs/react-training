import React, { Component } from 'react'
import WithLocal from './WithLocal'
// 复杂的高阶组件
class UserNameInput extends Component {
  componentWillMount() {
    localStorage.setItem('username', 'yang')
  }
  render() {
    return (
      <div>
        <input defaultValue={this.props.value}/>
      </div>
    )
  }
}

export default WithLocal(UserNameInput, 'username');
