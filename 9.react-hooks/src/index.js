import React from 'react';
import ReactDOM from 'react-dom';
import {Counter, Counter1, Counter2} from './components/Counter'

ReactDOM.render(<>
    <Counter/><Counter1/><Counter2/>
  </>,
  document.getElementById('root')
);
