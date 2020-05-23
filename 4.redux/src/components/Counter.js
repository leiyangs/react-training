import React, { Component } from 'react'
import { createStore } from 'redux' // , bindActionCreators
import { bindActionCreators } from '../redux' // 实现bindActionCreators
import store from '../store'
import actions from '../store/action'

let state = store.getState();

const boundActions = bindActionCreators(actions,store.dispatch);  // 官方的可以传入一个actions对象，也可以传入函数
export default class Counter extends Component {
  state = { number: state };
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState({number: store.getState()})
    })
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    return (
      <div>
        <p>{this.state.number}</p>
        <button onClick={boundActions.increment}>+</button>
        <button onClick={boundActions.decrement}>-</button>
      </div>
    )
  }
}
