import React, { Component } from 'react'

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { number: 0 };
  }
  add = () => {
    this.setState({number: this.state.number+1});
  }
  render() {
    return (
      <div>
        <p>{this.state.number}</p>
        <button onClick={this.add}>+</button>
        <SubCounter/>
      </div>
    )
  }
}

class SubCounter extends Component {
  constructor(props) {
    super(props)
    this.state = {number: 0}
  }
  // 根据新的属性对象派生状态对象 
  static getDerivedStateFromProps(nextProps, prevState) {
    return {date:Date.now()};
  }
  render() {
    return (
      <div>
        {this.state.number} {this.state.date}
      </div>
    )
  }
}
