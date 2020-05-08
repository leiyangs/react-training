import React from 'react';
import ReactDOM from 'react-dom';
import LifeCycle from './components/getDerivedStateFromProps';
import Counter from './components/NewLifeCycle';
import GetSnapshotBeforeUpdate from './components/getSnapshotBeforeUpdate';
// import OldContext from './context/OldContext';
// import NewContext from './context/NewContext';
import Pure from './pure/Pure';

// let element = React.createElement('span', {id: 'id', className: 'class', style: {color: 'red'}}, 11)
ReactDOM.render(
  <Pure/>,
  document.getElementById('root')
);
