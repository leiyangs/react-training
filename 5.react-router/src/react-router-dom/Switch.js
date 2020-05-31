import React, { Component } from 'react'
import context from './context'
import { pathToRegexp } from 'path-to-regexp'

export default class Switch extends Component {
  static contextType = context;
  render() {
    let { pathname } = this.context.location;
    let children = Array.isArray(this.props.children)?this.props.children:Array.from(this.props.children);
    for (let i = 0; i < children.length; i++) {
      let child = children[i];
      let { path='/', exact=false } = child.props;
      let paramNames = [];
      let reg = pathToRegexp(path, paramNames, {end: exact})
      let result = pathname.match(reg);
      if(result) return child;
    }
    return null;
  }
}
