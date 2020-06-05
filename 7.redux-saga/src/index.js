import React from 'react';
import ReactDOM from 'react-dom';
import store from './store'
import Counter from './components/Counter'
import Login from './components/Login'
import { Provider } from 'react-redux'

ReactDOM.render(<Provider store={store}><Login/></Provider>,
  document.getElementById('root')
);

