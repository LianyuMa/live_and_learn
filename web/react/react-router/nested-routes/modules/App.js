import React from 'react';
import { Link } from 'react-router';

export default class App extends React.Component {
  render() {
    if (!this.props.app) return null;
    return (
      <div>
        <h1>React Router Tutorial</h1>
        <ul role="navigation">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/repos">Repos</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}
