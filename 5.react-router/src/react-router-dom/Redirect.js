import { Component } from 'react'
import context from './context'

export default class Redirect extends Component {
  static contextType = context;
  render() {
    this.context.history.push(this.props.to);
    return null;
  }
}
