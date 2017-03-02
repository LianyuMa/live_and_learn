/* React.DOM */
var MessagePanel = React.createClass({
  render: function () {
    return <div className='collapse in'>{this.props.children}</div>
  }
});

MessagePanel.Heading = React.createClass({
  render: function () {
    return <h2>{this.props.text}</h2>
  }
});

MessagePanel.Content = React.createClass({
  render: function () {
    return <div className='well'>{this.props.children}</div>
  }
});


var MyApp = React.createClass({
  getInitialState: function () {
    return {
      collapse: false
    };
  },

  handleToggle: function () {
    var nextState = !this.state.collapse;
    this.setState({collapse: nextState});
  },

  render: function() {
    var showhideToggle = this.state.collapse ?
      (<MessagePanel>
        <MessagePanel.Heading text='Show/Hide' />
        <MessagePanel.Content>
          Phasellus sed velit venenatils, suscipit eros a, laoreet dui.
        </MessagePanel.Content>
      </MessagePanel>)
      : null;
      return (<div>
        <h1>Namespaced Components Demo</h1>
        <p><button onClick={this.handleToggle} className="btn btn-primary">Toggle</button></p>
        {showhideToggle}
      </div>)
  }
});

ReactDOM.render(<MyApp/>, document.getElementById('toggle-example'));
