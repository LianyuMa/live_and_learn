import React, { Component } from 'react';

const NotesList = React.createClass({
  render() {
    return(
      <ol>
      {
        React.Children.map(this.props.children, (child) => {return <li>{child}</li>;})
      }
      </ol>
    );
  }
});

class Demo05 extends Component {
  render() {
    return(
      <NotesList>
        <span>Hello</span>
        <span>world</span>
      </NotesList>
    );
  }
}

export default Demo05;
