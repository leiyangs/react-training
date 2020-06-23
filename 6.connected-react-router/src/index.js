import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home'
import Counter from './components/Counter'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { Provider } from 'react-redux'
import {store, persistor} from './store'
import { ConnectedRouter } from 'connected-react-router'
import history from './history'
import { PersistGate } from './redux-persist/integration/react'  // integration集成，不单单是集成了react

ReactDOM.render(<Provider store={store}>
  {/* persistor加强版的仓库，提供了一个方法 */}
  <PersistGate persistor={persistor}>
    <ConnectedRouter history={history}>
      <Link to="/">Home</Link>
      <Link to="/counter">Counter</Link>
      <hr/>
      <Route path="/" component={Home} exact/>
      <Route path="/counter" component={Counter}/>
    </ConnectedRouter>
  </PersistGate>
</Provider>,
  document.getElementById('root')
);
