module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./lib/with-redux-store.js":
/*!*********************************!*\
  !*** ./lib/with-redux-store.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _model_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/model */ "./model/model.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const isServer = true;
const __NEXT_REDUX_STORE__ = "__NEXT_REDUX_STORE__";

function getOrCreateStore(initialState) {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return Object(_model_model__WEBPACK_IMPORTED_MODULE_1__["initializeStore"])(initialState);
  } // Create store if unavailable on the client and set it on the window object


  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = Object(_model_model__WEBPACK_IMPORTED_MODULE_1__["initializeStore"])(initialState);
  }

  return window[__NEXT_REDUX_STORE__];
}

/* harmony default export */ __webpack_exports__["default"] = (App => {
  return class AppWithRedux extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
    static async getInitialProps(appContext) {
      // Get or Create the store with `undefined` as initialState
      // This allows you to set a custom default initialState
      const reduxStore = getOrCreateStore(); // Provide the store to getInitialProps of pages

      appContext.ctx.reduxStore = reduxStore;
      let appProps = {};

      if (typeof App.getInitialProps === "function") {
        appProps = await App.getInitialProps(appContext);
      }

      return _objectSpread(_objectSpread({}, appProps), {}, {
        initialReduxState: reduxStore.getState()
      });
    }

    constructor(props) {
      super(props);
      this.reduxStore = getOrCreateStore(props.initialReduxState);
    }

    render() {
      return __jsx(App, _extends({}, this.props, {
        reduxStore: this.reduxStore
      }));
    }

  };
});

/***/ }),

/***/ "./model/model.js":
/*!************************!*\
  !*** ./model/model.js ***!
  \************************/
/*! exports provided: default, initializeStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeStore", function() { return initializeStore; });
/* harmony import */ var easy_peasy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! easy-peasy */ "easy-peasy");
/* harmony import */ var easy_peasy__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(easy_peasy__WEBPACK_IMPORTED_MODULE_0__);

const weather = {
  weatherData: "",
  setWeatherData: Object(easy_peasy__WEBPACK_IMPORTED_MODULE_0__["action"])((state, weatherData) => {
    state.weatherData = weatherData;
  })
};
const location = {
  locationLatitude: "",
  locationLongitude: "",
  locationCity: "",
  locationRegion: "",
  setLocationLatitude: Object(easy_peasy__WEBPACK_IMPORTED_MODULE_0__["action"])((state, locationLatitude) => {
    state.locationLatitude = locationLatitude;
  }),
  setLocationLongitude: Object(easy_peasy__WEBPACK_IMPORTED_MODULE_0__["action"])((state, locationLongitude) => {
    state.locationLongitude = locationLongitude;
  }),
  setLocationCity: Object(easy_peasy__WEBPACK_IMPORTED_MODULE_0__["action"])((state, locationCity) => {
    state.locationCity = locationCity;
  }),
  setLocationRegion: Object(easy_peasy__WEBPACK_IMPORTED_MODULE_0__["action"])((state, locationRegion) => {
    state.locationRegion = locationRegion;
  })
};
const spinner = {
  spinner: false,
  setSpinner: Object(easy_peasy__WEBPACK_IMPORTED_MODULE_0__["action"])((state, spinner) => {
    state.spinner = spinner;
  })
};
const model = {
  weather,
  location,
  spinner
};
/* harmony default export */ __webpack_exports__["default"] = (model);
function initializeStore(initialState) {
  return Object(easy_peasy__WEBPACK_IMPORTED_MODULE_0__["createStore"])(model, initialState);
}

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.css":
/*!*******************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.AppInitialProps = _utils.AppInitialProps;
exports.NextWebVitalsMetric = _utils.NextWebVitalsMetric;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps({
  Component,
  ctx
}) {
  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    const {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
let warnContainer;
let warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn(`Warning: the \`Container\` in \`_app\` has been deprecated and should be removed. https://err.sh/vercel/next.js/app-container-deprecated`);
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error(`Warning: the 'url' property is deprecated. https://err.sh/vercel/next.js/url-deprecated`);
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  const {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/react-toastify/dist/ReactToastify.css":
/*!************************************************************!*\
  !*** ./node_modules/react-toastify/dist/ReactToastify.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_with_redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/with-redux-store */ "./lib/with-redux-store.js");
