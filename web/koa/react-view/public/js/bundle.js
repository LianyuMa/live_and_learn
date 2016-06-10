/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	const Content = __webpack_require__(1);
	const unescapeHtml = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"unescape-html\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	const React = __webpack_require__(3);

	function initApp() {
	  const container = document.getElementById('content');
	  let list = unescapeHtml(window.__list__);
	  list = JSON.parse(list);

	  React.render(React.createElement(Content, { list: list }), container);
	}

	initApp();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	const Create = __webpack_require__(2);
	const Item = __webpack_require__(4);
	const React = __webpack_require__(3);

	const Content = React.createClass({ displayName: "Content",
	  propTypes: {
	    list: React.PropTypes.array
	  },

	  getInitialState: function () {
	    return {
	      list: this.props.list
	    };
	  }.bind(this),

	  render: function () {
	    return React.createElement("div", null, React.createElement("ul", null, this.state.list.map(function (content, index) {
	      return React.createElement(Item, { content: content, key: index, remove: this.remove.bind(this, index) });
	    }.bind(this))), React.createElement(Create, { add: this.add }));
	  }.bind(this),

	  add: function (content) {
	    this.setState({
	      list: this.state.list.concat(content)
	    });
	  }.bind(this),

	  remove: function (index) {
	    console.log(index, this.state.list);
	    this.state.list.splice(index, 1);
	    this.setState({
	      list: this.state.list
	    });
	  }.bind(this)
	});

	module.exports = Content;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	const React = __webpack_require__(3);
	const ENTER_KEY_CODE = 13;

	const Create = React.createClass({ displayName: "Create",
	  propTypes: {
	    add: React.PropTypes.func
	  },

	  getInitialState: function () {
	    return {
	      value: ''
	    };
	  },

	  render: function () {
	    return React.createElement("div", { className: "create-box" }, React.createElement("input", {
	      type: "text",
	      placeholder: "press enter to save",
	      onKeyDown: this._onKeyDown,
	      onChange: this._onChange,
	      value: this.state.value }));
	  }.bind(this),

	  _onKeyDown: function (event) {
	    if (event.keyCode === ENTER_KEY_CODE) this.save();
	  }.bind(this),

	  _onChange: function (event) {
	    this.state.value = event.target.value;
	    this.setState({
	      value: event.target.value
	    });
	  }.bind(this),

	  save: function () {
	    if (!this.state.value) return;
	    this.props.add(this.state.value);
	    this.setState({
	      value: ''
	    });
	  }.bind(this)
	});

	module.exports = Create;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./lib/React\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	const React = __webpack_require__(3);
	const Item = React.createClass({ displayName: "Item",
	  propTypes: {
	    remove: React.PropTypes.func,
	    content: React.PropTypes.string
	  },

	  render: function () {
	    return React.createElement("li", null, React.createElement("span", { className: "item" }, this.props.content), React.createElement("span", { className: "remove", onClick: this.props.remove }, "x"));
	  }.bind(this)
	});

	module.exports = Item;

/***/ }
/******/ ]);