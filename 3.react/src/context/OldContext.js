import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    return <div style={{border: '5px solid green', padding: '15px'}}>
      Header
      <Title></Title>
    </div>
  }
}
class Title extends Component {
  // 表示指定要获取那些上下文对象
  static childContextTypes = {
    color: 'string',
    setColor: 'function'
  }
  render() {
    return <div style={{border: '5px solid blue', padding: '15px', color: this.context}}>
      Title
    </div>
  }
}
class Main extends Component {
  render() {
    return <div style={{border: '5px solid orange', padding: '15px'}}>
      Main
      <Content></Content>
    </div>
  }
}
class Content extends Component {
  static contextTypes = {
    color: PropTypes.string,
    name: PropTypes.string,
    age: PropTypes.number
  }
  render() {
    return <div style={{border: '5px solid black', padding: '15px'}}>
      Content
    </div>
  }
}
export default class OldContext extends Component {
  // 定义子上下文对象的属性和类型
  static childContextTypes = {
    color: 'string',
    setColor: 'function'
  }
  // 返回或者说定义真正的上下文
  getChildContext() {
    return {
      color: this.state.color,
      setColor: this.setColor
    }
  }
  constructor(props) {
    super(props);
    this.state = { color: 'gray' }
  }
  render() {
    return (
      <div style={{border: '5px solid red', padding: '15px'}}>
        <Header>
          <Title></Title>
        </Header>
        <Main>
          <Content></Content>
        </Main>
      </div>
    )
  }
}
