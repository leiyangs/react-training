import React, { Component } from 'react'

// 解决问题：页面增加内容，滚动条会跟着滚动，如何固定滚动条
// getSnapshotBeforeUpdate() 被调用于render之后，可以读取但无法使用DOM的时候。它使您的组件可以在可能更改之前从DOM捕获一些信息（例如滚动位置）。此生命周期返回的任何值都将作为参数传递给componentDidUpdate()
export default class getSnapshotBeforeUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {messages: []};
  }
  addMessage() {
    this.setState(state => ({
      messages: [`${state.messages.length}`, ...state.messages]
    }))
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      this.addMessage();
    },1000)
  }
  componentWillUnmount() { //清除定时器
    window.clearInterval(this.timer);
  }
  render() {
    let style = {
      width: '100px',
      height: '200px',
      border: '1px solid red',
      overflow: 'auto'
    }
    return (
      <div style={style}>
        {
          this.state.messages.map((message, index) => ( // 相当于 { return <div key={index}>{message} </div> }
            <div key={index}>{message} </div>
          ))
        }
      </div>
    )
  }
}
