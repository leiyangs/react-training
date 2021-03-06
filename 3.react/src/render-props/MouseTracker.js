// render props 就是一个组件他的属性是一个函数，即index中如下render={(props) => <CatPicture {...props}/>}
/**
 * {
    (props) => <CatPicture {...props}/>
  }
 */

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
      <div onMouseMove={this.handleMouseMove}>
        {/* 这里的state传给了MouseTrack组建的儿子，也就是(props) => <CatPicture {...props}/>中形参props 再由形参传入CatPicture*/}
        {this.props.render({x:this.state.x, y:this.state.y})}
      </div>
    )
  }
}
