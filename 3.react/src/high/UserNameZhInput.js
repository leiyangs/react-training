import React, { Component } from 'react'
import WithLocal from './WithLocal'
import WithAjax from './WithAjax'
// 复杂的高阶组件 多层嵌套
class UserNameZhInput extends Component {
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
let UserNameZhInputWithAjax = WithAjax(UserNameZhInput);
let UserNameZhInputWithLocal = WithLocal(UserNameZhInputWithAjax, 'username');
export default UserNameZhInputWithLocal
