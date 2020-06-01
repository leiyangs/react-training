import React, { Component } from 'react'
import local from '../local'
import { Link } from '../react-router-dom';

export default class UserList extends Component {
  state = {userlist: []}
  componentDidMount() {
    let userlist = local.getList();
    this.setState({userlist});
  }
  render() {
    return (
      <ul className="list-group">
        {
          this.state.userlist.map((item) => {
          return <li className="list-group-item" key={item.id}>姓名：
            <Link to={{pathname:`/user/detail/${item.id}`, state:item}}>{item.username}</Link> 邮箱：{item.email}
            </li>
          })
        }
      </ul>
    )
  }
}
