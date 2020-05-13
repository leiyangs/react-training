import React, { Component } from 'react'

export default class CatPicture extends Component {
  render() {
    return (
      <>
        <img src="http://localhost:3000/cat.jpg"/>
        <p>当前鼠标位置是 x={this.props.x}y={this.props.y}</p>
      </>
    )
  }
}
