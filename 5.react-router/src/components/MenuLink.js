// 这个组件相对于Link多了一个功能，当前地址栏路径和自己匹配的话，加一个类名
import React from 'react'
import { Route, Link } from '../react-router-dom'
import './MenuLink.css';
// require('./MenuLink.css');
// 在Route中要想指定渲染的内容有三种方式：component render children
// 1、component和render只有在路径匹配的时候才会渲染，负责不渲染
// 2、children不管路径是否匹配，都会渲染 并且匹配上的props.match里边有值
export default function({to, exact, children}) {
  return (
    <Route path={to} exact={exact} children={
    props=>{
      return <Link to={to} className={props.match?'bg-active text-active':''}>{children}</Link>
    }
    }/>
  ) 
}