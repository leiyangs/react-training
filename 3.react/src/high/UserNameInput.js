import React, { Component } from 'react'
import WithLocal from './WithLocal'
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
