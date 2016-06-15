import React from 'react';
import App from './App.js';
import Home from './Home';
import About from './About';
import ReactDOM from 'react-dom';
import Router from 'react-router';
import { DefaultRoute, Route, Routes } from 'react-router';

class MyComponent extends React.Component {
  render() {
    return (
  <Route name="app" path="/" handler={ App }>
    <Route name="about" hander={ About } />
    <DefaultRoute name="home" hander={ Home } />
  </Route>
    );

  }
}

ReactDOM.render(<MyComponent />, document.getElementById('react-server'));
