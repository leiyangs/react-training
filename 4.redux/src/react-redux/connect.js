import React, { Component } from 'react'
import { bindActionCreators } from '../redux'
import ReduxContext from './context'
// 会执行两次，高阶组件返回一个组件
export default function(mapStateToProps, mapDispatchToProps) {
  return function(WrappedComponent) {
    return class extends Component {
      static contextType = ReduxContext;
      constructor(props, context) {
        super(props);
        this.state = mapStateToProps(context.store.getState());
      }
      componentDidMount() {
        this.unsubscribe = this.context.store.subscribe(() =>
          this.setState(mapStateToProps(this.context.store.getState()))
        );
      }
      componentWillUnmount() {
        this.unsubscribe();
      }
      render() {
        let actions = bindActionCreators(
          mapDispatchToProps,
          this.context.store.dispatch
        );
        return <WrappedComponent {...this.state} {...actions} />;
      }
    }
  }
}