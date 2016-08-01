import React, { Component } from 'react';

const HelloMessage = React.createClass({
  render() {
    return <h1>Hello {this.props.name}</h1>;
  }
});

class Demo04 extends Component {
  render() {
    return <HelloMessage name="John" />;
  }
}

export default Demo04;
