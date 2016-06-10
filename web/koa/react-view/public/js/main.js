const Content = require('./components/content');
const unescapeHtml = require('unescape-html');
const React = require('react');

function initApp() {
  const container = document.getElementById('content');
  let list = unescapeHtml(window.__list__);
  list = JSON.parse(list);

  React.render(
    <Content list={list}/>,
    container
  );
}

initApp();
