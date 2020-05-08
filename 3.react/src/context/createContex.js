import React, { Component } from 'react'
function createContext() {
  class Provider extends Component {  // 类组件用的
    static value;
    constructor(props) {
      Provider.value = props.value; // 保存value值
    }
    render() {
      return this.props.children;
    }
  }
  class Consumer extends Component {
    render() {
      return this.props.children(Provider.value);
    }
  }
}