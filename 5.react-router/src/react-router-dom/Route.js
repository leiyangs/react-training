import React, { Component } from 'react'
import Context from './context'
import { pathToRegexp } from 'path-to-regexp'

export default class Route extends Component {
  static contextType = Context;
  render() {
    let { pathname } = this.context.location;
    let { path='/', component: Component, exact=false } = this.props; //<Route path="/" component={Home} exact></Route>解构组件中传入的参数
    // 传给组件的props(location, history, match)
    let props = {
      location: this.context.location
    }
    // 通过正则匹配url
    let paramNames = [];
    let reg = pathToRegexp(path, paramNames, {end:exact});
    let result = pathname.match(reg);
    if(result) {
      return <Component {...props}/>
    }
    return null;
  }
}
