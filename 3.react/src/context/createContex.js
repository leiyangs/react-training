import React, { Component } from 'react'
function createContext() {
  class Provider extends Component {
    static value;
    constructor(props) {
      Provider.value = props.value; // 保存value值
    }
    render() {
      return this.props.children;
    }
  }
}