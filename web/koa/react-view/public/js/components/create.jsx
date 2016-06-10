const React = require('react');
const ENTER_KEY_CODE = 13;

const Create = React.createClass({
  propTypes: {
    add: React.PropTypes.func,
  },

  getInitialState: () => {
    return {
      value: '',
    };
  },

  render: () => {
    return (
      <div className="create-box">
        <input
          type="text"
          placeholder="press enter to save"
          onKeyDown={this._onKeyDown}
          onChange={this._onChange}
          value={this.state.value}/>
      </div>
    );
  },

  _onKeyDown: (event) => {
    if (event.keyCode === ENTER_KEY_CODE) this.save();
  },

  _onChange: (event) => {
    this.state.value = event.target.value;
    this.setState({
      value: event.target.value,
    });
  },

  save: () => {
    if (!this.state.value) return;
    this.props.add(this.state.value);
    this.setState({
      value: '',
    });
  },
});

module.exports = Create;
