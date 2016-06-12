const React = require('react');
const {Link, RouteHandler} = require('react-router');

require('./App.css');

const App = React.createClass({
  render: () => {
    return (
      <div>
        <header>
          <ul>
            <li><Link to="home">Home</Link></li>
            <li><Link to="about">About</Link></li>
          </ul>
        </header>

        <RouteHandler />
      </div>
    );
  },
});

module.exports = App;
