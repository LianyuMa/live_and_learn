const Content = require('../public/js/components/content');
const escapeHtml = require('escape-html');
const Layout = require('./layout');
const React = require('react');
const ReactDOMServer = require('react-dom/server');

const index = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    list: React.PropTypes.array,
  },

  render: () => {
    const dataScript = `window.__list__ = '${escapeHtml(JSON.stringify(this.props.list))}';`;
    const contentString = ReactDOMServer.renderToString(<Content list={this.props.list} />);

    return (
      <Layout title={this.props.title}>
        <h1>{this.props.title}</h1>
        <div id="content" dangerouslySetInnerHTML={{__html: contentString}}>
        </div>
        <script dangerouslySetInnerHTML={{__html: dataScript}}></script>
      </Layout>
    );
  },
});

module.exports = index;
