import React, { Component } from 'react'
// import { createStore } from 'redux' // , bindActionCreators
// import { bindActionCreators } from '../redux' // 实现bindActionCreators
// import store from '../store'
import actions from '../store/actions/counter'
import {connect} from 'react-redux'

// let state = store.getState().counter;

// const boundActions = bindActionCreators(actions,store.dispatch);  // 官方的可以传入一个actions对象，也可以传入函数
class Counter extends Component {
  // state = { number: state };
  // componentDidMount() {
  //   this.unsubscribe = store.subscribe(() => {
  //     // store.getState()  == {counter:0, counter1: 0, counter2:0}
  //     this.setState({number: store.getState().counter})
  //   })
  // }
  // componentWillUnmount() {
  //   this.unsubscribe();
  // }
  render() {
    return (
      <div>
        {/* <p>{this.state.number}</p> */}
        <p>{this.props.number}</p>
        {/* boundActions.increment boundActions.decrement */}
        <button onClick={this.props.increment}>+</button>
        <button onClick={this.props.asyncincrement}>延时+</button>
        <button onClick={this.props.decrement}>-</button>
      </div>
    )
  }
}
const mapStateToProps = state=>({number:state.counter}); // 就是this.props的返回值  必须返回的是一个对象
// connect用来连接仓库和组件
export default connect(
  mapStateToProps,
  actions,
  // mapDispathtoProps
)(Counter)
