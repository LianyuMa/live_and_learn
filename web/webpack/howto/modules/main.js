const App = require('./App');
const Home = require('./Home');
const About = require('./About');
const React = require('react');
const Router = require('react-router');
const {DefaultRoute, Route, Routes} = Router;

const routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="about" handler={About} />
    <DefaultRoute name="home" handler={Home} />
  </Route>
);

Router.run(routes, Router.HistoryLocation, (Handler) => {
  React.render(<Handler/>, document.body);
});
