function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default' : obj }; }
import _react from 'react';
const _react2 = _interopRequireDefault(_react);
import _reactDom from 'react-dom';
const _reactDom2 = _interopRequireDefault(_reactDom);
import _app from './app';
const _app2 = _interopRequireDefault(_app);

_reactDom2['default'].render(_react2['default'].createElement(_app2['default'], { items: window.APP_PROPS.items }), document.getElementById('content'));
