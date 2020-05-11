import React from 'react';
import ReactDOM from 'react-dom';
import LifeCycle from './components/getDerivedStateFromProps';
import Counter from './components/NewLifeCycle';
import GetSnapshotBeforeUpdate from './components/getSnapshotBeforeUpdate';
// import OldContext from './context/OldContext';
// import NewContext from './context/NewContext';
import Pure from './pure/Pure';
import Logger from './high/Logger';
import UserNameInput from './high/UserNameInput';
import EmailInput from './high/EmailInput';

// let element = React.createElement('span', {id: 'id', className: 'class', style: {color: 'red'}}, 11)
ReactDOM.render(
  <div>
    <UserNameInput/>
    <EmailInput/>
  </div>,
  document.getElementById('root')
);
