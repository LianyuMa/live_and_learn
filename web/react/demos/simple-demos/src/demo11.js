import React, { Component } from 'react';
import $ from 'jquery';

class Demo11 extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      username: '',
      lastGistUrl: '',
    };
  }

  componentDidMount() {
    $.get(this.props.source, (result) => {
      const lastGist = result[0];
      // if (this.isMounted()) {
        this.setState({
          username: lastGist.owner.login,
          lastGistUrl: lastGist.html_url
        });
      // }
    });
  }

  render() {
    return (
      <div>
        {this.state.username}'s last gist is 
        <a href={this.state.lastGistUrl}>here</a>
      </div>
    );
  }
}

export default Demo11;