/* harmony import */ var easy_peasy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! easy-peasy */ "easy-peasy");
/* harmony import */ var easy_peasy__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(easy_peasy__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ "./node_modules/bootstrap/dist/css/bootstrap.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles.scss */ "./styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








class WeatherApp extends next_app__WEBPACK_IMPORTED_MODULE_0___default.a {
  render() {
    const {
      Component,
      pageProps,
      reduxStore
    } = this.props;
    return __jsx(easy_peasy__WEBPACK_IMPORTED_MODULE_3__["StoreProvider"], {
      store: reduxStore
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(_lib_with_redux_store__WEBPACK_IMPORTED_MODULE_2__["default"])(WeatherApp));

/***/ }),

/***/ "./styles.scss":
/*!*********************!*\
  !*** ./styles.scss ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "easy-peasy":
/*!*****************************!*\
  !*** external "easy-peasy" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("easy-peasy");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovLy8uL2xpYi93aXRoLXJlZHV4LXN0b3JlLmpzIiwid2VicGFjazovLy8uL21vZGVsL21vZGVsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2FwcC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vcGFnZXMvX2FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZWFzeS1wZWFzeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiXSwibmFtZXMiOlsiaXNTZXJ2ZXIiLCJfX05FWFRfUkVEVVhfU1RPUkVfXyIsImdldE9yQ3JlYXRlU3RvcmUiLCJpbml0aWFsU3RhdGUiLCJpbml0aWFsaXplU3RvcmUiLCJ3aW5kb3ciLCJBcHAiLCJBcHBXaXRoUmVkdXgiLCJSZWFjdCIsIkNvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsImFwcENvbnRleHQiLCJyZWR1eFN0b3JlIiwiY3R4IiwiYXBwUHJvcHMiLCJpbml0aWFsUmVkdXhTdGF0ZSIsImdldFN0YXRlIiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInJlbmRlciIsIndlYXRoZXIiLCJ3ZWF0aGVyRGF0YSIsInNldFdlYXRoZXJEYXRhIiwiYWN0aW9uIiwic3RhdGUiLCJsb2NhdGlvbiIsImxvY2F0aW9uTGF0aXR1ZGUiLCJsb2NhdGlvbkxvbmdpdHVkZSIsImxvY2F0aW9uQ2l0eSIsImxvY2F0aW9uUmVnaW9uIiwic2V0TG9jYXRpb25MYXRpdHVkZSIsInNldExvY2F0aW9uTG9uZ2l0dWRlIiwic2V0TG9jYXRpb25DaXR5Iiwic2V0TG9jYXRpb25SZWdpb24iLCJzcGlubmVyIiwic2V0U3Bpbm5lciIsIm1vZGVsIiwiY3JlYXRlU3RvcmUiLCJwYWdlUHJvcHMiLCJjb21wb25lbnREaWRDYXRjaCIsIl9fTl9TU0ciLCJ1cmwiLCJjcmVhdGVVcmwiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwiYXBwR2V0SW5pdGlhbFByb3BzIiwid2FybkNvbnRhaW5lciIsImNvbnNvbGUiLCJ3YXJuVXJsIiwicCIsImJhY2siLCJyb3V0ZXIiLCJwdXNoIiwicHVzaFRvIiwicHVzaFJvdXRlIiwiYXMiLCJwdXNoVXJsIiwicmVwbGFjZSIsInJlcGxhY2VUbyIsInJlcGxhY2VSb3V0ZSIsInJlcGxhY2VVcmwiLCJXZWF0aGVyQXBwIiwid2l0aFJlZHV4U3RvcmUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7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QXdDRCxDOzs7Ozs7Ozs7OztBQ2hJRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1VLFVBQU4sU0FBeUJ0RCwrQ0FBekIsQ0FBNkI7RUFDM0JhLE1BQU0sR0FBRztJQUNQLE1BQU07TUFBRVYsU0FBRjtNQUFhNkIsU0FBYjtNQUF3QjFCO0lBQXhCLElBQXVDLEtBQUtNLEtBQWxEO0lBQ0EsT0FDRSxNQUFDLHdEQUFEO01BQWUsS0FBSyxFQUFFTjtJQUF0QixFQURGO0VBSUQ7O0FBUDBCOztBQVVkaUQsb0lBQWMsQ0FBQ0QsVUFBRCxDQUE3QixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJBLHVDOzs7Ozs7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgaW5pdGlhbGl6ZVN0b3JlIH0gZnJvbSBcIi4uL21vZGVsL21vZGVsXCI7XHJcblxyXG5jb25zdCBpc1NlcnZlciA9IHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCI7XHJcbmNvbnN0IF9fTkVYVF9SRURVWF9TVE9SRV9fID0gXCJfX05FWFRfUkVEVVhfU1RPUkVfX1wiO1xyXG5cclxuZnVuY3Rpb24gZ2V0T3JDcmVhdGVTdG9yZShpbml0aWFsU3RhdGUpIHtcclxuICAvLyBBbHdheXMgbWFrZSBhIG5ldyBzdG9yZSBpZiBzZXJ2ZXIsIG90aGVyd2lzZSBzdGF0ZSBpcyBzaGFyZWQgYmV0d2VlbiByZXF1ZXN0c1xyXG4gIGlmIChpc1NlcnZlcikge1xyXG4gICAgcmV0dXJuIGluaXRpYWxpemVTdG9yZShpbml0aWFsU3RhdGUpO1xyXG4gIH1cclxuXHJcbiAgLy8gQ3JlYXRlIHN0b3JlIGlmIHVuYXZhaWxhYmxlIG9uIHRoZSBjbGllbnQgYW5kIHNldCBpdCBvbiB0aGUgd2luZG93IG9iamVjdFxyXG4gIGlmICghd2luZG93W19fTkVYVF9SRURVWF9TVE9SRV9fXSkge1xyXG4gICAgd2luZG93W19fTkVYVF9SRURVWF9TVE9SRV9fXSA9IGluaXRpYWxpemVTdG9yZShpbml0aWFsU3RhdGUpO1xyXG4gIH1cclxuICByZXR1cm4gd2luZG93W19fTkVYVF9SRURVWF9TVE9SRV9fXTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwID0+IHtcclxuICByZXR1cm4gY2xhc3MgQXBwV2l0aFJlZHV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoYXBwQ29udGV4dCkge1xyXG4gICAgICAvLyBHZXQgb3IgQ3JlYXRlIHRoZSBzdG9yZSB3aXRoIGB1bmRlZmluZWRgIGFzIGluaXRpYWxTdGF0ZVxyXG4gICAgICAvLyBUaGlzIGFsbG93cyB5b3UgdG8gc2V0IGEgY3VzdG9tIGRlZmF1bHQgaW5pdGlhbFN0YXRlXHJcbiAgICAgIGNvbnN0IHJlZHV4U3RvcmUgPSBnZXRPckNyZWF0ZVN0b3JlKCk7XHJcblxyXG4gICAgICAvLyBQcm92aWRlIHRoZSBzdG9yZSB0byBnZXRJbml0aWFsUHJvcHMgb2YgcGFnZXNcclxuICAgICAgYXBwQ29udGV4dC5jdHgucmVkdXhTdG9yZSA9IHJlZHV4U3RvcmU7XHJcblxyXG4gICAgICBsZXQgYXBwUHJvcHMgPSB7fTtcclxuICAgICAgaWYgKHR5cGVvZiBBcHAuZ2V0SW5pdGlhbFByb3BzID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICBhcHBQcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoYXBwQ29udGV4dCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uYXBwUHJvcHMsXHJcbiAgICAgICAgaW5pdGlhbFJlZHV4U3RhdGU6IHJlZHV4U3RvcmUuZ2V0U3RhdGUoKVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgdGhpcy5yZWR1eFN0b3JlID0gZ2V0T3JDcmVhdGVTdG9yZShwcm9wcy5pbml0aWFsUmVkdXhTdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICByZXR1cm4gPEFwcCB7Li4udGhpcy5wcm9wc30gcmVkdXhTdG9yZT17dGhpcy5yZWR1eFN0b3JlfSAvPjtcclxuICAgIH1cclxuICB9O1xyXG59OyIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhY3Rpb24gfSBmcm9tIFwiZWFzeS1wZWFzeVwiO1xyXG5cclxuY29uc3Qgd2VhdGhlciA9IHtcclxuICB3ZWF0aGVyRGF0YTogXCJcIixcclxuICBzZXRXZWF0aGVyRGF0YTogYWN0aW9uKChzdGF0ZSwgd2VhdGhlckRhdGEpID0+IHtcclxuICAgIHN0YXRlLndlYXRoZXJEYXRhID0gd2VhdGhlckRhdGE7XHJcbiAgfSlcclxufTtcclxuXHJcbmNvbnN0IGxvY2F0aW9uID0ge1xyXG4gIGxvY2F0aW9uTGF0aXR1ZGU6IFwiXCIsXHJcbiAgbG9jYXRpb25Mb25naXR1ZGU6IFwiXCIsXHJcbiAgbG9jYXRpb25DaXR5OiBcIlwiLFxyXG4gIGxvY2F0aW9uUmVnaW9uOiBcIlwiLFxyXG5cclxuICBzZXRMb2NhdGlvbkxhdGl0dWRlOiBhY3Rpb24oKHN0YXRlLCBsb2NhdGlvbkxhdGl0dWRlKSA9PiB7XHJcbiAgICBzdGF0ZS5sb2NhdGlvbkxhdGl0dWRlID0gbG9jYXRpb25MYXRpdHVkZTtcclxuICB9KSxcclxuICBzZXRMb2NhdGlvbkxvbmdpdHVkZTogYWN0aW9uKChzdGF0ZSwgbG9jYXRpb25Mb25naXR1ZGUpID0+IHtcclxuICAgIHN0YXRlLmxvY2F0aW9uTG9uZ2l0dWRlID0gbG9jYXRpb25Mb25naXR1ZGU7XHJcbiAgfSksXHJcbiAgc2V0TG9jYXRpb25DaXR5OiBhY3Rpb24oKHN0YXRlLCBsb2NhdGlvbkNpdHkpID0+IHtcclxuICAgIHN0YXRlLmxvY2F0aW9uQ2l0eSA9IGxvY2F0aW9uQ2l0eTtcclxuICB9KSxcclxuICBzZXRMb2NhdGlvblJlZ2lvbjogYWN0aW9uKChzdGF0ZSwgbG9jYXRpb25SZWdpb24pID0+IHtcclxuICAgIHN0YXRlLmxvY2F0aW9uUmVnaW9uID0gbG9jYXRpb25SZWdpb247XHJcbiAgfSlcclxufTtcclxuXHJcbmNvbnN0IHNwaW5uZXIgPSB7XHJcbiAgc3Bpbm5lcjogZmFsc2UsXHJcbiAgc2V0U3Bpbm5lcjogYWN0aW9uKChzdGF0ZSwgc3Bpbm5lcikgPT4ge1xyXG4gICAgc3RhdGUuc3Bpbm5lciA9IHNwaW5uZXI7XHJcbiAgfSlcclxufTtcclxuXHJcbmNvbnN0IG1vZGVsID0ge1xyXG4gIHdlYXRoZXIsXHJcbiAgbG9jYXRpb24sXHJcbiAgc3Bpbm5lclxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbW9kZWw7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZVN0b3JlKGluaXRpYWxTdGF0ZSkge1xyXG4gIHJldHVybiBjcmVhdGVTdG9yZShtb2RlbCwgaW5pdGlhbFN0YXRlKTtcclxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L3BhZ2VzL19hcHAnKVxuIiwiaW1wb3J0IFJlYWN0LCB7IEVycm9ySW5mbyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgZXhlY09uY2UsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZSxcbiAgTmV4dFdlYlZpdGFsc01ldHJpYyxcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnLi4vY2xpZW50L3JvdXRlcidcblxuZXhwb3J0IHsgQXBwSW5pdGlhbFByb3BzIH1cblxuZXhwb3J0IHsgTmV4dFdlYlZpdGFsc01ldHJpYyB9XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHQgPSBBcHBDb250ZXh0VHlwZTxSb3V0ZXI+XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzPFAgPSB7fT4gPSBBcHBQcm9wc1R5cGU8Um91dGVyLCBQPlxuXG4vKipcbiAqIGBBcHBgIGNvbXBvbmVudCBpcyB1c2VkIGZvciBpbml0aWFsaXplIG9mIHBhZ2VzLiBJdCBhbGxvd3MgZm9yIG92ZXJ3cml0aW5nIGFuZCBmdWxsIGNvbnRyb2wgb2YgdGhlIGBwYWdlYCBpbml0aWFsaXphdGlvbi5cbiAqIFRoaXMgYWxsb3dzIGZvciBrZWVwaW5nIHN0YXRlIGJldHdlZW4gbmF2aWdhdGlvbiwgY3VzdG9tIGVycm9yIGhhbmRsaW5nLCBpbmplY3RpbmcgYWRkaXRpb25hbCBkYXRhLlxuICovXG5hc3luYyBmdW5jdGlvbiBhcHBHZXRJbml0aWFsUHJvcHMoe1xuICBDb21wb25lbnQsXG4gIGN0eCxcbn06IEFwcENvbnRleHQpOiBQcm9taXNlPEFwcEluaXRpYWxQcm9wcz4ge1xuICBjb25zdCBwYWdlUHJvcHMgPSBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwgY3R4KVxuICByZXR1cm4geyBwYWdlUHJvcHMgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHA8UCA9IHt9LCBDUCA9IHt9LCBTID0ge30+IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFxuICBQICYgQXBwUHJvcHM8Q1A+LFxuICBTXG4+IHtcbiAgc3RhdGljIG9yaWdHZXRJbml0aWFsUHJvcHMgPSBhcHBHZXRJbml0aWFsUHJvcHNcbiAgc3RhdGljIGdldEluaXRpYWxQcm9wcyA9IGFwcEdldEluaXRpYWxQcm9wc1xuXG4gIC8vIEtlcHQgaGVyZSBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuXG4gIC8vIFdoZW4gc29tZW9uZSBlbmRlZCBBcHAgdGhleSBjb3VsZCBjYWxsIGBzdXBlci5jb21wb25lbnREaWRDYXRjaGAuXG4gIC8vIEBkZXByZWNhdGVkIFRoaXMgbWV0aG9kIGlzIG5vIGxvbmdlciBuZWVkZWQuIEVycm9ycyBhcmUgY2F1Z2h0IGF0IHRoZSB0b3AgbGV2ZWxcbiAgY29tcG9uZW50RGlkQ2F0Y2goZXJyb3I6IEVycm9yLCBfZXJyb3JJbmZvOiBFcnJvckluZm8pOiB2b2lkIHtcbiAgICB0aHJvdyBlcnJvclxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgcm91dGVyLCBDb21wb25lbnQsIHBhZ2VQcm9wcywgX19OX1NTRywgX19OX1NTUCB9ID0gdGhpc1xuICAgICAgLnByb3BzIGFzIEFwcFByb3BzPENQPlxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb21wb25lbnRcbiAgICAgICAgey4uLnBhZ2VQcm9wc31cbiAgICAgICAge1xuICAgICAgICAgIC8vIHdlIGRvbid0IGFkZCB0aGUgbGVnYWN5IFVSTCBwcm9wIGlmIGl0J3MgdXNpbmcgbm9uLWxlZ2FjeVxuICAgICAgICAgIC8vIG1ldGhvZHMgbGlrZSBnZXRTdGF0aWNQcm9wcyBhbmQgZ2V0U2VydmVyU2lkZVByb3BzXG4gICAgICAgICAgLi4uKCEoX19OX1NTRyB8fCBfX05fU1NQKSA/IHsgdXJsOiBjcmVhdGVVcmwocm91dGVyKSB9IDoge30pXG4gICAgICAgIH1cbiAgICAgIC8+XG4gICAgKVxuICB9XG59XG5cbmxldCB3YXJuQ29udGFpbmVyOiAoKSA9PiB2b2lkXG5sZXQgd2FyblVybDogKCkgPT4gdm9pZFxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB3YXJuQ29udGFpbmVyID0gZXhlY09uY2UoKCkgPT4ge1xuICAgIGNvbnNvbGUud2FybihcbiAgICAgIGBXYXJuaW5nOiB0aGUgXFxgQ29udGFpbmVyXFxgIGluIFxcYF9hcHBcXGAgaGFzIGJlZW4gZGVwcmVjYXRlZCBhbmQgc2hvdWxkIGJlIHJlbW92ZWQuIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2FwcC1jb250YWluZXItZGVwcmVjYXRlZGBcbiAgICApXG4gIH0pXG5cbiAgd2FyblVybCA9IGV4ZWNPbmNlKCgpID0+IHtcbiAgICBjb25zb2xlLmVycm9yKFxuICAgICAgYFdhcm5pbmc6IHRoZSAndXJsJyBwcm9wZXJ0eSBpcyBkZXByZWNhdGVkLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy91cmwtZGVwcmVjYXRlZGBcbiAgICApXG4gIH0pXG59XG5cbi8vIEBkZXByZWNhdGVkIG5vb3AgZm9yIG5vdyB1bnRpbCByZW1vdmFsXG5leHBvcnQgZnVuY3Rpb24gQ29udGFpbmVyKHA6IGFueSkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FybkNvbnRhaW5lcigpXG4gIHJldHVybiBwLmNoaWxkcmVuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVVcmwocm91dGVyOiBSb3V0ZXIpIHtcbiAgLy8gVGhpcyBpcyB0byBtYWtlIHN1cmUgd2UgZG9uJ3QgcmVmZXJlbmNlcyB0aGUgcm91dGVyIG9iamVjdCBhdCBjYWxsIHRpbWVcbiAgY29uc3QgeyBwYXRobmFtZSwgYXNQYXRoLCBxdWVyeSB9ID0gcm91dGVyXG4gIHJldHVybiB7XG4gICAgZ2V0IHF1ZXJ5KCkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIHF1ZXJ5XG4gICAgfSxcbiAgICBnZXQgcGF0aG5hbWUoKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcGF0aG5hbWVcbiAgICB9LFxuICAgIGdldCBhc1BhdGgoKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gYXNQYXRoXG4gICAgfSxcbiAgICBiYWNrOiAoKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByb3V0ZXIuYmFjaygpXG4gICAgfSxcbiAgICBwdXNoOiAodXJsOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcm91dGVyLnB1c2godXJsLCBhcylcbiAgICB9LFxuICAgIHB1c2hUbzogKGhyZWY6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIGNvbnN0IHB1c2hSb3V0ZSA9IGFzID8gaHJlZiA6ICcnXG4gICAgICBjb25zdCBwdXNoVXJsID0gYXMgfHwgaHJlZlxuXG4gICAgICByZXR1cm4gcm91dGVyLnB1c2gocHVzaFJvdXRlLCBwdXNoVXJsKVxuICAgIH0sXG4gICAgcmVwbGFjZTogKHVybDogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIHJvdXRlci5yZXBsYWNlKHVybCwgYXMpXG4gICAgfSxcbiAgICByZXBsYWNlVG86IChocmVmOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICBjb25zdCByZXBsYWNlUm91dGUgPSBhcyA/IGhyZWYgOiAnJ1xuICAgICAgY29uc3QgcmVwbGFjZVVybCA9IGFzIHx8IGhyZWZcblxuICAgICAgcmV0dXJuIHJvdXRlci5yZXBsYWNlKHJlcGxhY2VSb3V0ZSwgcmVwbGFjZVVybClcbiAgICB9LFxuICB9XG59XG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsImltcG9ydCBBcHAgZnJvbSBcIm5leHQvYXBwXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHdpdGhSZWR1eFN0b3JlIGZyb20gXCIuLi9saWIvd2l0aC1yZWR1eC1zdG9yZVwiO1xyXG5pbXBvcnQgeyBTdG9yZVByb3ZpZGVyIH0gZnJvbSBcImVhc3ktcGVhc3lcIjtcclxuaW1wb3J0IFwiYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5jc3NcIjtcclxuaW1wb3J0IFwiLi4vc3R5bGVzLnNjc3NcIjtcclxuaW1wb3J0IFwicmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzc1wiO1xyXG5cclxuY2xhc3MgV2VhdGhlckFwcCBleHRlbmRzIEFwcCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBDb21wb25lbnQsIHBhZ2VQcm9wcywgcmVkdXhTdG9yZSB9ID0gdGhpcy5wcm9wcztcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxTdG9yZVByb3ZpZGVyIHN0b3JlPXtyZWR1eFN0b3JlfT5cclxuICAgICAgPC9TdG9yZVByb3ZpZGVyPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSZWR1eFN0b3JlKFdlYXRoZXJBcHApOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImVhc3ktcGVhc3lcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==