import React from 'react';
import ReactDOM from 'react-dom';
import App from './modules/App';
import { Router, Route, hashHistory } from 'react-router';

// ReactDOM.render(<App />, document.getElementById('app'));

render((
  <Router history={hashHistory}>
    <Router path="/" component={App} />
  </Router>
), document.getElementById('app'));
