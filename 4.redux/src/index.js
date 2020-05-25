import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from './react-redux';
import store from './store'
import Counter from './components/Counter';
import Counter1 from './components/Counter1';
import Counter2 from './components/Counter2';
// Provider可以给组件提供store，不需要在每个组件中引用store
ReactDOM.render((
  <Provider store={store}>
    <Counter/><Counter1/><Counter2/>
  </Provider>
), document.getElementById('root'));
