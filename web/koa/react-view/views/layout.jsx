const React = require('react');
const Layout = React.createClass({
  propTypes: {
    title: React.PropTypes.string
  },

  render: () => {
    render (
      <html>
        <head>
          <title>{this.props.title}</title>
          <link rel="stylesheet" href="/css/main.css" />
        </head>
        <body>
          {this.props.children}
          <script src="../public/js/bundle.js"></script>
        </body>
      </html>
    );
  },
});

module.exports = Layout;
