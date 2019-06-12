/**
* Copyright 2016 Adobe Systems, Inc. http://www.adobe.com
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
"use strict";
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("babel-runtime/helpers/classCallCheck"), require("babel-runtime/helpers/createClass"), require("babel-runtime/helpers/possibleConstructorReturn"), require("babel-runtime/helpers/inherits"), require("babel-runtime/helpers/extends"), require("lodash/isEqual"), require("lodash/includes"));
	else if(typeof define === 'function' && define.amd)
		define(["babel-runtime/helpers/classCallCheck", "babel-runtime/helpers/createClass", "babel-runtime/helpers/possibleConstructorReturn", "babel-runtime/helpers/inherits", "babel-runtime/helpers/extends", "lodash/isEqual", "lodash/includes"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("babel-runtime/helpers/classCallCheck"), require("babel-runtime/helpers/createClass"), require("babel-runtime/helpers/possibleConstructorReturn"), require("babel-runtime/helpers/inherits"), require("babel-runtime/helpers/extends"), require("lodash/isEqual"), require("lodash/includes")) : factory(root["babel-runtime/helpers/classCallCheck"], root["babel-runtime/helpers/createClass"], root["babel-runtime/helpers/possibleConstructorReturn"], root["babel-runtime/helpers/inherits"], root["babel-runtime/helpers/extends"], root["lodash/isEqual"], root["lodash/includes"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_9__) {
return /******/ (function(modules) { // webpackBootstrap
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
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _classCallCheck2 = __webpack_require__(1);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(2);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(3);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	exports.default = createTargetComponent;

	var _main = __webpack_require__(5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function createTargetComponent(React, opts) {
	  var TargetComponent = function (_React$Component) {
	    (0, _inherits3.default)(TargetComponent, _React$Component);

	    function TargetComponent(props) {
	      (0, _classCallCheck3.default)(this, TargetComponent);

	      var _this = (0, _possibleConstructorReturn3.default)(this, (TargetComponent.__proto__ || Object.getPrototypeOf(TargetComponent)).call(this, props));

	      _this.logger = console;
	      _this.queryParams = location.search;
	      return _this;
	    }

	    (0, _createClass3.default)(TargetComponent, [{
	      key: 'render',
	      value: function render() {
	        return (0, _main.onRender)(React, this);
	      }
	    }, {
	      key: 'componentDidMount',
	      value: function componentDidMount() {
	        return (0, _main.onComponentMounted)(this, this.logger);
	      }
	    }, {
	      key: 'shouldComponentUpdate',
	      value: function shouldComponentUpdate() {
	        return false;
	      }
	    }, {
	      key: 'componentWillReceiveProps',
	      value: function componentWillReceiveProps(newProps) {
	        return (0, _main.onComponentWillReceiveProps)(this, this.logger, newProps);
	      }
	    }]);
	    return TargetComponent;
	  }(React.Component);

	  TargetComponent.defaultProps = (0, _main.getDefaultProps)(opts);

	  return TargetComponent;
	} /* global adobe, React */

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = require("babel-runtime/helpers/createClass");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = require("babel-runtime/helpers/possibleConstructorReturn");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports = require("babel-runtime/helpers/inherits");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(6);

	var _extends3 = _interopRequireDefault(_extends2);

	exports.getOffers = getOffers;
	exports.getDefaultProps = getDefaultProps;
	exports.onRender = onRender;
	exports.onComponentMounted = onComponentMounted;
	exports.onComponentWillReceiveProps = onComponentWillReceiveProps;

	var _util = __webpack_require__(7);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function getOffers(component, logger) {
	  if (!component.targetState.initialized) {
	    logger.error('at-react-component:', 'window.adobe.target namespace is missing');
	    return;
	  }

	  var at = window.adobe.target;

	  at.getOffer({
	    mbox: component.targetState.mbox,
	    params: component.targetState.atParams,
	    timeout: component.targetState.timeout,
	    success: function success(response) {
	      at.applyOffer({
	        mbox: component.targetState.mbox,
	        offer: response,
	        selector: component.targetDiv
	      });
	      component.targetDiv.className = (0, _util.removeMboxClass)(component.targetDiv.className);
	    },
	    error: function error(status, _error) {
	      logger.error('getOffer error: ', _error, status);
	      component.targetDiv.className = (0, _util.removeMboxClass)(component.targetDiv.className);
	    }
	  });
	}

	function getDefaultProps(opts) {
	  var DEFAULT_MBOX = 'default-mbox';
	  var DEFAULT_TIMEOUT = 3000;
	  opts = opts || {};

	  return {
	    'className': 'mboxDefault',
	    'data-mbox': opts.mbox || DEFAULT_MBOX,
	    'data-timeout': opts.timeout || DEFAULT_TIMEOUT
	  };
	}

	function onRender(React, component) {
	  component.targetState = {
	    initialized: Boolean(window.adobe && window.adobe.target),
	    editMode: component.queryParams.indexOf('mboxEdit') !== -1
	  };

	  if (!component.targetState.initialized) {
	    return React.createElement(
	      'div',
	      component.props,
	      component.props.children
	    );
	  }

	  return React.createElement(
	    'div',
	    (0, _extends3.default)({
	      ref: function ref(_ref) {
	        component.targetDiv = _ref;
	      }
	    }, component.props, { className: (0, _util.appendMboxClass)(component) }),
	    component.props.children
	  );
	}

	function onComponentMounted(component, logger) {
	  if (!component.targetState.initialized) {
	    logger.error('at-react-component:', 'window.adobe.target namespace is missing');
	    return;
	  }

	  var targetState = component.targetState;
	  targetState.atParams = (0, _util.getParams)(component.props);
	  targetState.mbox = component.props['data-mbox'];
	  targetState.timeout = parseInt(component.props['data-timeout'], 10);

	  if (targetState.mbox === 'default-mbox') {
	    logger.error('at-react-component:', 'mbox prop must be provided for each Target component!');
	    return;
	  }

	  if (targetState.editMode) {
	    return;
	  }

	  getOffers(component, logger);
	}

	function onComponentWillReceiveProps(component, logger, newProps) {
	  if (!component.targetState.initialized) {
	    logger.error('at-react-component:', 'window.adobe.target namespace is missing');
	    return;
	  }

	  var newMbox = newProps['data-mbox'];
	  var newTimeout = parseInt(newProps['data-timeout'], 10);
	  var newParams = (0, _util.getParams)(newProps);

	  if (!(0, _util.haveOptionsChanged)(component, newMbox, newTimeout, newParams)) {
	    return;
	  }

	  var targetState = component.targetState;
	  targetState.atParams = newParams || targetState.atParams;
	  targetState.mbox = newMbox || targetState.mbox;
	  targetState.timeout = newTimeout || targetState.timeout;

	  if (targetState.editMode) {
	    return;
	  }

	  getOffers(component, logger);
	}

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	module.exports = require("babel-runtime/helpers/extends");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _isEqual2 = __webpack_require__(8);

	var _isEqual3 = _interopRequireDefault(_isEqual2);

	var _includes2 = __webpack_require__(9);

	var _includes3 = _interopRequireDefault(_includes2);

	exports.appendMboxClass = appendMboxClass;
	exports.removeMboxClass = removeMboxClass;
	exports.getParams = getParams;
	exports.haveOptionsChanged = haveOptionsChanged;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function appendMboxClass(component) {
	  var className = component.props.className;
	  var mboxName = component.props['data-mbox'];

	  if (component.targetState.editMode) {
	    return 'mbox-name-' + mboxName;
	  }
	  if (className.indexOf('mboxDefault') === -1) {
	    return (className ? className + ' ' : '') + 'mboxDefault';
	  }
	  return className;
	}

	function removeMboxClass(className) {
	  return className.replace(/\bmboxDefault\b/, '');
	}

	function getParams(props) {
	  props = props || {};
	  var params = null;

	  Object.keys(props).filter(function (k) {
	    return k.indexOf('data-') === 0 && !(0, _includes3.default)(['data-mbox', 'data-timeout'], k);
	  }).forEach(function (k, i) {
	    if (i === 0) {
	      params = {};
	    }
	    params[k.substring(5)] = props[k];
	  });

	  return params;
	}

	function haveOptionsChanged(component, mbox, timeout, params) {
	  var targetState = component.targetState;
	  return !(0, _isEqual3.default)(targetState.atParams, params) || mbox && targetState.mbox !== mbox || timeout && targetState.timeout !== timeout;
	}

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	module.exports = require("lodash/isEqual");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	module.exports = require("lodash/includes");

/***/ })
/******/ ])
});
;