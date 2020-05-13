import React, { Component } from 'react'

export default class MouseTracker extends Component {
  constructor() {
    super();
    this.state={x:'',y:''}
  }
  handleMouseMove = (e) => {
    this.setState({
      x: e.clientX,
      y: e.clientY
    })
  }
  render() {
    return (
      <div>
        <p onMouseMove={this.handleMouseMove}>请移动鼠标</p>
        <p>当前鼠标位置是 x:{this.state.x}y:{this.state.y}</p>
      </div>
    )
  }
}
