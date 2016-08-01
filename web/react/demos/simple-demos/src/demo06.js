import React, { Component } from 'react';

class Demo06 extends Component {
  render() {
    return <h1>{this.props.title}</h1>;
  }
}

Demo06.propTypes = {
  title : React.PropTypes.string.isRequired,
}

Demo06.defaultProps = {
  title: 'PropTypes',
}

export default Demo06;
