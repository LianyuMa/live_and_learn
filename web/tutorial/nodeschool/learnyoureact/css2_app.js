import React from 'react';
import ReactDOM from 'react-dom';
import TodoBox from './views/index_css2.jsx';

const data = JSON.parse(document.getElementById('initial-data').getAttribute('data-json'));
ReactDOM.render(<TodoBox data={data} />, document.getElementById('app'));
