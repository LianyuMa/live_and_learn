import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import App from './App';
import Demo01 from './demo01';
import Demo02 from './demo02';
import Demo03 from './demo03';
import Demo04 from './demo04';
import Demo05 from './demo05';
import Demo06 from './demo06';
import Demo07 from './demo07';
import Demo08 from './demo08';
import Demo09 from './demo09';
import Demo10 from './demo10';
import Demo11 from './demo11';
import Demo12 from './demo12';
import './index.css';

ReactDOM.render(
  <div>
    <App />
    <Demo01 />
    <Demo02 />
    <Demo03 />
    <Demo04 />
    <Demo05 />
    <Demo06 />
    <Demo07 />
    <Demo08 />
    <Demo09 />
    <Demo10 />
    <Demo11 />
    <Demo12 promise={$.getJSON('https://api.github.com/search/repositories?q=javascript&sort=stars')}></Demo12>
  </div>,
  document.getElementById('root')
);
