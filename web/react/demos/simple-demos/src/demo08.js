import React, { Component } from 'react';


class Demo08 extends Component {
  // getInitialState() {
  //   return { liked: false };
  // }

  constructor(props, context) {
    super(props, context);

    this.state = { liked: false };
  }

  handleClick() {
    this.setState({ liked: !this.state.liked });
  }

  render() {
    var text = this.state.liked ? 'like' : 'haven\'t liked';
    return (
      <p onClick={this.handleClick.bind(this)}>
        You {text} this. Click to toggle.
      </p>
    );
  }
}

export default Demo08;
