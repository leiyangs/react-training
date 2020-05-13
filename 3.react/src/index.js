import React from 'react';
import ReactDOM from 'react-dom';
// import LifeCycle from './components/getDerivedStateFromProps';
// import Counter from './components/NewLifeCycle';
// import GetSnapshotBeforeUpdate from './components/getSnapshotBeforeUpdate';
// import OldContext from './context/OldContext';
// import NewContext from './context/NewContext';
// import Pure from './pure/Pure';
// import Logger from './high/Logger';
// import UserNameInput from './high/UserNameInput';
// import EmailInput from './high/EmailInput';
// import UserNameZhInput from './high/UserNameZhInput';
import MouseTracker from './render-props/MouseTracker'
import CatPicture from './render-props/CatPicture'

// let element = React.createElement('span', {id: 'id', className: 'class', style: {color: 'red'}}, 11)
ReactDOM.render(
  <div>
    {/* <UserNameZhInput/>
    <UserNameInput/>
    <EmailInput/> */}
    {/* <MouseTracker>
      {
        (props) => <CatPicture {...props}/>
      }
    </MouseTracker> */}
    <MouseTracker render={(props) => <CatPicture {...props}/>}/>
  </div>,
  document.getElementById('root')
);
