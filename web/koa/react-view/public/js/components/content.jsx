const Create = require('./create');
const Item = require('./item');
const React = require('react');

const Content = React.createClass({
  propTypes: {
    list: React.PropTypes.array,
  },

  getInitialState: () => {
    return {
      list: this.props.list,
    };
  },

  render: () => {
    return (
      <div>
        <ul>
          {this.state.list.map((content, index) => {
            return <Item content={content} key={index} remove={this.remove.bind(this, index)} />; 
          })}
        </ul>
        <Create add={this.add} />
      </div>
    );
  },

  add: (content) => {
    this.setState({
      list: this.state.list.concat(content),
    });
  },

  remove: (index) => {
    console.log(index, this.state.list);
    this.state.list.splice(index, 1);
    this.setState({
      list: this.state.list,
    });
  },
});

module.exports = Content;
