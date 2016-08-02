import React, { Component } from 'react';

class Demo09 extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = { value : 'Hello!' };
  }

  handleChange(event) {
    this.setState({ value : event.target.value });
  }

  render() {
    const value = this.state.value;
    return(
      <div>
        <input type="text" value={value} onChange={this.handleChange.bind(this)} />
        <p>{value}</p>
      </div>
    );
  }
}

export default Demo09;
