import React, { Component } from 'react'
import Context from './context'

export default class Route extends Component {
  static contextType = Context;
  render() {
    let { pathname } = this.context.location;
    let { path='/', component: Component, exact=false } = this.props;
    if(pathname === path) {
      return <Component/>
    }
    return null;
  }
}
