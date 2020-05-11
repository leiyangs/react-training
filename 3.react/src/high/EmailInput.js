import React, { Component } from 'react'
import WithLocal from './WithLocal'
// 复杂的高阶组件
class EmailInput extends Component {
  componentWillMount() {
    localStorage.setItem('email', 'yang@qq.com')
  }
  render() {
    return (
      <div>
        <input defaultValue={this.props.value}/>
      </div>
    )
  }
}
export default WithLocal(EmailInput, 'email');
