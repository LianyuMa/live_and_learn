import React from 'react';
import './App.css';
import { Link, RouterHandler } from 'react-router';

export default function App() {
  return (
    <div>
      <header>
        <ul>
          <li><Link to="home">Home</Link></li>
          <li><Link to="about">About</Link></li>
        </ul>
      </header>
      <RouterHandler />
    </div>
  );
}
