import React, { Component } from 'react'
import { createStore } from 'redux'

let initState = 0;
let INCREMENT = 'INCREMENT';
let DECREMENT = 'DECREMENT';
function reducer(state, action) {
  switch(action.type){
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
}
let store = createStore(reducer, initState);
let state = store.getState();
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
        <button onClick={()=>store.dispatch({type: INCREMENT})}>+</button>
        <button onClick={()=>store.dispatch({type: DECREMENT})}>-</button>
      </div>
    )
  }
}
