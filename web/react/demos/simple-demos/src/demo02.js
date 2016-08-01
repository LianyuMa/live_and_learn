import React, { Component } from 'react';

const names = ['Alice', 'Emily', 'Kate'];

class Demo02 extends Component {
  render() {
    return(
      <div>
      {
        names.map((name) => <div>Hello, {name}!</div>)
      }
      </div>
    );
  }
}

export default Demo02;
