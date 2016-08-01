import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import Demo01 from './demo01';
import Demo02 from './demo02';
import Demo03 from './demo03';
import './index.css';

ReactDOM.render(
  <div>
    <App />
    <Demo01 />
    <Demo02 />
    <Demo03 />
  </div>,
  document.getElementById('root')
);
