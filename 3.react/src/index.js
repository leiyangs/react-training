import React from 'react';
import ReactDOM from 'react-dom';
import LifeCycle from './components/getDerivedStateFromProps';
import Counter from './components/NewLifeCycle';

// let element = React.createElement('span', {id: 'id', className: 'class', style: {color: 'red'}}, 11)
ReactDOM.render(
  <Counter name="计数器"/>,
  document.getElementById('root')
);
