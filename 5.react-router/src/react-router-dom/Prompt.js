import React, { Component } from 'react'
import context from './context'

export default class Prompt extends Component {
  static contextType = context;
  componentWillUnmount() {
    this.context.history.block(null);
  }
  render() {
    let history = this.context.history;
    const {when, message} = this.props;
    if(when) {
      history.block(message);
    }else {
      history.block(null);
    }
    return null;
  }
}
