import React, { Component } from 'react'

export class PersistGate extends Component {
  componentDidMount() {
    // 原理就是从localstorage中获取数据，然后同步到仓库中
    this.props.persistor.initState();
  }
  render() {
    return this.props.children;
  }
}
