import React, { Component } from 'react';

class Demo12 extends Compnent {
  constructor(props, context) {
    super(props, context);

    this.state = {
      loading: true,
      error: null,
      data: null
    }

    componentDidMount() {
      this.props.promise.then(
        value => this.setState({ loading : false, data : value }),
        error => this.setState({ loading : false, error })
      );
    }

    render() {
      if (this.state.loading) {
        return <span>Loading...</span>
      }
      else if (this.state.error !== null) {
        return <span>Error: {this.state.error.message}</span>
      }
      else {
        const repo = this.state.data.items;
        const repoList = repos.map((repo, index) {
          return (
            <li key={index}><a href={repo.html_url}>{repo.name}</a> ({repo.stargazers_count} stars) <br /> {repo.description}</li>
          );
        });
        return (
          <main>
            <h1>Most Popular JavaScript Projects in Github</h1>
            <ol>{repoList}</ol>
          </main>
        );
      }
    }
  }
}
