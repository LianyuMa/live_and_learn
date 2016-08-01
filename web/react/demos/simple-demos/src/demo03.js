import React, { Component } from 'react';

const arr = [
  <h1>Hello world</h1>,
  <h2>React is awesome</h2>
];

class Demo03 extends Component {
  render() {
    return(
      <div>{arr}</div>
    )
  }
}

export default Demo03;
