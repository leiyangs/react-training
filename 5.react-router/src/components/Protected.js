import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
// rest = {path:profile,exact:true}
export default function Protected({component: Component, ...rest}) {
  return (
    <Route {...rest} render={
      // 如果是先访问其他页面，然后登录后自动跳转到from也就是之前访问的页面
      props => localStorage.getItem('islogin')?<Component {...props}/>:<Redirect to={{pathname:'/login', state:{from:props.location.pathname}}}></Redirect>
    }/>
  )
}
