import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Link } from './react-router-dom' // HashRouter BrowserRouter
import Home from './components/Home'
import User from './components/User'
import Profile from './components/Profile'
import Protected from './components/Protected'
import Login from './components/Login'
import MenuLink from './components/MenuLink'
import 'bootstrap/dist/css/bootstrap.css'

// Link中to有两种写法 字符串和对象 
ReactDOM.render(
  <Router>
    <>
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-heading">
          <a className="navbar-brand">ERP管理系统</a>
        </div>
        <ul className="nav navbar-nav">
          <li>
            <MenuLink to="/" exact> 首页 </MenuLink>
            {/* <Link to="/"> 首页 </Link> <a href="#/">首页</a> */}
          </li>
          <li>
            <MenuLink to="/user"> 用户管理 </MenuLink>
            {/* <Link to={{pathname: '/user', state: {title: '用户管理'}}}> 用户管理 </Link> */}
          </li>
          <li>
            <MenuLink to="/profile"> 个人中心 </MenuLink>
            {/* <Link to="/profile"> 个人中心 </Link> */}
          </li>
          <li>
            <MenuLink to="/login"> 登录 </MenuLink>
            {/* <Link to="/login"> 登录 </Link> */}
          </li>
          <li> 
            <a onClick={()=>localStorage.removeItem('islogin')}>退出</a>
           </li>
        </ul>
      </div>
    </nav>
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-xs-12">
        <Route path="/" component={Home} exact></Route>
        <Route path="/user" component={User}></Route>
        {/* <Route path="/profile" component={Profile}></Route> */}
        <Protected path="/profile" component={Profile}></Protected>
        <Route path="/login" component={Login}></Route>
        </div>
      </div>
    </div>
    </>
  </Router>,
  document.getElementById('root')
);

