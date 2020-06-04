import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home'
import Counter from './components/Counter'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import { ConnectedRouter } from 'connected-react-router'
import history from './history'

ReactDOM.render(<Provider store={store}><Router>
  <ConnectedRouter history={history}>
    <Link to="/">Home</Link>
    <Link to="/counter">Counter</Link>
    <hr/>
    <Route path="/" component={Home} exact/>
    <Route path="/counter" component={Counter}/>
  </ConnectedRouter>
</Router></Provider>,
  document.getElementById('root')
);
