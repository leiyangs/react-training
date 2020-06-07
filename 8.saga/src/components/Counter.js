import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../store/actions'

class Counter extends Component {
  render() {
    return (
      <>
        <p>{this.props.number}</p>
        <button onClick={this.props.increment}>+</button>
        <button onClick={this.props.asyncincrement}>ASYNC_INCREMENT+</button>
        <button onClick={this.props.decrement}>-</button>
      </>
    )
  }
}

export default connect(
  state =>state.counter,
  actions
)(Counter)
