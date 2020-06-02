import React, { Component } from 'react'
import { Link, Route, Redirect, Switch } from '../react-router-dom'
import UserList from './UserList'
import UserAdd from './UserAdd'
import UserDetail from './UserDetail'
import MenuLink from './MenuLink'

export default class User extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-2">
          <ul className="nav nav-stacked">
            <li>
              <MenuLink to="/user/list">用户列表</MenuLink>
              {/* <Link to="/user/list">用户列表</Link> */}
            </li>
            <li>
              <MenuLink to="/user/add">添加用户</MenuLink>
              {/* <Link to="/user/add">添加用户</Link> */}
            </li>
          </ul>
        </div>
        <div className="col-md-10">
          <Switch>
            <Route path="/user/list" component={UserList}></Route>
            <Route path="/user/add" component={UserAdd}></Route>
            <Route path="/user/detail/:id" component={UserDetail}></Route>
            <Redirect to="/user/list"></Redirect>
          </Switch>
        </div>
      </div>
    )
  }
}
