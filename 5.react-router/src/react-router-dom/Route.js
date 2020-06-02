import React, { Component } from 'react'
import Context from './context'
import { pathToRegexp } from 'path-to-regexp'

export default class Route extends Component {
  static contextType = Context;
  render() {
    let { pathname } = this.context.location;
    let { path='/', component: Component, exact=false, render, children } = this.props; //<Route path="/" component={Home} exact></Route>解构组件中传入的参数
    // 传给组件的props(location, history, match)
    let props = {
      location: this.context.location,
      history: this.context.history,
    }
    // 通过正则匹配url
    let paramNames = [];
    let reg = pathToRegexp(path, paramNames, {end:exact});
    let result = pathname.match(reg);
    if(result) {
      // console.log(paramNames) [{modifier: "",name: "id",pattern: "[^\/#\?]+?",prefix: "/",suffix: ""}]
      paramNames = paramNames.map(item=>item.name); // ['id']
      let [url, ...values] = result;
      let params = {}
      for (let i = 0; i < paramNames.length; i++) {
        params[paramNames[i]] = values[i];
      }
      props.match = {
        isExact: url===path,
        params,
        path,
        url,
      }
      if(Component) { // 如果传入是组件，直接渲染
        return <Component {...props}/>
      }else if(render) { // 如果传了render(受保护的路由)
        return render(props);
      }else if(children) { // 如果有children(自定义导航)
        return children(props);
      }else {
        return null;
      }
    }else { // 如果没匹配到有children也会渲染
      if(children) { // 如果有children(自定义导航)
        return children(props);
      }else {
        return null;
      }
    }
  }
}
