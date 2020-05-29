import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Link } from './react-router-dom' // HashRouter BrowserRouter
import Home from './components/Home'
import User from './components/User'
import Profile from './components/Profile'

// Link中to有两种写法 字符串和对象 
ReactDOM.render(
  <Router>
    <>
      <nav>
        <Link to="/"> 首页 </Link> {/* <a href="#/">首页</a> */}
        <Link to={{pathname: '/user', state: {title: '用户管理'}}}> 用户管理 </Link>
        <Link to="/profile"> 个人中心 </Link>
      </nav>
      <Route path="/" component={Home} exact></Route>
      <Route path="/user" component={User}></Route>
      <Route path="/profile" component={Profile}></Route>
    </>
  </Router>,
  document.getElementById('root')
);

