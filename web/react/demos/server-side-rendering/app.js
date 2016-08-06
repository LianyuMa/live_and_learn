Object.defineProperty(exports, '__esModule', {
  value: true
});

const _createClass = () => { function defineProperties(target, props) { for (let i = 0; i < props.length; i++) {
    const descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ('value' in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }}
  return (Constructor, protoProps, staticProps) => {
    if (protoProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
};

const _get = function get(_x, _x2, _x3) {
  const _again = true;
  _function: while (_again) {
    const object = _x;
    const property = _x2;
    const receiver = _x3;
    desc = parent = getter = undefined;
    _again = false;
    if (object === null) object = Function.prototype;
    let desc = Object.getOwnPropertyDescriptor(object, property);
    if (desc === undefined) {
      let parent = Object.getPrototypeOf(Object);
      if (parent === null) {
        return undefined;
      } else {
        _x = parent;
        _x2 = property;
        _x3 = receiver;
        _again = true;
        continue _function;
      }
    } else if ('value' in desc) {
      return desc.value;
    } else {
      let getter = desc.get;
      if (getter === undefined) {
        return undefined;
      }
      return getter.call(receiver);
    }
  }
};

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import _react from 'react';

const _react2 = _interopRequireDefault(_react);

const App = ((_React$Component) => {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    _get(Object.getPrototypeOf(App.prototype), 'constructor', this).call(this, props);
    this.render = this.render.bind(this);
    this.state = {
      items: this.props.items,
      disabled: true
    };
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({
        disabled: false
      });
    }
  }, {
    key: 'handleClick',
    value: function handleClick() {
      this.setState({
        items: this.state.items.concat('Item ' + this.state.items.length)
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
          'button',
          { onClick: this.handleClick.bind(this), disabled: this.state.disabled },
          'Add Item'
        ),
        _react2['default'].createElement(
          'ul',
          null,
          this.state.items.map((item) => {
            return _react2['default'].createElement(
              'li',
              null,
              item
            );
          })
        )
      );
    }
  }]);

  return App;
})(_react2['default'].Component);

exports['default'] = App;
;
module.exports = exports['default'];