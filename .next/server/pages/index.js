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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./api/APIUtils.js":
/*!*************************!*\
  !*** ./api/APIUtils.js ***!
  \*************************/
/*! exports provided: getPosition, fetchLocation, ipInfo, ipData, fetchWeather */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPosition", function() { return getPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchLocation", function() { return fetchLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ipInfo", function() { return ipInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ipData", function() { return ipData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchWeather", function() { return fetchWeather; });
// Get user position coordinates
function getPosition() {
  const geolocationOptions = {
    enableHighAccuracy: true,
    timeout: 10000,
    maximumAge: 60000
  };
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, geolocationOptions);
  });
} // Reverse geolocation

function fetchLocation(latitude, longitude) {
  return fetch(`https://nominatim.openstreetmap.org/reverse?format=geojson&lat=${latitude}&lon=${longitude}`).then(response => response.json()).catch(error => console.error(error));
}
function ipInfo(ip) {
  return fetch(`/api/ipinfo/${ip}`).then(response => response.json()).catch(error => console.error(error));
}
function ipData(ip) {
  return fetch(`/api/ipdata/${ip}`).then(response => response.json()).catch(error => console.error(error));
} // Get weather from coordinates

function fetchWeather(latitude, longitude) {
  return fetch(`https://api.open-meteo.com/v1/forecast?${latitude},${longitude}&hourly=temperature_2m,relativehumidity_2m,cloudcover,cloudcover_mid,windspeed_120m&current_weather=true `) // fetch("https://next.json-generator.com/api/json/get/41m_cc4lP") // Testing
  .then(response => response.json()).catch(error => console.error(error));
}

/***/ }),

/***/ "./components/Footer/Footer.js":
/*!*************************************!*\
  !*** ./components/Footer/Footer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Footer_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer.module.scss */ "./components/Footer/Footer.module.scss");
/* harmony import */ var _Footer_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Footer_module_scss__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const footer = props => {
  return __jsx("footer", {
    className: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a["footer"]
  }, __jsx("div", {
    className: "container-fluid"
  }, "Cyweather App", __jsx("br", null), "View Source on ", __jsx("a", {
    href: "https://github.com/mbunix/cyweather"
  }, " GitHub"), " - Powered by", " ", __jsx("a", {
    href: "https://open-meteo.com/"
  }, "Open-Metio")));
};

/* harmony default export */ __webpack_exports__["default"] = (footer);

/***/ }),

/***/ "./components/Footer/Footer.module.scss":
/*!**********************************************!*\
  !*** ./components/Footer/Footer.module.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"footer": "Footer_footer__3f33N"
};


/***/ }),

/***/ "./components/Header/Header.js":
/*!*************************************!*\
  !*** ./components/Header/Header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header.module.scss */ "./components/Header/Header.module.scss");
/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Header_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_places_autocomplete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-places-autocomplete */ "react-places-autocomplete");
/* harmony import */ var react_places_autocomplete__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_places_autocomplete__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var easy_peasy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! easy-peasy */ "easy-peasy");
/* harmony import */ var easy_peasy__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(easy_peasy__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Search_Search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Search/Search */ "./components/Search/Search.js");
/* harmony import */ var _utils_stateNameAbbreviation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/stateNameAbbreviation */ "./utils/stateNameAbbreviation.js");
/* harmony import */ var _api_APIUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../api/APIUtils */ "./api/APIUtils.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_8__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










const header = props => {
  const {
    0: search,
    1: setSearch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    address: ""
  });
  const {
    0: dropdownOpen,
    1: setDropdownOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const weather = Object(easy_peasy__WEBPACK_IMPORTED_MODULE_3__["useStoreState"])(state => state.weather.weatherData);
  const setSpinner = Object(easy_peasy__WEBPACK_IMPORTED_MODULE_3__["useStoreActions"])(actions => actions.spinner.setSpinner);
  const setWeather = Object(easy_peasy__WEBPACK_IMPORTED_MODULE_3__["useStoreActions"])(actions => actions.weather.setWeatherData);
  const setLatitude = Object(easy_peasy__WEBPACK_IMPORTED_MODULE_3__["useStoreActions"])(actions => actions.location.setLocationLatitude);
  const setLongitude = Object(easy_peasy__WEBPACK_IMPORTED_MODULE_3__["useStoreActions"])(actions => actions.location.setLocationLongitude);
  const setCity = Object(easy_peasy__WEBPACK_IMPORTED_MODULE_3__["useStoreActions"])(actions => actions.location.setLocationCity);
  const setRegion = Object(easy_peasy__WEBPACK_IMPORTED_MODULE_3__["useStoreActions"])(actions => actions.location.setLocationRegion);
  const latitude = Object(easy_peasy__WEBPACK_IMPORTED_MODULE_3__["useStoreState"])(state => state.location.locationLatitude);
  const longitude = Object(easy_peasy__WEBPACK_IMPORTED_MODULE_3__["useStoreState"])(state => state.location.locationLongitude);
  let historyArray = null;
  let searchHistory = null;

  if (false) {}

  const clearAllHistory = () => {
    localStorage.removeItem("search-history");
  };

  const deleteSpecificHistory = index => {
    let newHistory = [...searchHistory];
    newHistory.splice(index, 1);
    localStorage.setItem("search-history", JSON.stringify(newHistory));

    if (newHistory === undefined || newHistory.length == 0) {
      localStorage.removeItem("search-history");
    }
  };

  const useSpecificHistory = index => {
    let newHistory = [...searchHistory];
    setSpinner(true);
    setCity(newHistory[index].city);
    setRegion(newHistory[index].region);
    Object(_api_APIUtils__WEBPACK_IMPORTED_MODULE_6__["fetchWeather"])(newHistory[index].lat, newHistory[index].lng).then(results => {
      setWeather(results);
      setSpinner(false);
    });
  };

  const handleSearchChange = address => {
    setSearch({
      address
    });
  };

  const handleSearchSelect = address => {
    setSpinner(true);
    Object(react_places_autocomplete__WEBPACK_IMPORTED_MODULE_2__["geocodeByAddress"])(address).then(results => results[0]).then(data => {
      const dataAddress = data.address_components;
      const lat = data.geometry.location.lat();
      const lng = data.geometry.location.lng();
      let city = null;
      let region = null;
      setLatitude(lat);
      setLongitude(lng);
      setSearch({
        address: ""
      });

      for (var i = 0; i < dataAddress.length; i++) {
        var addressObj = dataAddress[i];

        for (var j = 0; j < addressObj.types.length; j++) {
          if (addressObj.types[j] === "locality") {
            setCity(addressObj.long_name);
            city = addressObj.long_name;
          }

          if (addressObj.types[j] === "administrative_area_level_1") {
            setRegion(addressObj.short_name);
            region = addressObj.short_name;
          }
        }
      }

      historyArray.push({
        city: city,
        region: region,
        lat: lat,
        lng: lng
      });
      localStorage.setItem("search-history", JSON.stringify(historyArray));
      Object(_api_APIUtils__WEBPACK_IMPORTED_MODULE_6__["fetchWeather"])(lat, lng).then(results => {
        setWeather(results);
        setSpinner(false);
      });
    }).catch(error => console.error(error));
  };

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const refreshLocation = () => {
    setSpinner(true);
    notify("Refreshing Weather Data");
    Object(_api_APIUtils__WEBPACK_IMPORTED_MODULE_6__["fetchWeather"])(latitude, longitude).then(results => {
      setWeather(results);
      setSpinner(false);
      react_toastify__WEBPACK_IMPORTED_MODULE_7__["toast"].dismiss(toastId);
    });
  };

  function getWeatherLocation(lat, lng) {
    Object(_api_APIUtils__WEBPACK_IMPORTED_MODULE_6__["fetchLocation"])(lat, lng).then(results => {
      const json = results.features[0].properties.address;

      if (json.state) {
        let stateAbbr = Object(_utils_stateNameAbbreviation__WEBPACK_IMPORTED_MODULE_5__["convertRegion"])(json.state);
        setRegion(stateAbbr);
      } else if (json.country) {
        setRegion(json.country);
      }

      if (json.locality) {
        setCity(json.locality);
      } else if (json.town) {
        setCity(json.town);
      } else if (json.city) {
        setCity(json.city);
      } else if (json.county) {
        setCity(json.county);
      }
    });
    Object(_api_APIUtils__WEBPACK_IMPORTED_MODULE_6__["fetchWeather"])(lat, lng).then(results => {
      setWeather(results);
      setSpinner(false);
      react_toastify__WEBPACK_IMPORTED_MODULE_7__["toast"].dismiss(toastId);
    });
  }

  let toastId = null;

  const notify = data => toastId = react_toastify__WEBPACK_IMPORTED_MODULE_7__["toast"].info(data, {
    autoClose: false
  });

  const update = data => react_toastify__WEBPACK_IMPORTED_MODULE_7__["toast"].update(toastId, {
    render: data,
    type: react_toastify__WEBPACK_IMPORTED_MODULE_7__["toast"].TYPE.SUCCESS,
    autoClose: 5000
  });

  const useLocation = () => {
    setSpinner(true);
    setDropdownOpen(!dropdownOpen);
    notify("Hang tight! Checking your location.");
    Object(_api_APIUtils__WEBPACK_IMPORTED_MODULE_6__["getPosition"])().then(results => {
      const lat = results.coords.latitude;
      const lng = results.coords.longitude;
      setLatitude(lat);
      setLongitude(lng);
      getWeatherLocation(lat, lng);
    }).catch(error => {
      setSpinner(false);
      react_toastify__WEBPACK_IMPORTED_MODULE_7__["toast"].update(toastId, {
        render: `Error! ${error.message}`,
        type: react_toastify__WEBPACK_IMPORTED_MODULE_7__["toast"].TYPE.ERROR,
        autoClose: 5000
      });
    });
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, weather && __jsx("header", {
    className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a["header"]
  }, __jsx("div", {
    className: "container-fluid"
  }, __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-sm-12 col-md-6 col-lg-6 col-xl-4 mx-auto"
  }, __jsx("div", {
    className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.mid
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["InputGroup"], null, __jsx(_Search_Search__WEBPACK_IMPORTED_MODULE_4__["default"], {
    address: search.address,
    changed: handleSearchChange,
    selected: handleSearchSelect
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["InputGroupButtonDropdown"], {
    addonType: "append",
    isOpen: dropdownOpen,
    toggle: toggleDropdown
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["DropdownToggle"], {
    className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a["btn-more"]
  }, __jsx("svg", {
    height: "512",
    viewBox: "0 0 515.555 515.555",
    width: "512",
    xmlns: "http://www.w3.org/2000/svg"
  }, __jsx("path", {
    d: "M303.347 18.875c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138c25.166-25.167 65.97-25.167 91.138 0M303.347 212.209c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138c25.166-25.167 65.97-25.167 91.138 0M303.347 405.541c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138c25.166-25.167 65.97-25.167 91.138 0"
  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["DropdownMenu"], {
    right: true,
    className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a["dropdown-custom"]
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["DropdownItem"], {
    onClick: refreshLocation
  }, "Refresh Weather", __jsx("span", {
    className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a["btn-right"]
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512"
  }, __jsx("path", {
    d: "M493.815 70.629c-11.001-1.003-20.73 7.102-21.733 18.102l-2.65 29.069C424.473 47.194 346.429 0 256 0 158.719 0 72.988 55.522 30.43 138.854c-5.024 9.837-1.122 21.884 8.715 26.908 9.839 5.024 21.884 1.123 26.908-8.715C102.07 86.523 174.397 40 256 40c74.377 0 141.499 38.731 179.953 99.408l-28.517-20.367c-8.989-6.419-21.48-4.337-27.899 4.651-6.419 8.989-4.337 21.479 4.651 27.899l86.475 61.761c12.674 9.035 30.155.764 31.541-14.459l9.711-106.53c1.004-11.001-7.1-20.731-18.1-21.734zM472.855 346.238c-9.838-5.023-21.884-1.122-26.908 8.715C409.93 425.477 337.603 472 256 472c-74.377 0-141.499-38.731-179.953-99.408l28.517 20.367c8.989 6.419 21.479 4.337 27.899-4.651 6.419-8.989 4.337-21.479-4.651-27.899l-86.475-61.761c-12.519-8.944-30.141-.921-31.541 14.459L.085 419.637c-1.003 11 7.102 20.73 18.101 21.733 11.014 1.001 20.731-7.112 21.733-18.102l2.65-29.069C87.527 464.806 165.571 512 256 512c97.281 0 183.012-55.522 225.57-138.854 5.024-9.837 1.122-21.884-8.715-26.908z"
  })))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["DropdownItem"], {
    onClick: useLocation
  }, "Use My Location", __jsx("span", {
    className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a["btn-right"]
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 51.636 51.636"
  }, __jsx("path", {
    d: "M51.353.914a.999.999 0 00-1.135-.213L.583 23.481a1 1 0 00.252 1.895l22.263 3.731 2.545 21.038a1.002 1.002 0 001.889.324l24-48.415a1 1 0 00-.179-1.14z"
  })))), searchHistory != null && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["DropdownItem"], {
    divider: true
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["DropdownItem"], {
    header: true
  }, "Search History "), searchHistory.map((item, index) => {
    return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["DropdownItem"], {
      key: index
    }, __jsx("span", {
      onClick: () => {
        useSpecificHistory(index);
      }
    }, item.city, ", ", item.region), __jsx("span", {
      className: [_Header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a["btn-remove"], _Header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a["btn-right"]].join(" "),
      onClick: () => {
        deleteSpecificHistory(index);
      }
    }, __jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512.001 512.001"
    }, __jsx("path", {
      d: "M284.286 256.002L506.143 34.144c7.811-7.811 7.811-20.475 0-28.285-7.811-7.81-20.475-7.811-28.285 0L256 227.717 34.143 5.859c-7.811-7.811-20.475-7.811-28.285 0-7.81 7.811-7.811 20.475 0 28.285l221.857 221.857L5.858 477.859c-7.811 7.811-7.811 20.475 0 28.285a19.938 19.938 0 0014.143 5.857 19.94 19.94 0 0014.143-5.857L256 284.287l221.857 221.857c3.905 3.905 9.024 5.857 14.143 5.857s10.237-1.952 14.143-5.857c7.811-7.811 7.811-20.475 0-28.285L284.286 256.002z"
    }))));
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["DropdownItem"], {
    divider: true
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["DropdownItem"], {
    className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a["btn-last"],
    onClick: () => {
      clearAllHistory();
    }
  }, "Clear Search History")))))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (header);

/***/ }),

/***/ "./components/Header/Header.module.scss":
/*!**********************************************!*\
  !*** ./components/Header/Header.module.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"header": "Header_header__OkoDL",
	"mid": "Header_mid__2coHK",
	"btn-more": "Header_btn-more__1PY23",
	"btn-remove": "Header_btn-remove__1-Xz1",
	"btn-right": "Header_btn-right__3Qz70",
	"btn-last": "Header_btn-last__2EbjH",
	"dropdown-custom": "Header_dropdown-custom__3eJv2"
};


/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (({
  children,
  title = "Weather"
}) => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("title", null, title)), children, __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_2__["ToastContainer"], null)));

/***/ }),

/***/ "./components/Search/Search.js":
/*!*************************************!*\
  !*** ./components/Search/Search.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_useIsMount_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/useIsMount.js */ "./utils/useIsMount.js");
/* harmony import */ var easy_peasy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! easy-peasy */ "easy-peasy");
/* harmony import */ var easy_peasy__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(easy_peasy__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_places_autocomplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-places-autocomplete */ "react-places-autocomplete");
/* harmony import */ var react_places_autocomplete__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_places_autocomplete__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Search_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Search.module.scss */ "./components/Search/Search.module.scss");
/* harmony import */ var _Search_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Search_module_scss__WEBPACK_IMPORTED_MODULE_4__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const search = props => {
  const coords = Object(easy_peasy__WEBPACK_IMPORTED_MODULE_2__["useStoreState"])(state => state.location.locationLatitude);
  const city = Object(easy_peasy__WEBPACK_IMPORTED_MODULE_2__["useStoreState"])(state => state.location.locationCity);
  const state = Object(easy_peasy__WEBPACK_IMPORTED_MODULE_2__["useStoreState"])(state => state.location.locationState);
  const weather = Object(easy_peasy__WEBPACK_IMPORTED_MODULE_2__["useStoreState"])(state => state.weather.weatherData);
  const isMount = Object(_utils_useIsMount_js__WEBPACK_IMPORTED_MODULE_1__["useIsMount"])();
  const searchOptions = {
    types: ["(regions)"]
  };
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (isMount) {
      if ("google" in window && typeof google === "object" && typeof google.maps === "object") {
        window.myCallbackFunc = function () {};
      } else {
        const script = document.createElement("script");
        script.src = `/api/google/&libraries=places&callback=myCallbackFunc`;
        script.id = "googleapis";
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
      }
    }
  });
  return __jsx(react_places_autocomplete__WEBPACK_IMPORTED_MODULE_3___default.a, {
    value: props.address,
    onChange: props.changed,
    onSelect: props.selected,
    searchOptions: searchOptions,
    googleCallbackName: "myCallbackFunc"
  }, ({
    getInputProps,
    suggestions,
    getSuggestionItemProps,
    loading
  }) => {
    const {
      onChange
    } = getInputProps({
      placeholder: `${city}, ${state}`
    });
    let readyStatus = "Loading";

    if (coords === "") {
      readyStatus = "Checking Your Position..";
    }

    if (coords !== "" && weather === "") {
      readyStatus = "Loading Weather Data...";
    }

    if (weather !== "") {
      readyStatus = "Search location, zip...";
    }

    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("input", {
      placeholder: `${readyStatus}`,
      value: props.address,
      onChange: onChange,
      className: [["form-control"], ["location-search-input"], _Search_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a["form-control"]].join(" ")
    }), __jsx("div", {
      className: [["list-group"], _Search_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a["list-group"]].join(" ")
    }, loading && __jsx("div", {
      className: "list-group-item disabled",
      "aria-disabled": "true"
    }, "Loading Results..."), suggestions.map(suggestion => {
      const className = suggestion.active ? "list-group-item list-group-item-action active" : "list-group-item list-group-item-action";
      return __jsx("div", getSuggestionItemProps(suggestion, {
        className
      }), suggestion.description);
    })));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (search);

/***/ }),

/***/ "./components/Search/Search.module.scss":
/*!**********************************************!*\
  !*** ./components/Search/Search.module.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"list-group": "Search_list-group__22c2D",
	"form-control": "Search_form-control__2kSW7"
};


/***/ }),

/***/ "./components/Weather/Alerts/Alerts.js":
/*!*********************************************!*\
  !*** ./components/Weather/Alerts/Alerts.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Alerts_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Alerts.module.scss */ "./components/Weather/Alerts/Alerts.module.scss");
/* harmony import */ var _Alerts_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Alerts_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_micro_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-micro-modal */ "react-micro-modal");
/* harmony import */ var react_micro_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_micro_modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "date-fns");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var date_fns_fromUnixTime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns/fromUnixTime */ "date-fns/fromUnixTime");
/* harmony import */ var date_fns_fromUnixTime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(date_fns_fromUnixTime__WEBPACK_IMPORTED_MODULE_4__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const alerts = props => {
  let alert = null;

  if (props.alert) {
    alert = props.alert.map((item, index) => {
      return __jsx("span", {
        key: index
      }, __jsx(react_micro_modal__WEBPACK_IMPORTED_MODULE_2___default.a, {
        modalClassName: _Alerts_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a["modal"],
        disableFirstElementFocus: true,
        closeOnAnimationEnd: true,
        trigger: handleOpen => __jsx("a", {
          onClick: handleOpen,
          target: "_blank",
          className: [[`${item.severity}`], _Alerts_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a["alert-link"]].join(" ")
        }, __jsx("i", {
          className: "fas fa-exclamation-triangle"
        }), " ", item.title),
        children: handleClose => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
          className: [[`${item.severity}`], _Alerts_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a["modal__top"]].join(" ")
        }, __jsx("button", {
          className: _Alerts_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a["modal__top__close"],
          onClick: handleClose
        }, "\xD7"), __jsx("h2", null, item.title)), __jsx("div", {
          className: _Alerts_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a["modal-body"]
        }, __jsx("p", null, "Expires: ", Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["format"])(date_fns_fromUnixTime__WEBPACK_IMPORTED_MODULE_4___default()(item.expires), "eeee MMMM do, hh:mm:ss a")), __jsx("p", null, item.description), __jsx("button", {
          onClick: handleClose,
          className: "btn btn-secondary"
        }, "Close")))
      }));
    });
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, alert);
};

/* harmony default export */ __webpack_exports__["default"] = (alerts);

/***/ }),

/***/ "./components/Weather/Alerts/Alerts.module.scss":
/*!******************************************************!*\
  !*** ./components/Weather/Alerts/Alerts.module.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"alert-link": "Alerts_alert-link__2AdPe",
	"modal__top": "Alerts_modal__top__2WasI",
	"modal__top__close": "Alerts_modal__top__close__2lolV",
	"modal-body": "Alerts_modal-body__3cZgV"
};


/***/ }),

/***/ "./components/Weather/Background/Background.js":
/*!*****************************************************!*\
  !*** ./components/Weather/Background/Background.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Background_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Background.module.scss */ "./components/Weather/Background/Background.module.scss");
/* harmony import */ var _Background_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Background_module_scss__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const weatherBackground = props => {
  let image = null;

  if (props.condition) {
    const divStyle = {
      backgroundImage: `url('/weatherBackgrounds/${props.condition}.jpg')`
    };
    image = __jsx("div", {
      className: _Background_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a["background"],
      style: divStyle
    });
  }

  return image;
};

/* harmony default export */ __webpack_exports__["default"] = (weatherBackground);

/***/ }),

/***/ "./components/Weather/Background/Background.module.scss":
/*!**************************************************************!*\
  !*** ./components/Weather/Background/Background.module.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"background": "Background_background__1ekxc"
};


/***/ }),

/***/ "./components/Weather/Currently/Currently.js":
/*!***************************************************!*\
  !*** ./components/Weather/Currently/Currently.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Currently_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Currently.module.scss */ "./components/Weather/Currently/Currently.module.scss");
/* harmony import */ var _Currently_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Currently_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _WeatherIcon_WeatherIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../WeatherIcon/WeatherIcon */ "./components/Weather/WeatherIcon/WeatherIcon.js");
/* harmony import */ var _Units_Units__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Units/Units */ "./components/Weather/Units/Units.js");
/* harmony import */ var _Alerts_Alerts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Alerts/Alerts */ "./components/Weather/Alerts/Alerts.js");
/* harmony import */ var _utils_calculateWeather__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/calculateWeather */ "./utils/calculateWeather.js");
/* harmony import */ var react_micro_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-micro-modal */ "react-micro-modal");
/* harmony import */ var react_micro_modal__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_micro_modal__WEBPACK_IMPORTED_MODULE_6__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const currently = props => {
  return __jsx("div", {
    className: _Currently_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.currently
  }, __jsx("div", {
    className: _Currently_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a["alerts-box"]
  }, props.alerts && __jsx(_Alerts_Alerts__WEBPACK_IMPORTED_MODULE_4__["default"], {
    alert: props.alerts
  })), __jsx("div", {
    className: "row justify-content-between"
  }, __jsx("div", {
    className: "col-7"
  }, __jsx("div", {
    className: _Currently_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.now
  }, __jsx(_WeatherIcon_WeatherIcon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    condition: props.currently.icon,
    color: "white"
  }), __jsx("div", {
    className: _Currently_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.summary
  }, props.currently), __jsx("div", {
    className: _Currently_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.location
  }, props.city && props.city, props.city !== "" && props.region !== "" ? "," : "", " ", props.region), __jsx("div", {
    className: _Currently_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.temp
  }, props.currently && Math.round(props.currently.temperature.icon), " ", __jsx(_Units_Units__WEBPACK_IMPORTED_MODULE_3__["default"], {
    flags: props.flags
  })), props.daily && __jsx("div", {
    className: _Currently_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a["temp-lh"]
  }, Math.round(props.daily.data[0].temperatureHigh), " \xB0", " ", __jsx("span", null, Math.round(props.daily.data[0].temperatureLow), " \xB0")))), props.currently && __jsx("div", {
    className: "col-5"
  }, __jsx("div", {
    className: _Currently_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.pullRight
  }, __jsx("ul", {
    className: [["list-unstyled"], _Currently_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a["stats"]].join(" ")
  }, __jsx("li", {
    className: "media"
  }, __jsx("div", {
    className: _Currently_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a["stats-icon"]
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512.005 512.005"
  }, __jsx("path", {
    d: "M327.159 2.766a10.641 10.641 0 0 0-14.313 0c-4.642 4.186-110.889 101.292-160.228 213.839-5.318-1.867-11.44-3.266-19.355-3.266-18.677 0-28.698 6.969-36.75 12.573-7.031 4.896-12.583 8.76-24.573 8.76-11.969 0-17.521-3.865-24.542-8.75-8.042-5.604-18.063-12.583-36.729-12.583A10.66 10.66 0 0 0 .002 224.006a10.66 10.66 0 0 0 10.667 10.667c11.969 0 17.521 3.865 24.542 8.75 8.042 5.604 18.063 12.583 36.729 12.583 18.677 0 28.708-6.979 36.76-12.583 7.031-4.885 12.583-8.75 24.563-8.75 12 0 17.563 3.865 24.604 8.76 8.052 5.604 18.083 12.573 36.771 12.573 18.677 0 28.708-6.969 36.771-12.573 7.031-4.896 12.594-8.76 24.594-8.76a10.66 10.66 0 0 0 10.667-10.667 10.66 10.66 0 0 0-10.667-10.667c-18.687 0-28.719 6.969-36.781 12.573-7.031 4.896-12.594 8.76-24.583 8.76-11.208 0-16.823-3.419-23.242-7.854 40.121-92.661 123.661-177.466 148.607-201.49 33.219 32.01 170.667 171.865 170.667 294.677 0 94.104-76.563 170.667-170.667 170.667-42.477 0-82.669-15.822-113.78-43.758 11.542-2.138 18.994-7.177 25.186-11.482 7.031-4.896 12.594-8.76 24.594-8.76 5.896 0 10.667-4.771 10.667-10.667s-4.771-10.667-10.667-10.667c-18.687 0-28.719 6.969-36.781 12.573-7.031 4.896-12.594 8.76-24.583 8.76-12 0-17.563-3.865-24.594-8.76-8.063-5.604-18.094-12.573-36.781-12.573-18.677 0-28.698 6.969-36.75 12.573-7.031 4.896-12.583 8.76-24.573 8.76-11.969 0-17.521-3.865-24.542-8.75-8.042-5.604-18.063-12.583-36.729-12.583-5.896 0-10.667 4.771-10.667 10.667s4.771 10.667 10.667 10.667c11.969 0 17.521 3.865 24.542 8.75 8.042 5.604 18.063 12.583 36.729 12.583 18.677 0 28.708-6.979 36.76-12.583 7.031-4.885 12.583-8.75 24.563-8.75 12 0 17.563 3.865 24.604 8.76 4.345 3.023 9.414 6.355 15.961 8.865 36.6 42.996 89.655 67.708 146.174 67.708 105.865 0 192-86.135 192-192C512.003 171.641 334.701 9.589 327.159 2.766z"
  }), __jsx("path", {
    d: "M10.669 362.672c11.969 0 17.521 3.865 24.542 8.75 8.042 5.604 18.063 12.583 36.729 12.583a10.66 10.66 0 0 0 10.667-10.667 10.66 10.66 0 0 0-10.667-10.667c-11.969 0-17.521-3.865-24.542-8.75-8.042-5.604-18.063-12.583-36.729-12.583-5.896 0-10.667 4.771-10.667 10.667s4.771 10.667 10.667 10.667zm122.594-21.333c-5.896 0-10.667 4.771-10.667 10.667s4.771 10.667 10.667 10.667c12 0 17.563 3.865 24.594 8.76 8.063 5.604 18.094 12.573 36.781 12.573 18.677 0 28.708-6.969 36.771-12.573 7.031-4.896 12.594-8.76 24.594-8.76 12.198 0 18.406 3.969 26.25 8.99 9.052 5.781 19.313 12.344 37.75 12.344a10.66 10.66 0 0 0 10.667-10.667 10.66 10.66 0 0 0-10.667-10.667c-12.198 0-18.406-3.969-26.25-8.99-9.052-5.781-19.313-12.344-37.75-12.344-18.687 0-28.719 6.969-36.781 12.573-7.031 4.896-12.594 8.76-24.583 8.76-12 0-17.563-3.865-24.604-8.76-8.053-5.605-18.084-12.573-36.772-12.573zm0-64c-18.677 0-28.698 6.969-36.75 12.573-7.031 4.896-12.583 8.76-24.573 8.76-11.969 0-17.521-3.865-24.542-8.75-8.042-5.604-18.063-12.583-36.729-12.583A10.66 10.66 0 0 0 .002 288.006a10.66 10.66 0 0 0 10.667 10.667c11.969 0 17.521 3.865 24.542 8.75 8.042 5.604 18.063 12.583 36.729 12.583 18.677 0 28.708-6.979 36.76-12.583 7.031-4.885 12.583-8.75 24.563-8.75a10.66 10.66 0 0 0 10.667-10.667 10.66 10.66 0 0 0-10.667-10.667zm98.146 30.093c7.031-4.896 12.594-8.76 24.594-8.76 11.969 0 17.521 3.865 24.542 8.75 8.042 5.604 18.063 12.583 36.729 12.583 18.677 0 28.708-6.979 36.76-12.583 7.031-4.885 12.583-8.75 24.563-8.75a10.66 10.66 0 0 0 10.667-10.667 10.66 10.66 0 0 0-10.667-10.667c-18.677 0-28.698 6.969-36.75 12.573-7.031 4.896-12.583 8.76-24.573 8.76-11.969 0-17.521-3.865-24.542-8.75-8.042-5.604-18.063-12.583-36.729-12.583-18.687 0-28.719 6.969-36.781 12.573-7.031 4.896-12.594 8.76-24.583 8.76-5.896 0-10.667 4.771-10.667 10.667s4.771 10.667 10.667 10.667c18.676 0 28.707-6.969 36.77-12.573z"
  }))), __jsx("div", {
    className: "media-body"
  }, "Humidity", __jsx("h5", null, Object(_utils_calculateWeather__WEBPACK_IMPORTED_MODULE_5__["formatAsPercentage"])(props.currently.humidity)))), __jsx("li", {
    className: "media"
  }, __jsx("div", {
    className: _Currently_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a["stats-icon"]
  }, __jsx("svg", {
    height: "479pt",
    viewBox: "-31 0 479 479.874",
    width: "479pt",
    xmlns: "http://www.w3.org/2000/svg"
  }, __jsx("path", {
    d: "M120.438 335.875c77.382 0 120-45.457 120-128 0-77.281-109.391-200.152-114.047-205.336a8.251 8.251 0 0 0-11.906 0C109.827 7.723.437 130.594.437 207.875c0 82.543 42.617 128 120 128zm0-315.793c22.902 26.879 104 126.36 104 187.793 0 51.094-18.047 112-104 112s-104-60.906-104-112c0-61.434 81.093-160.914 104-187.793zm224 331.793c45.757 0 72-30.535 72-83.793 0-50.008-63.45-118.75-66.145-121.656a8.24 8.24 0 0 0-11.711 0c-2.695 2.906-66.145 71.648-66.145 121.656 0 53.258 26.239 83.793 72 83.793zm0-187.922c15.43 17.953 56 68.547 56 104.129 0 44.984-18.84 67.793-56 67.793s-56-22.809-56-67.793c0-35.582 40.566-86.176 56-104.129zm-118 158.625c-2.04 2.313-50 57.09-50 93.297 0 40.672 20.414 64 56 64 35.582 0 56-23.328 56-64 0-36.207-47.961-90.984-50-93.297a8.265 8.265 0 0 0-12 0zm6 141.297c-26.536 0-40-16.152-40-48 0-21.746 25.03-57.145 40-75.586 14.976 18.402 40 53.809 40 75.586 0 31.848-13.465 48-40 48zm0 0"
  }), __jsx("path", {
    d: "M103.637 303.836a8.005 8.005 0 0 0 8.793-7.563 8 8 0 0 0-7.192-8.359 58.61 58.61 0 0 1-42.746-21.824c-21.277-27.742-14.23-72.465-14.168-72.91a8.002 8.002 0 0 0-6.613-8.97 8.002 8.002 0 0 0-9.16 6.345c-.356 2.113-8.29 51.886 17.191 85.199a73.932 73.932 0 0 0 53.895 28.082zm232.801 16.039a55.696 55.696 0 0 0 39.128-16.855 47.815 47.815 0 0 0 8.758-40.465 7.998 7.998 0 1 0-15.773 2.64 32.819 32.819 0 0 1-5.137 27.414 39.825 39.825 0 0 1-26.976 11.266 8 8 0 0 0 0 16zm-108.426 112.84a9.181 9.181 0 0 1-5.274-5.613 9.184 9.184 0 0 1 .86-7.653c1.972-3.953.37-8.761-3.586-10.734-3.953-1.977-8.758-.371-10.735 3.582a25.185 25.185 0 0 0-1.718 19.89 25.197 25.197 0 0 0 13.3 14.887 8.003 8.003 0 0 0 10.739-3.586 8.003 8.003 0 0 0-3.586-10.734zm0 0"
  }))), __jsx("div", {
    className: "media-body"
  }, "Precipitation", __jsx("h5", null, Object(_utils_calculateWeather__WEBPACK_IMPORTED_MODULE_5__["formatAsPercentage"])(props.currently.precipProbability)))), __jsx("li", {
    className: "media"
  }, __jsx("div", {
    className: _Currently_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a["stats-icon"]
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 368 368"
  }, __jsx("path", {
    d: "M296 48c-39.704 0-72 32.304-72 72 0 4.416 3.576 8 8 8s8-3.584 8-8c0-30.88 25.128-56 56-56s56 25.12 56 56-25.128 56-56 56H8c-4.416 0-8 3.584-8 8s3.584 8 8 8h288c39.704 0 72-32.304 72-72s-32.296-72-72-72z"
  }), __jsx("path", {
    d: "M144 32c-30.88 0-56 25.12-56 56 0 4.416 3.584 8 8 8s8-3.584 8-8c0-22.056 17.944-40 40-40s40 17.944 40 40-17.944 40-40 40H8c-4.416 0-8 3.584-8 8s3.584 8 8 8h136c30.88 0 56-25.12 56-56s-25.12-56-56-56zm136 192H8c-4.416 0-8 3.584-8 8s3.584 8 8 8h272c22.056 0 40 17.944 40 40s-17.944 40-40 40-40-17.944-40-40c0-4.416-3.576-8-8-8s-8 3.584-8 8c0 30.88 25.128 56 56 56s56-25.12 56-56-25.128-56-56-56z"
  }))), __jsx("div", {
    className: "media-body"
  }, "Wind Speed", __jsx("h5", null, Object(_utils_calculateWeather__WEBPACK_IMPORTED_MODULE_5__["getDirection"])(props.currently.windBearing), " ", Math.round(props.currently.windSpeed), " MPH"))), __jsx("li", {
    className: "media"
  }, __jsx("div", {
    className: _Currently_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a["stats-icon"]
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 129 129"
  }, __jsx("path", {
    d: "M64.5 92.6c15.5 0 28-12.6 28-28s-12.6-28-28-28-28 12.6-28 28 12.5 28 28 28zm0-47.9c11 0 19.9 8.9 19.9 19.9 0 11-8.9 19.9-19.9 19.9s-19.9-8.9-19.9-19.9c0-11 8.9-19.9 19.9-19.9zM68.6 23.6V10.7c0-2.3-1.8-4.1-4.1-4.1s-4.1 1.8-4.1 4.1v12.9c0 2.3 1.8 4.1 4.1 4.1s4.1-1.8 4.1-4.1zM60.4 105.6v12.9c0 2.3 1.8 4.1 4.1 4.1s4.1-1.8 4.1-4.1v-12.9c0-2.3-1.8-4.1-4.1-4.1s-4.1 1.8-4.1 4.1zM96.4 38.5l9.1-9.1c1.6-1.6 1.6-4.2 0-5.8-1.6-1.6-4.2-1.6-5.8 0l-9.1 9.1c-1.6 1.6-1.6 4.2 0 5.8.8.8 1.8 1.2 2.9 1.2s2.1-.4 2.9-1.2zM23.5 105.6c.8.8 1.8 1.2 2.9 1.2 1 0 2.1-.4 2.9-1.2l9.1-9.1c1.6-1.6 1.6-4.2 0-5.8-1.6-1.6-4.2-1.6-5.8 0l-9.1 9.1c-1.6 1.6-1.6 4.2 0 5.8zM122.5 64.6c0-2.3-1.8-4.1-4.1-4.1h-12.9c-2.3 0-4.1 1.8-4.1 4.1s1.8 4.1 4.1 4.1h12.9c2.2 0 4.1-1.8 4.1-4.1zM10.6 68.7h12.9c2.3 0 4.1-1.8 4.1-4.1s-1.8-4.1-4.1-4.1H10.6c-2.3 0-4.1 1.8-4.1 4.1s1.9 4.1 4.1 4.1zM102.6 106.8c1 0 2.1-.4 2.9-1.2 1.6-1.6 1.6-4.2 0-5.8l-9.1-9.1c-1.6-1.6-4.2-1.6-5.8 0-1.6 1.6-1.6 4.2 0 5.8l9.1 9.1c.8.8 1.9 1.2 2.9 1.2zM38.4 38.5c1.6-1.6 1.6-4.2 0-5.8l-9.1-9.1c-1.6-1.6-4.2-1.6-5.8 0-1.6 1.6-1.6 4.2 0 5.8l9.1 9.1c.8.8 1.8 1.2 2.9 1.2s2.1-.4 2.9-1.2z"
  }))), __jsx("div", {
    className: "media-body"
  }, "UV Index", __jsx("h5", null, props.currently.uvIndex))), __jsx("li", {
    className: "media"
  }, __jsx(react_micro_modal__WEBPACK_IMPORTED_MODULE_6___default.a, {
    modalClassName: _Currently_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.modal,
    disableFirstElementFocus: true,
    closeOnAnimationEnd: true,
    trigger: handleOpen => __jsx("a", {
      onClick: handleOpen,
      target: "_blank",
      className: [["btn"], _Currently_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a["stats-more"]].join(" ")
    }, "More Details"),
    children: handleClose => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
      className: _Currently_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a["modal__top"]
    }, __jsx("button", {
      className: _Currently_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a["modal__top__close"],
      onClick: handleClose
    }, "\xD7"), __jsx("h2", null, "Currently")), __jsx("div", {
      className: _Currently_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a["modal-body"]
    }, __jsx("ul", null, __jsx("li", null, __jsx("strong", null, "Feels Like"), " ", __jsx("span", null, Math.round(props.currently.apparentTemperature), " \xB0")), __jsx("li", null, __jsx("strong", null, "Dew Point"), " ", __jsx("span", null, Math.round(props.currently.dewPoint), " \xB0")), __jsx("li", null, __jsx("strong", null, "Wind Gust"), " ", __jsx("span", null, Math.round(props.currently.windGust), " mph")), __jsx("li", null, __jsx("strong", null, "Cloud Cover"), " ", __jsx("span", null, Object(_utils_calculateWeather__WEBPACK_IMPORTED_MODULE_5__["formatAsPercentage"])(props.currently.cloudCover))), __jsx("li", null, __jsx("strong", null, "Air Pressure"), " ", __jsx("span", null, Object(_utils_calculateWeather__WEBPACK_IMPORTED_MODULE_5__["calculatePressure"])(props.currently.pressure), " in")), __jsx("li", null, __jsx("strong", null, "Ozone"), " ", __jsx("span", null, Math.round(props.currently.ozone), " du")), __jsx("li", null, __jsx("strong", null, "Visibility"), " ", __jsx("span", null, Math.round(props.currently.visibility), " mi")), props.currently.nearestStormBearing ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("li", null, __jsx("strong", null, "Nearest Storm"), " ", __jsx("span", null, Object(_utils_calculateWeather__WEBPACK_IMPORTED_MODULE_5__["getDirection"])(props.currently.nearestStormBearing), " ", Math.round(props.currently.nearestStormDistance), " mi"))) : ""), __jsx("button", {
      className: "btn btn-secondary",
      onClick: handleClose
    }, "Close")))
  })))))));
};

/* harmony default export */ __webpack_exports__["default"] = (currently);

/***/ }),

/***/ "./components/Weather/Currently/Currently.module.scss":
/*!************************************************************!*\
  !*** ./components/Weather/Currently/Currently.module.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"currently": "Currently_currently__18y27",
	"pullRight": "Currently_pullRight__2AW2j",
	"alerts-box": "Currently_alerts-box__1lw9c",
	"stats": "Currently_stats__mJ-hH",
	"stats-icon": "Currently_stats-icon__2DhgZ",
	"stats-more": "Currently_stats-more__2D8Aj",
	"now": "Currently_now__1sBAH",
	"summary": "Currently_summary__1GGM8",
	"location": "Currently_location__3_u9s",
	"temp": "Currently_temp__2a6kt",
	"temp-lh": "Currently_temp-lh__1UOBN",
	"modal__top": "Currently_modal__top__zehJG",
	"modal__top__close": "Currently_modal__top__close__3x28X",
	"modal__item": "Currently_modal__item__3QO2R",
	"modal__item__title": "Currently_modal__item__title__ciwKA",
	"modal": "Currently_modal__1FTcN",
	"modal-body": "Currently_modal-body__1oXAK"
};


/***/ }),

/***/ "./components/Weather/Units/Units.js":
/*!*******************************************!*\
  !*** ./components/Weather/Units/Units.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const units = props => {
  let checkUnits = null;

  if (props.flags === "us") {
    checkUnits = "°F";
  } else if (props.flags === "si") {
    checkUnits = "°C";
  }

  return checkUnits;
};

/* harmony default export */ __webpack_exports__["default"] = (units);

/***/ }),

/***/ "./components/Weather/Weather.js":
/*!***************************************!*\
  !*** ./components/Weather/Weather.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Weather_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Weather.module.scss */ "./components/Weather/Weather.module.scss");
/* harmony import */ var _Weather_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Weather_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var easy_peasy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! easy-peasy */ "easy-peasy");
/* harmony import */ var easy_peasy__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(easy_peasy__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Background_Background__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Background/Background */ "./components/Weather/Background/Background.js");
/* harmony import */ var _Currently_Currently__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Currently/Currently */ "./components/Weather/Currently/Currently.js");
/* harmony import */ var react_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-tabs */ "react-tabs");
/* harmony import */ var react_tabs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_tabs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Weather_WeatherSlider_DailySlider_DailySlider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Weather/WeatherSlider/DailySlider/DailySlider */ "./components/Weather/WeatherSlider/DailySlider/DailySlider.js");
/* harmony import */ var _Weather_WeatherSlider_HourlySlider_HourlySlider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Weather/WeatherSlider/HourlySlider/HourlySlider */ "./components/Weather/WeatherSlider/HourlySlider/HourlySlider.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const weather = props => {
  const spinner = Object(easy_peasy__WEBPACK_IMPORTED_MODULE_2__["useStoreState"])(state => state.spinner);
  const weather = Object(easy_peasy__WEBPACK_IMPORTED_MODULE_2__["useStoreState"])(state => state.weather.weatherData);
  const city = Object(easy_peasy__WEBPACK_IMPORTED_MODULE_2__["useStoreState"])(state => state.location.locationCity);
  const region = Object(easy_peasy__WEBPACK_IMPORTED_MODULE_2__["useStoreState"])(state => state.location.locationRegion);
  Object(react_tabs__WEBPACK_IMPORTED_MODULE_5__["resetIdCounter"])();
  return __jsx("div", {
    className: _Weather_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.weather
  }, __jsx("div", {
    className: _Weather_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a["weather-wrap"]
  }, spinner.spinner === true && __jsx("div", {
    className: "loading-spinner"
  }), props.weather && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "9", __jsx(_Background_Background__WEBPACK_IMPORTED_MODULE_3__["default"], {
    condition: weather.currently
  }), __jsx(_Currently_Currently__WEBPACK_IMPORTED_MODULE_4__["default"], {
    city: city,
    region: region,
    daily: weather.daily,
    currently: weather.currently,
    alerts: weather.alerts,
    flags: weather.flags
  }), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_5__["Tabs"], {
    className: _Weather_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.tabs,
    selectedTabClassName: _Weather_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.selected
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_5__["TabList"], {
    className: "list-group list-group-horizontal"
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_5__["Tab"], {
    className: "list-group-item"
  }, "Daily"), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_5__["Tab"], {
    className: "list-group-item"
  }, "Hourly")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_5__["TabPanel"], null, __jsx(_Weather_WeatherSlider_DailySlider_DailySlider__WEBPACK_IMPORTED_MODULE_6__["default"], {
    weather: weather
  })), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_5__["TabPanel"], null, __jsx(_Weather_WeatherSlider_HourlySlider_HourlySlider__WEBPACK_IMPORTED_MODULE_7__["default"], {
    weather: weather
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (weather);

/***/ }),

/***/ "./components/Weather/Weather.module.scss":
/*!************************************************!*\
  !*** ./components/Weather/Weather.module.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"weather": "Weather_weather__3iqZY",
	"weather-wrap": "Weather_weather-wrap__3oawy",
	"tabs": "Weather_tabs__1Apqe",
	"selected": "Weather_selected__myVjV"
};


/***/ }),

/***/ "./components/Weather/WeatherIcon/WeatherIcon.js":
/*!*******************************************************!*\
  !*** ./components/Weather/WeatherIcon/WeatherIcon.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const weatherIcon = props => {
  let icon = null;

  switch (props.condition) {
    case "clear-day":
      icon = __jsx("img", {
        src: `/weather/icons/${props.color}/svg/clear.svg`,
        alt: props.condition
      });
      break;

    case "clear-night":
      icon = __jsx("img", {
        src: `/weather/icons/${props.color}/svg/nt_clear.svg`,
        alt: props.condition
      });
      break;

    case "rain":
      icon = __jsx("img", {
        src: `/weather/icons/${props.color}/svg/rain.svg`,
        alt: props.condition
      });
      break;

    case "snow":
      icon = __jsx("img", {
        src: `/weather/icons/${props.color}/svg/snow.svg`,
        alt: props.condition
      });
      break;

    case "sleet":
      icon = __jsx("img", {
        src: `/weather/icons/${props.color}/svg/sleet.svg`,
        alt: props.condition
      });
      break;

    case "wind":
      icon = __jsx("img", {
        src: `/weather/icons/${props.color}/svg/wind.svg`,
        alt: props.condition
      });
      break;

    case "fog":
      icon = __jsx("img", {
        src: `/weather/icons/${props.color}/svg/fog.svg`,
        alt: props.condition
      });
      break;

    case "cloudy":
      icon = __jsx("img", {
        src: `/weather/icons/${props.color}/svg/cloudy.svg`,
        alt: props.condition
      });
      break;

    case "partly-cloudy-day":
      icon = __jsx("img", {
        src: `/weather/icons/${props.color}/svg/partlycloudy.svg`,
        alt: props.condition
      });
      break;

    case "partly-cloudy-night":
      icon = __jsx("img", {
        src: `/weather/icons/${props.color}/svg/nt_partlycloudy.svg`,
        alt: props.condition
      });
      break;

    case "hail":
      icon = __jsx("img", {
        src: `/weather/icons/${props.color}/svg/sleet.svg`,
        alt: props.condition
      });
      break;

    case "thunderstorm":
      icon = __jsx("img", {
        src: `/weather/icons/${props.color}/svg/tstorms.svg`,
        alt: props.condition
      });
      break;

    case "tornado":
      icon = __jsx("img", {
        src: `/weather/icons/${props.color}/svg/tornado.svg`,
        alt: props.condition
      });
      break;

    default:
      icon = __jsx("img", {
        src: `/weather/icons/${props.color}/svg/unknown.svg`,
        alt: props.condition
      });
      break;
  }

  return icon;
};

/* harmony default export */ __webpack_exports__["default"] = (weatherIcon);

/***/ }),

/***/ "./components/Weather/WeatherSlider/DailySlider/DailySlider.js":
/*!*********************************************************************!*\
  !*** ./components/Weather/WeatherSlider/DailySlider/DailySlider.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _WeatherSlider_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../WeatherSlider.module.scss */ "./components/Weather/WeatherSlider/WeatherSlider.module.scss");
/* harmony import */ var _WeatherSlider_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_WeatherSlider_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _WeatherIcon_WeatherIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../WeatherIcon/WeatherIcon */ "./components/Weather/WeatherIcon/WeatherIcon.js");
/* harmony import */ var react_id_swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-id-swiper */ "react-id-swiper");
/* harmony import */ var react_id_swiper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_id_swiper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_micro_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-micro-modal */ "react-micro-modal");
/* harmony import */ var react_micro_modal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_micro_modal__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_calculateWeather__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../utils/calculateWeather */ "./utils/calculateWeather.js");
/* harmony import */ var react_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-tabs */ "react-tabs");
/* harmony import */ var react_tabs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_tabs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ "date-fns");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var date_fns_fromUnixTime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns/fromUnixTime */ "date-fns/fromUnixTime");
/* harmony import */ var date_fns_fromUnixTime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(date_fns_fromUnixTime__WEBPACK_IMPORTED_MODULE_8__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










const dailySlider = props => {
  const {
    0: swiper,
    1: updateSwiper
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);

  const goNext = () => {
    if (swiper !== null) {
      swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiper !== null) {
      swiper.slidePrev();
    }
  };

  let checkHour = props.weather.hourly.data;

  const hourArray = () => {
    let newArray = checkHour.map(object => Object(date_fns__WEBPACK_IMPORTED_MODULE_7__["format"])(date_fns_fromUnixTime__WEBPACK_IMPORTED_MODULE_8___default()(object.time), "M/d/yyyy"));
    let oneDay = [...new Set(newArray)];
    return oneDay;
  };

  let slider = null;
  let sliderInitialize = null;
  sliderInitialize = props.weather.daily.data.slice(0, 8).map((item, _index) => {
    const backgroundCondition = {
      backgroundImage: `url(/weatherBackgrounds/${item.icon}.jpg)`
    };
    return __jsx("div", {
      key: item.time,
      className: _WeatherSlider_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.slide
    }, __jsx(react_micro_modal__WEBPACK_IMPORTED_MODULE_4___default.a, {
      modalClassName: _WeatherSlider_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.modal,
      disableFirstElementFocus: true,
      closeOnAnimationEnd: true,
      trigger: handleOpen => __jsx("div", {
        onClick: handleOpen,
        target: "_blank",
        className: [_WeatherSlider_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.slide, _WeatherSlider_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a["slide-modal-btn"]].join(" ")
      }, Object(date_fns__WEBPACK_IMPORTED_MODULE_7__["format"])(new Date(), "eeee Do") === Object(date_fns__WEBPACK_IMPORTED_MODULE_7__["format"])(date_fns_fromUnixTime__WEBPACK_IMPORTED_MODULE_8___default()(item.time), "eeee Do") ? __jsx("div", {
        className: _WeatherSlider_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.date
      }, "Today") : __jsx("div", {
        className: _WeatherSlider_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.date
      }, Object(date_fns__WEBPACK_IMPORTED_MODULE_7__["format"])(date_fns_fromUnixTime__WEBPACK_IMPORTED_MODULE_8___default()(item.time), "eee, MMM do")), __jsx(_WeatherIcon_WeatherIcon__WEBPACK_IMPORTED_MODULE_2__["default"], {
        condition: item.icon,
        color: "white"
      }), __jsx("div", {
        className: _WeatherSlider_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.temp
      }, Math.round(item.temperatureHigh), " \xB0", " ", __jsx("span", null, Math.round(item.temperatureLow), " \xB0")), __jsx("span", null, Object(_utils_calculateWeather__WEBPACK_IMPORTED_MODULE_5__["getCondition"])(item.icon))),
      children: handleClose => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
        className: _WeatherSlider_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a["modal__top"]
      }, __jsx("div", {
        style: backgroundCondition,
        className: _WeatherSlider_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a["modal__top__background"]
      }), __jsx("button", {
        className: _WeatherSlider_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a["modal__top__close"],
        onClick: handleClose
      }, "\xD7"), Object(date_fns__WEBPACK_IMPORTED_MODULE_7__["format"])(new Date(), "eeee Do") === Object(date_fns__WEBPACK_IMPORTED_MODULE_7__["format"])(date_fns_fromUnixTime__WEBPACK_IMPORTED_MODULE_8___default()(item.time), "eeee Do") ? __jsx("h2", {
        className: _WeatherSlider_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.date
      }, "Today") : __jsx("h2", {
        className: _WeatherSlider_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.date
      }, Object(date_fns__WEBPACK_IMPORTED_MODULE_7__["format"])(date_fns_fromUnixTime__WEBPACK_IMPORTED_MODULE_8___default()(item.time), "eeee, MMMM do")), __jsx("div", {
        className: "row"
      }, __jsx("div", {
        className: "col-6 col-xs-6 col-sm-6 col-md-3"
      }, __jsx("div", {
        className: _WeatherSlider_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a["modal__item"]
      }, __jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512.005 512.005"
      }, __jsx("path", {
        d: "M327.159 2.766a10.641 10.641 0 0 0-14.313 0c-4.642 4.186-110.889 101.292-160.228 213.839-5.318-1.867-11.44-3.266-19.355-3.266-18.677 0-28.698 6.969-36.75 12.573-7.031 4.896-12.583 8.76-24.573 8.76-11.969 0-17.521-3.865-24.542-8.75-8.042-5.604-18.063-12.583-36.729-12.583A10.66 10.66 0 0 0 .002 224.006a10.66 10.66 0 0 0 10.667 10.667c11.969 0 17.521 3.865 24.542 8.75 8.042 5.604 18.063 12.583 36.729 12.583 18.677 0 28.708-6.979 36.76-12.583 7.031-4.885 12.583-8.75 24.563-8.75 12 0 17.563 3.865 24.604 8.76 8.052 5.604 18.083 12.573 36.771 12.573 18.677 0 28.708-6.969 36.771-12.573 7.031-4.896 12.594-8.76 24.594-8.76a10.66 10.66 0 0 0 10.667-10.667 10.66 10.66 0 0 0-10.667-10.667c-18.687 0-28.719 6.969-36.781 12.573-7.031 4.896-12.594 8.76-24.583 8.76-11.208 0-16.823-3.419-23.242-7.854 40.121-92.661 123.661-177.466 148.607-201.49 33.219 32.01 170.667 171.865 170.667 294.677 0 94.104-76.563 170.667-170.667 170.667-42.477 0-82.669-15.822-113.78-43.758 11.542-2.138 18.994-7.177 25.186-11.482 7.031-4.896 12.594-8.76 24.594-8.76 5.896 0 10.667-4.771 10.667-10.667s-4.771-10.667-10.667-10.667c-18.687 0-28.719 6.969-36.781 12.573-7.031 4.896-12.594 8.76-24.583 8.76-12 0-17.563-3.865-24.594-8.76-8.063-5.604-18.094-12.573-36.781-12.573-18.677 0-28.698 6.969-36.75 12.573-7.031 4.896-12.583 8.76-24.573 8.76-11.969 0-17.521-3.865-24.542-8.75-8.042-5.604-18.063-12.583-36.729-12.583-5.896 0-10.667 4.771-10.667 10.667s4.771 10.667 10.667 10.667c11.969 0 17.521 3.865 24.542 8.75 8.042 5.604 18.063 12.583 36.729 12.583 18.677 0 28.708-6.979 36.76-12.583 7.031-4.885 12.583-8.75 24.563-8.75 12 0 17.563 3.865 24.604 8.76 4.345 3.023 9.414 6.355 15.961 8.865 36.6 42.996 89.655 67.708 146.174 67.708 105.865 0 192-86.135 192-192C512.003 171.641 334.701 9.589 327.159 2.766z"
      }), __jsx("path", {
        d: "M10.669 362.672c11.969 0 17.521 3.865 24.542 8.75 8.042 5.604 18.063 12.583 36.729 12.583a10.66 10.66 0 0 0 10.667-10.667 10.66 10.66 0 0 0-10.667-10.667c-11.969 0-17.521-3.865-24.542-8.75-8.042-5.604-18.063-12.583-36.729-12.583-5.896 0-10.667 4.771-10.667 10.667s4.771 10.667 10.667 10.667zm122.594-21.333c-5.896 0-10.667 4.771-10.667 10.667s4.771 10.667 10.667 10.667c12 0 17.563 3.865 24.594 8.76 8.063 5.604 18.094 12.573 36.781 12.573 18.677 0 28.708-6.969 36.771-12.573 7.031-4.896 12.594-8.76 24.594-8.76 12.198 0 18.406 3.969 26.25 8.99 9.052 5.781 19.313 12.344 37.75 12.344a10.66 10.66 0 0 0 10.667-10.667 10.66 10.66 0 0 0-10.667-10.667c-12.198 0-18.406-3.969-26.25-8.99-9.052-5.781-19.313-12.344-37.75-12.344-18.687 0-28.719 6.969-36.781 12.573-7.031 4.896-12.594 8.76-24.583 8.76-12 0-17.563-3.865-24.604-8.76-8.053-5.605-18.084-12.573-36.772-12.573zm0-64c-18.677 0-28.698 6.969-36.75 12.573-7.031 4.896-12.583 8.76-24.573 8.76-11.969 0-17.521-3.865-24.542-8.75-8.042-5.604-18.063-12.583-36.729-12.583A10.66 10.66 0 0 0 .002 288.006a10.66 10.66 0 0 0 10.667 10.667c11.969 0 17.521 3.865 24.542 8.75 8.042 5.604 18.063 12.583 36.729 12.583 18.677 0 28.708-6.979 36.76-12.583 7.031-4.885 12.583-8.75 24.563-8.75a10.66 10.66 0 0 0 10.667-10.667 10.66 10.66 0 0 0-10.667-10.667zm98.146 30.093c7.031-4.896 12.594-8.76 24.594-8.76 11.969 0 17.521 3.865 24.542 8.75 8.042 5.604 18.063 12.583 36.729 12.583 18.677 0 28.708-6.979 36.76-12.583 7.031-4.885 12.583-8.75 24.563-8.75a10.66 10.66 0 0 0 10.667-10.667 10.66 10.66 0 0 0-10.667-10.667c-18.677 0-28.698 6.969-36.75 12.573-7.031 4.896-12.583 8.76-24.573 8.76-11.969 0-17.521-3.865-24.542-8.75-8.042-5.604-18.063-12.583-36.729-12.583-18.687 0-28.719 6.969-36.781 12.573-7.031 4.896-12.594 8.76-24.583 8.76-5.896 0-10.667 4.771-10.667 10.667s4.771 10.667 10.667 10.667c18.676 0 28.707-6.969 36.77-12.573z"
      })), __jsx("h4", {
        className: _WeatherSlider_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a["modal__item__title"]
      }, "Humidity"), Object(_utils_calculateWeather__WEBPACK_IMPORTED_MODULE_5__["formatAsPercentage"])(item.humidity))), __jsx("div", {
        className: "col-6 col-xs-6 col-sm-6 col-md-3"
      }, __jsx("div", {
        className: _WeatherSlider_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a["modal__item"]
      }, __jsx("svg", {
        height: "479pt",
        viewBox: "-31 0 479 479.874",
        width: "479pt",
        xmlns: "http://www.w3.org/2000/svg"
      }, __jsx("path", {
        d: "M120.438 335.875c77.382 0 120-45.457 120-128 0-77.281-109.391-200.152-114.047-205.336a8.251 8.251 0 0 0-11.906 0C109.827 7.723.437 130.594.437 207.875c0 82.543 42.617 128 120 128zm0-315.793c22.902 26.879 104 126.36 104 187.793 0 51.094-18.047 112-104 112s-104-60.906-104-112c0-61.434 81.093-160.914 104-187.793zm224 331.793c45.757 0 72-30.535 72-83.793 0-50.008-63.45-118.75-66.145-121.656a8.24 8.24 0 0 0-11.711 0c-2.695 2.906-66.145 71.648-66.145 121.656 0 53.258 26.239 83.793 72 83.793zm0-187.922c15.43 17.953 56 68.547 56 104.129 0 44.984-18.84 67.793-56 67.793s-56-22.809-56-67.793c0-35.582 40.566-86.176 56-104.129zm-118 158.625c-2.04 2.313-50 57.09-50 93.297 0 40.672 20.414 64 56 64 35.582 0 56-23.328 56-64 0-36.207-47.961-90.984-50-93.297a8.265 8.265 0 0 0-12 0zm6 141.297c-26.536 0-40-16.152-40-48 0-21.746 25.03-57.145 40-75.586 14.976 18.402 40 53.809 40 75.586 0 31.848-13.465 48-40 48zm0 0"
      }), __jsx("path", {
        d: "M103.637 303.836a8.005 8.005 0 0 0 8.793-7.563 8 8 0 0 0-7.192-8.359 58.61 58.61 0 0 1-42.746-21.824c-21.277-27.742-14.23-72.465-14.168-72.91a8.002 8.002 0 0 0-6.613-8.97 8.002 8.002 0 0 0-9.16 6.345c-.356 2.113-8.29 51.886 17.191 85.199a73.932 73.932 0 0 0 53.895 28.082zm232.801 16.039a55.696 55.696 0 0 0 39.128-16.855 47.815 47.815 0 0 0 8.758-40.465 7.998 7.998 0 1 0-15.773 2.64 32.819 32.819 0 0 1-5.137 27.414 39.825 39.825 0 0 1-26.976 11.266 8 8 0 0 0 0 16zm-108.426 112.84a9.181 9.181 0 0 1-5.274-5.613 9.184 9.184 0 0 1 .86-7.653c1.972-3.953.37-8.761-3.586-10.734-3.953-1.977-8.758-.371-10.735 3.582a25.185 25.185 0 0 0-1.718 19.89 25.197 25.197 0 0 0 13.3 14.887 8.003 8.003 0 0 0 10.739-3.586 8.003 8.003 0 0 0-3.586-10.734zm0 0"
      })), __jsx("h4", {
        className: _WeatherSlider_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a["modal__item__title"]
      }, "Precipitation"), Object(_utils_calculateWeather__WEBPACK_IMPORTED_MODULE_5__["formatAsPercentage"])(item.precipProbability))), __jsx("div", {
        className: "col-6 col-xs-6 col-sm-6 col-md-3"
      }, __jsx("div", {
        className: _WeatherSlider_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a["modal__item"]
      }, __jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 368 368"
      }, __jsx("path", {
        d: "M296 48c-39.704 0-72 32.304-72 72 0 4.416 3.576 8 8 8s8-3.584 8-8c0-30.88 25.128-56 56-56s56 25.12 56 56-25.128 56-56 56H8c-4.416 0-8 3.584-8 8s3.584 8 8 8h288c39.704 0 72-32.304 72-72s-32.296-72-72-72z"
      }), __jsx("path", {
        d: "M144 32c-30.88 0-56 25.12-56 56 0 4.416 3.584 8 8 8s8-3.584 8-8c0-22.056 17.944-40 40-40s40 17.944 40 40-17.944 40-40 40H8c-4.416 0-8 3.584-8 8s3.584 8 8 8h136c30.88 0 56-25.12 56-56s-25.12-56-56-56zm136 192H8c-4.416 0-8 3.584-8 8s3.584 8 8 8h272c22.056 0 40 17.944 40 40s-17.944 40-40 40-40-17.944-40-40c0-4.416-3.576-8-8-8s-8 3.584-8 8c0 30.88 25.128 56 56 56s56-25.12 56-56-25.128-56-56-56z"
      })), __jsx("h4", {
        className: _WeatherSlider_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a["modal__item__title"]
      }, "Wind Speed"), Object(_utils_calculateWeather__WEBPACK_IMPORTED_MODULE_5__["getDirection"])(item.windBearing), " ", Math.round(item.windSpeed), " MPH")), __jsx("div", {
        className: "col-6 col-xs-6 col-sm-6 col-md-3"
      }, __jsx("div", {
        className: _WeatherSlider_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a["modal__item"]
      }, __jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 129 129"
      }, __jsx("path", {
        d: "M64.5 92.6c15.5 0 28-12.6 28-28s-12.6-28-28-28-28 12.6-28 28 12.5 28 28 28zm0-47.9c11 0 19.9 8.9 19.9 19.9 0 11-8.9 19.9-19.9 19.9s-19.9-8.9-19.9-19.9c0-11 8.9-19.9 19.9-19.9zM68.6 23.6V10.7c0-2.3-1.8-4.1-4.1-4.1s-4.1 1.8-4.1 4.1v12.9c0 2.3 1.8 4.1 4.1 4.1s4.1-1.8 4.1-4.1zM60.4 105.6v12.9c0 2.3 1.8 4.1 4.1 4.1s4.1-1.8 4.1-4.1v-12.9c0-2.3-1.8-4.1-4.1-4.1s-4.1 1.8-4.1 4.1zM96.4 38.5l9.1-9.1c1.6-1.6 1.6-4.2 0-5.8-1.6-1.6-4.2-1.6-5.8 0l-9.1 9.1c-1.6 1.6-1.6 4.2 0 5.8.8.8 1.8 1.2 2.9 1.2s2.1-.4 2.9-1.2zM23.5 105.6c.8.8 1.8 1.2 2.9 1.2 1 0 2.1-.4 2.9-1.2l9.1-9.1c1.6-1.6 1.6-4.2 0-5.8-1.6-1.6-4.2-1.6-5.8 0l-9.1 9.1c-1.6 1.6-1.6 4.2 0 5.8zM122.5 64.6c0-2.3-1.8-4.1-4.1-4.1h-12.9c-2.3 0-4.1 1.8-4.1 4.1s1.8 4.1 4.1 4.1h12.9c2.2 0 4.1-1.8 4.1-4.1zM10.6 68.7h12.9c2.3 0 4.1-1.8 4.1-4.1s-1.8-4.1-4.1-4.1H10.6c-2.3 0-4.1 1.8-4.1 4.1s1.9 4.1 4.1 4.1zM102.6 106.8c1 0 2.1-.4 2.9-1.2 1.6-1.6 1.6-4.2 0-5.8l-9.1-9.1c-1.6-1.6-4.2-1.6-5.8 0-1.6 1.6-1.6 4.2 0 5.8l9.1 9.1c.8.8 1.9 1.2 2.9 1.2zM38.4 38.5c1.6-1.6 1.6-4.2 0-5.8l-9.1-9.1c-1.6-1.6-4.2-1.6-5.8 0-1.6 1.6-1.6 4.2 0 5.8l9.1 9.1c.8.8 1.8 1.2 2.9 1.2s2.1-.4 2.9-1.2z"
      })), __jsx("h4", {
        className: _WeatherSlider_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a["modal__item__title"]
      }, "UV Index"), item.uvIndex)))), __jsx("div", {
        className: _WeatherSlider_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a["modal-body"]
      }, __jsx("p", null, item.summary), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_6__["Tabs"], {
        className: _WeatherSlider_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.tabs,
        selectedTabClassName: _WeatherSlider_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.selected
      }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_6__["TabList"], {
        className: "tab-group"
      }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_6__["Tab"], {
        className: "tab-item"
      }, "Daily Summary"), hourArray().map((dataTime, index) => {
        if (dataTime === Object(date_fns__WEBPACK_IMPORTED_MODULE_7__["format"])(date_fns_fromUnixTime__WEBPACK_IMPORTED_MODULE_8___default()(item.time), "M/d/yyyy")) {
          return __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_6__["Tab"], {
            key: index,
            className: "tab-item"
          }, "By The Hour");
        }
      })), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_6__["TabPanel"], null, __jsx("ul", null, __jsx("li", null, __jsx("strong", null, "Temperature"), " ", __jsx("span", null, "Min ", Math.round(item.temperatureLow), " \xB0 / Max", " ", Math.round(item.temperatureHigh), " \xB0")), __jsx("li", null, __jsx("strong", null, "Feels Like"), " ", __jsx("span", null, "Min ", Math.round(item.apparentTemperatureMin), " \xB0 / Max", " ", Math.round(item.apparentTemperatureMax), " \xB0")), __jsx("li", null, __jsx("strong", null, "Sunrise"), " ", __jsx("span", null, Object(date_fns__WEBPACK_IMPORTED_MODULE_7__["format"])(date_fns_fromUnixTime__WEBPACK_IMPORTED_MODULE_8___default()(item.sunriseTime), "h:m a"))), __jsx("li", null, __jsx("strong", null, "Sunset"), " ", __jsx("span", null, Object(date_fns__WEBPACK_IMPORTED_MODULE_7__["format"])(date_fns_fromUnixTime__WEBPACK_IMPORTED_MODULE_8___default()(item.sunsetTime), "h:m a"))), __jsx("li", null, __jsx("strong", null, "Moon Phase"), " ", __jsx("span", null, _utils_calculateWeather__WEBPACK_IMPORTED_MODULE_5__["Moon"].phase(parseInt(Object(date_fns__WEBPACK_IMPORTED_MODULE_7__["format"])(date_fns_fromUnixTime__WEBPACK_IMPORTED_MODULE_8___default()(item.time), "yyyy")), parseInt(Object(date_fns__WEBPACK_IMPORTED_MODULE_7__["format"])(date_fns_fromUnixTime__WEBPACK_IMPORTED_MODULE_8___default()(item.time), "M")), parseInt(Object(date_fns__WEBPACK_IMPORTED_MODULE_7__["format"])(date_fns_fromUnixTime__WEBPACK_IMPORTED_MODULE_8___default()(item.time), "d"))).name)), __jsx("li", null, __jsx("strong", null, "Dew Point"), " ", __jsx("span", null, Math.round(item.dewPoint), " \xB0")), __jsx("li", null, __jsx("strong", null, "Wind Gust"), " ", __jsx("span", null, Math.round(item.windGust), " mph")), item.precipAccumulation && __jsx("li", null, __jsx("strong", null, "Snowfall Accumulation"), " ", __jsx("span", null, item.precipAccumulation, "\"")), __jsx("li", null, __jsx("strong", null, "Cloud Cover"), " ", __jsx("span", null, Object(_utils_calculateWeather__WEBPACK_IMPORTED_MODULE_5__["formatAsPercentage"])(item.cloudCover))), __jsx("li", null, __jsx("strong", null, "UV Index"), " ", __jsx("span", null, item.uvIndex, " at ", Object(date_fns__WEBPACK_IMPORTED_MODULE_7__["format"])(date_fns_fromUnixTime__WEBPACK_IMPORTED_MODULE_8___default()(item.uvIndexTime), "hh:mm a"))), __jsx("li", null, __jsx("strong", null, "Air Pressure"), " ", __jsx("span", null, Object(_utils_calculateWeather__WEBPACK_IMPORTED_MODULE_5__["calculatePressure"])(item.pressure), " in")), __jsx("li", null, __jsx("strong", null, "Ozone"), " ", __jsx("span", null, Math.round(item.ozone), " du")), __jsx("li", null, __jsx("strong", null, "Visibility"), " ", __jsx("span", null, Math.round(item.visibility), " mi")))), hourArray().map((dataTime, index) => {
        if (dataTime === Object(date_fns__WEBPACK_IMPORTED_MODULE_7__["format"])(date_fns_fromUnixTime__WEBPACK_IMPORTED_MODULE_8___default()(item.time), "M/d/yyyy")) {
          return __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_6__["TabPanel"], {
            key: index
          }, __jsx("div", {
            className: "table-responsive-sm"
          }, __jsx("table", {
            className: "table table-hover table-borderless table-sm"
          }, __jsx("thead", null, __jsx("tr", null, __jsx("th", {
            scope: "col"
          }, "Time"), __jsx("th", {
            scope: "col"
          }, "Temp"), __jsx("th", {
            scope: "col"
          }, "Precip"), __jsx("th", {
            scope: "col"
          }, "Wind"))), __jsx("tbody", null, checkHour.map((hour, index) => {
            if (Object(date_fns__WEBPACK_IMPORTED_MODULE_7__["format"])(date_fns_fromUnixTime__WEBPACK_IMPORTED_MODULE_8___default()(hour.time), "MMMM do yyyy") === Object(date_fns__WEBPACK_IMPORTED_MODULE_7__["format"])(date_fns_fromUnixTime__WEBPACK_IMPORTED_MODULE_8___default()(item.time), "MMMM do yyyy")) {
              return __jsx("tr", {
                key: hour.time
              }, __jsx("th", {
                scope: "row"
              }, Object(date_fns__WEBPACK_IMPORTED_MODULE_7__["format"])(date_fns_fromUnixTime__WEBPACK_IMPORTED_MODULE_8___default()(hour.time), "h a"), " ", __jsx(_WeatherIcon_WeatherIcon__WEBPACK_IMPORTED_MODULE_2__["default"], {
                condition: hour.icon,
                color: "black"
              })), __jsx("td", null, Math.round(hour.temperature), " \xB0"), __jsx("td", null, Object(_utils_calculateWeather__WEBPACK_IMPORTED_MODULE_5__["formatAsPercentage"])(hour.precipProbability)), __jsx("td", null, Object(_utils_calculateWeather__WEBPACK_IMPORTED_MODULE_5__["getDirection"])(item.windBearing), " ", Math.round(hour.windSpeed), " mph"));
            }
          })))));
        }
      })), __jsx("button", {
        className: "btn btn-secondary",
        onClick: handleClose
      }, "Close")))
    }));
  });
  const params = {
    getSwiper: updateSwiper,
    loop: false,
    slidesPerView: 7,
    spaceBetween: 5,
    shouldSwiperUpdate: true,
    breakpoints: {
      200: {
        slidesPerView: 2
      },
      400: {
        slidesPerView: 3
      },
      640: {
        slidesPerView: 3
      },
      768: {
        slidesPerView: 3
      },
      1024: {
        slidesPerView: 5
      },
      1400: {
        slidesPerView: 7
      }
    }
  };
  initializeSlider(params);

  function initializeSlider(params) {
    slider = __jsx(react_id_swiper__WEBPACK_IMPORTED_MODULE_3___default.a, params, sliderInitialize);
  }

  return __jsx("div", {
    className: _WeatherSlider_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.slider
  }, __jsx("div", {
    className: _WeatherSlider_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a["slider-arrows"]
  }, __jsx("button", {
    onClick: goPrev
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 492 492"
  }, __jsx("path", {
    d: "M198.608 246.104L382.664 62.04c5.068-5.056 7.856-11.816 7.856-19.024 0-7.212-2.788-13.968-7.856-19.032l-16.128-16.12C361.476 2.792 354.712 0 347.504 0s-13.964 2.792-19.028 7.864L109.328 227.008c-5.084 5.08-7.868 11.868-7.848 19.084-.02 7.248 2.76 14.028 7.848 19.112l218.944 218.932c5.064 5.072 11.82 7.864 19.032 7.864 7.208 0 13.964-2.792 19.032-7.864l16.124-16.12c10.492-10.492 10.492-27.572 0-38.06L198.608 246.104z"
  }))), __jsx("button", {
    onClick: goNext
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 492.004 492.004"
  }, __jsx("path", {
    d: "M382.678 226.804L163.73 7.86C158.666 2.792 151.906 0 144.698 0s-13.968 2.792-19.032 7.86l-16.124 16.12c-10.492 10.504-10.492 27.576 0 38.064L293.398 245.9l-184.06 184.06c-5.064 5.068-7.86 11.824-7.86 19.028 0 7.212 2.796 13.968 7.86 19.04l16.124 16.116c5.068 5.068 11.824 7.86 19.032 7.86s13.968-2.792 19.032-7.86L382.678 265c5.076-5.084 7.864-11.872 7.848-19.088.016-7.244-2.772-14.028-7.848-19.108z"
  })))), slider);
};

/* harmony default export */ __webpack_exports__["default"] = (dailySlider);

/***/ }),

/***/ "./components/Weather/WeatherSlider/HourlySlider/HourlySlider.js":
/*!***********************************************************************!*\
  !*** ./components/Weather/WeatherSlider/HourlySlider/HourlySlider.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _WeatherSlider_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../WeatherSlider.module.scss */ "./components/Weather/WeatherSlider/WeatherSlider.module.scss");
/* harmony import */ var _WeatherSlider_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_WeatherSlider_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _WeatherIcon_WeatherIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../WeatherIcon/WeatherIcon */ "./components/Weather/WeatherIcon/WeatherIcon.js");
/* harmony import */ var react_id_swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-id-swiper */ "react-id-swiper");
/* harmony import */ var react_id_swiper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_id_swiper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_micro_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-micro-modal */ "react-micro-modal");
/* harmony import */ var react_micro_modal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_micro_modal__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_calculateWeather__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../utils/calculateWeather */ "./utils/calculateWeather.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ "date-fns");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var date_fns_fromUnixTime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns/fromUnixTime */ "date-fns/fromUnixTime");
/* harmony import */ var date_fns_fromUnixTime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(date_fns_fromUnixTime__WEBPACK_IMPORTED_MODULE_7__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const hourlySlider = props => {
  const {
    0: swiper,
    1: updateSwiper
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);

  const goNext = () => {
    if (swiper !== null) {
      swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiper !== null) {
      swiper.slidePrev();
    }
  };

  let slider = null;
  let sliderInitialize = null;
  sliderInitialize = props.weather.hourly.data.slice(0, 48).map((item, index) => {
    const backgroundCondition = {
      backgroundImage: `url(/weatherBackgrounds/${item.icon}.jpg)`
    };
    return __jsx("div", {
      key: item.time,
      className: _WeatherSlider_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.slide
    }, __jsx(react_micro_modal__WEBPACK_IMPORTED_MODULE_4___default.a, {
      modalClassName: _WeatherSlider_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.modal,
      disableFirstElementFocus: true,
      closeOnAnimationEnd: true,
      trigger: handleOpen => __jsx("div", {
        onClick: handleOpen,
        target: "_blank",
        className: [_WeatherSlider_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.slide, _WeatherSlider_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a["slide-modal-btn"]].join(" ")
      }, __jsx("div", {
        className: _WeatherSlider_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.date
      }, Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["format"])(new Date(), "eee") === Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["format"])(date_fns_fromUnixTime__WEBPACK_IMPORTED_MODULE_7___default()(item.time), "eee") ? Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["format"])(date_fns_fromUnixTime__WEBPACK_IMPORTED_MODULE_7___default()(item.time), "h a") : Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["format"])(date_fns_fromUnixTime__WEBPACK_IMPORTED_MODULE_7___default()(item.time), "eee h a")), __jsx(_WeatherIcon_WeatherIcon__WEBPACK_IMPORTED_MODULE_2__["default"], {
        condition: item.icon,
        color: "white"
      }), __jsx("div", {
        className: _WeatherSlider_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.temp
      }, Math.round(item.temperature), " \xB0"), Object(_utils_calculateWeather__WEBPACK_IMPORTED_MODULE_5__["getCondition"])(item.icon)),
      children: handleClose => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
        className: _WeatherSlider_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a["modal__top"]
      }, __jsx("div", {
        style: backgroundCondition,
        className: _WeatherSlider_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a["modal__top__background"]
      }), __jsx("button", {
        className: _WeatherSlider_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a["modal__top__close"],
        onClick: handleClose
      }, "\xD7"), __jsx("h2", {
        className: _WeatherSlider_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.date
      }, Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["format"])(new Date(), "eee") === Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["format"])(date_fns_fromUnixTime__WEBPACK_IMPORTED_MODULE_7___default()(item.time), "eee") ? Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["format"])(date_fns_fromUnixTime__WEBPACK_IMPORTED_MODULE_7___default()(item.time), "h a") : Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["format"])(date_fns_fromUnixTime__WEBPACK_IMPORTED_MODULE_7___default()(item.time), "eee h a")), __jsx("div", {
        className: "row"
      }, __jsx("div", {
        className: "col-6 col-xs-6 col-sm-6 col-md-3"
      }, __jsx("div", {
        className: _WeatherSlider_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a["modal__item"]
      }, __jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512.005 512.005"
      }, __jsx("path", {
        d: "M327.159 2.766a10.641 10.641 0 0 0-14.313 0c-4.642 4.186-110.889 101.292-160.228 213.839-5.318-1.867-11.44-3.266-19.355-3.266-18.677 0-28.698 6.969-36.75 12.573-7.031 4.896-12.583 8.76-24.573 8.76-11.969 0-17.521-3.865-24.542-8.75-8.042-5.604-18.063-12.583-36.729-12.583A10.66 10.66 0 0 0 .002 224.006a10.66 10.66 0 0 0 10.667 10.667c11.969 0 17.521 3.865 24.542 8.75 8.042 5.604 18.063 12.583 36.729 12.583 18.677 0 28.708-6.979 36.76-12.583 7.031-4.885 12.583-8.75 24.563-8.75 12 0 17.563 3.865 24.604 8.76 8.052 5.604 18.083 12.573 36.771 12.573 18.677 0 28.708-6.969 36.771-12.573 7.031-4.896 12.594-8.76 24.594-8.76a10.66 10.66 0 0 0 10.667-10.667 10.66 10.66 0 0 0-10.667-10.667c-18.687 0-28.719 6.969-36.781 12.573-7.031 4.896-12.594 8.76-24.583 8.76-11.208 0-16.823-3.419-23.242-7.854 40.121-92.661 123.661-177.466 148.607-201.49 33.219 32.01 170.667 171.865 170.667 294.677 0 94.104-76.563 170.667-170.667 170.667-42.477 0-82.669-15.822-113.78-43.758 11.542-2.138 18.994-7.177 25.186-11.482 7.031-4.896 12.594-8.76 24.594-8.76 5.896 0 10.667-4.771 10.667-10.667s-4.771-10.667-10.667-10.667c-18.687 0-28.719 6.969-36.781 12.573-7.031 4.896-12.594 8.76-24.583 8.76-12 0-17.563-3.865-24.594-8.76-8.063-5.604-18.094-12.573-36.781-12.573-18.677 0-28.698 6.969-36.75 12.573-7.031 4.896-12.583 8.76-24.573 8.76-11.969 0-17.521-3.865-24.542-8.75-8.042-5.604-18.063-12.583-36.729-12.583-5.896 0-10.667 4.771-10.667 10.667s4.771 10.667 10.667 10.667c11.969 0 17.521 3.865 24.542 8.75 8.042 5.604 18.063 12.583 36.729 12.583 18.677 0 28.708-6.979 36.76-12.583 7.031-4.885 12.583-8.75 24.563-8.75 12 0 17.563 3.865 24.604 8.76 4.345 3.023 9.414 6.355 15.961 8.865 36.6 42.996 89.655 67.708 146.174 67.708 105.865 0 192-86.135 192-192C512.003 171.641 334.701 9.589 327.159 2.766z"
      }), __jsx("path", {
        d: "M10.669 362.672c11.969 0 17.521 3.865 24.542 8.75 8.042 5.604 18.063 12.583 36.729 12.583a10.66 10.66 0 0 0 10.667-10.667 10.66 10.66 0 0 0-10.667-10.667c-11.969 0-17.521-3.865-24.542-8.75-8.042-5.604-18.063-12.583-36.729-12.583-5.896 0-10.667 4.771-10.667 10.667s4.771 10.667 10.667 10.667zm122.594-21.333c-5.896 0-10.667 4.771-10.667 10.667s4.771 10.667 10.667 10.667c12 0 17.563 3.865 24.594 8.76 8.063 5.604 18.094 12.573 36.781 12.573 18.677 0 28.708-6.969 36.771-12.573 7.031-4.896 12.594-8.76 24.594-8.76 12.198 0 18.406 3.969 26.25 8.99 9.052 5.781 19.313 12.344 37.75 12.344a10.66 10.66 0 0 0 10.667-10.667 10.66 10.66 0 0 0-10.667-10.667c-12.198 0-18.406-3.969-26.25-8.99-9.052-5.781-19.313-12.344-37.75-12.344-18.687 0-28.719 6.969-36.781 12.573-7.031 4.896-12.594 8.76-24.583 8.76-12 0-17.563-3.865-24.604-8.76-8.053-5.605-18.084-12.573-36.772-12.573zm0-64c-18.677 0-28.698 6.969-36.75 12.573-7.031 4.896-12.583 8.76-24.573 8.76-11.969 0-17.521-3.865-24.542-8.75-8.042-5.604-18.063-12.583-36.729-12.583A10.66 10.66 0 0 0 .002 288.006a10.66 10.66 0 0 0 10.667 10.667c11.969 0 17.521 3.865 24.542 8.75 8.042 5.604 18.063 12.583 36.729 12.583 18.677 0 28.708-6.979 36.76-12.583 7.031-4.885 12.583-8.75 24.563-8.75a10.66 10.66 0 0 0 10.667-10.667 10.66 10.66 0 0 0-10.667-10.667zm98.146 30.093c7.031-4.896 12.594-8.76 24.594-8.76 11.969 0 17.521 3.865 24.542 8.75 8.042 5.604 18.063 12.583 36.729 12.583 18.677 0 28.708-6.979 36.76-12.583 7.031-4.885 12.583-8.75 24.563-8.75a10.66 10.66 0 0 0 10.667-10.667 10.66 10.66 0 0 0-10.667-10.667c-18.677 0-28.698 6.969-36.75 12.573-7.031 4.896-12.583 8.76-24.573 8.76-11.969 0-17.521-3.865-24.542-8.75-8.042-5.604-18.063-12.583-36.729-12.583-18.687 0-28.719 6.969-36.781 12.573-7.031 4.896-12.594 8.76-24.583 8.76-5.896 0-10.667 4.771-10.667 10.667s4.771 10.667 10.667 10.667c18.676 0 28.707-6.969 36.77-12.573z"
      })), __jsx("h4", {
        className: _WeatherSlider_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a["modal__item__title"]
      }, "Humidity"), Object(_utils_calculateWeather__WEBPACK_IMPORTED_MODULE_5__["formatAsPercentage"])(item.humidity))), __jsx("div", {
        className: "col-6 col-xs-6 col-sm-6 col-md-3"
      }, __jsx("div", {
        className: _WeatherSlider_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a["modal__item"]
      }, __jsx("svg", {
        height: "479pt",
        viewBox: "-31 0 479 479.874",
        width: "479pt",
        xmlns: "http://www.w3.org/2000/svg"
      }, __jsx("path", {
        d: "M120.438 335.875c77.382 0 120-45.457 120-128 0-77.281-109.391-200.152-114.047-205.336a8.251 8.251 0 0 0-11.906 0C109.827 7.723.437 130.594.437 207.875c0 82.543 42.617 128 120 128zm0-315.793c22.902 26.879 104 126.36 104 187.793 0 51.094-18.047 112-104 112s-104-60.906-104-112c0-61.434 81.093-160.914 104-187.793zm224 331.793c45.757 0 72-30.535 72-83.793 0-50.008-63.45-118.75-66.145-121.656a8.24 8.24 0 0 0-11.711 0c-2.695 2.906-66.145 71.648-66.145 121.656 0 53.258 26.239 83.793 72 83.793zm0-187.922c15.43 17.953 56 68.547 56 104.129 0 44.984-18.84 67.793-56 67.793s-56-22.809-56-67.793c0-35.582 40.566-86.176 56-104.129zm-118 158.625c-2.04 2.313-50 57.09-50 93.297 0 40.672 20.414 64 56 64 35.582 0 56-23.328 56-64 0-36.207-47.961-90.984-50-93.297a8.265 8.265 0 0 0-12 0zm6 141.297c-26.536 0-40-16.152-40-48 0-21.746 25.03-57.145 40-75.586 14.976 18.402 40 53.809 40 75.586 0 31.848-13.465 48-40 48zm0 0"
      }), __jsx("path", {
        d: "M103.637 303.836a8.005 8.005 0 0 0 8.793-7.563 8 8 0 0 0-7.192-8.359 58.61 58.61 0 0 1-42.746-21.824c-21.277-27.742-14.23-72.465-14.168-72.91a8.002 8.002 0 0 0-6.613-8.97 8.002 8.002 0 0 0-9.16 6.345c-.356 2.113-8.29 51.886 17.191 85.199a73.932 73.932 0 0 0 53.895 28.082zm232.801 16.039a55.696 55.696 0 0 0 39.128-16.855 47.815 47.815 0 0 0 8.758-40.465 7.998 7.998 0 1 0-15.773 2.64 32.819 32.819 0 0 1-5.137 27.414 39.825 39.825 0 0 1-26.976 11.266 8 8 0 0 0 0 16zm-108.426 112.84a9.181 9.181 0 0 1-5.274-5.613 9.184 9.184 0 0 1 .86-7.653c1.972-3.953.37-8.761-3.586-10.734-3.953-1.977-8.758-.371-10.735 3.582a25.185 25.185 0 0 0-1.718 19.89 25.197 25.197 0 0 0 13.3 14.887 8.003 8.003 0 0 0 10.739-3.586 8.003 8.003 0 0 0-3.586-10.734zm0 0"
      })), __jsx("h4", {
        className: _WeatherSlider_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a["modal__item__title"]
      }, "Precipitation"), Object(_utils_calculateWeather__WEBPACK_IMPORTED_MODULE_5__["formatAsPercentage"])(item.precipProbability))), __jsx("div", {
        className: "col-6 col-xs-6 col-sm-6 col-md-3"
      }, __jsx("div", {
        className: _WeatherSlider_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a["modal__item"]
      }, __jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 368 368"
      }, __jsx("path", {
        d: "M296 48c-39.704 0-72 32.304-72 72 0 4.416 3.576 8 8 8s8-3.584 8-8c0-30.88 25.128-56 56-56s56 25.12 56 56-25.128 56-56 56H8c-4.416 0-8 3.584-8 8s3.584 8 8 8h288c39.704 0 72-32.304 72-72s-32.296-72-72-72z"
      }), __jsx("path", {
        d: "M144 32c-30.88 0-56 25.12-56 56 0 4.416 3.584 8 8 8s8-3.584 8-8c0-22.056 17.944-40 40-40s40 17.944 40 40-17.944 40-40 40H8c-4.416 0-8 3.584-8 8s3.584 8 8 8h136c30.88 0 56-25.12 56-56s-25.12-56-56-56zm136 192H8c-4.416 0-8 3.584-8 8s3.584 8 8 8h272c22.056 0 40 17.944 40 40s-17.944 40-40 40-40-17.944-40-40c0-4.416-3.576-8-8-8s-8 3.584-8 8c0 30.88 25.128 56 56 56s56-25.12 56-56-25.128-56-56-56z"
      })), __jsx("h4", {
        className: _WeatherSlider_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a["modal__item__title"]
      }, "Wind Speed"), Object(_utils_calculateWeather__WEBPACK_IMPORTED_MODULE_5__["getDirection"])(item.windBearing), " ", Math.round(item.windSpeed), " MPH")), __jsx("div", {
        className: "col-6 col-xs-6 col-sm-6 col-md-3"
      }, __jsx("div", {
        className: _WeatherSlider_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a["modal__item"]
      }, __jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 129 129"
      }, __jsx("path", {
        d: "M64.5 92.6c15.5 0 28-12.6 28-28s-12.6-28-28-28-28 12.6-28 28 12.5 28 28 28zm0-47.9c11 0 19.9 8.9 19.9 19.9 0 11-8.9 19.9-19.9 19.9s-19.9-8.9-19.9-19.9c0-11 8.9-19.9 19.9-19.9zM68.6 23.6V10.7c0-2.3-1.8-4.1-4.1-4.1s-4.1 1.8-4.1 4.1v12.9c0 2.3 1.8 4.1 4.1 4.1s4.1-1.8 4.1-4.1zM60.4 105.6v12.9c0 2.3 1.8 4.1 4.1 4.1s4.1-1.8 4.1-4.1v-12.9c0-2.3-1.8-4.1-4.1-4.1s-4.1 1.8-4.1 4.1zM96.4 38.5l9.1-9.1c1.6-1.6 1.6-4.2 0-5.8-1.6-1.6-4.2-1.6-5.8 0l-9.1 9.1c-1.6 1.6-1.6 4.2 0 5.8.8.8 1.8 1.2 2.9 1.2s2.1-.4 2.9-1.2zM23.5 105.6c.8.8 1.8 1.2 2.9 1.2 1 0 2.1-.4 2.9-1.2l9.1-9.1c1.6-1.6 1.6-4.2 0-5.8-1.6-1.6-4.2-1.6-5.8 0l-9.1 9.1c-1.6 1.6-1.6 4.2 0 5.8zM122.5 64.6c0-2.3-1.8-4.1-4.1-4.1h-12.9c-2.3 0-4.1 1.8-4.1 4.1s1.8 4.1 4.1 4.1h12.9c2.2 0 4.1-1.8 4.1-4.1zM10.6 68.7h12.9c2.3 0 4.1-1.8 4.1-4.1s-1.8-4.1-4.1-4.1H10.6c-2.3 0-4.1 1.8-4.1 4.1s1.9 4.1 4.1 4.1zM102.6 106.8c1 0 2.1-.4 2.9-1.2 1.6-1.6 1.6-4.2 0-5.8l-9.1-9.1c-1.6-1.6-4.2-1.6-5.8 0-1.6 1.6-1.6 4.2 0 5.8l9.1 9.1c.8.8 1.9 1.2 2.9 1.2zM38.4 38.5c1.6-1.6 1.6-4.2 0-5.8l-9.1-9.1c-1.6-1.6-4.2-1.6-5.8 0-1.6 1.6-1.6 4.2 0 5.8l9.1 9.1c.8.8 1.8 1.2 2.9 1.2s2.1-.4 2.9-1.2z"
      })), __jsx("h4", {
        className: _WeatherSlider_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a["modal__item__title"]
      }, "UV Index"), item.uvIndex)))), __jsx("div", {
        className: _WeatherSlider_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a["modal-body"]
      }, __jsx("p", null, item.summary), __jsx("ul", null, __jsx("li", null, __jsx("strong", null, "Temperature"), " ", __jsx("span", null, Math.round(item.temperature), " \xB0")), __jsx("li", null, __jsx("strong", null, "Feels Like"), " ", __jsx("span", null, Math.round(item.apparentTemperature), " \xB0")), __jsx("li", null, __jsx("strong", null, "Moon Phase"), " ", __jsx("span", null, _utils_calculateWeather__WEBPACK_IMPORTED_MODULE_5__["Moon"].phase(parseInt(Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["format"])(date_fns_fromUnixTime__WEBPACK_IMPORTED_MODULE_7___default()(item.time), "yyyy")), parseInt(Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["format"])(date_fns_fromUnixTime__WEBPACK_IMPORTED_MODULE_7___default()(item.time), "M")), parseInt(Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["format"])(date_fns_fromUnixTime__WEBPACK_IMPORTED_MODULE_7___default()(item.time), "d"))).name)), __jsx("li", null, __jsx("strong", null, "Dew Point"), " ", __jsx("span", null, Math.round(item.dewPoint), " \xB0")), __jsx("li", null, __jsx("strong", null, "Wind Gust"), " ", __jsx("span", null, Math.round(item.windGust), " mph")), item.precipAccumulation && __jsx("li", null, __jsx("strong", null, "Snowfall Accumulation"), " ", __jsx("span", null, item.precipAccumulation, "\"")), __jsx("li", null, __jsx("strong", null, "Cloud Cover"), " ", __jsx("span", null, Object(_utils_calculateWeather__WEBPACK_IMPORTED_MODULE_5__["formatAsPercentage"])(item.cloudCover))), __jsx("li", null, __jsx("strong", null, "Air Pressure"), " ", __jsx("span", null, Object(_utils_calculateWeather__WEBPACK_IMPORTED_MODULE_5__["calculatePressure"])(item.pressure), " in")), __jsx("li", null, __jsx("strong", null, "Ozone"), " ", __jsx("span", null, Math.round(item.ozone), " du")), __jsx("li", null, __jsx("strong", null, "Visibility"), " ", __jsx("span", null, Math.round(item.visibility), " mi"))), __jsx("button", {
        className: "btn btn-secondary",
        onClick: handleClose
      }, "Close")))
    }));
  });
  const params = {
    getSwiper: updateSwiper,
    loop: false,
    slidesPerView: 7,
    spaceBetween: 5,
    shouldSwiperUpdate: true,
    breakpoints: {
      200: {
        slidesPerView: 3
      },
      400: {
        slidesPerView: 3
      },
      640: {
        slidesPerView: 5
      },
      768: {
        slidesPerView: 5
      },
      1024: {
        slidesPerView: 5
      },
      1400: {
        slidesPerView: 7
      }
    }
  };
  initializeSlider(params);

  function initializeSlider(params) {
    slider = __jsx(react_id_swiper__WEBPACK_IMPORTED_MODULE_3___default.a, params, sliderInitialize);
  }

  return __jsx("div", {
    className: _WeatherSlider_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.slider
  }, __jsx("div", {
    className: _WeatherSlider_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a["slider-arrows"]
  }, __jsx("button", {
    onClick: goPrev
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 492 492"
  }, __jsx("path", {
    d: "M198.608 246.104L382.664 62.04c5.068-5.056 7.856-11.816 7.856-19.024 0-7.212-2.788-13.968-7.856-19.032l-16.128-16.12C361.476 2.792 354.712 0 347.504 0s-13.964 2.792-19.028 7.864L109.328 227.008c-5.084 5.08-7.868 11.868-7.848 19.084-.02 7.248 2.76 14.028 7.848 19.112l218.944 218.932c5.064 5.072 11.82 7.864 19.032 7.864 7.208 0 13.964-2.792 19.032-7.864l16.124-16.12c10.492-10.492 10.492-27.572 0-38.06L198.608 246.104z"
  }))), __jsx("button", {
    onClick: goNext
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 492.004 492.004"
  }, __jsx("path", {
    d: "M382.678 226.804L163.73 7.86C158.666 2.792 151.906 0 144.698 0s-13.968 2.792-19.032 7.86l-16.124 16.12c-10.492 10.504-10.492 27.576 0 38.064L293.398 245.9l-184.06 184.06c-5.064 5.068-7.86 11.824-7.86 19.028 0 7.212 2.796 13.968 7.86 19.04l16.124 16.116c5.068 5.068 11.824 7.86 19.032 7.86s13.968-2.792 19.032-7.86L382.678 265c5.076-5.084 7.864-11.872 7.848-19.088.016-7.244-2.772-14.028-7.848-19.108z"
  })))), slider);
};

/* harmony default export */ __webpack_exports__["default"] = (hourlySlider);

/***/ }),

/***/ "./components/Weather/WeatherSlider/WeatherSlider.module.scss":
/*!********************************************************************!*\
  !*** ./components/Weather/WeatherSlider/WeatherSlider.module.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"slider": "WeatherSlider_slider__bWaWM",
	"slider-arrows": "WeatherSlider_slider-arrows__11rIs",
	"slide": "WeatherSlider_slide__DMs8O",
	"slide-modal-btn": "WeatherSlider_slide-modal-btn__29IIK",
	"date": "WeatherSlider_date__3B12N",
	"temp": "WeatherSlider_temp__13yVN",
	"modal__top": "WeatherSlider_modal__top__oGCp0",
	"modal__top__background": "WeatherSlider_modal__top__background__1iZWY",
	"modal__top__close": "WeatherSlider_modal__top__close__1pHIs",
	"modal__item": "WeatherSlider_modal__item__31EU6",
	"modal__item__title": "WeatherSlider_modal__item__title__2eswr",
	"modal": "WeatherSlider_modal__1pNPF",
	"modal-top": "WeatherSlider_modal-top__CTvHO",
	"modal-body": "WeatherSlider_modal-body__2N-nd"
};


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header/Header */ "./components/Header/Header.js");
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Footer/Footer */ "./components/Footer/Footer.js");
/* harmony import */ var easy_peasy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! easy-peasy */ "easy-peasy");
/* harmony import */ var easy_peasy__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(easy_peasy__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_useIsMount__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/useIsMount */ "./utils/useIsMount.js");
/* harmony import */ var _utils_stateNameAbbreviation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/stateNameAbbreviation */ "./utils/stateNameAbbreviation.js");
/* harmony import */ var _components_Weather_Weather__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Weather/Weather */ "./components/Weather/Weather.js");
/* harmony import */ var _api_APIUtils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../api/APIUtils */ "./api/APIUtils.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










const index = () => {
  const setWeather = Object(easy_peasy__WEBPACK_IMPORTED_MODULE_4__["useStoreActions"])(actions => actions.weather.setWeatherData);
  const setLatitude = Object(easy_peasy__WEBPACK_IMPORTED_MODULE_4__["useStoreActions"])(actions => actions.location.setLocationLatitude);
  const setLongitude = Object(easy_peasy__WEBPACK_IMPORTED_MODULE_4__["useStoreActions"])(actions => actions.location.setLocationLongitude);
  const setCity = Object(easy_peasy__WEBPACK_IMPORTED_MODULE_4__["useStoreActions"])(actions => actions.location.setLocationCity);
  const setRegion = Object(easy_peasy__WEBPACK_IMPORTED_MODULE_4__["useStoreActions"])(actions => actions.location.setLocationRegion);
  const setSpinner = Object(easy_peasy__WEBPACK_IMPORTED_MODULE_4__["useStoreActions"])(actions => actions.spinner.setSpinner);
  const isMount = Object(_utils_useIsMount__WEBPACK_IMPORTED_MODULE_5__["useIsMount"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setSpinner(true);

    if (isMount) {
      const publicIp = __webpack_require__(/*! public-ip */ "public-ip");

      publicIp.v4().then(results => {
        Object(_api_APIUtils__WEBPACK_IMPORTED_MODULE_8__["ipInfo"])(results).then(res => {
          const latLng = res.loc.split(",");
          const lat = latLng[0];
          const lng = latLng[1];
          setRegion(Object(_utils_stateNameAbbreviation__WEBPACK_IMPORTED_MODULE_6__["convertRegion"])(res.region));
          setCity(res.city);
          setLatitude(lat);
          setLongitude(lng);
          Object(_api_APIUtils__WEBPACK_IMPORTED_MODULE_8__["fetchWeather"])(lat, lng).then(results => {
            setWeather(results);
            setSpinner(false);
          });
        }).catch(err => {
          console.error(err);
          Object(_api_APIUtils__WEBPACK_IMPORTED_MODULE_8__["ipData"])(results).then(res => {
            const lat = res.latitude;
            const lng = res.longitude;
            setRegion(Object(_utils_stateNameAbbreviation__WEBPACK_IMPORTED_MODULE_6__["convertRegion"])(res.region));
            setCity(res.city);
            setLatitude(lat);
            setLongitude(lng);
            Object(_api_APIUtils__WEBPACK_IMPORTED_MODULE_8__["fetchWeather"])(lat, lng).then(results => {
              setWeather(results);
              setSpinner(false);
            });
          }).catch(err => {
            console.error(err);
          });
        });
      });
    }
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Weather App"
  }, __jsx(_components_Header_Header__WEBPACK_IMPORTED_MODULE_2__["default"], null), __jsx(_components_Weather_Weather__WEBPACK_IMPORTED_MODULE_7__["default"], null), __jsx(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], null)));
};

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ "./utils/calculateWeather.js":
/*!***********************************!*\
  !*** ./utils/calculateWeather.js ***!
  \***********************************/
/*! exports provided: calculatePressure, formatAsPercentage, getDirection, getCondition, Moon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculatePressure", function() { return calculatePressure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatAsPercentage", function() { return formatAsPercentage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDirection", function() { return getDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCondition", function() { return getCondition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Moon", function() { return Moon; });
const calculatePressure = pressure => parseFloat(pressure * 0.0295301).toFixed(2);
const formatAsPercentage = x => `${Math.round(x * 100)} %`;
function getDirection(angle) {
  var directions = ["N", "NW", "W", "SW", "S", "SE", "E", "NE"];
  return directions[Math.round(((angle %= 360) < 0 ? angle + 360 : angle) / 45) % 8];
}
function getCondition(condition) {
  switch (condition) {
    case "clear-day":
      return "Clear";

    case "clear-night":
      return "Clear";

    case "rain":
      return "Rain";

    case "snow":
      return "Snow";

    case "sleet":
      return "Sleet";

    case "wind":
      return "Wind";

    case "fog":
      return "Fog";

    case "cloudy":
      return "Cloudy";

    case "partly-cloudy-day":
      return "Partly Cloudy";

    case "partly-cloudy-night":
      return "Partly Cloudy";

    case "hail":
      return "Hail";

    case "thunderstorm":
      return "Thunderstorm";

    case "tornado":
      return "Tornado";

    default:
      console.log("Error: No Condition Set");
  }
}
const Moon = {
  phases: ["New Moon", "Waxing Crescent Moon", "Quarter Moon", "Waxing Gibbous Moon", "Full Moon", "Waning Gibbous Moon", "Last Quarter Moon", "Waning Crescent Moon"],
  phase: function (year, month, day) {
    let c,
        b,
        jd,
        e = 0;

    if (month < 3) {
      year--;
      month += 12;
    }

    ++month;
    c = 365.25 * year;
    e = 30.6 * month;
    jd = c + e + day - 694039.09; // jd is total days elapsed

    jd /= 29.5305882; // divide by the moon cycle

    b = parseInt(jd); // int(jd) -> b, take integer part of jd

    jd -= b; // subtract integer part to leave fractional part of original jd

    b = Math.round(jd * 8); // scale fraction from 0-8 and round

    if (b >= 8) b = 0; // 0 and 8 are the same so turn 8 into 0

    return {
      phase: b,
      name: Moon.phases[b]
    };
  }
};

/***/ }),

/***/ "./utils/stateNameAbbreviation.js":
/*!****************************************!*\
  !*** ./utils/stateNameAbbreviation.js ***!
  \****************************************/
/*! exports provided: convertRegion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertRegion", function() { return convertRegion; });
function convertRegion(state) {
  var states = [["Alabama", "AL"], ["Alaska", "AK"], ["American Samoa", "AS"], ["Arizona", "AZ"], ["Arkansas", "AR"], ["Armed Forces Americas", "AA"], ["Armed Forces Europe", "AE"], ["Armed Forces Pacific", "AP"], ["California", "CA"], ["Colorado", "CO"], ["Connecticut", "CT"], ["Delaware", "DE"], ["District Of Columbia", "DC"], ["Florida", "FL"], ["Georgia", "GA"], ["Guam", "GU"], ["Hawaii", "HI"], ["Idaho", "ID"], ["Illinois", "IL"], ["Indiana", "IN"], ["Iowa", "IA"], ["Kansas", "KS"], ["Kentucky", "KY"], ["Louisiana", "LA"], ["Maine", "ME"], ["Marshall Islands", "MH"], ["Maryland", "MD"], ["Massachusetts", "MA"], ["Michigan", "MI"], ["Minnesota", "MN"], ["Mississippi", "MS"], ["Missouri", "MO"], ["Montana", "MT"], ["Nebraska", "NE"], ["Nevada", "NV"], ["New Hampshire", "NH"], ["New Jersey", "NJ"], ["New Mexico", "NM"], ["New York", "NY"], ["North Carolina", "NC"], ["North Dakota", "ND"], ["Northern Mariana Islands", "NP"], ["Ohio", "OH"], ["Oklahoma", "OK"], ["Oregon", "OR"], ["Pennsylvania", "PA"], ["Puerto Rico", "PR"], ["Rhode Island", "RI"], ["South Carolina", "SC"], ["South Dakota", "SD"], ["Tennessee", "TN"], ["Texas", "TX"], ["US Virgin Islands", "VI"], ["Utah", "UT"], ["Vermont", "VT"], ["Virginia", "VA"], ["Washington", "WA"], ["West Virginia", "WV"], ["Wisconsin", "WI"], ["Wyoming", "WY"]]; // So happy that Canada and the US have distinct abbreviations

  var provinces = [["Alberta", "AB"], ["British Columbia", "BC"], ["Manitoba", "MB"], ["New Brunswick", "NB"], ["Newfoundland", "NF"], ["Northwest Territory", "NT"], ["Nova Scotia", "NS"], ["Nunavut", "NU"], ["Ontario", "ON"], ["Prince Edward Island", "PE"], ["Quebec", "QC"], ["Saskatchewan", "SK"], ["Yukon", "YT"]];
  const selectedState = states.find(s => s.find(x => x.toLowerCase() === state.toLowerCase()));
  if (!selectedState) return null;
  return selectedState.filter(s => s.toLowerCase() !== state.toLowerCase()).join("");
}

/***/ }),

/***/ "./utils/useIsMount.js":
/*!*****************************!*\
  !*** ./utils/useIsMount.js ***!
  \*****************************/
/*! exports provided: useIsMount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useIsMount", function() { return useIsMount; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useIsMount = () => {
  const isMountRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(true);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    isMountRef.current = false;
  }, []);
  return isMountRef.current;
};

/***/ }),

/***/ "date-fns":
/*!***************************!*\
  !*** external "date-fns" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("date-fns");

/***/ }),

/***/ "date-fns/fromUnixTime":
/*!****************************************!*\
  !*** external "date-fns/fromUnixTime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("date-fns/fromUnixTime");

/***/ }),

/***/ "easy-peasy":
/*!*****************************!*\
  !*** external "easy-peasy" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("easy-peasy");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "public-ip":
/*!****************************!*\
  !*** external "public-ip" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("public-ip");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-id-swiper":
/*!**********************************!*\
  !*** external "react-id-swiper" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-id-swiper");

/***/ }),

/***/ "react-micro-modal":
/*!************************************!*\
  !*** external "react-micro-modal" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-micro-modal");

/***/ }),

/***/ "react-places-autocomplete":
/*!********************************************!*\
  !*** external "react-places-autocomplete" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-places-autocomplete");

/***/ }),

/***/ "react-tabs":
/*!*****************************!*\
  !*** external "react-tabs" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-tabs");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-toastify");

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBpL0FQSVV0aWxzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXIubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlYXJjaC9TZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWFyY2gvU2VhcmNoLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvV2VhdGhlci9BbGVydHMvQWxlcnRzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvV2VhdGhlci9BbGVydHMvQWxlcnRzLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvV2VhdGhlci9CYWNrZ3JvdW5kL0JhY2tncm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9XZWF0aGVyL0JhY2tncm91bmQvQmFja2dyb3VuZC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1dlYXRoZXIvQ3VycmVudGx5L0N1cnJlbnRseS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1dlYXRoZXIvQ3VycmVudGx5L0N1cnJlbnRseS5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1dlYXRoZXIvVW5pdHMvVW5pdHMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9XZWF0aGVyL1dlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9XZWF0aGVyL1dlYXRoZXIubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9XZWF0aGVyL1dlYXRoZXJJY29uL1dlYXRoZXJJY29uLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvV2VhdGhlci9XZWF0aGVyU2xpZGVyL0RhaWx5U2xpZGVyL0RhaWx5U2xpZGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvV2VhdGhlci9XZWF0aGVyU2xpZGVyL0hvdXJseVNsaWRlci9Ib3VybHlTbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9XZWF0aGVyL1dlYXRoZXJTbGlkZXIvV2VhdGhlclNsaWRlci5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9jYWxjdWxhdGVXZWF0aGVyLmpzIiwid2VicGFjazovLy8uL3V0aWxzL3N0YXRlTmFtZUFiYnJldmlhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy91c2VJc01vdW50LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImRhdGUtZm5zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZGF0ZS1mbnMvZnJvbVVuaXhUaW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZWFzeS1wZWFzeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInB1YmxpYy1pcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWQtc3dpcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtbWljcm8tbW9kYWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1wbGFjZXMtYXV0b2NvbXBsZXRlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtdGFic1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXRvYXN0aWZ5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RzdHJhcFwiIl0sIm5hbWVzIjpbImdldFBvc2l0aW9uIiwiZ2VvbG9jYXRpb25PcHRpb25zIiwiZW5hYmxlSGlnaEFjY3VyYWN5IiwidGltZW91dCIsIm1heGltdW1BZ2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIm5hdmlnYXRvciIsImdlb2xvY2F0aW9uIiwiZ2V0Q3VycmVudFBvc2l0aW9uIiwiZmV0Y2hMb2NhdGlvbiIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJpcEluZm8iLCJpcCIsImlwRGF0YSIsImZldGNoV2VhdGhlciIsImZvb3RlciIsInByb3BzIiwic3R5bGVzIiwiaGVhZGVyIiwic2VhcmNoIiwic2V0U2VhcmNoIiwidXNlU3RhdGUiLCJhZGRyZXNzIiwiZHJvcGRvd25PcGVuIiwic2V0RHJvcGRvd25PcGVuIiwid2VhdGhlciIsInVzZVN0b3JlU3RhdGUiLCJzdGF0ZSIsIndlYXRoZXJEYXRhIiwic2V0U3Bpbm5lciIsInVzZVN0b3JlQWN0aW9ucyIsImFjdGlvbnMiLCJzcGlubmVyIiwic2V0V2VhdGhlciIsInNldFdlYXRoZXJEYXRhIiwic2V0TGF0aXR1ZGUiLCJsb2NhdGlvbiIsInNldExvY2F0aW9uTGF0aXR1ZGUiLCJzZXRMb25naXR1ZGUiLCJzZXRMb2NhdGlvbkxvbmdpdHVkZSIsInNldENpdHkiLCJzZXRMb2NhdGlvbkNpdHkiLCJzZXRSZWdpb24iLCJzZXRMb2NhdGlvblJlZ2lvbiIsImxvY2F0aW9uTGF0aXR1ZGUiLCJsb2NhdGlvbkxvbmdpdHVkZSIsImhpc3RvcnlBcnJheSIsInNlYXJjaEhpc3RvcnkiLCJjbGVhckFsbEhpc3RvcnkiLCJsb2NhbFN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwiZGVsZXRlU3BlY2lmaWNIaXN0b3J5IiwiaW5kZXgiLCJuZXdIaXN0b3J5Iiwic3BsaWNlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1bmRlZmluZWQiLCJsZW5ndGgiLCJ1c2VTcGVjaWZpY0hpc3RvcnkiLCJjaXR5IiwicmVnaW9uIiwibGF0IiwibG5nIiwicmVzdWx0cyIsImhhbmRsZVNlYXJjaENoYW5nZSIsImhhbmRsZVNlYXJjaFNlbGVjdCIsImdlb2NvZGVCeUFkZHJlc3MiLCJkYXRhIiwiZGF0YUFkZHJlc3MiLCJhZGRyZXNzX2NvbXBvbmVudHMiLCJnZW9tZXRyeSIsImkiLCJhZGRyZXNzT2JqIiwiaiIsInR5cGVzIiwibG9uZ19uYW1lIiwic2hvcnRfbmFtZSIsInB1c2giLCJ0b2dnbGVEcm9wZG93biIsInJlZnJlc2hMb2NhdGlvbiIsIm5vdGlmeSIsInRvYXN0IiwiZGlzbWlzcyIsInRvYXN0SWQiLCJnZXRXZWF0aGVyTG9jYXRpb24iLCJmZWF0dXJlcyIsInByb3BlcnRpZXMiLCJzdGF0ZUFiYnIiLCJjb252ZXJ0UmVnaW9uIiwiY291bnRyeSIsImxvY2FsaXR5IiwidG93biIsImNvdW50eSIsImluZm8iLCJhdXRvQ2xvc2UiLCJ1cGRhdGUiLCJyZW5kZXIiLCJ0eXBlIiwiVFlQRSIsIlNVQ0NFU1MiLCJ1c2VMb2NhdGlvbiIsImNvb3JkcyIsIm1lc3NhZ2UiLCJFUlJPUiIsIm1pZCIsIm1hcCIsIml0ZW0iLCJqb2luIiwiY2hpbGRyZW4iLCJ0aXRsZSIsImxvY2F0aW9uQ2l0eSIsImxvY2F0aW9uU3RhdGUiLCJpc01vdW50IiwidXNlSXNNb3VudCIsInNlYXJjaE9wdGlvbnMiLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJnb29nbGUiLCJtYXBzIiwibXlDYWxsYmFja0Z1bmMiLCJzY3JpcHQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJpZCIsImFzeW5jIiwiZGVmZXIiLCJoZWFkIiwiYXBwZW5kQ2hpbGQiLCJjaGFuZ2VkIiwic2VsZWN0ZWQiLCJnZXRJbnB1dFByb3BzIiwic3VnZ2VzdGlvbnMiLCJnZXRTdWdnZXN0aW9uSXRlbVByb3BzIiwibG9hZGluZyIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiLCJyZWFkeVN0YXR1cyIsInN1Z2dlc3Rpb24iLCJjbGFzc05hbWUiLCJhY3RpdmUiLCJkZXNjcmlwdGlvbiIsImFsZXJ0cyIsImFsZXJ0IiwiaGFuZGxlT3BlbiIsInNldmVyaXR5IiwiaGFuZGxlQ2xvc2UiLCJmb3JtYXQiLCJmcm9tVW5peFRpbWUiLCJleHBpcmVzIiwid2VhdGhlckJhY2tncm91bmQiLCJpbWFnZSIsImNvbmRpdGlvbiIsImRpdlN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwiY3VycmVudGx5Iiwibm93IiwiaWNvbiIsInN1bW1hcnkiLCJ0ZW1wIiwiTWF0aCIsInJvdW5kIiwidGVtcGVyYXR1cmUiLCJmbGFncyIsImRhaWx5IiwidGVtcGVyYXR1cmVIaWdoIiwidGVtcGVyYXR1cmVMb3ciLCJwdWxsUmlnaHQiLCJmb3JtYXRBc1BlcmNlbnRhZ2UiLCJodW1pZGl0eSIsInByZWNpcFByb2JhYmlsaXR5IiwiZ2V0RGlyZWN0aW9uIiwid2luZEJlYXJpbmciLCJ3aW5kU3BlZWQiLCJ1dkluZGV4IiwibW9kYWwiLCJhcHBhcmVudFRlbXBlcmF0dXJlIiwiZGV3UG9pbnQiLCJ3aW5kR3VzdCIsImNsb3VkQ292ZXIiLCJjYWxjdWxhdGVQcmVzc3VyZSIsInByZXNzdXJlIiwib3pvbmUiLCJ2aXNpYmlsaXR5IiwibmVhcmVzdFN0b3JtQmVhcmluZyIsIm5lYXJlc3RTdG9ybURpc3RhbmNlIiwidW5pdHMiLCJjaGVja1VuaXRzIiwibG9jYXRpb25SZWdpb24iLCJyZXNldElkQ291bnRlciIsInRhYnMiLCJ3ZWF0aGVySWNvbiIsImNvbG9yIiwiZGFpbHlTbGlkZXIiLCJzd2lwZXIiLCJ1cGRhdGVTd2lwZXIiLCJnb05leHQiLCJzbGlkZU5leHQiLCJnb1ByZXYiLCJzbGlkZVByZXYiLCJjaGVja0hvdXIiLCJob3VybHkiLCJob3VyQXJyYXkiLCJuZXdBcnJheSIsIm9iamVjdCIsInRpbWUiLCJvbmVEYXkiLCJTZXQiLCJzbGlkZXIiLCJzbGlkZXJJbml0aWFsaXplIiwic2xpY2UiLCJfaW5kZXgiLCJiYWNrZ3JvdW5kQ29uZGl0aW9uIiwic2xpZGUiLCJEYXRlIiwiZGF0ZSIsImdldENvbmRpdGlvbiIsImRhdGFUaW1lIiwiYXBwYXJlbnRUZW1wZXJhdHVyZU1pbiIsImFwcGFyZW50VGVtcGVyYXR1cmVNYXgiLCJzdW5yaXNlVGltZSIsInN1bnNldFRpbWUiLCJNb29uIiwicGhhc2UiLCJwYXJzZUludCIsIm5hbWUiLCJwcmVjaXBBY2N1bXVsYXRpb24iLCJ1dkluZGV4VGltZSIsImhvdXIiLCJwYXJhbXMiLCJnZXRTd2lwZXIiLCJsb29wIiwic2xpZGVzUGVyVmlldyIsInNwYWNlQmV0d2VlbiIsInNob3VsZFN3aXBlclVwZGF0ZSIsImJyZWFrcG9pbnRzIiwiaW5pdGlhbGl6ZVNsaWRlciIsImhvdXJseVNsaWRlciIsInB1YmxpY0lwIiwicmVxdWlyZSIsInY0IiwicmVzIiwibGF0TG5nIiwibG9jIiwic3BsaXQiLCJlcnIiLCJwYXJzZUZsb2F0IiwidG9GaXhlZCIsIngiLCJhbmdsZSIsImRpcmVjdGlvbnMiLCJsb2ciLCJwaGFzZXMiLCJ5ZWFyIiwibW9udGgiLCJkYXkiLCJjIiwiYiIsImpkIiwiZSIsInN0YXRlcyIsInByb3ZpbmNlcyIsInNlbGVjdGVkU3RhdGUiLCJmaW5kIiwicyIsInRvTG93ZXJDYXNlIiwiZmlsdGVyIiwiaXNNb3VudFJlZiIsInVzZVJlZiIsImN1cnJlbnQiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtC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SUFBRixDQUFPZixDQUFDLElBQUlBLENBQUMsQ0FBQ2lCLFdBQUYsT0FBb0JoUCxLQUFLLENBQUNnUCxXQUFOLEVBQWhDLENBQWpCLENBQXRCO0VBQ0EsSUFBSSxDQUFDSCxhQUFMLEVBQW9CLE9BQU8sSUFBUDtFQUNwQixPQUFPQSxhQUFhLENBQUNJLE1BQWQsQ0FBcUJGLENBQUMsSUFBSUEsQ0FBQyxDQUFDQyxXQUFGLE9BQW9CaFAsS0FBSyxDQUFDZ1AsV0FBTixFQUE5QyxFQUFtRTlKLElBQW5FLENBQXdFLEVBQXhFLENBQVA7QUFDRCxDOzs7Ozs7Ozs7Ozs7QUNwRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLE1BQU1NLFVBQVUsR0FBRyxNQUFNO0VBQzlCLE1BQU0wSixVQUFVLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUF6QjtFQUNBekosdURBQVMsQ0FBQyxNQUFNO0lBQ2R3SixVQUFVLENBQUNFLE9BQVgsR0FBcUIsS0FBckI7RUFDRCxDQUZRLEVBRU4sRUFGTSxDQUFUO0VBR0EsT0FBT0YsVUFBVSxDQUFDRSxPQUFsQjtBQUNELENBTk0sQzs7Ozs7Ozs7Ozs7QUNGUCxxQzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSx1QyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCIvLyBHZXQgdXNlciBwb3NpdGlvbiBjb29yZGluYXRlc1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9zaXRpb24oKSB7XHJcbiAgICBjb25zdCBnZW9sb2NhdGlvbk9wdGlvbnMgPSB7XHJcbiAgICAgIGVuYWJsZUhpZ2hBY2N1cmFjeTogdHJ1ZSxcclxuICAgICAgdGltZW91dDogMTAwMDAsXHJcbiAgICAgIG1heGltdW1BZ2U6IDYwMDAwXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihyZXNvbHZlLCByZWplY3QsIGdlb2xvY2F0aW9uT3B0aW9ucyk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgXHJcbiAgLy8gUmV2ZXJzZSBnZW9sb2NhdGlvblxyXG4gIGV4cG9ydCBmdW5jdGlvbiBmZXRjaExvY2F0aW9uKGxhdGl0dWRlLCBsb25naXR1ZGUpIHtcclxuICAgIHJldHVybiBmZXRjaChgaHR0cHM6Ly9ub21pbmF0aW0ub3BlbnN0cmVldG1hcC5vcmcvcmV2ZXJzZT9mb3JtYXQ9Z2VvanNvbiZsYXQ9JHtsYXRpdHVkZX0mbG9uPSR7bG9uZ2l0dWRlfWApXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcclxuICB9XHJcbiAgXHJcbiAgZXhwb3J0IGZ1bmN0aW9uIGlwSW5mbyhpcCkge1xyXG4gICAgcmV0dXJuIGZldGNoKGAvYXBpL2lwaW5mby8ke2lwfWApXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcclxuICB9XHJcbiAgXHJcbiAgZXhwb3J0IGZ1bmN0aW9uIGlwRGF0YShpcCkge1xyXG4gICAgcmV0dXJuIGZldGNoKGAvYXBpL2lwZGF0YS8ke2lwfWApXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcclxuICB9XHJcbiAgXHJcbiAgLy8gR2V0IHdlYXRoZXIgZnJvbSBjb29yZGluYXRlc1xyXG4gIGV4cG9ydCBmdW5jdGlvbiBmZXRjaFdlYXRoZXIobGF0aXR1ZGUsIGxvbmdpdHVkZSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW4tbWV0ZW8uY29tL3YxL2ZvcmVjYXN0PyR7bGF0aXR1ZGV9LCR7bG9uZ2l0dWRlfSZob3VybHk9dGVtcGVyYXR1cmVfMm0scmVsYXRpdmVodW1pZGl0eV8ybSxjbG91ZGNvdmVyLGNsb3VkY292ZXJfbWlkLHdpbmRzcGVlZF8xMjBtJmN1cnJlbnRfd2VhdGhlcj10cnVlIGApXHJcbiAgICAgICAgLy8gZmV0Y2goXCJodHRwczovL25leHQuanNvbi1nZW5lcmF0b3IuY29tL2FwaS9qc29uL2dldC80MW1fY2M0bFBcIikgLy8gVGVzdGluZ1xyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcihlcnJvcikpXHJcbiAgICApO1xyXG4gIH0iLCJpbXBvcnQgc3R5bGVzIGZyb20gXCIuL0Zvb3Rlci5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuY29uc3QgZm9vdGVyID0gcHJvcHMgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzW1wiZm9vdGVyXCJdfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICBDeXdlYXRoZXIgQXBwIFxyXG4gICAgICAgIDxici8+XHJcbiAgICAgICAgVmlldyBTb3VyY2Ugb24gPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9tYnVuaXgvY3l3ZWF0aGVyXCI+IEdpdEh1YjwvYT4gLSBQb3dlcmVkIGJ5e1wiIFwifVxyXG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL29wZW4tbWV0ZW8uY29tL1wiPk9wZW4tTWV0aW88L2E+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9mb290ZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZvb3RlcjsiLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJmb290ZXJcIjogXCJGb290ZXJfZm9vdGVyX18zZjMzTlwiXG59O1xuIiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9IZWFkZXIubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IHsgZ2VvY29kZUJ5QWRkcmVzcyB9IGZyb20gXCJyZWFjdC1wbGFjZXMtYXV0b2NvbXBsZXRlXCI7XHJcbmltcG9ydCB7IHVzZVN0b3JlQWN0aW9ucywgdXNlU3RvcmVTdGF0ZSB9IGZyb20gXCJlYXN5LXBlYXN5XCI7XHJcbmltcG9ydCBTZWFyY2ggZnJvbSBcIi4uL1NlYXJjaC9TZWFyY2hcIjtcclxuaW1wb3J0IHsgY29udmVydFJlZ2lvbiB9IGZyb20gXCIuLi8uLi91dGlscy9zdGF0ZU5hbWVBYmJyZXZpYXRpb25cIjtcclxuaW1wb3J0IHsgZ2V0UG9zaXRpb24sIGZldGNoTG9jYXRpb24sIGZldGNoV2VhdGhlciB9IGZyb20gXCIuLi8uLi9hcGkvQVBJVXRpbHNcIjtcclxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgSW5wdXRHcm91cEJ1dHRvbkRyb3Bkb3duLFxyXG4gIERyb3Bkb3duVG9nZ2xlLFxyXG4gIERyb3Bkb3duTWVudSxcclxuICBEcm9wZG93bkl0ZW0sXHJcbiAgSW5wdXRHcm91cFxyXG59IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcblxyXG5jb25zdCBoZWFkZXIgPSBwcm9wcyA9PiB7XHJcbiAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKHtcclxuICAgIGFkZHJlc3M6IFwiXCJcclxuICB9KTtcclxuICBjb25zdCBbZHJvcGRvd25PcGVuLCBzZXREcm9wZG93bk9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCB3ZWF0aGVyID0gdXNlU3RvcmVTdGF0ZShzdGF0ZSA9PiBzdGF0ZS53ZWF0aGVyLndlYXRoZXJEYXRhKTtcclxuXHJcbiAgY29uc3Qgc2V0U3Bpbm5lciA9IHVzZVN0b3JlQWN0aW9ucyhhY3Rpb25zID0+IGFjdGlvbnMuc3Bpbm5lci5zZXRTcGlubmVyKTtcclxuICBjb25zdCBzZXRXZWF0aGVyID0gdXNlU3RvcmVBY3Rpb25zKGFjdGlvbnMgPT4gYWN0aW9ucy53ZWF0aGVyLnNldFdlYXRoZXJEYXRhKTtcclxuICBjb25zdCBzZXRMYXRpdHVkZSA9IHVzZVN0b3JlQWN0aW9ucyhhY3Rpb25zID0+IGFjdGlvbnMubG9jYXRpb24uc2V0TG9jYXRpb25MYXRpdHVkZSk7XHJcbiAgY29uc3Qgc2V0TG9uZ2l0dWRlID0gdXNlU3RvcmVBY3Rpb25zKGFjdGlvbnMgPT4gYWN0aW9ucy5sb2NhdGlvbi5zZXRMb2NhdGlvbkxvbmdpdHVkZSk7XHJcbiAgY29uc3Qgc2V0Q2l0eSA9IHVzZVN0b3JlQWN0aW9ucyhhY3Rpb25zID0+IGFjdGlvbnMubG9jYXRpb24uc2V0TG9jYXRpb25DaXR5KTtcclxuICBjb25zdCBzZXRSZWdpb24gPSB1c2VTdG9yZUFjdGlvbnMoYWN0aW9ucyA9PiBhY3Rpb25zLmxvY2F0aW9uLnNldExvY2F0aW9uUmVnaW9uKTtcclxuXHJcbiAgY29uc3QgbGF0aXR1ZGUgPSB1c2VTdG9yZVN0YXRlKHN0YXRlID0+IHN0YXRlLmxvY2F0aW9uLmxvY2F0aW9uTGF0aXR1ZGUpO1xyXG4gIGNvbnN0IGxvbmdpdHVkZSA9IHVzZVN0b3JlU3RhdGUoc3RhdGUgPT4gc3RhdGUubG9jYXRpb24ubG9jYXRpb25Mb25naXR1ZGUpO1xyXG5cclxuICBsZXQgaGlzdG9yeUFycmF5ID0gbnVsbDtcclxuICBsZXQgc2VhcmNoSGlzdG9yeSA9IG51bGw7XHJcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIGhpc3RvcnlBcnJheSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2VhcmNoLWhpc3RvcnlcIilcclxuICAgICAgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2VhcmNoLWhpc3RvcnlcIikpXHJcbiAgICAgIDogW107XHJcbiAgICBzZWFyY2hIaXN0b3J5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNlYXJjaC1oaXN0b3J5XCIpKTtcclxuICAgIGlmIChzZWFyY2hIaXN0b3J5ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgY29uc3Qga2V5cyA9IFtcImNpdHlcIiwgXCJyZWdpb25cIl0sXHJcbiAgICAgICAgZmlsdGVyZWQgPSBzZWFyY2hIaXN0b3J5LmZpbHRlcihcclxuICAgICAgICAgIChzID0+IG8gPT4gKGsgPT4gIXMuaGFzKGspICYmIHMuYWRkKGspKShrZXlzLm1hcChrID0+IG9ba10pLmpvaW4oXCJ8XCIpKSkobmV3IFNldCgpKVxyXG4gICAgICAgICk7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic2VhcmNoLWhpc3RvcnlcIiwgSlNPTi5zdHJpbmdpZnkoZmlsdGVyZWQpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGNsZWFyQWxsSGlzdG9yeSA9ICgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwic2VhcmNoLWhpc3RvcnlcIik7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZGVsZXRlU3BlY2lmaWNIaXN0b3J5ID0gaW5kZXggPT4ge1xyXG4gICAgbGV0IG5ld0hpc3RvcnkgPSBbLi4uc2VhcmNoSGlzdG9yeV07XHJcbiAgICBuZXdIaXN0b3J5LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInNlYXJjaC1oaXN0b3J5XCIsIEpTT04uc3RyaW5naWZ5KG5ld0hpc3RvcnkpKTtcclxuICAgIGlmIChuZXdIaXN0b3J5ID09PSB1bmRlZmluZWQgfHwgbmV3SGlzdG9yeS5sZW5ndGggPT0gMCkge1xyXG4gICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInNlYXJjaC1oaXN0b3J5XCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHVzZVNwZWNpZmljSGlzdG9yeSA9IGluZGV4ID0+IHtcclxuICAgIGxldCBuZXdIaXN0b3J5ID0gWy4uLnNlYXJjaEhpc3RvcnldO1xyXG4gICAgc2V0U3Bpbm5lcih0cnVlKTtcclxuICAgIHNldENpdHkobmV3SGlzdG9yeVtpbmRleF0uY2l0eSk7XHJcbiAgICBzZXRSZWdpb24obmV3SGlzdG9yeVtpbmRleF0ucmVnaW9uKTtcclxuICAgIGZldGNoV2VhdGhlcihuZXdIaXN0b3J5W2luZGV4XS5sYXQsIG5ld0hpc3RvcnlbaW5kZXhdLmxuZykudGhlbihyZXN1bHRzID0+IHtcclxuICAgICAgc2V0V2VhdGhlcihyZXN1bHRzKTtcclxuICAgICAgc2V0U3Bpbm5lcihmYWxzZSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTZWFyY2hDaGFuZ2UgPSBhZGRyZXNzID0+IHtcclxuICAgIHNldFNlYXJjaCh7IGFkZHJlc3MgfSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVTZWFyY2hTZWxlY3QgPSBhZGRyZXNzID0+IHtcclxuICAgIHNldFNwaW5uZXIodHJ1ZSk7XHJcbiAgICBnZW9jb2RlQnlBZGRyZXNzKGFkZHJlc3MpXHJcbiAgICAgIC50aGVuKHJlc3VsdHMgPT4gcmVzdWx0c1swXSlcclxuICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGF0YUFkZHJlc3MgPSBkYXRhLmFkZHJlc3NfY29tcG9uZW50cztcclxuICAgICAgICBjb25zdCBsYXQgPSBkYXRhLmdlb21ldHJ5LmxvY2F0aW9uLmxhdCgpO1xyXG4gICAgICAgIGNvbnN0IGxuZyA9IGRhdGEuZ2VvbWV0cnkubG9jYXRpb24ubG5nKCk7XHJcbiAgICAgICAgbGV0IGNpdHkgPSBudWxsO1xyXG4gICAgICAgIGxldCByZWdpb24gPSBudWxsO1xyXG4gICAgICAgIHNldExhdGl0dWRlKGxhdCk7XHJcbiAgICAgICAgc2V0TG9uZ2l0dWRlKGxuZyk7XHJcbiAgICAgICAgc2V0U2VhcmNoKHsgYWRkcmVzczogXCJcIiB9KTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRhdGFBZGRyZXNzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICB2YXIgYWRkcmVzc09iaiA9IGRhdGFBZGRyZXNzW2ldO1xyXG4gICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBhZGRyZXNzT2JqLnR5cGVzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgIGlmIChhZGRyZXNzT2JqLnR5cGVzW2pdID09PSBcImxvY2FsaXR5XCIpIHtcclxuICAgICAgICAgICAgICBzZXRDaXR5KGFkZHJlc3NPYmoubG9uZ19uYW1lKTtcclxuICAgICAgICAgICAgICBjaXR5ID0gYWRkcmVzc09iai5sb25nX25hbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGFkZHJlc3NPYmoudHlwZXNbal0gPT09IFwiYWRtaW5pc3RyYXRpdmVfYXJlYV9sZXZlbF8xXCIpIHtcclxuICAgICAgICAgICAgICBzZXRSZWdpb24oYWRkcmVzc09iai5zaG9ydF9uYW1lKTtcclxuICAgICAgICAgICAgICByZWdpb24gPSBhZGRyZXNzT2JqLnNob3J0X25hbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaGlzdG9yeUFycmF5LnB1c2goeyBjaXR5OiBjaXR5LCByZWdpb246IHJlZ2lvbiwgbGF0OiBsYXQsIGxuZzogbG5nIH0pO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic2VhcmNoLWhpc3RvcnlcIiwgSlNPTi5zdHJpbmdpZnkoaGlzdG9yeUFycmF5KSk7XHJcbiAgICAgICAgZmV0Y2hXZWF0aGVyKGxhdCwgbG5nKS50aGVuKHJlc3VsdHMgPT4ge1xyXG4gICAgICAgICAgc2V0V2VhdGhlcihyZXN1bHRzKTtcclxuICAgICAgICAgIHNldFNwaW5uZXIoZmFsc2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHRvZ2dsZURyb3Bkb3duID0gKCkgPT4gc2V0RHJvcGRvd25PcGVuKCFkcm9wZG93bk9wZW4pO1xyXG5cclxuICBjb25zdCByZWZyZXNoTG9jYXRpb24gPSAoKSA9PiB7XHJcbiAgICBzZXRTcGlubmVyKHRydWUpO1xyXG4gICAgbm90aWZ5KFwiUmVmcmVzaGluZyBXZWF0aGVyIERhdGFcIik7XHJcbiAgICBmZXRjaFdlYXRoZXIobGF0aXR1ZGUsIGxvbmdpdHVkZSkudGhlbihyZXN1bHRzID0+IHtcclxuICAgICAgc2V0V2VhdGhlcihyZXN1bHRzKTtcclxuICAgICAgc2V0U3Bpbm5lcihmYWxzZSk7XHJcbiAgICAgIHRvYXN0LmRpc21pc3ModG9hc3RJZCk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiBnZXRXZWF0aGVyTG9jYXRpb24obGF0LCBsbmcpIHtcclxuICAgIGZldGNoTG9jYXRpb24obGF0LCBsbmcpLnRoZW4ocmVzdWx0cyA9PiB7XHJcbiAgICAgIGNvbnN0IGpzb24gPSByZXN1bHRzLmZlYXR1cmVzWzBdLnByb3BlcnRpZXMuYWRkcmVzcztcclxuICAgICAgaWYgKGpzb24uc3RhdGUpIHtcclxuICAgICAgICBsZXQgc3RhdGVBYmJyID0gY29udmVydFJlZ2lvbihqc29uLnN0YXRlKTtcclxuICAgICAgICBzZXRSZWdpb24oc3RhdGVBYmJyKTtcclxuICAgICAgfSBlbHNlIGlmIChqc29uLmNvdW50cnkpIHtcclxuICAgICAgICBzZXRSZWdpb24oanNvbi5jb3VudHJ5KTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoanNvbi5sb2NhbGl0eSkge1xyXG4gICAgICAgIHNldENpdHkoanNvbi5sb2NhbGl0eSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoanNvbi50b3duKSB7XHJcbiAgICAgICAgc2V0Q2l0eShqc29uLnRvd24pO1xyXG4gICAgICB9IGVsc2UgaWYgKGpzb24uY2l0eSkge1xyXG4gICAgICAgIHNldENpdHkoanNvbi5jaXR5KTtcclxuICAgICAgfSBlbHNlIGlmIChqc29uLmNvdW50eSkge1xyXG4gICAgICAgIHNldENpdHkoanNvbi5jb3VudHkpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIGZldGNoV2VhdGhlcihsYXQsIGxuZykudGhlbihyZXN1bHRzID0+IHtcclxuICAgICAgc2V0V2VhdGhlcihyZXN1bHRzKTtcclxuICAgICAgc2V0U3Bpbm5lcihmYWxzZSk7XHJcbiAgICAgIHRvYXN0LmRpc21pc3ModG9hc3RJZCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGxldCB0b2FzdElkID0gbnVsbDtcclxuXHJcbiAgY29uc3Qgbm90aWZ5ID0gZGF0YSA9PiAodG9hc3RJZCA9IHRvYXN0LmluZm8oZGF0YSwgeyBhdXRvQ2xvc2U6IGZhbHNlIH0pKTtcclxuICBjb25zdCB1cGRhdGUgPSBkYXRhID0+XHJcbiAgICB0b2FzdC51cGRhdGUodG9hc3RJZCwgeyByZW5kZXI6IGRhdGEsIHR5cGU6IHRvYXN0LlRZUEUuU1VDQ0VTUywgYXV0b0Nsb3NlOiA1MDAwIH0pO1xyXG5cclxuICBjb25zdCB1c2VMb2NhdGlvbiA9ICgpID0+IHtcclxuICAgIHNldFNwaW5uZXIodHJ1ZSk7XHJcbiAgICBzZXREcm9wZG93bk9wZW4oIWRyb3Bkb3duT3Blbik7XHJcbiAgICBub3RpZnkoXCJIYW5nIHRpZ2h0ISBDaGVja2luZyB5b3VyIGxvY2F0aW9uLlwiKTtcclxuICAgIGdldFBvc2l0aW9uKClcclxuICAgICAgLnRoZW4ocmVzdWx0cyA9PiB7XHJcbiAgICAgICAgY29uc3QgbGF0ID0gcmVzdWx0cy5jb29yZHMubGF0aXR1ZGU7XHJcbiAgICAgICAgY29uc3QgbG5nID0gcmVzdWx0cy5jb29yZHMubG9uZ2l0dWRlO1xyXG4gICAgICAgIHNldExhdGl0dWRlKGxhdCk7XHJcbiAgICAgICAgc2V0TG9uZ2l0dWRlKGxuZyk7XHJcbiAgICAgICAgZ2V0V2VhdGhlckxvY2F0aW9uKGxhdCwgbG5nKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICBzZXRTcGlubmVyKGZhbHNlKTtcclxuICAgICAgICB0b2FzdC51cGRhdGUodG9hc3RJZCwge1xyXG4gICAgICAgICAgcmVuZGVyOiBgRXJyb3IhICR7ZXJyb3IubWVzc2FnZX1gLFxyXG4gICAgICAgICAgdHlwZTogdG9hc3QuVFlQRS5FUlJPUixcclxuICAgICAgICAgIGF1dG9DbG9zZTogNTAwMFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge3dlYXRoZXIgJiYgKFxyXG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtzdHlsZXNbXCJoZWFkZXJcIl19PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xMiBjb2wtbWQtNiBjb2wtbGctNiBjb2wteGwtNCBteC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1pZH0+XHJcbiAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWFyY2hcclxuICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3M9e3NlYXJjaC5hZGRyZXNzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2hhbmdlZD17aGFuZGxlU2VhcmNoQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e2hhbmRsZVNlYXJjaFNlbGVjdH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwQnV0dG9uRHJvcGRvd25cclxuICAgICAgICAgICAgICAgICAgICAgIGFkZG9uVHlwZT1cImFwcGVuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBpc09wZW49e2Ryb3Bkb3duT3Blbn1cclxuICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZT17dG9nZ2xlRHJvcGRvd259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duVG9nZ2xlIGNsYXNzTmFtZT17c3R5bGVzW1wiYnRuLW1vcmVcIl19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHN2ZyBoZWlnaHQ9XCI1MTJcIiB2aWV3Qm94PVwiMCAwIDUxNS41NTUgNTE1LjU1NVwiIHdpZHRoPVwiNTEyXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNMzAzLjM0NyAxOC44NzVjMjUuMTY3IDI1LjE2NyAyNS4xNjcgNjUuOTcxIDAgOTEuMTM4cy02NS45NzEgMjUuMTY3LTkxLjEzOCAwLTI1LjE2Ny02NS45NzEgMC05MS4xMzhjMjUuMTY2LTI1LjE2NyA2NS45Ny0yNS4xNjcgOTEuMTM4IDBNMzAzLjM0NyAyMTIuMjA5YzI1LjE2NyAyNS4xNjcgMjUuMTY3IDY1Ljk3MSAwIDkxLjEzOHMtNjUuOTcxIDI1LjE2Ny05MS4xMzggMC0yNS4xNjctNjUuOTcxIDAtOTEuMTM4YzI1LjE2Ni0yNS4xNjcgNjUuOTctMjUuMTY3IDkxLjEzOCAwTTMwMy4zNDcgNDA1LjU0MWMyNS4xNjcgMjUuMTY3IDI1LjE2NyA2NS45NzEgMCA5MS4xMzhzLTY1Ljk3MSAyNS4xNjctOTEuMTM4IDAtMjUuMTY3LTY1Ljk3MSAwLTkxLjEzOGMyNS4xNjYtMjUuMTY3IDY1Ljk3LTI1LjE2NyA5MS4xMzggMFwiLz48L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd25Ub2dnbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25NZW51IHJpZ2h0IGNsYXNzTmFtZT17c3R5bGVzW1wiZHJvcGRvd24tY3VzdG9tXCJdfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbSBvbkNsaWNrPXtyZWZyZXNoTG9jYXRpb259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFJlZnJlc2ggV2VhdGhlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzW1wiYnRuLXJpZ2h0XCJdfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBkPVwiTTQ5My44MTUgNzAuNjI5Yy0xMS4wMDEtMS4wMDMtMjAuNzMgNy4xMDItMjEuNzMzIDE4LjEwMmwtMi42NSAyOS4wNjlDNDI0LjQ3MyA0Ny4xOTQgMzQ2LjQyOSAwIDI1NiAwIDE1OC43MTkgMCA3Mi45ODggNTUuNTIyIDMwLjQzIDEzOC44NTRjLTUuMDI0IDkuODM3LTEuMTIyIDIxLjg4NCA4LjcxNSAyNi45MDggOS44MzkgNS4wMjQgMjEuODg0IDEuMTIzIDI2LjkwOC04LjcxNUMxMDIuMDcgODYuNTIzIDE3NC4zOTcgNDAgMjU2IDQwYzc0LjM3NyAwIDE0MS40OTkgMzguNzMxIDE3OS45NTMgOTkuNDA4bC0yOC41MTctMjAuMzY3Yy04Ljk4OS02LjQxOS0yMS40OC00LjMzNy0yNy44OTkgNC42NTEtNi40MTkgOC45ODktNC4zMzcgMjEuNDc5IDQuNjUxIDI3Ljg5OWw4Ni40NzUgNjEuNzYxYzEyLjY3NCA5LjAzNSAzMC4xNTUuNzY0IDMxLjU0MS0xNC40NTlsOS43MTEtMTA2LjUzYzEuMDA0LTExLjAwMS03LjEtMjAuNzMxLTE4LjEtMjEuNzM0ek00NzIuODU1IDM0Ni4yMzhjLTkuODM4LTUuMDIzLTIxLjg4NC0xLjEyMi0yNi45MDggOC43MTVDNDA5LjkzIDQyNS40NzcgMzM3LjYwMyA0NzIgMjU2IDQ3MmMtNzQuMzc3IDAtMTQxLjQ5OS0zOC43MzEtMTc5Ljk1My05OS40MDhsMjguNTE3IDIwLjM2N2M4Ljk4OSA2LjQxOSAyMS40NzkgNC4zMzcgMjcuODk5LTQuNjUxIDYuNDE5LTguOTg5IDQuMzM3LTIxLjQ3OS00LjY1MS0yNy44OTlsLTg2LjQ3NS02MS43NjFjLTEyLjUxOS04Ljk0NC0zMC4xNDEtLjkyMS0zMS41NDEgMTQuNDU5TC4wODUgNDE5LjYzN2MtMS4wMDMgMTEgNy4xMDIgMjAuNzMgMTguMTAxIDIxLjczMyAxMS4wMTQgMS4wMDEgMjAuNzMxLTcuMTEyIDIxLjczMy0xOC4xMDJsMi42NS0yOS4wNjlDODcuNTI3IDQ2NC44MDYgMTY1LjU3MSA1MTIgMjU2IDUxMmM5Ny4yODEgMCAxODMuMDEyLTU1LjUyMiAyMjUuNTctMTM4Ljg1NCA1LjAyNC05LjgzNyAxLjEyMi0yMS44ODQtOC43MTUtMjYuOTA4elwiLz48L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtIG9uQ2xpY2s9e3VzZUxvY2F0aW9ufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBVc2UgTXkgTG9jYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlc1tcImJ0bi1yaWdodFwiXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MS42MzYgNTEuNjM2XCI+PHBhdGggZD1cIk01MS4zNTMuOTE0YS45OTkuOTk5IDAgMDAtMS4xMzUtLjIxM0wuNTgzIDIzLjQ4MWExIDEgMCAwMC4yNTIgMS44OTVsMjIuMjYzIDMuNzMxIDIuNTQ1IDIxLjAzOGExLjAwMiAxLjAwMiAwIDAwMS44ODkuMzI0bDI0LTQ4LjQxNWExIDEgMCAwMC0uMTc5LTEuMTR6XCIvPjwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzZWFyY2hIaXN0b3J5ICE9IG51bGwgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtIGRpdmlkZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0gaGVhZGVyPlNlYXJjaCBIaXN0b3J5IDwvRHJvcGRvd25JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlYXJjaEhpc3RvcnkubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlU3BlY2lmaWNIaXN0b3J5KGluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmNpdHl9LCB7aXRlbS5yZWdpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtbc3R5bGVzW1wiYnRuLXJlbW92ZVwiXSwgc3R5bGVzW1wiYnRuLXJpZ2h0XCJdXS5qb2luKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVTcGVjaWZpY0hpc3RvcnkoaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIuMDAxIDUxMi4wMDFcIj48cGF0aCBkPVwiTTI4NC4yODYgMjU2LjAwMkw1MDYuMTQzIDM0LjE0NGM3LjgxMS03LjgxMSA3LjgxMS0yMC40NzUgMC0yOC4yODUtNy44MTEtNy44MS0yMC40NzUtNy44MTEtMjguMjg1IDBMMjU2IDIyNy43MTcgMzQuMTQzIDUuODU5Yy03LjgxMS03LjgxMS0yMC40NzUtNy44MTEtMjguMjg1IDAtNy44MSA3LjgxMS03LjgxMSAyMC40NzUgMCAyOC4yODVsMjIxLjg1NyAyMjEuODU3TDUuODU4IDQ3Ny44NTljLTcuODExIDcuODExLTcuODExIDIwLjQ3NSAwIDI4LjI4NWExOS45MzggMTkuOTM4IDAgMDAxNC4xNDMgNS44NTcgMTkuOTQgMTkuOTQgMCAwMDE0LjE0My01Ljg1N0wyNTYgMjg0LjI4N2wyMjEuODU3IDIyMS44NTdjMy45MDUgMy45MDUgOS4wMjQgNS44NTcgMTQuMTQzIDUuODU3czEwLjIzNy0xLjk1MiAxNC4xNDMtNS44NTdjNy44MTEtNy44MTEgNy44MTEtMjAuNDc1IDAtMjguMjg1TDI4NC4yODYgMjU2LjAwMnpcIi8+PC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0gZGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1tcImJ0bi1sYXN0XCJdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJBbGxIaXN0b3J5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDbGVhciBTZWFyY2ggSGlzdG9yeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duTWVudT5cclxuICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXBCdXR0b25Ecm9wZG93bj5cclxuICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGVhZGVyOyIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImhlYWRlclwiOiBcIkhlYWRlcl9oZWFkZXJfX09rb0RMXCIsXG5cdFwibWlkXCI6IFwiSGVhZGVyX21pZF9fMmNvSEtcIixcblx0XCJidG4tbW9yZVwiOiBcIkhlYWRlcl9idG4tbW9yZV9fMVBZMjNcIixcblx0XCJidG4tcmVtb3ZlXCI6IFwiSGVhZGVyX2J0bi1yZW1vdmVfXzEtWHoxXCIsXG5cdFwiYnRuLXJpZ2h0XCI6IFwiSGVhZGVyX2J0bi1yaWdodF9fM1F6NzBcIixcblx0XCJidG4tbGFzdFwiOiBcIkhlYWRlcl9idG4tbGFzdF9fMkViakhcIixcblx0XCJkcm9wZG93bi1jdXN0b21cIjogXCJIZWFkZXJfZHJvcGRvd24tY3VzdG9tX18zZUp2MlwiXG59O1xuIiwiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHsgY2hpbGRyZW4sIHRpdGxlID0gXCJXZWF0aGVyXCIgfSkgPT4gKFxyXG4gIDw+XHJcbiAgICA8SGVhZD5cclxuICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxyXG4gICAgPC9IZWFkPlxyXG4gICAge2NoaWxkcmVufVxyXG4gICAgPFRvYXN0Q29udGFpbmVyIC8+XHJcbiAgPC8+XHJcbik7IiwiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZUlzTW91bnQgfSBmcm9tIFwiLi4vLi4vdXRpbHMvdXNlSXNNb3VudC5qc1wiO1xyXG5pbXBvcnQgeyB1c2VTdG9yZVN0YXRlIH0gZnJvbSBcImVhc3ktcGVhc3lcIjtcclxuaW1wb3J0IFBsYWNlc0F1dG9jb21wbGV0ZSBmcm9tIFwicmVhY3QtcGxhY2VzLWF1dG9jb21wbGV0ZVwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL1NlYXJjaC5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuY29uc3Qgc2VhcmNoID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IGNvb3JkcyA9IHVzZVN0b3JlU3RhdGUoc3RhdGUgPT4gc3RhdGUubG9jYXRpb24ubG9jYXRpb25MYXRpdHVkZSk7XHJcbiAgY29uc3QgY2l0eSA9IHVzZVN0b3JlU3RhdGUoc3RhdGUgPT4gc3RhdGUubG9jYXRpb24ubG9jYXRpb25DaXR5KTtcclxuICBjb25zdCBzdGF0ZSA9IHVzZVN0b3JlU3RhdGUoc3RhdGUgPT4gc3RhdGUubG9jYXRpb24ubG9jYXRpb25TdGF0ZSk7XHJcbiAgY29uc3Qgd2VhdGhlciA9IHVzZVN0b3JlU3RhdGUoc3RhdGUgPT4gc3RhdGUud2VhdGhlci53ZWF0aGVyRGF0YSk7XHJcbiAgY29uc3QgaXNNb3VudCA9IHVzZUlzTW91bnQoKTtcclxuXHJcbiAgY29uc3Qgc2VhcmNoT3B0aW9ucyA9IHtcclxuICAgIHR5cGVzOiBbXCIocmVnaW9ucylcIl1cclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGlzTW91bnQpIHtcclxuICAgICAgaWYgKFwiZ29vZ2xlXCIgaW4gd2luZG93ICYmIHR5cGVvZiBnb29nbGUgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIGdvb2dsZS5tYXBzID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgd2luZG93Lm15Q2FsbGJhY2tGdW5jID0gZnVuY3Rpb24oKSB7fTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xyXG4gICAgICAgIHNjcmlwdC5zcmMgPSBgL2FwaS9nb29nbGUvJmxpYnJhcmllcz1wbGFjZXMmY2FsbGJhY2s9bXlDYWxsYmFja0Z1bmNgO1xyXG4gICAgICAgIHNjcmlwdC5pZCA9IFwiZ29vZ2xlYXBpc1wiO1xyXG4gICAgICAgIHNjcmlwdC5hc3luYyA9IHRydWU7XHJcbiAgICAgICAgc2NyaXB0LmRlZmVyID0gdHJ1ZTtcclxuICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxQbGFjZXNBdXRvY29tcGxldGVcclxuICAgICAgdmFsdWU9e3Byb3BzLmFkZHJlc3N9XHJcbiAgICAgIG9uQ2hhbmdlPXtwcm9wcy5jaGFuZ2VkfVxyXG4gICAgICBvblNlbGVjdD17cHJvcHMuc2VsZWN0ZWR9XHJcbiAgICAgIHNlYXJjaE9wdGlvbnM9e3NlYXJjaE9wdGlvbnN9XHJcbiAgICAgIGdvb2dsZUNhbGxiYWNrTmFtZT1cIm15Q2FsbGJhY2tGdW5jXCI+XHJcbiAgICAgIHsoeyBnZXRJbnB1dFByb3BzLCBzdWdnZXN0aW9ucywgZ2V0U3VnZ2VzdGlvbkl0ZW1Qcm9wcywgbG9hZGluZyB9KSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBvbkNoYW5nZSB9ID0gZ2V0SW5wdXRQcm9wcyh7XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcjogYCR7Y2l0eX0sICR7c3RhdGV9YFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgcmVhZHlTdGF0dXMgPSBcIkxvYWRpbmdcIjtcclxuXHJcbiAgICAgICAgaWYgKGNvb3JkcyA9PT0gXCJcIikge1xyXG4gICAgICAgICAgcmVhZHlTdGF0dXMgPSBcIkNoZWNraW5nIFlvdXIgUG9zaXRpb24uLlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY29vcmRzICE9PSBcIlwiICYmIHdlYXRoZXIgPT09IFwiXCIpIHtcclxuICAgICAgICAgIHJlYWR5U3RhdHVzID0gXCJMb2FkaW5nIFdlYXRoZXIgRGF0YS4uLlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAod2VhdGhlciAhPT0gXCJcIikge1xyXG4gICAgICAgICAgcmVhZHlTdGF0dXMgPSBcIlNlYXJjaCBsb2NhdGlvbiwgemlwLi4uXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2Ake3JlYWR5U3RhdHVzfWB9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLmFkZHJlc3N9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17W1tcImZvcm0tY29udHJvbFwiXSwgW1wibG9jYXRpb24tc2VhcmNoLWlucHV0XCJdLCBzdHlsZXNbXCJmb3JtLWNvbnRyb2xcIl1dLmpvaW4oXHJcbiAgICAgICAgICAgICAgICBcIiBcIlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtbW1wibGlzdC1ncm91cFwiXSwgc3R5bGVzW1wibGlzdC1ncm91cFwiXV0uam9pbihcIiBcIil9PlxyXG4gICAgICAgICAgICAgIHtsb2FkaW5nICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtIGRpc2FibGVkXCIgYXJpYS1kaXNhYmxlZD1cInRydWVcIj5cclxuICAgICAgICAgICAgICAgICAgTG9hZGluZyBSZXN1bHRzLi4uXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIHtzdWdnZXN0aW9ucy5tYXAoc3VnZ2VzdGlvbiA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBzdWdnZXN0aW9uLmFjdGl2ZVxyXG4gICAgICAgICAgICAgICAgICA/IFwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgOiBcImxpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uXCI7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgey4uLmdldFN1Z2dlc3Rpb25JdGVtUHJvcHMoc3VnZ2VzdGlvbiwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgfSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtzdWdnZXN0aW9uLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKTtcclxuICAgICAgfX1cclxuICAgIDwvUGxhY2VzQXV0b2NvbXBsZXRlPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzZWFyY2g7IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibGlzdC1ncm91cFwiOiBcIlNlYXJjaF9saXN0LWdyb3VwX18yMmMyRFwiLFxuXHRcImZvcm0tY29udHJvbFwiOiBcIlNlYXJjaF9mb3JtLWNvbnRyb2xfXzJrU1c3XCJcbn07XG4iLCJpbXBvcnQgc3R5bGVzIGZyb20gXCIuL0FsZXJ0cy5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgTWljcm9Nb2RhbCBmcm9tIFwicmVhY3QtbWljcm8tbW9kYWxcIjtcclxuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSBcImRhdGUtZm5zXCI7XHJcbmltcG9ydCBmcm9tVW5peFRpbWUgZnJvbSBcImRhdGUtZm5zL2Zyb21Vbml4VGltZVwiO1xyXG5cclxuY29uc3QgYWxlcnRzID0gcHJvcHMgPT4ge1xyXG4gIGxldCBhbGVydCA9IG51bGw7XHJcbiAgaWYgKHByb3BzLmFsZXJ0KSB7XHJcbiAgICBhbGVydCA9IHByb3BzLmFsZXJ0Lm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8c3BhbiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgIDxNaWNyb01vZGFsXHJcbiAgICAgICAgICAgIG1vZGFsQ2xhc3NOYW1lPXtzdHlsZXNbXCJtb2RhbFwiXX1cclxuICAgICAgICAgICAgZGlzYWJsZUZpcnN0RWxlbWVudEZvY3VzPXt0cnVlfVxyXG4gICAgICAgICAgICBjbG9zZU9uQW5pbWF0aW9uRW5kPXt0cnVlfVxyXG4gICAgICAgICAgICB0cmlnZ2VyPXtoYW5kbGVPcGVuID0+IChcclxuICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlT3Blbn1cclxuICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1tbYCR7aXRlbS5zZXZlcml0eX1gXSwgc3R5bGVzW1wiYWxlcnQtbGlua1wiXV0uam9pbihcIiBcIil9PlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWV4Y2xhbWF0aW9uLXRyaWFuZ2xlXCIgLz4ge2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICBjaGlsZHJlbj17aGFuZGxlQ2xvc2UgPT4gKFxyXG4gICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17W1tgJHtpdGVtLnNldmVyaXR5fWBdLCBzdHlsZXNbXCJtb2RhbF9fdG9wXCJdXS5qb2luKFwiIFwiKX0+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXNbXCJtb2RhbF9fdG9wX19jbG9zZVwiXX0gb25DbGljaz17aGFuZGxlQ2xvc2V9PlxyXG4gICAgICAgICAgICAgICAgICAgIMOXXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8aDI+e2l0ZW0udGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcIm1vZGFsLWJvZHlcIl19PlxyXG4gICAgICAgICAgICAgICAgICA8cD5FeHBpcmVzOiB7Zm9ybWF0KGZyb21Vbml4VGltZShpdGVtLmV4cGlyZXMpLCBcImVlZWUgTU1NTSBkbywgaGg6bW06c3MgYVwiKX08L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwPntpdGVtLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZX0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICBDbG9zZVxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJldHVybiA8PnthbGVydH08Lz47XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhbGVydHM7IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYWxlcnQtbGlua1wiOiBcIkFsZXJ0c19hbGVydC1saW5rX18yQWRQZVwiLFxuXHRcIm1vZGFsX190b3BcIjogXCJBbGVydHNfbW9kYWxfX3RvcF9fMldhc0lcIixcblx0XCJtb2RhbF9fdG9wX19jbG9zZVwiOiBcIkFsZXJ0c19tb2RhbF9fdG9wX19jbG9zZV9fMmxvbFZcIixcblx0XCJtb2RhbC1ib2R5XCI6IFwiQWxlcnRzX21vZGFsLWJvZHlfXzNjWmdWXCJcbn07XG4iLCJpbXBvcnQgc3R5bGVzIGZyb20gXCIuL0JhY2tncm91bmQubW9kdWxlLnNjc3NcIjtcclxuXHJcbmNvbnN0IHdlYXRoZXJCYWNrZ3JvdW5kID0gcHJvcHMgPT4ge1xyXG4gIGxldCBpbWFnZSA9IG51bGw7XHJcbiAgaWYgKHByb3BzLmNvbmRpdGlvbikge1xyXG4gICAgY29uc3QgZGl2U3R5bGUgPSB7XHJcbiAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgnL3dlYXRoZXJCYWNrZ3JvdW5kcy8ke3Byb3BzLmNvbmRpdGlvbn0uanBnJylgXHJcbiAgICB9O1xyXG4gICAgaW1hZ2UgPSA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wiYmFja2dyb3VuZFwiXX0gc3R5bGU9e2RpdlN0eWxlfSAvPjtcclxuICB9XHJcblxyXG4gIHJldHVybiBpbWFnZTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdlYXRoZXJCYWNrZ3JvdW5kOyIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImJhY2tncm91bmRcIjogXCJCYWNrZ3JvdW5kX2JhY2tncm91bmRfXzFla3hjXCJcbn07XG4iLCJpbXBvcnQgc3R5bGVzIGZyb20gXCIuL0N1cnJlbnRseS5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgV2VhdGhlckljb24gZnJvbSBcIi4uL1dlYXRoZXJJY29uL1dlYXRoZXJJY29uXCI7XHJcbmltcG9ydCBVbml0cyBmcm9tIFwiLi4vVW5pdHMvVW5pdHNcIjtcclxuaW1wb3J0IEFsZXJ0cyBmcm9tIFwiLi4vQWxlcnRzL0FsZXJ0c1wiO1xyXG5pbXBvcnQge1xyXG4gIGdldERpcmVjdGlvbixcclxuICBjYWxjdWxhdGVQcmVzc3VyZSxcclxuICBmb3JtYXRBc1BlcmNlbnRhZ2VcclxufSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvY2FsY3VsYXRlV2VhdGhlclwiO1xyXG5pbXBvcnQgTWljcm9Nb2RhbCBmcm9tIFwicmVhY3QtbWljcm8tbW9kYWxcIjtcclxuXHJcbmNvbnN0IGN1cnJlbnRseSA9IHByb3BzID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jdXJyZW50bHl9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wiYWxlcnRzLWJveFwiXX0+e3Byb3BzLmFsZXJ0cyAmJiA8QWxlcnRzIGFsZXJ0PXtwcm9wcy5hbGVydHN9IC8+fTwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTdcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubm93fT5cclxuICAgICAgICAgICAgPFdlYXRoZXJJY29uIGNvbmRpdGlvbj17cHJvcHMuY3VycmVudGx5Lmljb259IGNvbG9yPVwid2hpdGVcIiAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN1bW1hcnl9Pntwcm9wcy5jdXJyZW50bHl9PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9jYXRpb259PlxyXG4gICAgICAgICAgICAgIHtwcm9wcy5jaXR5ICYmIHByb3BzLmNpdHl9XHJcbiAgICAgICAgICAgICAge3Byb3BzLmNpdHkgIT09IFwiXCIgJiYgcHJvcHMucmVnaW9uICE9PSBcIlwiID8gXCIsXCIgOiBcIlwifSB7cHJvcHMucmVnaW9ufVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZW1wfT5cclxuICAgICAgICAgICAgICB7cHJvcHMuY3VycmVudGx5ICYmIE1hdGgucm91bmQocHJvcHMuY3VycmVudGx5LnRlbXBlcmF0dXJlLmljb24pfXtcIiBcIn1cclxuICAgICAgICAgICAgICA8VW5pdHMgZmxhZ3M9e3Byb3BzLmZsYWdzfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge3Byb3BzLmRhaWx5ICYmIChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1widGVtcC1saFwiXX0+XHJcbiAgICAgICAgICAgICAgICB7TWF0aC5yb3VuZChwcm9wcy5kYWlseS5kYXRhWzBdLnRlbXBlcmF0dXJlSGlnaCl9IMKwe1wiIFwifVxyXG4gICAgICAgICAgICAgICAgPHNwYW4+e01hdGgucm91bmQocHJvcHMuZGFpbHkuZGF0YVswXS50ZW1wZXJhdHVyZUxvdyl9IMKwPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge3Byb3BzLmN1cnJlbnRseSAmJiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC01XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHVsbFJpZ2h0fT5cclxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtbW1wibGlzdC11bnN0eWxlZFwiXSwgc3R5bGVzW1wic3RhdHNcIl1dLmpvaW4oXCIgXCIpfT5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZWRpYVwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wic3RhdHMtaWNvblwiXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIuMDA1IDUxMi4wMDVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMzI3LjE1OSAyLjc2NmExMC42NDEgMTAuNjQxIDAgMCAwLTE0LjMxMyAwYy00LjY0MiA0LjE4Ni0xMTAuODg5IDEwMS4yOTItMTYwLjIyOCAyMTMuODM5LTUuMzE4LTEuODY3LTExLjQ0LTMuMjY2LTE5LjM1NS0zLjI2Ni0xOC42NzcgMC0yOC42OTggNi45NjktMzYuNzUgMTIuNTczLTcuMDMxIDQuODk2LTEyLjU4MyA4Ljc2LTI0LjU3MyA4Ljc2LTExLjk2OSAwLTE3LjUyMS0zLjg2NS0yNC41NDItOC43NS04LjA0Mi01LjYwNC0xOC4wNjMtMTIuNTgzLTM2LjcyOS0xMi41ODNBMTAuNjYgMTAuNjYgMCAwIDAgLjAwMiAyMjQuMDA2YTEwLjY2IDEwLjY2IDAgMCAwIDEwLjY2NyAxMC42NjdjMTEuOTY5IDAgMTcuNTIxIDMuODY1IDI0LjU0MiA4Ljc1IDguMDQyIDUuNjA0IDE4LjA2MyAxMi41ODMgMzYuNzI5IDEyLjU4MyAxOC42NzcgMCAyOC43MDgtNi45NzkgMzYuNzYtMTIuNTgzIDcuMDMxLTQuODg1IDEyLjU4My04Ljc1IDI0LjU2My04Ljc1IDEyIDAgMTcuNTYzIDMuODY1IDI0LjYwNCA4Ljc2IDguMDUyIDUuNjA0IDE4LjA4MyAxMi41NzMgMzYuNzcxIDEyLjU3MyAxOC42NzcgMCAyOC43MDgtNi45NjkgMzYuNzcxLTEyLjU3MyA3LjAzMS00Ljg5NiAxMi41OTQtOC43NiAyNC41OTQtOC43NmExMC42NiAxMC42NiAwIDAgMCAxMC42NjctMTAuNjY3IDEwLjY2IDEwLjY2IDAgMCAwLTEwLjY2Ny0xMC42NjdjLTE4LjY4NyAwLTI4LjcxOSA2Ljk2OS0zNi43ODEgMTIuNTczLTcuMDMxIDQuODk2LTEyLjU5NCA4Ljc2LTI0LjU4MyA4Ljc2LTExLjIwOCAwLTE2LjgyMy0zLjQxOS0yMy4yNDItNy44NTQgNDAuMTIxLTkyLjY2MSAxMjMuNjYxLTE3Ny40NjYgMTQ4LjYwNy0yMDEuNDkgMzMuMjE5IDMyLjAxIDE3MC42NjcgMTcxLjg2NSAxNzAuNjY3IDI5NC42NzcgMCA5NC4xMDQtNzYuNTYzIDE3MC42NjctMTcwLjY2NyAxNzAuNjY3LTQyLjQ3NyAwLTgyLjY2OS0xNS44MjItMTEzLjc4LTQzLjc1OCAxMS41NDItMi4xMzggMTguOTk0LTcuMTc3IDI1LjE4Ni0xMS40ODIgNy4wMzEtNC44OTYgMTIuNTk0LTguNzYgMjQuNTk0LTguNzYgNS44OTYgMCAxMC42NjctNC43NzEgMTAuNjY3LTEwLjY2N3MtNC43NzEtMTAuNjY3LTEwLjY2Ny0xMC42NjdjLTE4LjY4NyAwLTI4LjcxOSA2Ljk2OS0zNi43ODEgMTIuNTczLTcuMDMxIDQuODk2LTEyLjU5NCA4Ljc2LTI0LjU4MyA4Ljc2LTEyIDAtMTcuNTYzLTMuODY1LTI0LjU5NC04Ljc2LTguMDYzLTUuNjA0LTE4LjA5NC0xMi41NzMtMzYuNzgxLTEyLjU3My0xOC42NzcgMC0yOC42OTggNi45NjktMzYuNzUgMTIuNTczLTcuMDMxIDQuODk2LTEyLjU4MyA4Ljc2LTI0LjU3MyA4Ljc2LTExLjk2OSAwLTE3LjUyMS0zLjg2NS0yNC41NDItOC43NS04LjA0Mi01LjYwNC0xOC4wNjMtMTIuNTgzLTM2LjcyOS0xMi41ODMtNS44OTYgMC0xMC42NjcgNC43NzEtMTAuNjY3IDEwLjY2N3M0Ljc3MSAxMC42NjcgMTAuNjY3IDEwLjY2N2MxMS45NjkgMCAxNy41MjEgMy44NjUgMjQuNTQyIDguNzUgOC4wNDIgNS42MDQgMTguMDYzIDEyLjU4MyAzNi43MjkgMTIuNTgzIDE4LjY3NyAwIDI4LjcwOC02Ljk3OSAzNi43Ni0xMi41ODMgNy4wMzEtNC44ODUgMTIuNTgzLTguNzUgMjQuNTYzLTguNzUgMTIgMCAxNy41NjMgMy44NjUgMjQuNjA0IDguNzYgNC4zNDUgMy4wMjMgOS40MTQgNi4zNTUgMTUuOTYxIDguODY1IDM2LjYgNDIuOTk2IDg5LjY1NSA2Ny43MDggMTQ2LjE3NCA2Ny43MDggMTA1Ljg2NSAwIDE5Mi04Ni4xMzUgMTkyLTE5MkM1MTIuMDAzIDE3MS42NDEgMzM0LjcwMSA5LjU4OSAzMjcuMTU5IDIuNzY2elwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEwLjY2OSAzNjIuNjcyYzExLjk2OSAwIDE3LjUyMSAzLjg2NSAyNC41NDIgOC43NSA4LjA0MiA1LjYwNCAxOC4wNjMgMTIuNTgzIDM2LjcyOSAxMi41ODNhMTAuNjYgMTAuNjYgMCAwIDAgMTAuNjY3LTEwLjY2NyAxMC42NiAxMC42NiAwIDAgMC0xMC42NjctMTAuNjY3Yy0xMS45NjkgMC0xNy41MjEtMy44NjUtMjQuNTQyLTguNzUtOC4wNDItNS42MDQtMTguMDYzLTEyLjU4My0zNi43MjktMTIuNTgzLTUuODk2IDAtMTAuNjY3IDQuNzcxLTEwLjY2NyAxMC42NjdzNC43NzEgMTAuNjY3IDEwLjY2NyAxMC42Njd6bTEyMi41OTQtMjEuMzMzYy01Ljg5NiAwLTEwLjY2NyA0Ljc3MS0xMC42NjcgMTAuNjY3czQuNzcxIDEwLjY2NyAxMC42NjcgMTAuNjY3YzEyIDAgMTcuNTYzIDMuODY1IDI0LjU5NCA4Ljc2IDguMDYzIDUuNjA0IDE4LjA5NCAxMi41NzMgMzYuNzgxIDEyLjU3MyAxOC42NzcgMCAyOC43MDgtNi45NjkgMzYuNzcxLTEyLjU3MyA3LjAzMS00Ljg5NiAxMi41OTQtOC43NiAyNC41OTQtOC43NiAxMi4xOTggMCAxOC40MDYgMy45NjkgMjYuMjUgOC45OSA5LjA1MiA1Ljc4MSAxOS4zMTMgMTIuMzQ0IDM3Ljc1IDEyLjM0NGExMC42NiAxMC42NiAwIDAgMCAxMC42NjctMTAuNjY3IDEwLjY2IDEwLjY2IDAgMCAwLTEwLjY2Ny0xMC42NjdjLTEyLjE5OCAwLTE4LjQwNi0zLjk2OS0yNi4yNS04Ljk5LTkuMDUyLTUuNzgxLTE5LjMxMy0xMi4zNDQtMzcuNzUtMTIuMzQ0LTE4LjY4NyAwLTI4LjcxOSA2Ljk2OS0zNi43ODEgMTIuNTczLTcuMDMxIDQuODk2LTEyLjU5NCA4Ljc2LTI0LjU4MyA4Ljc2LTEyIDAtMTcuNTYzLTMuODY1LTI0LjYwNC04Ljc2LTguMDUzLTUuNjA1LTE4LjA4NC0xMi41NzMtMzYuNzcyLTEyLjU3M3ptMC02NGMtMTguNjc3IDAtMjguNjk4IDYuOTY5LTM2Ljc1IDEyLjU3My03LjAzMSA0Ljg5Ni0xMi41ODMgOC43Ni0yNC41NzMgOC43Ni0xMS45NjkgMC0xNy41MjEtMy44NjUtMjQuNTQyLTguNzUtOC4wNDItNS42MDQtMTguMDYzLTEyLjU4My0zNi43MjktMTIuNTgzQTEwLjY2IDEwLjY2IDAgMCAwIC4wMDIgMjg4LjAwNmExMC42NiAxMC42NiAwIDAgMCAxMC42NjcgMTAuNjY3YzExLjk2OSAwIDE3LjUyMSAzLjg2NSAyNC41NDIgOC43NSA4LjA0MiA1LjYwNCAxOC4wNjMgMTIuNTgzIDM2LjcyOSAxMi41ODMgMTguNjc3IDAgMjguNzA4LTYuOTc5IDM2Ljc2LTEyLjU4MyA3LjAzMS00Ljg4NSAxMi41ODMtOC43NSAyNC41NjMtOC43NWExMC42NiAxMC42NiAwIDAgMCAxMC42NjctMTAuNjY3IDEwLjY2IDEwLjY2IDAgMCAwLTEwLjY2Ny0xMC42Njd6bTk4LjE0NiAzMC4wOTNjNy4wMzEtNC44OTYgMTIuNTk0LTguNzYgMjQuNTk0LTguNzYgMTEuOTY5IDAgMTcuNTIxIDMuODY1IDI0LjU0MiA4Ljc1IDguMDQyIDUuNjA0IDE4LjA2MyAxMi41ODMgMzYuNzI5IDEyLjU4MyAxOC42NzcgMCAyOC43MDgtNi45NzkgMzYuNzYtMTIuNTgzIDcuMDMxLTQuODg1IDEyLjU4My04Ljc1IDI0LjU2My04Ljc1YTEwLjY2IDEwLjY2IDAgMCAwIDEwLjY2Ny0xMC42NjcgMTAuNjYgMTAuNjYgMCAwIDAtMTAuNjY3LTEwLjY2N2MtMTguNjc3IDAtMjguNjk4IDYuOTY5LTM2Ljc1IDEyLjU3My03LjAzMSA0Ljg5Ni0xMi41ODMgOC43Ni0yNC41NzMgOC43Ni0xMS45NjkgMC0xNy41MjEtMy44NjUtMjQuNTQyLTguNzUtOC4wNDItNS42MDQtMTguMDYzLTEyLjU4My0zNi43MjktMTIuNTgzLTE4LjY4NyAwLTI4LjcxOSA2Ljk2OS0zNi43ODEgMTIuNTczLTcuMDMxIDQuODk2LTEyLjU5NCA4Ljc2LTI0LjU4MyA4Ljc2LTUuODk2IDAtMTAuNjY3IDQuNzcxLTEwLjY2NyAxMC42NjdzNC43NzEgMTAuNjY3IDEwLjY2NyAxMC42NjdjMTguNjc2IDAgMjguNzA3LTYuOTY5IDM2Ljc3LTEyLjU3M3pcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgSHVtaWRpdHlcclxuICAgICAgICAgICAgICAgICAgICA8aDU+e2Zvcm1hdEFzUGVyY2VudGFnZShwcm9wcy5jdXJyZW50bHkuaHVtaWRpdHkpfTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZWRpYVwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wic3RhdHMtaWNvblwiXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiNDc5cHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIi0zMSAwIDQ3OSA0NzkuODc0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiNDc5cHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xMjAuNDM4IDMzNS44NzVjNzcuMzgyIDAgMTIwLTQ1LjQ1NyAxMjAtMTI4IDAtNzcuMjgxLTEwOS4zOTEtMjAwLjE1Mi0xMTQuMDQ3LTIwNS4zMzZhOC4yNTEgOC4yNTEgMCAwIDAtMTEuOTA2IDBDMTA5LjgyNyA3LjcyMy40MzcgMTMwLjU5NC40MzcgMjA3Ljg3NWMwIDgyLjU0MyA0Mi42MTcgMTI4IDEyMCAxMjh6bTAtMzE1Ljc5M2MyMi45MDIgMjYuODc5IDEwNCAxMjYuMzYgMTA0IDE4Ny43OTMgMCA1MS4wOTQtMTguMDQ3IDExMi0xMDQgMTEycy0xMDQtNjAuOTA2LTEwNC0xMTJjMC02MS40MzQgODEuMDkzLTE2MC45MTQgMTA0LTE4Ny43OTN6bTIyNCAzMzEuNzkzYzQ1Ljc1NyAwIDcyLTMwLjUzNSA3Mi04My43OTMgMC01MC4wMDgtNjMuNDUtMTE4Ljc1LTY2LjE0NS0xMjEuNjU2YTguMjQgOC4yNCAwIDAgMC0xMS43MTEgMGMtMi42OTUgMi45MDYtNjYuMTQ1IDcxLjY0OC02Ni4xNDUgMTIxLjY1NiAwIDUzLjI1OCAyNi4yMzkgODMuNzkzIDcyIDgzLjc5M3ptMC0xODcuOTIyYzE1LjQzIDE3Ljk1MyA1NiA2OC41NDcgNTYgMTA0LjEyOSAwIDQ0Ljk4NC0xOC44NCA2Ny43OTMtNTYgNjcuNzkzcy01Ni0yMi44MDktNTYtNjcuNzkzYzAtMzUuNTgyIDQwLjU2Ni04Ni4xNzYgNTYtMTA0LjEyOXptLTExOCAxNTguNjI1Yy0yLjA0IDIuMzEzLTUwIDU3LjA5LTUwIDkzLjI5NyAwIDQwLjY3MiAyMC40MTQgNjQgNTYgNjQgMzUuNTgyIDAgNTYtMjMuMzI4IDU2LTY0IDAtMzYuMjA3LTQ3Ljk2MS05MC45ODQtNTAtOTMuMjk3YTguMjY1IDguMjY1IDAgMCAwLTEyIDB6bTYgMTQxLjI5N2MtMjYuNTM2IDAtNDAtMTYuMTUyLTQwLTQ4IDAtMjEuNzQ2IDI1LjAzLTU3LjE0NSA0MC03NS41ODYgMTQuOTc2IDE4LjQwMiA0MCA1My44MDkgNDAgNzUuNTg2IDAgMzEuODQ4LTEzLjQ2NSA0OC00MCA0OHptMCAwXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTAzLjYzNyAzMDMuODM2YTguMDA1IDguMDA1IDAgMCAwIDguNzkzLTcuNTYzIDggOCAwIDAgMC03LjE5Mi04LjM1OSA1OC42MSA1OC42MSAwIDAgMS00Mi43NDYtMjEuODI0Yy0yMS4yNzctMjcuNzQyLTE0LjIzLTcyLjQ2NS0xNC4xNjgtNzIuOTFhOC4wMDIgOC4wMDIgMCAwIDAtNi42MTMtOC45NyA4LjAwMiA4LjAwMiAwIDAgMC05LjE2IDYuMzQ1Yy0uMzU2IDIuMTEzLTguMjkgNTEuODg2IDE3LjE5MSA4NS4xOTlhNzMuOTMyIDczLjkzMiAwIDAgMCA1My44OTUgMjguMDgyem0yMzIuODAxIDE2LjAzOWE1NS42OTYgNTUuNjk2IDAgMCAwIDM5LjEyOC0xNi44NTUgNDcuODE1IDQ3LjgxNSAwIDAgMCA4Ljc1OC00MC40NjUgNy45OTggNy45OTggMCAxIDAtMTUuNzczIDIuNjQgMzIuODE5IDMyLjgxOSAwIDAgMS01LjEzNyAyNy40MTQgMzkuODI1IDM5LjgyNSAwIDAgMS0yNi45NzYgMTEuMjY2IDggOCAwIDAgMCAwIDE2em0tMTA4LjQyNiAxMTIuODRhOS4xODEgOS4xODEgMCAwIDEtNS4yNzQtNS42MTMgOS4xODQgOS4xODQgMCAwIDEgLjg2LTcuNjUzYzEuOTcyLTMuOTUzLjM3LTguNzYxLTMuNTg2LTEwLjczNC0zLjk1My0xLjk3Ny04Ljc1OC0uMzcxLTEwLjczNSAzLjU4MmEyNS4xODUgMjUuMTg1IDAgMCAwLTEuNzE4IDE5Ljg5IDI1LjE5NyAyNS4xOTcgMCAwIDAgMTMuMyAxNC44ODcgOC4wMDMgOC4wMDMgMCAwIDAgMTAuNzM5LTMuNTg2IDguMDAzIDguMDAzIDAgMCAwLTMuNTg2LTEwLjczNHptMCAwXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFByZWNpcGl0YXRpb25cclxuICAgICAgICAgICAgICAgICAgICA8aDU+e2Zvcm1hdEFzUGVyY2VudGFnZShwcm9wcy5jdXJyZW50bHkucHJlY2lwUHJvYmFiaWxpdHkpfTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZWRpYVwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wic3RhdHMtaWNvblwiXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzNjggMzY4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTI5NiA0OGMtMzkuNzA0IDAtNzIgMzIuMzA0LTcyIDcyIDAgNC40MTYgMy41NzYgOCA4IDhzOC0zLjU4NCA4LThjMC0zMC44OCAyNS4xMjgtNTYgNTYtNTZzNTYgMjUuMTIgNTYgNTYtMjUuMTI4IDU2LTU2IDU2SDhjLTQuNDE2IDAtOCAzLjU4NC04IDhzMy41ODQgOCA4IDhoMjg4YzM5LjcwNCAwIDcyLTMyLjMwNCA3Mi03MnMtMzIuMjk2LTcyLTcyLTcyelwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE0NCAzMmMtMzAuODggMC01NiAyNS4xMi01NiA1NiAwIDQuNDE2IDMuNTg0IDggOCA4czgtMy41ODQgOC04YzAtMjIuMDU2IDE3Ljk0NC00MCA0MC00MHM0MCAxNy45NDQgNDAgNDAtMTcuOTQ0IDQwLTQwIDQwSDhjLTQuNDE2IDAtOCAzLjU4NC04IDhzMy41ODQgOCA4IDhoMTM2YzMwLjg4IDAgNTYtMjUuMTIgNTYtNTZzLTI1LjEyLTU2LTU2LTU2em0xMzYgMTkySDhjLTQuNDE2IDAtOCAzLjU4NC04IDhzMy41ODQgOCA4IDhoMjcyYzIyLjA1NiAwIDQwIDE3Ljk0NCA0MCA0MHMtMTcuOTQ0IDQwLTQwIDQwLTQwLTE3Ljk0NC00MC00MGMwLTQuNDE2LTMuNTc2LTgtOC04cy04IDMuNTg0LTggOGMwIDMwLjg4IDI1LjEyOCA1NiA1NiA1NnM1Ni0yNS4xMiA1Ni01Ni0yNS4xMjgtNTYtNTYtNTZ6XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFdpbmQgU3BlZWRcclxuICAgICAgICAgICAgICAgICAgICA8aDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7Z2V0RGlyZWN0aW9uKHByb3BzLmN1cnJlbnRseS53aW5kQmVhcmluZyl9e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAge01hdGgucm91bmQocHJvcHMuY3VycmVudGx5LndpbmRTcGVlZCl9IE1QSFxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZWRpYVwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wic3RhdHMtaWNvblwiXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAxMjkgMTI5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTY0LjUgOTIuNmMxNS41IDAgMjgtMTIuNiAyOC0yOHMtMTIuNi0yOC0yOC0yOC0yOCAxMi42LTI4IDI4IDEyLjUgMjggMjggMjh6bTAtNDcuOWMxMSAwIDE5LjkgOC45IDE5LjkgMTkuOSAwIDExLTguOSAxOS45LTE5LjkgMTkuOXMtMTkuOS04LjktMTkuOS0xOS45YzAtMTEgOC45LTE5LjkgMTkuOS0xOS45ek02OC42IDIzLjZWMTAuN2MwLTIuMy0xLjgtNC4xLTQuMS00LjFzLTQuMSAxLjgtNC4xIDQuMXYxMi45YzAgMi4zIDEuOCA0LjEgNC4xIDQuMXM0LjEtMS44IDQuMS00LjF6TTYwLjQgMTA1LjZ2MTIuOWMwIDIuMyAxLjggNC4xIDQuMSA0LjFzNC4xLTEuOCA0LjEtNC4xdi0xMi45YzAtMi4zLTEuOC00LjEtNC4xLTQuMXMtNC4xIDEuOC00LjEgNC4xek05Ni40IDM4LjVsOS4xLTkuMWMxLjYtMS42IDEuNi00LjIgMC01LjgtMS42LTEuNi00LjItMS42LTUuOCAwbC05LjEgOS4xYy0xLjYgMS42LTEuNiA0LjIgMCA1LjguOC44IDEuOCAxLjIgMi45IDEuMnMyLjEtLjQgMi45LTEuMnpNMjMuNSAxMDUuNmMuOC44IDEuOCAxLjIgMi45IDEuMiAxIDAgMi4xLS40IDIuOS0xLjJsOS4xLTkuMWMxLjYtMS42IDEuNi00LjIgMC01LjgtMS42LTEuNi00LjItMS42LTUuOCAwbC05LjEgOS4xYy0xLjYgMS42LTEuNiA0LjIgMCA1Ljh6TTEyMi41IDY0LjZjMC0yLjMtMS44LTQuMS00LjEtNC4xaC0xMi45Yy0yLjMgMC00LjEgMS44LTQuMSA0LjFzMS44IDQuMSA0LjEgNC4xaDEyLjljMi4yIDAgNC4xLTEuOCA0LjEtNC4xek0xMC42IDY4LjdoMTIuOWMyLjMgMCA0LjEtMS44IDQuMS00LjFzLTEuOC00LjEtNC4xLTQuMUgxMC42Yy0yLjMgMC00LjEgMS44LTQuMSA0LjFzMS45IDQuMSA0LjEgNC4xek0xMDIuNiAxMDYuOGMxIDAgMi4xLS40IDIuOS0xLjIgMS42LTEuNiAxLjYtNC4yIDAtNS44bC05LjEtOS4xYy0xLjYtMS42LTQuMi0xLjYtNS44IDAtMS42IDEuNi0xLjYgNC4yIDAgNS44bDkuMSA5LjFjLjguOCAxLjkgMS4yIDIuOSAxLjJ6TTM4LjQgMzguNWMxLjYtMS42IDEuNi00LjIgMC01LjhsLTkuMS05LjFjLTEuNi0xLjYtNC4yLTEuNi01LjggMC0xLjYgMS42LTEuNiA0LjIgMCA1LjhsOS4xIDkuMWMuOC44IDEuOCAxLjIgMi45IDEuMnMyLjEtLjQgMi45LTEuMnpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgVVYgSW5kZXhcclxuICAgICAgICAgICAgICAgICAgICA8aDU+e3Byb3BzLmN1cnJlbnRseS51dkluZGV4fTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZWRpYVwiPlxyXG4gICAgICAgICAgICAgICAgICA8TWljcm9Nb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsQ2xhc3NOYW1lPXtzdHlsZXMubW9kYWx9XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZUZpcnN0RWxlbWVudEZvY3VzPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsb3NlT25BbmltYXRpb25FbmQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcj17aGFuZGxlT3BlbiA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVPcGVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1tbXCJidG5cIl0sIHN0eWxlc1tcInN0YXRzLW1vcmVcIl1dLmpvaW4oXCIgXCIpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTW9yZSBEZXRhaWxzXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbj17aGFuZGxlQ2xvc2UgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcIm1vZGFsX190b3BcIl19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXNbXCJtb2RhbF9fdG9wX19jbG9zZVwiXX0gb25DbGljaz17aGFuZGxlQ2xvc2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgw5dcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+Q3VycmVudGx5PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJtb2RhbC1ib2R5XCJdfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+RmVlbHMgTGlrZTwvc3Ryb25nPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e01hdGgucm91bmQocHJvcHMuY3VycmVudGx5LmFwcGFyZW50VGVtcGVyYXR1cmUpfSDCsDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+RGV3IFBvaW50PC9zdHJvbmc+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57TWF0aC5yb3VuZChwcm9wcy5jdXJyZW50bHkuZGV3UG9pbnQpfSDCsDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+V2luZCBHdXN0PC9zdHJvbmc+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57TWF0aC5yb3VuZChwcm9wcy5jdXJyZW50bHkud2luZEd1c3QpfSBtcGg8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPkNsb3VkIENvdmVyPC9zdHJvbmc+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57Zm9ybWF0QXNQZXJjZW50YWdlKHByb3BzLmN1cnJlbnRseS5jbG91ZENvdmVyKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPkFpciBQcmVzc3VyZTwvc3Ryb25nPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2NhbGN1bGF0ZVByZXNzdXJlKHByb3BzLmN1cnJlbnRseS5wcmVzc3VyZSl9IGluPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5Pem9uZTwvc3Ryb25nPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e01hdGgucm91bmQocHJvcHMuY3VycmVudGx5Lm96b25lKX0gZHU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPlZpc2liaWxpdHk8L3N0cm9uZz57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntNYXRoLnJvdW5kKHByb3BzLmN1cnJlbnRseS52aXNpYmlsaXR5KX0gbWk8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLmN1cnJlbnRseS5uZWFyZXN0U3Rvcm1CZWFyaW5nID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+TmVhcmVzdCBTdG9ybTwvc3Ryb25nPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Z2V0RGlyZWN0aW9uKHByb3BzLmN1cnJlbnRseS5uZWFyZXN0U3Rvcm1CZWFyaW5nKX17XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtNYXRoLnJvdW5kKHByb3BzLmN1cnJlbnRseS5uZWFyZXN0U3Rvcm1EaXN0YW5jZSl9IG1pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENsb3NlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjdXJyZW50bHk7IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY3VycmVudGx5XCI6IFwiQ3VycmVudGx5X2N1cnJlbnRseV9fMTh5MjdcIixcblx0XCJwdWxsUmlnaHRcIjogXCJDdXJyZW50bHlfcHVsbFJpZ2h0X18yQVcyalwiLFxuXHRcImFsZXJ0cy1ib3hcIjogXCJDdXJyZW50bHlfYWxlcnRzLWJveF9fMWx3OWNcIixcblx0XCJzdGF0c1wiOiBcIkN1cnJlbnRseV9zdGF0c19fbUotaEhcIixcblx0XCJzdGF0cy1pY29uXCI6IFwiQ3VycmVudGx5X3N0YXRzLWljb25fXzJEaGdaXCIsXG5cdFwic3RhdHMtbW9yZVwiOiBcIkN1cnJlbnRseV9zdGF0cy1tb3JlX18yRDhBalwiLFxuXHRcIm5vd1wiOiBcIkN1cnJlbnRseV9ub3dfXzFzQkFIXCIsXG5cdFwic3VtbWFyeVwiOiBcIkN1cnJlbnRseV9zdW1tYXJ5X18xR0dNOFwiLFxuXHRcImxvY2F0aW9uXCI6IFwiQ3VycmVudGx5X2xvY2F0aW9uX18zX3U5c1wiLFxuXHRcInRlbXBcIjogXCJDdXJyZW50bHlfdGVtcF9fMmE2a3RcIixcblx0XCJ0ZW1wLWxoXCI6IFwiQ3VycmVudGx5X3RlbXAtbGhfXzFVT0JOXCIsXG5cdFwibW9kYWxfX3RvcFwiOiBcIkN1cnJlbnRseV9tb2RhbF9fdG9wX196ZWhKR1wiLFxuXHRcIm1vZGFsX190b3BfX2Nsb3NlXCI6IFwiQ3VycmVudGx5X21vZGFsX190b3BfX2Nsb3NlX18zeDI4WFwiLFxuXHRcIm1vZGFsX19pdGVtXCI6IFwiQ3VycmVudGx5X21vZGFsX19pdGVtX18zUU8yUlwiLFxuXHRcIm1vZGFsX19pdGVtX190aXRsZVwiOiBcIkN1cnJlbnRseV9tb2RhbF9faXRlbV9fdGl0bGVfX2Npd0tBXCIsXG5cdFwibW9kYWxcIjogXCJDdXJyZW50bHlfbW9kYWxfXzFGVGNOXCIsXG5cdFwibW9kYWwtYm9keVwiOiBcIkN1cnJlbnRseV9tb2RhbC1ib2R5X18xb1hBS1wiXG59O1xuIiwiY29uc3QgdW5pdHMgPSBwcm9wcyA9PiB7XHJcbiAgICBsZXQgY2hlY2tVbml0cyA9IG51bGw7XHJcbiAgICBpZiAocHJvcHMuZmxhZ3MgPT09IFwidXNcIikge1xyXG4gICAgICBjaGVja1VuaXRzID0gXCLCsEZcIjtcclxuICAgIH0gZWxzZSBpZiAocHJvcHMuZmxhZ3MgPT09IFwic2lcIikge1xyXG4gICAgICBjaGVja1VuaXRzID0gXCLCsENcIjtcclxuICAgIH1cclxuICBcclxuICAgIHJldHVybiBjaGVja1VuaXRzO1xyXG4gIH07XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgdW5pdHM7IiwiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9XZWF0aGVyLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCB7IHVzZVN0b3JlU3RhdGUgfSBmcm9tIFwiZWFzeS1wZWFzeVwiO1xyXG5pbXBvcnQgV2VhdGhlckJhY2tncm91bmQgZnJvbSBcIi4vQmFja2dyb3VuZC9CYWNrZ3JvdW5kXCI7XHJcbmltcG9ydCBDdXJyZW50bHkgZnJvbSBcIi4vQ3VycmVudGx5L0N1cnJlbnRseVwiO1xyXG5pbXBvcnQgeyBUYWIsIFRhYnMsIFRhYkxpc3QsIFRhYlBhbmVsIH0gZnJvbSBcInJlYWN0LXRhYnNcIjtcclxuaW1wb3J0IERhaWx5U2xpZGVyIGZyb20gXCIuLi9XZWF0aGVyL1dlYXRoZXJTbGlkZXIvRGFpbHlTbGlkZXIvRGFpbHlTbGlkZXJcIjtcclxuaW1wb3J0IEhvdXJseVNsaWRlciBmcm9tIFwiLi4vV2VhdGhlci9XZWF0aGVyU2xpZGVyL0hvdXJseVNsaWRlci9Ib3VybHlTbGlkZXJcIjtcclxuaW1wb3J0IHsgcmVzZXRJZENvdW50ZXIgfSBmcm9tIFwicmVhY3QtdGFic1wiO1xyXG5cclxuY29uc3Qgd2VhdGhlciA9IHByb3BzID0+IHtcclxuICBjb25zdCBzcGlubmVyID0gdXNlU3RvcmVTdGF0ZShzdGF0ZSA9PiBzdGF0ZS5zcGlubmVyKTtcclxuICBjb25zdCB3ZWF0aGVyID0gdXNlU3RvcmVTdGF0ZShzdGF0ZSA9PiBzdGF0ZS53ZWF0aGVyLndlYXRoZXJEYXRhKTtcclxuICBjb25zdCBjaXR5ID0gdXNlU3RvcmVTdGF0ZShzdGF0ZSA9PiBzdGF0ZS5sb2NhdGlvbi5sb2NhdGlvbkNpdHkpO1xyXG4gIGNvbnN0IHJlZ2lvbiA9IHVzZVN0b3JlU3RhdGUoc3RhdGUgPT4gc3RhdGUubG9jYXRpb24ubG9jYXRpb25SZWdpb24pO1xyXG4gIHJlc2V0SWRDb3VudGVyKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndlYXRoZXJ9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wid2VhdGhlci13cmFwXCJdfT5cclxuICAgICAgICB7c3Bpbm5lci5zcGlubmVyID09PSB0cnVlICYmIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZy1zcGlubmVyXCI+PC9kaXY+fVxyXG4gICAgICAgIHtwcm9wcy53ZWF0aGVyICYmIChcclxuICAgICAgICAgICAgPD45XHJcbiAgICAgICAgICAgIDxXZWF0aGVyQmFja2dyb3VuZCBjb25kaXRpb249e3dlYXRoZXIuY3VycmVudGx5fSAvPlxyXG4gICAgICAgICAgICA8Q3VycmVudGx5XHJcbiAgICAgICAgICAgICAgY2l0eT17Y2l0eX1cclxuICAgICAgICAgICAgICByZWdpb249e3JlZ2lvbn1cclxuICAgICAgICAgICAgICBkYWlseT17d2VhdGhlci5kYWlseX1cclxuICAgICAgICAgICAgICBjdXJyZW50bHk9e3dlYXRoZXIuY3VycmVudGx5fVxyXG4gICAgICAgICAgICAgIGFsZXJ0cz17d2VhdGhlci5hbGVydHN9XHJcbiAgICAgICAgICAgICAgZmxhZ3M9e3dlYXRoZXIuZmxhZ3N9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxUYWJzIGNsYXNzTmFtZT17c3R5bGVzLnRhYnN9IHNlbGVjdGVkVGFiQ2xhc3NOYW1lPXtzdHlsZXMuc2VsZWN0ZWR9PlxyXG4gICAgICAgICAgICAgIDxUYWJMaXN0IGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAgbGlzdC1ncm91cC1ob3Jpem9udGFsXCI+XHJcbiAgICAgICAgICAgICAgICA8VGFiIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbVwiPkRhaWx5PC9UYWI+XHJcbiAgICAgICAgICAgICAgICA8VGFiIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbVwiPkhvdXJseTwvVGFiPlxyXG4gICAgICAgICAgICAgIDwvVGFiTGlzdD5cclxuICAgICAgICAgICAgICA8VGFiUGFuZWw+XHJcbiAgICAgICAgICAgICAgICA8RGFpbHlTbGlkZXIgd2VhdGhlcj17d2VhdGhlcn0gLz5cclxuICAgICAgICAgICAgICA8L1RhYlBhbmVsPlxyXG4gICAgICAgICAgICAgIDxUYWJQYW5lbD5cclxuICAgICAgICAgICAgICAgIDxIb3VybHlTbGlkZXIgd2VhdGhlcj17d2VhdGhlcn0gLz5cclxuICAgICAgICAgICAgICA8L1RhYlBhbmVsPlxyXG4gICAgICAgICAgICA8L1RhYnM+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3ZWF0aGVyOyIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIndlYXRoZXJcIjogXCJXZWF0aGVyX3dlYXRoZXJfXzNpcVpZXCIsXG5cdFwid2VhdGhlci13cmFwXCI6IFwiV2VhdGhlcl93ZWF0aGVyLXdyYXBfXzNvYXd5XCIsXG5cdFwidGFic1wiOiBcIldlYXRoZXJfdGFic19fMUFwcWVcIixcblx0XCJzZWxlY3RlZFwiOiBcIldlYXRoZXJfc2VsZWN0ZWRfX215VmpWXCJcbn07XG4iLCJjb25zdCB3ZWF0aGVySWNvbiA9IHByb3BzID0+IHtcclxuICAgIGxldCBpY29uID0gbnVsbDtcclxuICAgIHN3aXRjaCAocHJvcHMuY29uZGl0aW9uKSB7XHJcbiAgICAgIGNhc2UgXCJjbGVhci1kYXlcIjpcclxuICAgICAgICBpY29uID0gPGltZyBzcmM9e2Avd2VhdGhlci9pY29ucy8ke3Byb3BzLmNvbG9yfS9zdmcvY2xlYXIuc3ZnYH0gYWx0PXtwcm9wcy5jb25kaXRpb259IC8+O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiY2xlYXItbmlnaHRcIjpcclxuICAgICAgICBpY29uID0gPGltZyBzcmM9e2Avd2VhdGhlci9pY29ucy8ke3Byb3BzLmNvbG9yfS9zdmcvbnRfY2xlYXIuc3ZnYH0gYWx0PXtwcm9wcy5jb25kaXRpb259IC8+O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwicmFpblwiOlxyXG4gICAgICAgIGljb24gPSA8aW1nIHNyYz17YC93ZWF0aGVyL2ljb25zLyR7cHJvcHMuY29sb3J9L3N2Zy9yYWluLnN2Z2B9IGFsdD17cHJvcHMuY29uZGl0aW9ufSAvPjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcInNub3dcIjpcclxuICAgICAgICBpY29uID0gPGltZyBzcmM9e2Avd2VhdGhlci9pY29ucy8ke3Byb3BzLmNvbG9yfS9zdmcvc25vdy5zdmdgfSBhbHQ9e3Byb3BzLmNvbmRpdGlvbn0gLz47XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJzbGVldFwiOlxyXG4gICAgICAgIGljb24gPSA8aW1nIHNyYz17YC93ZWF0aGVyL2ljb25zLyR7cHJvcHMuY29sb3J9L3N2Zy9zbGVldC5zdmdgfSBhbHQ9e3Byb3BzLmNvbmRpdGlvbn0gLz47XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJ3aW5kXCI6XHJcbiAgICAgICAgaWNvbiA9IDxpbWcgc3JjPXtgL3dlYXRoZXIvaWNvbnMvJHtwcm9wcy5jb2xvcn0vc3ZnL3dpbmQuc3ZnYH0gYWx0PXtwcm9wcy5jb25kaXRpb259IC8+O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiZm9nXCI6XHJcbiAgICAgICAgaWNvbiA9IDxpbWcgc3JjPXtgL3dlYXRoZXIvaWNvbnMvJHtwcm9wcy5jb2xvcn0vc3ZnL2ZvZy5zdmdgfSBhbHQ9e3Byb3BzLmNvbmRpdGlvbn0gLz47XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJjbG91ZHlcIjpcclxuICAgICAgICBpY29uID0gPGltZyBzcmM9e2Avd2VhdGhlci9pY29ucy8ke3Byb3BzLmNvbG9yfS9zdmcvY2xvdWR5LnN2Z2B9IGFsdD17cHJvcHMuY29uZGl0aW9ufSAvPjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcInBhcnRseS1jbG91ZHktZGF5XCI6XHJcbiAgICAgICAgaWNvbiA9IDxpbWcgc3JjPXtgL3dlYXRoZXIvaWNvbnMvJHtwcm9wcy5jb2xvcn0vc3ZnL3BhcnRseWNsb3VkeS5zdmdgfSBhbHQ9e3Byb3BzLmNvbmRpdGlvbn0gLz47XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJwYXJ0bHktY2xvdWR5LW5pZ2h0XCI6XHJcbiAgICAgICAgaWNvbiA9IDxpbWcgc3JjPXtgL3dlYXRoZXIvaWNvbnMvJHtwcm9wcy5jb2xvcn0vc3ZnL250X3BhcnRseWNsb3VkeS5zdmdgfSBhbHQ9e3Byb3BzLmNvbmRpdGlvbn0gLz47XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJoYWlsXCI6XHJcbiAgICAgICAgaWNvbiA9IDxpbWcgc3JjPXtgL3dlYXRoZXIvaWNvbnMvJHtwcm9wcy5jb2xvcn0vc3ZnL3NsZWV0LnN2Z2B9IGFsdD17cHJvcHMuY29uZGl0aW9ufSAvPjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcInRodW5kZXJzdG9ybVwiOlxyXG4gICAgICAgIGljb24gPSA8aW1nIHNyYz17YC93ZWF0aGVyL2ljb25zLyR7cHJvcHMuY29sb3J9L3N2Zy90c3Rvcm1zLnN2Z2B9IGFsdD17cHJvcHMuY29uZGl0aW9ufSAvPjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcInRvcm5hZG9cIjpcclxuICAgICAgICBpY29uID0gPGltZyBzcmM9e2Avd2VhdGhlci9pY29ucy8ke3Byb3BzLmNvbG9yfS9zdmcvdG9ybmFkby5zdmdgfSBhbHQ9e3Byb3BzLmNvbmRpdGlvbn0gLz47XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgaWNvbiA9IDxpbWcgc3JjPXtgL3dlYXRoZXIvaWNvbnMvJHtwcm9wcy5jb2xvcn0vc3ZnL3Vua25vd24uc3ZnYH0gYWx0PXtwcm9wcy5jb25kaXRpb259IC8+O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGljb247XHJcbiAgfTtcclxuICBcclxuICBleHBvcnQgZGVmYXVsdCB3ZWF0aGVySWNvbjsiLCJpbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9XZWF0aGVyU2xpZGVyLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCBXZWF0aGVySWNvbiBmcm9tIFwiLi4vLi4vV2VhdGhlckljb24vV2VhdGhlckljb25cIjtcclxuaW1wb3J0IFN3aXBlciBmcm9tIFwicmVhY3QtaWQtc3dpcGVyXCI7XHJcbmltcG9ydCBNaWNyb01vZGFsIGZyb20gXCJyZWFjdC1taWNyby1tb2RhbFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIGdldERpcmVjdGlvbixcclxuICBnZXRDb25kaXRpb24sXHJcbiAgY2FsY3VsYXRlUHJlc3N1cmUsXHJcbiAgZm9ybWF0QXNQZXJjZW50YWdlLFxyXG4gIE1vb25cclxufSBmcm9tIFwiLi4vLi4vLi4vLi4vdXRpbHMvY2FsY3VsYXRlV2VhdGhlclwiO1xyXG5pbXBvcnQgeyBUYWIsIFRhYnMsIFRhYkxpc3QsIFRhYlBhbmVsIH0gZnJvbSBcInJlYWN0LXRhYnNcIjtcclxuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSBcImRhdGUtZm5zXCI7XHJcbmltcG9ydCBmcm9tVW5peFRpbWUgZnJvbSBcImRhdGUtZm5zL2Zyb21Vbml4VGltZVwiO1xyXG5cclxuY29uc3QgZGFpbHlTbGlkZXIgPSBwcm9wcyA9PiB7XHJcbiAgY29uc3QgW3N3aXBlciwgdXBkYXRlU3dpcGVyXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICBjb25zdCBnb05leHQgPSAoKSA9PiB7XHJcbiAgICBpZiAoc3dpcGVyICE9PSBudWxsKSB7XHJcbiAgICAgIHN3aXBlci5zbGlkZU5leHQoKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBnb1ByZXYgPSAoKSA9PiB7XHJcbiAgICBpZiAoc3dpcGVyICE9PSBudWxsKSB7XHJcbiAgICAgIHN3aXBlci5zbGlkZVByZXYoKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBsZXQgY2hlY2tIb3VyID0gcHJvcHMud2VhdGhlci5ob3VybHkuZGF0YTtcclxuICBjb25zdCBob3VyQXJyYXkgPSAoKSA9PiB7XHJcbiAgICBsZXQgbmV3QXJyYXkgPSBjaGVja0hvdXIubWFwKG9iamVjdCA9PiBmb3JtYXQoZnJvbVVuaXhUaW1lKG9iamVjdC50aW1lKSwgXCJNL2QveXl5eVwiKSk7XHJcbiAgICBsZXQgb25lRGF5ID0gWy4uLm5ldyBTZXQobmV3QXJyYXkpXTtcclxuICAgIHJldHVybiBvbmVEYXk7XHJcbiAgfTtcclxuXHJcbiAgbGV0IHNsaWRlciA9IG51bGw7XHJcbiAgbGV0IHNsaWRlckluaXRpYWxpemUgPSBudWxsO1xyXG4gIHNsaWRlckluaXRpYWxpemUgPSBwcm9wcy53ZWF0aGVyLmRhaWx5LmRhdGEuc2xpY2UoMCwgOCkubWFwKChpdGVtLCBfaW5kZXgpID0+IHtcclxuICAgIGNvbnN0IGJhY2tncm91bmRDb25kaXRpb24gPSB7XHJcbiAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgvd2VhdGhlckJhY2tncm91bmRzLyR7aXRlbS5pY29ufS5qcGcpYFxyXG4gICAgfTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYga2V5PXtpdGVtLnRpbWV9IGNsYXNzTmFtZT17c3R5bGVzLnNsaWRlfT5cclxuICAgICAgICA8TWljcm9Nb2RhbFxyXG4gICAgICAgICAgbW9kYWxDbGFzc05hbWU9e3N0eWxlcy5tb2RhbH1cclxuICAgICAgICAgIGRpc2FibGVGaXJzdEVsZW1lbnRGb2N1cz17dHJ1ZX1cclxuICAgICAgICAgIGNsb3NlT25BbmltYXRpb25FbmQ9e3RydWV9XHJcbiAgICAgICAgICB0cmlnZ2VyPXtoYW5kbGVPcGVuID0+IChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZU9wZW59XHJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e1tzdHlsZXMuc2xpZGUsIHN0eWxlc1tcInNsaWRlLW1vZGFsLWJ0blwiXV0uam9pbihcIiBcIil9PlxyXG4gICAgICAgICAgICAgIHtmb3JtYXQobmV3IERhdGUoKSwgXCJlZWVlIERvXCIpID09PSBmb3JtYXQoZnJvbVVuaXhUaW1lKGl0ZW0udGltZSksIFwiZWVlZSBEb1wiKSA/IChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGF0ZX0+VG9kYXk8L2Rpdj5cclxuICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kYXRlfT57Zm9ybWF0KGZyb21Vbml4VGltZShpdGVtLnRpbWUpLCBcImVlZSwgTU1NIGRvXCIpfTwvZGl2PlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPFdlYXRoZXJJY29uIGNvbmRpdGlvbj17aXRlbS5pY29ufSBjb2xvcj1cIndoaXRlXCIgLz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRlbXB9PlxyXG4gICAgICAgICAgICAgICAge01hdGgucm91bmQoaXRlbS50ZW1wZXJhdHVyZUhpZ2gpfSDCsHtcIiBcIn1cclxuICAgICAgICAgICAgICAgIDxzcGFuPntNYXRoLnJvdW5kKGl0ZW0udGVtcGVyYXR1cmVMb3cpfSDCsDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8c3Bhbj57Z2V0Q29uZGl0aW9uKGl0ZW0uaWNvbil9PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICBjaGlsZHJlbj17aGFuZGxlQ2xvc2UgPT4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJtb2RhbF9fdG9wXCJdfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e2JhY2tncm91bmRDb25kaXRpb259IGNsYXNzTmFtZT17c3R5bGVzW1wibW9kYWxfX3RvcF9fYmFja2dyb3VuZFwiXX0gLz5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXNbXCJtb2RhbF9fdG9wX19jbG9zZVwiXX0gb25DbGljaz17aGFuZGxlQ2xvc2V9PlxyXG4gICAgICAgICAgICAgICAgICDDl1xyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICB7Zm9ybWF0KG5ldyBEYXRlKCksIFwiZWVlZSBEb1wiKSA9PT0gZm9ybWF0KGZyb21Vbml4VGltZShpdGVtLnRpbWUpLCBcImVlZWUgRG9cIikgPyAoXHJcbiAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5kYXRlfT5Ub2RheTwvaDI+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuZGF0ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAge2Zvcm1hdChmcm9tVW5peFRpbWUoaXRlbS50aW1lKSwgXCJlZWVlLCBNTU1NIGRvXCIpfVxyXG4gICAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTYgY29sLXhzLTYgY29sLXNtLTYgY29sLW1kLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wibW9kYWxfX2l0ZW1cIl19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIuMDA1IDUxMi4wMDVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0zMjcuMTU5IDIuNzY2YTEwLjY0MSAxMC42NDEgMCAwIDAtMTQuMzEzIDBjLTQuNjQyIDQuMTg2LTExMC44ODkgMTAxLjI5Mi0xNjAuMjI4IDIxMy44MzktNS4zMTgtMS44NjctMTEuNDQtMy4yNjYtMTkuMzU1LTMuMjY2LTE4LjY3NyAwLTI4LjY5OCA2Ljk2OS0zNi43NSAxMi41NzMtNy4wMzEgNC44OTYtMTIuNTgzIDguNzYtMjQuNTczIDguNzYtMTEuOTY5IDAtMTcuNTIxLTMuODY1LTI0LjU0Mi04Ljc1LTguMDQyLTUuNjA0LTE4LjA2My0xMi41ODMtMzYuNzI5LTEyLjU4M0ExMC42NiAxMC42NiAwIDAgMCAuMDAyIDIyNC4wMDZhMTAuNjYgMTAuNjYgMCAwIDAgMTAuNjY3IDEwLjY2N2MxMS45NjkgMCAxNy41MjEgMy44NjUgMjQuNTQyIDguNzUgOC4wNDIgNS42MDQgMTguMDYzIDEyLjU4MyAzNi43MjkgMTIuNTgzIDE4LjY3NyAwIDI4LjcwOC02Ljk3OSAzNi43Ni0xMi41ODMgNy4wMzEtNC44ODUgMTIuNTgzLTguNzUgMjQuNTYzLTguNzUgMTIgMCAxNy41NjMgMy44NjUgMjQuNjA0IDguNzYgOC4wNTIgNS42MDQgMTguMDgzIDEyLjU3MyAzNi43NzEgMTIuNTczIDE4LjY3NyAwIDI4LjcwOC02Ljk2OSAzNi43NzEtMTIuNTczIDcuMDMxLTQuODk2IDEyLjU5NC04Ljc2IDI0LjU5NC04Ljc2YTEwLjY2IDEwLjY2IDAgMCAwIDEwLjY2Ny0xMC42NjcgMTAuNjYgMTAuNjYgMCAwIDAtMTAuNjY3LTEwLjY2N2MtMTguNjg3IDAtMjguNzE5IDYuOTY5LTM2Ljc4MSAxMi41NzMtNy4wMzEgNC44OTYtMTIuNTk0IDguNzYtMjQuNTgzIDguNzYtMTEuMjA4IDAtMTYuODIzLTMuNDE5LTIzLjI0Mi03Ljg1NCA0MC4xMjEtOTIuNjYxIDEyMy42NjEtMTc3LjQ2NiAxNDguNjA3LTIwMS40OSAzMy4yMTkgMzIuMDEgMTcwLjY2NyAxNzEuODY1IDE3MC42NjcgMjk0LjY3NyAwIDk0LjEwNC03Ni41NjMgMTcwLjY2Ny0xNzAuNjY3IDE3MC42NjctNDIuNDc3IDAtODIuNjY5LTE1LjgyMi0xMTMuNzgtNDMuNzU4IDExLjU0Mi0yLjEzOCAxOC45OTQtNy4xNzcgMjUuMTg2LTExLjQ4MiA3LjAzMS00Ljg5NiAxMi41OTQtOC43NiAyNC41OTQtOC43NiA1Ljg5NiAwIDEwLjY2Ny00Ljc3MSAxMC42NjctMTAuNjY3cy00Ljc3MS0xMC42NjctMTAuNjY3LTEwLjY2N2MtMTguNjg3IDAtMjguNzE5IDYuOTY5LTM2Ljc4MSAxMi41NzMtNy4wMzEgNC44OTYtMTIuNTk0IDguNzYtMjQuNTgzIDguNzYtMTIgMC0xNy41NjMtMy44NjUtMjQuNTk0LTguNzYtOC4wNjMtNS42MDQtMTguMDk0LTEyLjU3My0zNi43ODEtMTIuNTczLTE4LjY3NyAwLTI4LjY5OCA2Ljk2OS0zNi43NSAxMi41NzMtNy4wMzEgNC44OTYtMTIuNTgzIDguNzYtMjQuNTczIDguNzYtMTEuOTY5IDAtMTcuNTIxLTMuODY1LTI0LjU0Mi04Ljc1LTguMDQyLTUuNjA0LTE4LjA2My0xMi41ODMtMzYuNzI5LTEyLjU4My01Ljg5NiAwLTEwLjY2NyA0Ljc3MS0xMC42NjcgMTAuNjY3czQuNzcxIDEwLjY2NyAxMC42NjcgMTAuNjY3YzExLjk2OSAwIDE3LjUyMSAzLjg2NSAyNC41NDIgOC43NSA4LjA0MiA1LjYwNCAxOC4wNjMgMTIuNTgzIDM2LjcyOSAxMi41ODMgMTguNjc3IDAgMjguNzA4LTYuOTc5IDM2Ljc2LTEyLjU4MyA3LjAzMS00Ljg4NSAxMi41ODMtOC43NSAyNC41NjMtOC43NSAxMiAwIDE3LjU2MyAzLjg2NSAyNC42MDQgOC43NiA0LjM0NSAzLjAyMyA5LjQxNCA2LjM1NSAxNS45NjEgOC44NjUgMzYuNiA0Mi45OTYgODkuNjU1IDY3LjcwOCAxNDYuMTc0IDY3LjcwOCAxMDUuODY1IDAgMTkyLTg2LjEzNSAxOTItMTkyQzUxMi4wMDMgMTcxLjY0MSAzMzQuNzAxIDkuNTg5IDMyNy4xNTkgMi43NjZ6XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xMC42NjkgMzYyLjY3MmMxMS45NjkgMCAxNy41MjEgMy44NjUgMjQuNTQyIDguNzUgOC4wNDIgNS42MDQgMTguMDYzIDEyLjU4MyAzNi43MjkgMTIuNTgzYTEwLjY2IDEwLjY2IDAgMCAwIDEwLjY2Ny0xMC42NjcgMTAuNjYgMTAuNjYgMCAwIDAtMTAuNjY3LTEwLjY2N2MtMTEuOTY5IDAtMTcuNTIxLTMuODY1LTI0LjU0Mi04Ljc1LTguMDQyLTUuNjA0LTE4LjA2My0xMi41ODMtMzYuNzI5LTEyLjU4My01Ljg5NiAwLTEwLjY2NyA0Ljc3MS0xMC42NjcgMTAuNjY3czQuNzcxIDEwLjY2NyAxMC42NjcgMTAuNjY3em0xMjIuNTk0LTIxLjMzM2MtNS44OTYgMC0xMC42NjcgNC43NzEtMTAuNjY3IDEwLjY2N3M0Ljc3MSAxMC42NjcgMTAuNjY3IDEwLjY2N2MxMiAwIDE3LjU2MyAzLjg2NSAyNC41OTQgOC43NiA4LjA2MyA1LjYwNCAxOC4wOTQgMTIuNTczIDM2Ljc4MSAxMi41NzMgMTguNjc3IDAgMjguNzA4LTYuOTY5IDM2Ljc3MS0xMi41NzMgNy4wMzEtNC44OTYgMTIuNTk0LTguNzYgMjQuNTk0LTguNzYgMTIuMTk4IDAgMTguNDA2IDMuOTY5IDI2LjI1IDguOTkgOS4wNTIgNS43ODEgMTkuMzEzIDEyLjM0NCAzNy43NSAxMi4zNDRhMTAuNjYgMTAuNjYgMCAwIDAgMTAuNjY3LTEwLjY2NyAxMC42NiAxMC42NiAwIDAgMC0xMC42NjctMTAuNjY3Yy0xMi4xOTggMC0xOC40MDYtMy45NjktMjYuMjUtOC45OS05LjA1Mi01Ljc4MS0xOS4zMTMtMTIuMzQ0LTM3Ljc1LTEyLjM0NC0xOC42ODcgMC0yOC43MTkgNi45NjktMzYuNzgxIDEyLjU3My03LjAzMSA0Ljg5Ni0xMi41OTQgOC43Ni0yNC41ODMgOC43Ni0xMiAwLTE3LjU2My0zLjg2NS0yNC42MDQtOC43Ni04LjA1My01LjYwNS0xOC4wODQtMTIuNTczLTM2Ljc3Mi0xMi41NzN6bTAtNjRjLTE4LjY3NyAwLTI4LjY5OCA2Ljk2OS0zNi43NSAxMi41NzMtNy4wMzEgNC44OTYtMTIuNTgzIDguNzYtMjQuNTczIDguNzYtMTEuOTY5IDAtMTcuNTIxLTMuODY1LTI0LjU0Mi04Ljc1LTguMDQyLTUuNjA0LTE4LjA2My0xMi41ODMtMzYuNzI5LTEyLjU4M0ExMC42NiAxMC42NiAwIDAgMCAuMDAyIDI4OC4wMDZhMTAuNjYgMTAuNjYgMCAwIDAgMTAuNjY3IDEwLjY2N2MxMS45NjkgMCAxNy41MjEgMy44NjUgMjQuNTQyIDguNzUgOC4wNDIgNS42MDQgMTguMDYzIDEyLjU4MyAzNi43MjkgMTIuNTgzIDE4LjY3NyAwIDI4LjcwOC02Ljk3OSAzNi43Ni0xMi41ODMgNy4wMzEtNC44ODUgMTIuNTgzLTguNzUgMjQuNTYzLTguNzVhMTAuNjYgMTAuNjYgMCAwIDAgMTAuNjY3LTEwLjY2NyAxMC42NiAxMC42NiAwIDAgMC0xMC42NjctMTAuNjY3em05OC4xNDYgMzAuMDkzYzcuMDMxLTQuODk2IDEyLjU5NC04Ljc2IDI0LjU5NC04Ljc2IDExLjk2OSAwIDE3LjUyMSAzLjg2NSAyNC41NDIgOC43NSA4LjA0MiA1LjYwNCAxOC4wNjMgMTIuNTgzIDM2LjcyOSAxMi41ODMgMTguNjc3IDAgMjguNzA4LTYuOTc5IDM2Ljc2LTEyLjU4MyA3LjAzMS00Ljg4NSAxMi41ODMtOC43NSAyNC41NjMtOC43NWExMC42NiAxMC42NiAwIDAgMCAxMC42NjctMTAuNjY3IDEwLjY2IDEwLjY2IDAgMCAwLTEwLjY2Ny0xMC42NjdjLTE4LjY3NyAwLTI4LjY5OCA2Ljk2OS0zNi43NSAxMi41NzMtNy4wMzEgNC44OTYtMTIuNTgzIDguNzYtMjQuNTczIDguNzYtMTEuOTY5IDAtMTcuNTIxLTMuODY1LTI0LjU0Mi04Ljc1LTguMDQyLTUuNjA0LTE4LjA2My0xMi41ODMtMzYuNzI5LTEyLjU4My0xOC42ODcgMC0yOC43MTkgNi45NjktMzYuNzgxIDEyLjU3My03LjAzMSA0Ljg5Ni0xMi41OTQgOC43Ni0yNC41ODMgOC43Ni01Ljg5NiAwLTEwLjY2NyA0Ljc3MS0xMC42NjcgMTAuNjY3czQuNzcxIDEwLjY2NyAxMC42NjcgMTAuNjY3YzE4LjY3NiAwIDI4LjcwNy02Ljk2OSAzNi43Ny0xMi41NzN6XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT17c3R5bGVzW1wibW9kYWxfX2l0ZW1fX3RpdGxlXCJdfT5IdW1pZGl0eTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7Zm9ybWF0QXNQZXJjZW50YWdlKGl0ZW0uaHVtaWRpdHkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNiBjb2wteHMtNiBjb2wtc20tNiBjb2wtbWQtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJtb2RhbF9faXRlbVwiXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjQ3OXB0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIi0zMSAwIDQ3OSA0NzkuODc0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCI0NzlwdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xMjAuNDM4IDMzNS44NzVjNzcuMzgyIDAgMTIwLTQ1LjQ1NyAxMjAtMTI4IDAtNzcuMjgxLTEwOS4zOTEtMjAwLjE1Mi0xMTQuMDQ3LTIwNS4zMzZhOC4yNTEgOC4yNTEgMCAwIDAtMTEuOTA2IDBDMTA5LjgyNyA3LjcyMy40MzcgMTMwLjU5NC40MzcgMjA3Ljg3NWMwIDgyLjU0MyA0Mi42MTcgMTI4IDEyMCAxMjh6bTAtMzE1Ljc5M2MyMi45MDIgMjYuODc5IDEwNCAxMjYuMzYgMTA0IDE4Ny43OTMgMCA1MS4wOTQtMTguMDQ3IDExMi0xMDQgMTEycy0xMDQtNjAuOTA2LTEwNC0xMTJjMC02MS40MzQgODEuMDkzLTE2MC45MTQgMTA0LTE4Ny43OTN6bTIyNCAzMzEuNzkzYzQ1Ljc1NyAwIDcyLTMwLjUzNSA3Mi04My43OTMgMC01MC4wMDgtNjMuNDUtMTE4Ljc1LTY2LjE0NS0xMjEuNjU2YTguMjQgOC4yNCAwIDAgMC0xMS43MTEgMGMtMi42OTUgMi45MDYtNjYuMTQ1IDcxLjY0OC02Ni4xNDUgMTIxLjY1NiAwIDUzLjI1OCAyNi4yMzkgODMuNzkzIDcyIDgzLjc5M3ptMC0xODcuOTIyYzE1LjQzIDE3Ljk1MyA1NiA2OC41NDcgNTYgMTA0LjEyOSAwIDQ0Ljk4NC0xOC44NCA2Ny43OTMtNTYgNjcuNzkzcy01Ni0yMi44MDktNTYtNjcuNzkzYzAtMzUuNTgyIDQwLjU2Ni04Ni4xNzYgNTYtMTA0LjEyOXptLTExOCAxNTguNjI1Yy0yLjA0IDIuMzEzLTUwIDU3LjA5LTUwIDkzLjI5NyAwIDQwLjY3MiAyMC40MTQgNjQgNTYgNjQgMzUuNTgyIDAgNTYtMjMuMzI4IDU2LTY0IDAtMzYuMjA3LTQ3Ljk2MS05MC45ODQtNTAtOTMuMjk3YTguMjY1IDguMjY1IDAgMCAwLTEyIDB6bTYgMTQxLjI5N2MtMjYuNTM2IDAtNDAtMTYuMTUyLTQwLTQ4IDAtMjEuNzQ2IDI1LjAzLTU3LjE0NSA0MC03NS41ODYgMTQuOTc2IDE4LjQwMiA0MCA1My44MDkgNDAgNzUuNTg2IDAgMzEuODQ4LTEzLjQ2NSA0OC00MCA0OHptMCAwXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xMDMuNjM3IDMwMy44MzZhOC4wMDUgOC4wMDUgMCAwIDAgOC43OTMtNy41NjMgOCA4IDAgMCAwLTcuMTkyLTguMzU5IDU4LjYxIDU4LjYxIDAgMCAxLTQyLjc0Ni0yMS44MjRjLTIxLjI3Ny0yNy43NDItMTQuMjMtNzIuNDY1LTE0LjE2OC03Mi45MWE4LjAwMiA4LjAwMiAwIDAgMC02LjYxMy04Ljk3IDguMDAyIDguMDAyIDAgMCAwLTkuMTYgNi4zNDVjLS4zNTYgMi4xMTMtOC4yOSA1MS44ODYgMTcuMTkxIDg1LjE5OWE3My45MzIgNzMuOTMyIDAgMCAwIDUzLjg5NSAyOC4wODJ6bTIzMi44MDEgMTYuMDM5YTU1LjY5NiA1NS42OTYgMCAwIDAgMzkuMTI4LTE2Ljg1NSA0Ny44MTUgNDcuODE1IDAgMCAwIDguNzU4LTQwLjQ2NSA3Ljk5OCA3Ljk5OCAwIDEgMC0xNS43NzMgMi42NCAzMi44MTkgMzIuODE5IDAgMCAxLTUuMTM3IDI3LjQxNCAzOS44MjUgMzkuODI1IDAgMCAxLTI2Ljk3NiAxMS4yNjYgOCA4IDAgMCAwIDAgMTZ6bS0xMDguNDI2IDExMi44NGE5LjE4MSA5LjE4MSAwIDAgMS01LjI3NC01LjYxMyA5LjE4NCA5LjE4NCAwIDAgMSAuODYtNy42NTNjMS45NzItMy45NTMuMzctOC43NjEtMy41ODYtMTAuNzM0LTMuOTUzLTEuOTc3LTguNzU4LS4zNzEtMTAuNzM1IDMuNTgyYTI1LjE4NSAyNS4xODUgMCAwIDAtMS43MTggMTkuODkgMjUuMTk3IDI1LjE5NyAwIDAgMCAxMy4zIDE0Ljg4NyA4LjAwMyA4LjAwMyAwIDAgMCAxMC43MzktMy41ODYgOC4wMDMgOC4wMDMgMCAwIDAtMy41ODYtMTAuNzM0em0wIDBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPXtzdHlsZXNbXCJtb2RhbF9faXRlbV9fdGl0bGVcIl19PlByZWNpcGl0YXRpb248L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAge2Zvcm1hdEFzUGVyY2VudGFnZShpdGVtLnByZWNpcFByb2JhYmlsaXR5KX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTYgY29sLXhzLTYgY29sLXNtLTYgY29sLW1kLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wibW9kYWxfX2l0ZW1cIl19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzNjggMzY4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjk2IDQ4Yy0zOS43MDQgMC03MiAzMi4zMDQtNzIgNzIgMCA0LjQxNiAzLjU3NiA4IDggOHM4LTMuNTg0IDgtOGMwLTMwLjg4IDI1LjEyOC01NiA1Ni01NnM1NiAyNS4xMiA1NiA1Ni0yNS4xMjggNTYtNTYgNTZIOGMtNC40MTYgMC04IDMuNTg0LTggOHMzLjU4NCA4IDggOGgyODhjMzkuNzA0IDAgNzItMzIuMzA0IDcyLTcycy0zMi4yOTYtNzItNzItNzJ6XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xNDQgMzJjLTMwLjg4IDAtNTYgMjUuMTItNTYgNTYgMCA0LjQxNiAzLjU4NCA4IDggOHM4LTMuNTg0IDgtOGMwLTIyLjA1NiAxNy45NDQtNDAgNDAtNDBzNDAgMTcuOTQ0IDQwIDQwLTE3Ljk0NCA0MC00MCA0MEg4Yy00LjQxNiAwLTggMy41ODQtOCA4czMuNTg0IDggOCA4aDEzNmMzMC44OCAwIDU2LTI1LjEyIDU2LTU2cy0yNS4xMi01Ni01Ni01NnptMTM2IDE5Mkg4Yy00LjQxNiAwLTggMy41ODQtOCA4czMuNTg0IDggOCA4aDI3MmMyMi4wNTYgMCA0MCAxNy45NDQgNDAgNDBzLTE3Ljk0NCA0MC00MCA0MC00MC0xNy45NDQtNDAtNDBjMC00LjQxNi0zLjU3Ni04LTgtOHMtOCAzLjU4NC04IDhjMCAzMC44OCAyNS4xMjggNTYgNTYgNTZzNTYtMjUuMTIgNTYtNTYtMjUuMTI4LTU2LTU2LTU2elwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9e3N0eWxlc1tcIm1vZGFsX19pdGVtX190aXRsZVwiXX0+V2luZCBTcGVlZDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7Z2V0RGlyZWN0aW9uKGl0ZW0ud2luZEJlYXJpbmcpfSB7TWF0aC5yb3VuZChpdGVtLndpbmRTcGVlZCl9IE1QSFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNiBjb2wteHMtNiBjb2wtc20tNiBjb2wtbWQtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJtb2RhbF9faXRlbVwiXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDEyOSAxMjlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk02NC41IDkyLjZjMTUuNSAwIDI4LTEyLjYgMjgtMjhzLTEyLjYtMjgtMjgtMjgtMjggMTIuNi0yOCAyOCAxMi41IDI4IDI4IDI4em0wLTQ3LjljMTEgMCAxOS45IDguOSAxOS45IDE5LjkgMCAxMS04LjkgMTkuOS0xOS45IDE5LjlzLTE5LjktOC45LTE5LjktMTkuOWMwLTExIDguOS0xOS45IDE5LjktMTkuOXpNNjguNiAyMy42VjEwLjdjMC0yLjMtMS44LTQuMS00LjEtNC4xcy00LjEgMS44LTQuMSA0LjF2MTIuOWMwIDIuMyAxLjggNC4xIDQuMSA0LjFzNC4xLTEuOCA0LjEtNC4xek02MC40IDEwNS42djEyLjljMCAyLjMgMS44IDQuMSA0LjEgNC4xczQuMS0xLjggNC4xLTQuMXYtMTIuOWMwLTIuMy0xLjgtNC4xLTQuMS00LjFzLTQuMSAxLjgtNC4xIDQuMXpNOTYuNCAzOC41bDkuMS05LjFjMS42LTEuNiAxLjYtNC4yIDAtNS44LTEuNi0xLjYtNC4yLTEuNi01LjggMGwtOS4xIDkuMWMtMS42IDEuNi0xLjYgNC4yIDAgNS44LjguOCAxLjggMS4yIDIuOSAxLjJzMi4xLS40IDIuOS0xLjJ6TTIzLjUgMTA1LjZjLjguOCAxLjggMS4yIDIuOSAxLjIgMSAwIDIuMS0uNCAyLjktMS4ybDkuMS05LjFjMS42LTEuNiAxLjYtNC4yIDAtNS44LTEuNi0xLjYtNC4yLTEuNi01LjggMGwtOS4xIDkuMWMtMS42IDEuNi0xLjYgNC4yIDAgNS44ek0xMjIuNSA2NC42YzAtMi4zLTEuOC00LjEtNC4xLTQuMWgtMTIuOWMtMi4zIDAtNC4xIDEuOC00LjEgNC4xczEuOCA0LjEgNC4xIDQuMWgxMi45YzIuMiAwIDQuMS0xLjggNC4xLTQuMXpNMTAuNiA2OC43aDEyLjljMi4zIDAgNC4xLTEuOCA0LjEtNC4xcy0xLjgtNC4xLTQuMS00LjFIMTAuNmMtMi4zIDAtNC4xIDEuOC00LjEgNC4xczEuOSA0LjEgNC4xIDQuMXpNMTAyLjYgMTA2LjhjMSAwIDIuMS0uNCAyLjktMS4yIDEuNi0xLjYgMS42LTQuMiAwLTUuOGwtOS4xLTkuMWMtMS42LTEuNi00LjItMS42LTUuOCAwLTEuNiAxLjYtMS42IDQuMiAwIDUuOGw5LjEgOS4xYy44LjggMS45IDEuMiAyLjkgMS4yek0zOC40IDM4LjVjMS42LTEuNiAxLjYtNC4yIDAtNS44bC05LjEtOS4xYy0xLjYtMS42LTQuMi0xLjYtNS44IDAtMS42IDEuNi0xLjYgNC4yIDAgNS44bDkuMSA5LjFjLjguOCAxLjggMS4yIDIuOSAxLjJzMi4xLS40IDIuOS0xLjJ6XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT17c3R5bGVzW1wibW9kYWxfX2l0ZW1fX3RpdGxlXCJdfT5VViBJbmRleDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7aXRlbS51dkluZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJtb2RhbC1ib2R5XCJdfT5cclxuICAgICAgICAgICAgICAgIDxwPntpdGVtLnN1bW1hcnl9PC9wPlxyXG4gICAgICAgICAgICAgICAgPFRhYnMgY2xhc3NOYW1lPXtzdHlsZXMudGFic30gc2VsZWN0ZWRUYWJDbGFzc05hbWU9e3N0eWxlcy5zZWxlY3RlZH0+XHJcbiAgICAgICAgICAgICAgICAgIDxUYWJMaXN0IGNsYXNzTmFtZT1cInRhYi1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWIgY2xhc3NOYW1lPVwidGFiLWl0ZW1cIj5EYWlseSBTdW1tYXJ5PC9UYWI+XHJcbiAgICAgICAgICAgICAgICAgICAge2hvdXJBcnJheSgpLm1hcCgoZGF0YVRpbWUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YVRpbWUgPT09IGZvcm1hdChmcm9tVW5peFRpbWUoaXRlbS50aW1lKSwgXCJNL2QveXl5eVwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWIga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwidGFiLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJ5IFRoZSBIb3VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvVGFiTGlzdD5cclxuICAgICAgICAgICAgICAgICAgPFRhYlBhbmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5UZW1wZXJhdHVyZTwvc3Ryb25nPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgTWluIHtNYXRoLnJvdW5kKGl0ZW0udGVtcGVyYXR1cmVMb3cpfSDCsCAvIE1heHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7TWF0aC5yb3VuZChpdGVtLnRlbXBlcmF0dXJlSGlnaCl9IMKwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+RmVlbHMgTGlrZTwvc3Ryb25nPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgTWluIHtNYXRoLnJvdW5kKGl0ZW0uYXBwYXJlbnRUZW1wZXJhdHVyZU1pbil9IMKwIC8gTWF4e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtNYXRoLnJvdW5kKGl0ZW0uYXBwYXJlbnRUZW1wZXJhdHVyZU1heCl9IMKwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+U3VucmlzZTwvc3Ryb25nPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2Zvcm1hdChmcm9tVW5peFRpbWUoaXRlbS5zdW5yaXNlVGltZSksIFwiaDptIGFcIil9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5TdW5zZXQ8L3N0cm9uZz57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntmb3JtYXQoZnJvbVVuaXhUaW1lKGl0ZW0uc3Vuc2V0VGltZSksIFwiaDptIGFcIil9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5Nb29uIFBoYXNlPC9zdHJvbmc+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNb29uLnBoYXNlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJzZUludChmb3JtYXQoZnJvbVVuaXhUaW1lKGl0ZW0udGltZSksIFwieXl5eVwiKSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KGZvcm1hdChmcm9tVW5peFRpbWUoaXRlbS50aW1lKSwgXCJNXCIpKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQoZm9ybWF0KGZyb21Vbml4VGltZShpdGVtLnRpbWUpLCBcImRcIikpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLm5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+RGV3IFBvaW50PC9zdHJvbmc+IDxzcGFuPntNYXRoLnJvdW5kKGl0ZW0uZGV3UG9pbnQpfSDCsDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+V2luZCBHdXN0PC9zdHJvbmc+IDxzcGFuPntNYXRoLnJvdW5kKGl0ZW0ud2luZEd1c3QpfSBtcGg8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2l0ZW0ucHJlY2lwQWNjdW11bGF0aW9uICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+U25vd2ZhbGwgQWNjdW11bGF0aW9uPC9zdHJvbmc+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntpdGVtLnByZWNpcEFjY3VtdWxhdGlvbn1cIjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+Q2xvdWQgQ292ZXI8L3N0cm9uZz57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntmb3JtYXRBc1BlcmNlbnRhZ2UoaXRlbS5jbG91ZENvdmVyKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPlVWIEluZGV4PC9zdHJvbmc+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS51dkluZGV4fSBhdCB7Zm9ybWF0KGZyb21Vbml4VGltZShpdGVtLnV2SW5kZXhUaW1lKSwgXCJoaDptbSBhXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPkFpciBQcmVzc3VyZTwvc3Ryb25nPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2NhbGN1bGF0ZVByZXNzdXJlKGl0ZW0ucHJlc3N1cmUpfSBpbjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+T3pvbmU8L3N0cm9uZz4gPHNwYW4+e01hdGgucm91bmQoaXRlbS5vem9uZSl9IGR1PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5WaXNpYmlsaXR5PC9zdHJvbmc+IDxzcGFuPntNYXRoLnJvdW5kKGl0ZW0udmlzaWJpbGl0eSl9IG1pPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICA8L1RhYlBhbmVsPlxyXG5cclxuICAgICAgICAgICAgICAgICAge2hvdXJBcnJheSgpLm1hcCgoZGF0YVRpbWUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFUaW1lID09PSBmb3JtYXQoZnJvbVVuaXhUaW1lKGl0ZW0udGltZSksIFwiTS9kL3l5eXlcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJQYW5lbCBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlLXJlc3BvbnNpdmUtc21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1ob3ZlciB0YWJsZS1ib3JkZXJsZXNzIHRhYmxlLXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5UaW1lPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPlRlbXA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+UHJlY2lwPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPldpbmQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2hlY2tIb3VyLm1hcCgoaG91ciwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0KGZyb21Vbml4VGltZShob3VyLnRpbWUpLCBcIk1NTU0gZG8geXl5eVwiKSA9PT1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0KGZyb21Vbml4VGltZShpdGVtLnRpbWUpLCBcIk1NTU0gZG8geXl5eVwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17aG91ci50aW1lfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Zm9ybWF0KGZyb21Vbml4VGltZShob3VyLnRpbWUpLCBcImggYVwiKX17XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxXZWF0aGVySWNvbiBjb25kaXRpb249e2hvdXIuaWNvbn0gY29sb3I9XCJibGFja1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntNYXRoLnJvdW5kKGhvdXIudGVtcGVyYXR1cmUpfSDCsDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2Zvcm1hdEFzUGVyY2VudGFnZShob3VyLnByZWNpcFByb2JhYmlsaXR5KX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Z2V0RGlyZWN0aW9uKGl0ZW0ud2luZEJlYXJpbmcpfXtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge01hdGgucm91bmQoaG91ci53aW5kU3BlZWQpfSBtcGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiUGFuZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L1RhYnM+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCIgb25DbGljaz17aGFuZGxlQ2xvc2V9PlxyXG4gICAgICAgICAgICAgICAgICBDbG9zZVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHBhcmFtcyA9IHtcclxuICAgIGdldFN3aXBlcjogdXBkYXRlU3dpcGVyLFxyXG4gICAgbG9vcDogZmFsc2UsXHJcbiAgICBzbGlkZXNQZXJWaWV3OiA3LFxyXG4gICAgc3BhY2VCZXR3ZWVuOiA1LFxyXG4gICAgc2hvdWxkU3dpcGVyVXBkYXRlOiB0cnVlLFxyXG4gICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgMjAwOiB7XHJcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMlxyXG4gICAgICB9LFxyXG4gICAgICA0MDA6IHtcclxuICAgICAgICBzbGlkZXNQZXJWaWV3OiAzXHJcbiAgICAgIH0sXHJcbiAgICAgIDY0MDoge1xyXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDNcclxuICAgICAgfSxcclxuICAgICAgNzY4OiB7XHJcbiAgICAgICAgc2xpZGVzUGVyVmlldzogM1xyXG4gICAgICB9LFxyXG4gICAgICAxMDI0OiB7XHJcbiAgICAgICAgc2xpZGVzUGVyVmlldzogNVxyXG4gICAgICB9LFxyXG4gICAgICAxNDAwOiB7XHJcbiAgICAgICAgc2xpZGVzUGVyVmlldzogN1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgaW5pdGlhbGl6ZVNsaWRlcihwYXJhbXMpO1xyXG5cclxuICBmdW5jdGlvbiBpbml0aWFsaXplU2xpZGVyKHBhcmFtcykge1xyXG4gICAgc2xpZGVyID0gPFN3aXBlciB7Li4ucGFyYW1zfT57c2xpZGVySW5pdGlhbGl6ZX08L1N3aXBlcj47XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zbGlkZXJ9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wic2xpZGVyLWFycm93c1wiXX0+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtnb1ByZXZ9PlxyXG4gICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA0OTIgNDkyXCI+PHBhdGggZD1cIk0xOTguNjA4IDI0Ni4xMDRMMzgyLjY2NCA2Mi4wNGM1LjA2OC01LjA1NiA3Ljg1Ni0xMS44MTYgNy44NTYtMTkuMDI0IDAtNy4yMTItMi43ODgtMTMuOTY4LTcuODU2LTE5LjAzMmwtMTYuMTI4LTE2LjEyQzM2MS40NzYgMi43OTIgMzU0LjcxMiAwIDM0Ny41MDQgMHMtMTMuOTY0IDIuNzkyLTE5LjAyOCA3Ljg2NEwxMDkuMzI4IDIyNy4wMDhjLTUuMDg0IDUuMDgtNy44NjggMTEuODY4LTcuODQ4IDE5LjA4NC0uMDIgNy4yNDggMi43NiAxNC4wMjggNy44NDggMTkuMTEybDIxOC45NDQgMjE4LjkzMmM1LjA2NCA1LjA3MiAxMS44MiA3Ljg2NCAxOS4wMzIgNy44NjQgNy4yMDggMCAxMy45NjQtMi43OTIgMTkuMDMyLTcuODY0bDE2LjEyNC0xNi4xMmMxMC40OTItMTAuNDkyIDEwLjQ5Mi0yNy41NzIgMC0zOC4wNkwxOTguNjA4IDI0Ni4xMDR6XCIvPjwvc3ZnPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17Z29OZXh0fT5cclxuICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNDkyLjAwNCA0OTIuMDA0XCI+PHBhdGggZD1cIk0zODIuNjc4IDIyNi44MDRMMTYzLjczIDcuODZDMTU4LjY2NiAyLjc5MiAxNTEuOTA2IDAgMTQ0LjY5OCAwcy0xMy45NjggMi43OTItMTkuMDMyIDcuODZsLTE2LjEyNCAxNi4xMmMtMTAuNDkyIDEwLjUwNC0xMC40OTIgMjcuNTc2IDAgMzguMDY0TDI5My4zOTggMjQ1LjlsLTE4NC4wNiAxODQuMDZjLTUuMDY0IDUuMDY4LTcuODYgMTEuODI0LTcuODYgMTkuMDI4IDAgNy4yMTIgMi43OTYgMTMuOTY4IDcuODYgMTkuMDRsMTYuMTI0IDE2LjExNmM1LjA2OCA1LjA2OCAxMS44MjQgNy44NiAxOS4wMzIgNy44NnMxMy45NjgtMi43OTIgMTkuMDMyLTcuODZMMzgyLjY3OCAyNjVjNS4wNzYtNS4wODQgNy44NjQtMTEuODcyIDcuODQ4LTE5LjA4OC4wMTYtNy4yNDQtMi43NzItMTQuMDI4LTcuODQ4LTE5LjEwOHpcIi8+PC9zdmc+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7c2xpZGVyfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRhaWx5U2xpZGVyOyIsImltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL1dlYXRoZXJTbGlkZXIubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IFdlYXRoZXJJY29uIGZyb20gXCIuLi8uLi9XZWF0aGVySWNvbi9XZWF0aGVySWNvblwiO1xyXG5pbXBvcnQgU3dpcGVyIGZyb20gXCJyZWFjdC1pZC1zd2lwZXJcIjtcclxuaW1wb3J0IE1pY3JvTW9kYWwgZnJvbSBcInJlYWN0LW1pY3JvLW1vZGFsXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgZ2V0RGlyZWN0aW9uLFxyXG4gIGdldENvbmRpdGlvbixcclxuICBjYWxjdWxhdGVQcmVzc3VyZSxcclxuICBmb3JtYXRBc1BlcmNlbnRhZ2UsXHJcbiAgTW9vblxyXG59IGZyb20gXCIuLi8uLi8uLi8uLi91dGlscy9jYWxjdWxhdGVXZWF0aGVyXCI7XHJcbmltcG9ydCB7IGZvcm1hdCB9IGZyb20gXCJkYXRlLWZuc1wiO1xyXG5pbXBvcnQgZnJvbVVuaXhUaW1lIGZyb20gXCJkYXRlLWZucy9mcm9tVW5peFRpbWVcIjtcclxuXHJcbmNvbnN0IGhvdXJseVNsaWRlciA9IHByb3BzID0+IHtcclxuICBjb25zdCBbc3dpcGVyLCB1cGRhdGVTd2lwZXJdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIGNvbnN0IGdvTmV4dCA9ICgpID0+IHtcclxuICAgIGlmIChzd2lwZXIgIT09IG51bGwpIHtcclxuICAgICAgc3dpcGVyLnNsaWRlTmV4dCgpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdvUHJldiA9ICgpID0+IHtcclxuICAgIGlmIChzd2lwZXIgIT09IG51bGwpIHtcclxuICAgICAgc3dpcGVyLnNsaWRlUHJldigpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGxldCBzbGlkZXIgPSBudWxsO1xyXG4gIGxldCBzbGlkZXJJbml0aWFsaXplID0gbnVsbDtcclxuXHJcbiAgc2xpZGVySW5pdGlhbGl6ZSA9IHByb3BzLndlYXRoZXIuaG91cmx5LmRhdGEuc2xpY2UoMCwgNDgpLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgIGNvbnN0IGJhY2tncm91bmRDb25kaXRpb24gPSB7XHJcbiAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgvd2VhdGhlckJhY2tncm91bmRzLyR7aXRlbS5pY29ufS5qcGcpYFxyXG4gICAgfTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYga2V5PXtpdGVtLnRpbWV9IGNsYXNzTmFtZT17c3R5bGVzLnNsaWRlfT5cclxuICAgICAgICA8TWljcm9Nb2RhbFxyXG4gICAgICAgICAgbW9kYWxDbGFzc05hbWU9e3N0eWxlcy5tb2RhbH1cclxuICAgICAgICAgIGRpc2FibGVGaXJzdEVsZW1lbnRGb2N1cz17dHJ1ZX1cclxuICAgICAgICAgIGNsb3NlT25BbmltYXRpb25FbmQ9e3RydWV9XHJcbiAgICAgICAgICB0cmlnZ2VyPXtoYW5kbGVPcGVuID0+IChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZU9wZW59XHJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e1tzdHlsZXMuc2xpZGUsIHN0eWxlc1tcInNsaWRlLW1vZGFsLWJ0blwiXV0uam9pbihcIiBcIil9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGF0ZX0+XHJcbiAgICAgICAgICAgICAgICB7Zm9ybWF0KG5ldyBEYXRlKCksIFwiZWVlXCIpID09PSBmb3JtYXQoZnJvbVVuaXhUaW1lKGl0ZW0udGltZSksIFwiZWVlXCIpXHJcbiAgICAgICAgICAgICAgICAgID8gZm9ybWF0KGZyb21Vbml4VGltZShpdGVtLnRpbWUpLCBcImggYVwiKVxyXG4gICAgICAgICAgICAgICAgICA6IGZvcm1hdChmcm9tVW5peFRpbWUoaXRlbS50aW1lKSwgXCJlZWUgaCBhXCIpfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxXZWF0aGVySWNvbiBjb25kaXRpb249e2l0ZW0uaWNvbn0gY29sb3I9XCJ3aGl0ZVwiIC8+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZW1wfT57TWF0aC5yb3VuZChpdGVtLnRlbXBlcmF0dXJlKX0gwrA8L2Rpdj5cclxuICAgICAgICAgICAgICB7Z2V0Q29uZGl0aW9uKGl0ZW0uaWNvbil9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIGNoaWxkcmVuPXtoYW5kbGVDbG9zZSA9PiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcIm1vZGFsX190b3BcIl19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17YmFja2dyb3VuZENvbmRpdGlvbn0gY2xhc3NOYW1lPXtzdHlsZXNbXCJtb2RhbF9fdG9wX19iYWNrZ3JvdW5kXCJdfSAvPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlc1tcIm1vZGFsX190b3BfX2Nsb3NlXCJdfSBvbkNsaWNrPXtoYW5kbGVDbG9zZX0+XHJcbiAgICAgICAgICAgICAgICAgIMOXXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5kYXRlfT5cclxuICAgICAgICAgICAgICAgICAge2Zvcm1hdChuZXcgRGF0ZSgpLCBcImVlZVwiKSA9PT0gZm9ybWF0KGZyb21Vbml4VGltZShpdGVtLnRpbWUpLCBcImVlZVwiKVxyXG4gICAgICAgICAgICAgICAgICAgID8gZm9ybWF0KGZyb21Vbml4VGltZShpdGVtLnRpbWUpLCBcImggYVwiKVxyXG4gICAgICAgICAgICAgICAgICAgIDogZm9ybWF0KGZyb21Vbml4VGltZShpdGVtLnRpbWUpLCBcImVlZSBoIGFcIil9XHJcbiAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNiBjb2wteHMtNiBjb2wtc20tNiBjb2wtbWQtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJtb2RhbF9faXRlbVwiXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMi4wMDUgNTEyLjAwNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTMyNy4xNTkgMi43NjZhMTAuNjQxIDEwLjY0MSAwIDAgMC0xNC4zMTMgMGMtNC42NDIgNC4xODYtMTEwLjg4OSAxMDEuMjkyLTE2MC4yMjggMjEzLjgzOS01LjMxOC0xLjg2Ny0xMS40NC0zLjI2Ni0xOS4zNTUtMy4yNjYtMTguNjc3IDAtMjguNjk4IDYuOTY5LTM2Ljc1IDEyLjU3My03LjAzMSA0Ljg5Ni0xMi41ODMgOC43Ni0yNC41NzMgOC43Ni0xMS45NjkgMC0xNy41MjEtMy44NjUtMjQuNTQyLTguNzUtOC4wNDItNS42MDQtMTguMDYzLTEyLjU4My0zNi43MjktMTIuNTgzQTEwLjY2IDEwLjY2IDAgMCAwIC4wMDIgMjI0LjAwNmExMC42NiAxMC42NiAwIDAgMCAxMC42NjcgMTAuNjY3YzExLjk2OSAwIDE3LjUyMSAzLjg2NSAyNC41NDIgOC43NSA4LjA0MiA1LjYwNCAxOC4wNjMgMTIuNTgzIDM2LjcyOSAxMi41ODMgMTguNjc3IDAgMjguNzA4LTYuOTc5IDM2Ljc2LTEyLjU4MyA3LjAzMS00Ljg4NSAxMi41ODMtOC43NSAyNC41NjMtOC43NSAxMiAwIDE3LjU2MyAzLjg2NSAyNC42MDQgOC43NiA4LjA1MiA1LjYwNCAxOC4wODMgMTIuNTczIDM2Ljc3MSAxMi41NzMgMTguNjc3IDAgMjguNzA4LTYuOTY5IDM2Ljc3MS0xMi41NzMgNy4wMzEtNC44OTYgMTIuNTk0LTguNzYgMjQuNTk0LTguNzZhMTAuNjYgMTAuNjYgMCAwIDAgMTAuNjY3LTEwLjY2NyAxMC42NiAxMC42NiAwIDAgMC0xMC42NjctMTAuNjY3Yy0xOC42ODcgMC0yOC43MTkgNi45NjktMzYuNzgxIDEyLjU3My03LjAzMSA0Ljg5Ni0xMi41OTQgOC43Ni0yNC41ODMgOC43Ni0xMS4yMDggMC0xNi44MjMtMy40MTktMjMuMjQyLTcuODU0IDQwLjEyMS05Mi42NjEgMTIzLjY2MS0xNzcuNDY2IDE0OC42MDctMjAxLjQ5IDMzLjIxOSAzMi4wMSAxNzAuNjY3IDE3MS44NjUgMTcwLjY2NyAyOTQuNjc3IDAgOTQuMTA0LTc2LjU2MyAxNzAuNjY3LTE3MC42NjcgMTcwLjY2Ny00Mi40NzcgMC04Mi42NjktMTUuODIyLTExMy43OC00My43NTggMTEuNTQyLTIuMTM4IDE4Ljk5NC03LjE3NyAyNS4xODYtMTEuNDgyIDcuMDMxLTQuODk2IDEyLjU5NC04Ljc2IDI0LjU5NC04Ljc2IDUuODk2IDAgMTAuNjY3LTQuNzcxIDEwLjY2Ny0xMC42NjdzLTQuNzcxLTEwLjY2Ny0xMC42NjctMTAuNjY3Yy0xOC42ODcgMC0yOC43MTkgNi45NjktMzYuNzgxIDEyLjU3My03LjAzMSA0Ljg5Ni0xMi41OTQgOC43Ni0yNC41ODMgOC43Ni0xMiAwLTE3LjU2My0zLjg2NS0yNC41OTQtOC43Ni04LjA2My01LjYwNC0xOC4wOTQtMTIuNTczLTM2Ljc4MS0xMi41NzMtMTguNjc3IDAtMjguNjk4IDYuOTY5LTM2Ljc1IDEyLjU3My03LjAzMSA0Ljg5Ni0xMi41ODMgOC43Ni0yNC41NzMgOC43Ni0xMS45NjkgMC0xNy41MjEtMy44NjUtMjQuNTQyLTguNzUtOC4wNDItNS42MDQtMTguMDYzLTEyLjU4My0zNi43MjktMTIuNTgzLTUuODk2IDAtMTAuNjY3IDQuNzcxLTEwLjY2NyAxMC42NjdzNC43NzEgMTAuNjY3IDEwLjY2NyAxMC42NjdjMTEuOTY5IDAgMTcuNTIxIDMuODY1IDI0LjU0MiA4Ljc1IDguMDQyIDUuNjA0IDE4LjA2MyAxMi41ODMgMzYuNzI5IDEyLjU4MyAxOC42NzcgMCAyOC43MDgtNi45NzkgMzYuNzYtMTIuNTgzIDcuMDMxLTQuODg1IDEyLjU4My04Ljc1IDI0LjU2My04Ljc1IDEyIDAgMTcuNTYzIDMuODY1IDI0LjYwNCA4Ljc2IDQuMzQ1IDMuMDIzIDkuNDE0IDYuMzU1IDE1Ljk2MSA4Ljg2NSAzNi42IDQyLjk5NiA4OS42NTUgNjcuNzA4IDE0Ni4xNzQgNjcuNzA4IDEwNS44NjUgMCAxOTItODYuMTM1IDE5Mi0xOTJDNTEyLjAwMyAxNzEuNjQxIDMzNC43MDEgOS41ODkgMzI3LjE1OSAyLjc2NnpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEwLjY2OSAzNjIuNjcyYzExLjk2OSAwIDE3LjUyMSAzLjg2NSAyNC41NDIgOC43NSA4LjA0MiA1LjYwNCAxOC4wNjMgMTIuNTgzIDM2LjcyOSAxMi41ODNhMTAuNjYgMTAuNjYgMCAwIDAgMTAuNjY3LTEwLjY2NyAxMC42NiAxMC42NiAwIDAgMC0xMC42NjctMTAuNjY3Yy0xMS45NjkgMC0xNy41MjEtMy44NjUtMjQuNTQyLTguNzUtOC4wNDItNS42MDQtMTguMDYzLTEyLjU4My0zNi43MjktMTIuNTgzLTUuODk2IDAtMTAuNjY3IDQuNzcxLTEwLjY2NyAxMC42NjdzNC43NzEgMTAuNjY3IDEwLjY2NyAxMC42Njd6bTEyMi41OTQtMjEuMzMzYy01Ljg5NiAwLTEwLjY2NyA0Ljc3MS0xMC42NjcgMTAuNjY3czQuNzcxIDEwLjY2NyAxMC42NjcgMTAuNjY3YzEyIDAgMTcuNTYzIDMuODY1IDI0LjU5NCA4Ljc2IDguMDYzIDUuNjA0IDE4LjA5NCAxMi41NzMgMzYuNzgxIDEyLjU3MyAxOC42NzcgMCAyOC43MDgtNi45NjkgMzYuNzcxLTEyLjU3MyA3LjAzMS00Ljg5NiAxMi41OTQtOC43NiAyNC41OTQtOC43NiAxMi4xOTggMCAxOC40MDYgMy45NjkgMjYuMjUgOC45OSA5LjA1MiA1Ljc4MSAxOS4zMTMgMTIuMzQ0IDM3Ljc1IDEyLjM0NGExMC42NiAxMC42NiAwIDAgMCAxMC42NjctMTAuNjY3IDEwLjY2IDEwLjY2IDAgMCAwLTEwLjY2Ny0xMC42NjdjLTEyLjE5OCAwLTE4LjQwNi0zLjk2OS0yNi4yNS04Ljk5LTkuMDUyLTUuNzgxLTE5LjMxMy0xMi4zNDQtMzcuNzUtMTIuMzQ0LTE4LjY4NyAwLTI4LjcxOSA2Ljk2OS0zNi43ODEgMTIuNTczLTcuMDMxIDQuODk2LTEyLjU5NCA4Ljc2LTI0LjU4MyA4Ljc2LTEyIDAtMTcuNTYzLTMuODY1LTI0LjYwNC04Ljc2LTguMDUzLTUuNjA1LTE4LjA4NC0xMi41NzMtMzYuNzcyLTEyLjU3M3ptMC02NGMtMTguNjc3IDAtMjguNjk4IDYuOTY5LTM2Ljc1IDEyLjU3My03LjAzMSA0Ljg5Ni0xMi41ODMgOC43Ni0yNC41NzMgOC43Ni0xMS45NjkgMC0xNy41MjEtMy44NjUtMjQuNTQyLTguNzUtOC4wNDItNS42MDQtMTguMDYzLTEyLjU4My0zNi43MjktMTIuNTgzQTEwLjY2IDEwLjY2IDAgMCAwIC4wMDIgMjg4LjAwNmExMC42NiAxMC42NiAwIDAgMCAxMC42NjcgMTAuNjY3YzExLjk2OSAwIDE3LjUyMSAzLjg2NSAyNC41NDIgOC43NSA4LjA0MiA1LjYwNCAxOC4wNjMgMTIuNTgzIDM2LjcyOSAxMi41ODMgMTguNjc3IDAgMjguNzA4LTYuOTc5IDM2Ljc2LTEyLjU4MyA3LjAzMS00Ljg4NSAxMi41ODMtOC43NSAyNC41NjMtOC43NWExMC42NiAxMC42NiAwIDAgMCAxMC42NjctMTAuNjY3IDEwLjY2IDEwLjY2IDAgMCAwLTEwLjY2Ny0xMC42Njd6bTk4LjE0NiAzMC4wOTNjNy4wMzEtNC44OTYgMTIuNTk0LTguNzYgMjQuNTk0LTguNzYgMTEuOTY5IDAgMTcuNTIxIDMuODY1IDI0LjU0MiA4Ljc1IDguMDQyIDUuNjA0IDE4LjA2MyAxMi41ODMgMzYuNzI5IDEyLjU4MyAxOC42NzcgMCAyOC43MDgtNi45NzkgMzYuNzYtMTIuNTgzIDcuMDMxLTQuODg1IDEyLjU4My04Ljc1IDI0LjU2My04Ljc1YTEwLjY2IDEwLjY2IDAgMCAwIDEwLjY2Ny0xMC42NjcgMTAuNjYgMTAuNjYgMCAwIDAtMTAuNjY3LTEwLjY2N2MtMTguNjc3IDAtMjguNjk4IDYuOTY5LTM2Ljc1IDEyLjU3My03LjAzMSA0Ljg5Ni0xMi41ODMgOC43Ni0yNC41NzMgOC43Ni0xMS45NjkgMC0xNy41MjEtMy44NjUtMjQuNTQyLTguNzUtOC4wNDItNS42MDQtMTguMDYzLTEyLjU4My0zNi43MjktMTIuNTgzLTE4LjY4NyAwLTI4LjcxOSA2Ljk2OS0zNi43ODEgMTIuNTczLTcuMDMxIDQuODk2LTEyLjU5NCA4Ljc2LTI0LjU4MyA4Ljc2LTUuODk2IDAtMTAuNjY3IDQuNzcxLTEwLjY2NyAxMC42NjdzNC43NzEgMTAuNjY3IDEwLjY2NyAxMC42NjdjMTguNjc2IDAgMjguNzA3LTYuOTY5IDM2Ljc3LTEyLjU3M3pcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPXtzdHlsZXNbXCJtb2RhbF9faXRlbV9fdGl0bGVcIl19Pkh1bWlkaXR5PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgIHtmb3JtYXRBc1BlcmNlbnRhZ2UoaXRlbS5odW1pZGl0eSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02IGNvbC14cy02IGNvbC1zbS02IGNvbC1tZC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcIm1vZGFsX19pdGVtXCJdfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiNDc5cHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiLTMxIDAgNDc5IDQ3OS44NzRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjQ3OXB0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEyMC40MzggMzM1Ljg3NWM3Ny4zODIgMCAxMjAtNDUuNDU3IDEyMC0xMjggMC03Ny4yODEtMTA5LjM5MS0yMDAuMTUyLTExNC4wNDctMjA1LjMzNmE4LjI1MSA4LjI1MSAwIDAgMC0xMS45MDYgMEMxMDkuODI3IDcuNzIzLjQzNyAxMzAuNTk0LjQzNyAyMDcuODc1YzAgODIuNTQzIDQyLjYxNyAxMjggMTIwIDEyOHptMC0zMTUuNzkzYzIyLjkwMiAyNi44NzkgMTA0IDEyNi4zNiAxMDQgMTg3Ljc5MyAwIDUxLjA5NC0xOC4wNDcgMTEyLTEwNCAxMTJzLTEwNC02MC45MDYtMTA0LTExMmMwLTYxLjQzNCA4MS4wOTMtMTYwLjkxNCAxMDQtMTg3Ljc5M3ptMjI0IDMzMS43OTNjNDUuNzU3IDAgNzItMzAuNTM1IDcyLTgzLjc5MyAwLTUwLjAwOC02My40NS0xMTguNzUtNjYuMTQ1LTEyMS42NTZhOC4yNCA4LjI0IDAgMCAwLTExLjcxMSAwYy0yLjY5NSAyLjkwNi02Ni4xNDUgNzEuNjQ4LTY2LjE0NSAxMjEuNjU2IDAgNTMuMjU4IDI2LjIzOSA4My43OTMgNzIgODMuNzkzem0wLTE4Ny45MjJjMTUuNDMgMTcuOTUzIDU2IDY4LjU0NyA1NiAxMDQuMTI5IDAgNDQuOTg0LTE4Ljg0IDY3Ljc5My01NiA2Ny43OTNzLTU2LTIyLjgwOS01Ni02Ny43OTNjMC0zNS41ODIgNDAuNTY2LTg2LjE3NiA1Ni0xMDQuMTI5em0tMTE4IDE1OC42MjVjLTIuMDQgMi4zMTMtNTAgNTcuMDktNTAgOTMuMjk3IDAgNDAuNjcyIDIwLjQxNCA2NCA1NiA2NCAzNS41ODIgMCA1Ni0yMy4zMjggNTYtNjQgMC0zNi4yMDctNDcuOTYxLTkwLjk4NC01MC05My4yOTdhOC4yNjUgOC4yNjUgMCAwIDAtMTIgMHptNiAxNDEuMjk3Yy0yNi41MzYgMC00MC0xNi4xNTItNDAtNDggMC0yMS43NDYgMjUuMDMtNTcuMTQ1IDQwLTc1LjU4NiAxNC45NzYgMTguNDAyIDQwIDUzLjgwOSA0MCA3NS41ODYgMCAzMS44NDgtMTMuNDY1IDQ4LTQwIDQ4em0wIDBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEwMy42MzcgMzAzLjgzNmE4LjAwNSA4LjAwNSAwIDAgMCA4Ljc5My03LjU2MyA4IDggMCAwIDAtNy4xOTItOC4zNTkgNTguNjEgNTguNjEgMCAwIDEtNDIuNzQ2LTIxLjgyNGMtMjEuMjc3LTI3Ljc0Mi0xNC4yMy03Mi40NjUtMTQuMTY4LTcyLjkxYTguMDAyIDguMDAyIDAgMCAwLTYuNjEzLTguOTcgOC4wMDIgOC4wMDIgMCAwIDAtOS4xNiA2LjM0NWMtLjM1NiAyLjExMy04LjI5IDUxLjg4NiAxNy4xOTEgODUuMTk5YTczLjkzMiA3My45MzIgMCAwIDAgNTMuODk1IDI4LjA4MnptMjMyLjgwMSAxNi4wMzlhNTUuNjk2IDU1LjY5NiAwIDAgMCAzOS4xMjgtMTYuODU1IDQ3LjgxNSA0Ny44MTUgMCAwIDAgOC43NTgtNDAuNDY1IDcuOTk4IDcuOTk4IDAgMSAwLTE1Ljc3MyAyLjY0IDMyLjgxOSAzMi44MTkgMCAwIDEtNS4xMzcgMjcuNDE0IDM5LjgyNSAzOS44MjUgMCAwIDEtMjYuOTc2IDExLjI2NiA4IDggMCAwIDAgMCAxNnptLTEwOC40MjYgMTEyLjg0YTkuMTgxIDkuMTgxIDAgMCAxLTUuMjc0LTUuNjEzIDkuMTg0IDkuMTg0IDAgMCAxIC44Ni03LjY1M2MxLjk3Mi0zLjk1My4zNy04Ljc2MS0zLjU4Ni0xMC43MzQtMy45NTMtMS45NzctOC43NTgtLjM3MS0xMC43MzUgMy41ODJhMjUuMTg1IDI1LjE4NSAwIDAgMC0xLjcxOCAxOS44OSAyNS4xOTcgMjUuMTk3IDAgMCAwIDEzLjMgMTQuODg3IDguMDAzIDguMDAzIDAgMCAwIDEwLjczOS0zLjU4NiA4LjAwMyA4LjAwMyAwIDAgMC0zLjU4Ni0xMC43MzR6bTAgMFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9e3N0eWxlc1tcIm1vZGFsX19pdGVtX190aXRsZVwiXX0+UHJlY2lwaXRhdGlvbjwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7Zm9ybWF0QXNQZXJjZW50YWdlKGl0ZW0ucHJlY2lwUHJvYmFiaWxpdHkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNiBjb2wteHMtNiBjb2wtc20tNiBjb2wtbWQtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJtb2RhbF9faXRlbVwiXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDM2OCAzNjhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0yOTYgNDhjLTM5LjcwNCAwLTcyIDMyLjMwNC03MiA3MiAwIDQuNDE2IDMuNTc2IDggOCA4czgtMy41ODQgOC04YzAtMzAuODggMjUuMTI4LTU2IDU2LTU2czU2IDI1LjEyIDU2IDU2LTI1LjEyOCA1Ni01NiA1Nkg4Yy00LjQxNiAwLTggMy41ODQtOCA4czMuNTg0IDggOCA4aDI4OGMzOS43MDQgMCA3Mi0zMi4zMDQgNzItNzJzLTMyLjI5Ni03Mi03Mi03MnpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE0NCAzMmMtMzAuODggMC01NiAyNS4xMi01NiA1NiAwIDQuNDE2IDMuNTg0IDggOCA4czgtMy41ODQgOC04YzAtMjIuMDU2IDE3Ljk0NC00MCA0MC00MHM0MCAxNy45NDQgNDAgNDAtMTcuOTQ0IDQwLTQwIDQwSDhjLTQuNDE2IDAtOCAzLjU4NC04IDhzMy41ODQgOCA4IDhoMTM2YzMwLjg4IDAgNTYtMjUuMTIgNTYtNTZzLTI1LjEyLTU2LTU2LTU2em0xMzYgMTkySDhjLTQuNDE2IDAtOCAzLjU4NC04IDhzMy41ODQgOCA4IDhoMjcyYzIyLjA1NiAwIDQwIDE3Ljk0NCA0MCA0MHMtMTcuOTQ0IDQwLTQwIDQwLTQwLTE3Ljk0NC00MC00MGMwLTQuNDE2LTMuNTc2LTgtOC04cy04IDMuNTg0LTggOGMwIDMwLjg4IDI1LjEyOCA1NiA1NiA1NnM1Ni0yNS4xMiA1Ni01Ni0yNS4xMjgtNTYtNTYtNTZ6XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT17c3R5bGVzW1wibW9kYWxfX2l0ZW1fX3RpdGxlXCJdfT5XaW5kIFNwZWVkPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgIHtnZXREaXJlY3Rpb24oaXRlbS53aW5kQmVhcmluZyl9IHtNYXRoLnJvdW5kKGl0ZW0ud2luZFNwZWVkKX0gTVBIXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02IGNvbC14cy02IGNvbC1zbS02IGNvbC1tZC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcIm1vZGFsX19pdGVtXCJdfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMTI5IDEyOVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTY0LjUgOTIuNmMxNS41IDAgMjgtMTIuNiAyOC0yOHMtMTIuNi0yOC0yOC0yOC0yOCAxMi42LTI4IDI4IDEyLjUgMjggMjggMjh6bTAtNDcuOWMxMSAwIDE5LjkgOC45IDE5LjkgMTkuOSAwIDExLTguOSAxOS45LTE5LjkgMTkuOXMtMTkuOS04LjktMTkuOS0xOS45YzAtMTEgOC45LTE5LjkgMTkuOS0xOS45ek02OC42IDIzLjZWMTAuN2MwLTIuMy0xLjgtNC4xLTQuMS00LjFzLTQuMSAxLjgtNC4xIDQuMXYxMi45YzAgMi4zIDEuOCA0LjEgNC4xIDQuMXM0LjEtMS44IDQuMS00LjF6TTYwLjQgMTA1LjZ2MTIuOWMwIDIuMyAxLjggNC4xIDQuMSA0LjFzNC4xLTEuOCA0LjEtNC4xdi0xMi45YzAtMi4zLTEuOC00LjEtNC4xLTQuMXMtNC4xIDEuOC00LjEgNC4xek05Ni40IDM4LjVsOS4xLTkuMWMxLjYtMS42IDEuNi00LjIgMC01LjgtMS42LTEuNi00LjItMS42LTUuOCAwbC05LjEgOS4xYy0xLjYgMS42LTEuNiA0LjIgMCA1LjguOC44IDEuOCAxLjIgMi45IDEuMnMyLjEtLjQgMi45LTEuMnpNMjMuNSAxMDUuNmMuOC44IDEuOCAxLjIgMi45IDEuMiAxIDAgMi4xLS40IDIuOS0xLjJsOS4xLTkuMWMxLjYtMS42IDEuNi00LjIgMC01LjgtMS42LTEuNi00LjItMS42LTUuOCAwbC05LjEgOS4xYy0xLjYgMS42LTEuNiA0LjIgMCA1Ljh6TTEyMi41IDY0LjZjMC0yLjMtMS44LTQuMS00LjEtNC4xaC0xMi45Yy0yLjMgMC00LjEgMS44LTQuMSA0LjFzMS44IDQuMSA0LjEgNC4xaDEyLjljMi4yIDAgNC4xLTEuOCA0LjEtNC4xek0xMC42IDY4LjdoMTIuOWMyLjMgMCA0LjEtMS44IDQuMS00LjFzLTEuOC00LjEtNC4xLTQuMUgxMC42Yy0yLjMgMC00LjEgMS44LTQuMSA0LjFzMS45IDQuMSA0LjEgNC4xek0xMDIuNiAxMDYuOGMxIDAgMi4xLS40IDIuOS0xLjIgMS42LTEuNiAxLjYtNC4yIDAtNS44bC05LjEtOS4xYy0xLjYtMS42LTQuMi0xLjYtNS44IDAtMS42IDEuNi0xLjYgNC4yIDAgNS44bDkuMSA5LjFjLjguOCAxLjkgMS4yIDIuOSAxLjJ6TTM4LjQgMzguNWMxLjYtMS42IDEuNi00LjIgMC01LjhsLTkuMS05LjFjLTEuNi0xLjYtNC4yLTEuNi01LjggMC0xLjYgMS42LTEuNiA0LjIgMCA1LjhsOS4xIDkuMWMuOC44IDEuOCAxLjIgMi45IDEuMnMyLjEtLjQgMi45LTEuMnpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPXtzdHlsZXNbXCJtb2RhbF9faXRlbV9fdGl0bGVcIl19PlVWIEluZGV4PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnV2SW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcIm1vZGFsLWJvZHlcIl19PlxyXG4gICAgICAgICAgICAgICAgPHA+e2l0ZW0uc3VtbWFyeX08L3A+XHJcbiAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPlRlbXBlcmF0dXJlPC9zdHJvbmc+IDxzcGFuPntNYXRoLnJvdW5kKGl0ZW0udGVtcGVyYXR1cmUpfSDCsDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+RmVlbHMgTGlrZTwvc3Ryb25nPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57TWF0aC5yb3VuZChpdGVtLmFwcGFyZW50VGVtcGVyYXR1cmUpfSDCsDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+TW9vbiBQaGFzZTwvc3Ryb25nPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTW9vbi5waGFzZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJzZUludChmb3JtYXQoZnJvbVVuaXhUaW1lKGl0ZW0udGltZSksIFwieXl5eVwiKSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQoZm9ybWF0KGZyb21Vbml4VGltZShpdGVtLnRpbWUpLCBcIk1cIikpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KGZvcm1hdChmcm9tVW5peFRpbWUoaXRlbS50aW1lKSwgXCJkXCIpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApLm5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPkRldyBQb2ludDwvc3Ryb25nPiA8c3Bhbj57TWF0aC5yb3VuZChpdGVtLmRld1BvaW50KX0gwrA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPldpbmQgR3VzdDwvc3Ryb25nPiA8c3Bhbj57TWF0aC5yb3VuZChpdGVtLndpbmRHdXN0KX0gbXBoPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICB7aXRlbS5wcmVjaXBBY2N1bXVsYXRpb24gJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+U25vd2ZhbGwgQWNjdW11bGF0aW9uPC9zdHJvbmc+IDxzcGFuPntpdGVtLnByZWNpcEFjY3VtdWxhdGlvbn1cIjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5DbG91ZCBDb3Zlcjwvc3Ryb25nPiA8c3Bhbj57Zm9ybWF0QXNQZXJjZW50YWdlKGl0ZW0uY2xvdWRDb3Zlcil9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5BaXIgUHJlc3N1cmU8L3N0cm9uZz4gPHNwYW4+e2NhbGN1bGF0ZVByZXNzdXJlKGl0ZW0ucHJlc3N1cmUpfSBpbjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+T3pvbmU8L3N0cm9uZz4gPHNwYW4+e01hdGgucm91bmQoaXRlbS5vem9uZSl9IGR1PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5WaXNpYmlsaXR5PC9zdHJvbmc+IDxzcGFuPntNYXRoLnJvdW5kKGl0ZW0udmlzaWJpbGl0eSl9IG1pPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiBvbkNsaWNrPXtoYW5kbGVDbG9zZX0+XHJcbiAgICAgICAgICAgICAgICAgIENsb3NlXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgcGFyYW1zID0ge1xyXG4gICAgZ2V0U3dpcGVyOiB1cGRhdGVTd2lwZXIsXHJcbiAgICBsb29wOiBmYWxzZSxcclxuICAgIHNsaWRlc1BlclZpZXc6IDcsXHJcbiAgICBzcGFjZUJldHdlZW46IDUsXHJcbiAgICBzaG91bGRTd2lwZXJVcGRhdGU6IHRydWUsXHJcbiAgICBicmVha3BvaW50czoge1xyXG4gICAgICAyMDA6IHtcclxuICAgICAgICBzbGlkZXNQZXJWaWV3OiAzXHJcbiAgICAgIH0sXHJcbiAgICAgIDQwMDoge1xyXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDNcclxuICAgICAgfSxcclxuICAgICAgNjQwOiB7XHJcbiAgICAgICAgc2xpZGVzUGVyVmlldzogNVxyXG4gICAgICB9LFxyXG4gICAgICA3Njg6IHtcclxuICAgICAgICBzbGlkZXNQZXJWaWV3OiA1XHJcbiAgICAgIH0sXHJcbiAgICAgIDEwMjQ6IHtcclxuICAgICAgICBzbGlkZXNQZXJWaWV3OiA1XHJcbiAgICAgIH0sXHJcbiAgICAgIDE0MDA6IHtcclxuICAgICAgICBzbGlkZXNQZXJWaWV3OiA3XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICBpbml0aWFsaXplU2xpZGVyKHBhcmFtcyk7XHJcblxyXG4gIGZ1bmN0aW9uIGluaXRpYWxpemVTbGlkZXIocGFyYW1zKSB7XHJcbiAgICBzbGlkZXIgPSA8U3dpcGVyIHsuLi5wYXJhbXN9PntzbGlkZXJJbml0aWFsaXplfTwvU3dpcGVyPjtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNsaWRlcn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJzbGlkZXItYXJyb3dzXCJdfT5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2dvUHJldn0+XHJcbiAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDQ5MiA0OTJcIj48cGF0aCBkPVwiTTE5OC42MDggMjQ2LjEwNEwzODIuNjY0IDYyLjA0YzUuMDY4LTUuMDU2IDcuODU2LTExLjgxNiA3Ljg1Ni0xOS4wMjQgMC03LjIxMi0yLjc4OC0xMy45NjgtNy44NTYtMTkuMDMybC0xNi4xMjgtMTYuMTJDMzYxLjQ3NiAyLjc5MiAzNTQuNzEyIDAgMzQ3LjUwNCAwcy0xMy45NjQgMi43OTItMTkuMDI4IDcuODY0TDEwOS4zMjggMjI3LjAwOGMtNS4wODQgNS4wOC03Ljg2OCAxMS44NjgtNy44NDggMTkuMDg0LS4wMiA3LjI0OCAyLjc2IDE0LjAyOCA3Ljg0OCAxOS4xMTJsMjE4Ljk0NCAyMTguOTMyYzUuMDY0IDUuMDcyIDExLjgyIDcuODY0IDE5LjAzMiA3Ljg2NCA3LjIwOCAwIDEzLjk2NC0yLjc5MiAxOS4wMzItNy44NjRsMTYuMTI0LTE2LjEyYzEwLjQ5Mi0xMC40OTIgMTAuNDkyLTI3LjU3MiAwLTM4LjA2TDE5OC42MDggMjQ2LjEwNHpcIi8+PC9zdmc+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtnb05leHR9PlxyXG4gICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA0OTIuMDA0IDQ5Mi4wMDRcIj48cGF0aCBkPVwiTTM4Mi42NzggMjI2LjgwNEwxNjMuNzMgNy44NkMxNTguNjY2IDIuNzkyIDE1MS45MDYgMCAxNDQuNjk4IDBzLTEzLjk2OCAyLjc5Mi0xOS4wMzIgNy44NmwtMTYuMTI0IDE2LjEyYy0xMC40OTIgMTAuNTA0LTEwLjQ5MiAyNy41NzYgMCAzOC4wNjRMMjkzLjM5OCAyNDUuOWwtMTg0LjA2IDE4NC4wNmMtNS4wNjQgNS4wNjgtNy44NiAxMS44MjQtNy44NiAxOS4wMjggMCA3LjIxMiAyLjc5NiAxMy45NjggNy44NiAxOS4wNGwxNi4xMjQgMTYuMTE2YzUuMDY4IDUuMDY4IDExLjgyNCA3Ljg2IDE5LjAzMiA3Ljg2czEzLjk2OC0yLjc5MiAxOS4wMzItNy44NkwzODIuNjc4IDI2NWM1LjA3Ni01LjA4NCA3Ljg2NC0xMS44NzIgNy44NDgtMTkuMDg4LjAxNi03LjI0NC0yLjc3Mi0xNC4wMjgtNy44NDgtMTkuMTA4elwiLz48L3N2Zz5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtzbGlkZXJ9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaG91cmx5U2xpZGVyOyIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInNsaWRlclwiOiBcIldlYXRoZXJTbGlkZXJfc2xpZGVyX19iV2FXTVwiLFxuXHRcInNsaWRlci1hcnJvd3NcIjogXCJXZWF0aGVyU2xpZGVyX3NsaWRlci1hcnJvd3NfXzExcklzXCIsXG5cdFwic2xpZGVcIjogXCJXZWF0aGVyU2xpZGVyX3NsaWRlX19ETXM4T1wiLFxuXHRcInNsaWRlLW1vZGFsLWJ0blwiOiBcIldlYXRoZXJTbGlkZXJfc2xpZGUtbW9kYWwtYnRuX18yOUlJS1wiLFxuXHRcImRhdGVcIjogXCJXZWF0aGVyU2xpZGVyX2RhdGVfXzNCMTJOXCIsXG5cdFwidGVtcFwiOiBcIldlYXRoZXJTbGlkZXJfdGVtcF9fMTN5Vk5cIixcblx0XCJtb2RhbF9fdG9wXCI6IFwiV2VhdGhlclNsaWRlcl9tb2RhbF9fdG9wX19vR0NwMFwiLFxuXHRcIm1vZGFsX190b3BfX2JhY2tncm91bmRcIjogXCJXZWF0aGVyU2xpZGVyX21vZGFsX190b3BfX2JhY2tncm91bmRfXzFpWldZXCIsXG5cdFwibW9kYWxfX3RvcF9fY2xvc2VcIjogXCJXZWF0aGVyU2xpZGVyX21vZGFsX190b3BfX2Nsb3NlX18xcEhJc1wiLFxuXHRcIm1vZGFsX19pdGVtXCI6IFwiV2VhdGhlclNsaWRlcl9tb2RhbF9faXRlbV9fMzFFVTZcIixcblx0XCJtb2RhbF9faXRlbV9fdGl0bGVcIjogXCJXZWF0aGVyU2xpZGVyX21vZGFsX19pdGVtX190aXRsZV9fMmVzd3JcIixcblx0XCJtb2RhbFwiOiBcIldlYXRoZXJTbGlkZXJfbW9kYWxfXzFwTlBGXCIsXG5cdFwibW9kYWwtdG9wXCI6IFwiV2VhdGhlclNsaWRlcl9tb2RhbC10b3BfX0NUdkhPXCIsXG5cdFwibW9kYWwtYm9keVwiOiBcIldlYXRoZXJTbGlkZXJfbW9kYWwtYm9keV9fMk4tbmRcIlxufTtcbiIsImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlci9IZWFkZXJcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyXCI7XHJcbmltcG9ydCB7IHVzZVN0b3JlQWN0aW9ucyB9IGZyb20gXCJlYXN5LXBlYXN5XCI7XHJcbmltcG9ydCB7IHVzZUlzTW91bnQgfSBmcm9tIFwiLi4vdXRpbHMvdXNlSXNNb3VudFwiO1xyXG5pbXBvcnQgeyBjb252ZXJ0UmVnaW9uIH0gZnJvbSBcIi4uL3V0aWxzL3N0YXRlTmFtZUFiYnJldmlhdGlvblwiO1xyXG5pbXBvcnQgV2VhdGhlciBmcm9tIFwiLi4vY29tcG9uZW50cy9XZWF0aGVyL1dlYXRoZXJcIjtcclxuaW1wb3J0IHsgZmV0Y2hXZWF0aGVyLCBpcEluZm8sIGlwRGF0YSB9IGZyb20gXCIuLi9hcGkvQVBJVXRpbHNcIjtcclxuXHJcbmNvbnN0IGluZGV4ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHNldFdlYXRoZXIgPSB1c2VTdG9yZUFjdGlvbnMoYWN0aW9ucyA9PiBhY3Rpb25zLndlYXRoZXIuc2V0V2VhdGhlckRhdGEpO1xyXG4gIGNvbnN0IHNldExhdGl0dWRlID0gdXNlU3RvcmVBY3Rpb25zKGFjdGlvbnMgPT4gYWN0aW9ucy5sb2NhdGlvbi5zZXRMb2NhdGlvbkxhdGl0dWRlKTtcclxuICBjb25zdCBzZXRMb25naXR1ZGUgPSB1c2VTdG9yZUFjdGlvbnMoYWN0aW9ucyA9PiBhY3Rpb25zLmxvY2F0aW9uLnNldExvY2F0aW9uTG9uZ2l0dWRlKTtcclxuICBjb25zdCBzZXRDaXR5ID0gdXNlU3RvcmVBY3Rpb25zKGFjdGlvbnMgPT4gYWN0aW9ucy5sb2NhdGlvbi5zZXRMb2NhdGlvbkNpdHkpO1xyXG4gIGNvbnN0IHNldFJlZ2lvbiA9IHVzZVN0b3JlQWN0aW9ucyhhY3Rpb25zID0+IGFjdGlvbnMubG9jYXRpb24uc2V0TG9jYXRpb25SZWdpb24pO1xyXG4gIGNvbnN0IHNldFNwaW5uZXIgPSB1c2VTdG9yZUFjdGlvbnMoYWN0aW9ucyA9PiBhY3Rpb25zLnNwaW5uZXIuc2V0U3Bpbm5lcik7XHJcbiAgY29uc3QgaXNNb3VudCA9IHVzZUlzTW91bnQoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldFNwaW5uZXIodHJ1ZSk7XHJcbiAgICBpZiAoaXNNb3VudCkge1xyXG4gICAgICBjb25zdCBwdWJsaWNJcCA9IHJlcXVpcmUoXCJwdWJsaWMtaXBcIik7XHJcbiAgICAgIHB1YmxpY0lwLnY0KCkudGhlbihyZXN1bHRzID0+IHtcclxuICAgICAgICBpcEluZm8ocmVzdWx0cylcclxuICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxhdExuZyA9IHJlcy5sb2Muc3BsaXQoXCIsXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBsYXQgPSBsYXRMbmdbMF07XHJcbiAgICAgICAgICAgIGNvbnN0IGxuZyA9IGxhdExuZ1sxXTtcclxuICAgICAgICAgICAgc2V0UmVnaW9uKGNvbnZlcnRSZWdpb24ocmVzLnJlZ2lvbikpO1xyXG4gICAgICAgICAgICBzZXRDaXR5KHJlcy5jaXR5KTtcclxuICAgICAgICAgICAgc2V0TGF0aXR1ZGUobGF0KTtcclxuICAgICAgICAgICAgc2V0TG9uZ2l0dWRlKGxuZyk7XHJcbiAgICAgICAgICAgIGZldGNoV2VhdGhlcihsYXQsIGxuZykudGhlbihyZXN1bHRzID0+IHtcclxuICAgICAgICAgICAgICBzZXRXZWF0aGVyKHJlc3VsdHMpO1xyXG4gICAgICAgICAgICAgIHNldFNwaW5uZXIoZmFsc2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgICAgICBpcERhdGEocmVzdWx0cylcclxuICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbGF0ID0gcmVzLmxhdGl0dWRlO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbG5nID0gcmVzLmxvbmdpdHVkZTtcclxuICAgICAgICAgICAgICAgIHNldFJlZ2lvbihjb252ZXJ0UmVnaW9uKHJlcy5yZWdpb24pKTtcclxuICAgICAgICAgICAgICAgIHNldENpdHkocmVzLmNpdHkpO1xyXG4gICAgICAgICAgICAgICAgc2V0TGF0aXR1ZGUobGF0KTtcclxuICAgICAgICAgICAgICAgIHNldExvbmdpdHVkZShsbmcpO1xyXG4gICAgICAgICAgICAgICAgZmV0Y2hXZWF0aGVyKGxhdCwgbG5nKS50aGVuKHJlc3VsdHMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBzZXRXZWF0aGVyKHJlc3VsdHMpO1xyXG4gICAgICAgICAgICAgICAgICBzZXRTcGlubmVyKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPExheW91dCB0aXRsZT1cIldlYXRoZXIgQXBwXCI+XHJcbiAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgIDxXZWF0aGVyIC8+XHJcbiAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICA8L0xheW91dD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbmRleDsiLCJleHBvcnQgY29uc3QgY2FsY3VsYXRlUHJlc3N1cmUgPSBwcmVzc3VyZSA9PiBwYXJzZUZsb2F0KHByZXNzdXJlICogMC4wMjk1MzAxKS50b0ZpeGVkKDIpO1xyXG5leHBvcnQgY29uc3QgZm9ybWF0QXNQZXJjZW50YWdlID0geCA9PiBgJHtNYXRoLnJvdW5kKHggKiAxMDApfSAlYDtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXREaXJlY3Rpb24oYW5nbGUpIHtcclxuICB2YXIgZGlyZWN0aW9ucyA9IFtcIk5cIiwgXCJOV1wiLCBcIldcIiwgXCJTV1wiLCBcIlNcIiwgXCJTRVwiLCBcIkVcIiwgXCJORVwiXTtcclxuICByZXR1cm4gZGlyZWN0aW9uc1tNYXRoLnJvdW5kKCgoYW5nbGUgJT0gMzYwKSA8IDAgPyBhbmdsZSArIDM2MCA6IGFuZ2xlKSAvIDQ1KSAlIDhdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29uZGl0aW9uKGNvbmRpdGlvbikge1xyXG4gIHN3aXRjaCAoY29uZGl0aW9uKSB7XHJcbiAgICBjYXNlIFwiY2xlYXItZGF5XCI6XHJcbiAgICAgIHJldHVybiBcIkNsZWFyXCI7XHJcbiAgICBjYXNlIFwiY2xlYXItbmlnaHRcIjpcclxuICAgICAgcmV0dXJuIFwiQ2xlYXJcIjtcclxuICAgIGNhc2UgXCJyYWluXCI6XHJcbiAgICAgIHJldHVybiBcIlJhaW5cIjtcclxuICAgIGNhc2UgXCJzbm93XCI6XHJcbiAgICAgIHJldHVybiBcIlNub3dcIjtcclxuICAgIGNhc2UgXCJzbGVldFwiOlxyXG4gICAgICByZXR1cm4gXCJTbGVldFwiO1xyXG4gICAgY2FzZSBcIndpbmRcIjpcclxuICAgICAgcmV0dXJuIFwiV2luZFwiO1xyXG4gICAgY2FzZSBcImZvZ1wiOlxyXG4gICAgICByZXR1cm4gXCJGb2dcIjtcclxuICAgIGNhc2UgXCJjbG91ZHlcIjpcclxuICAgICAgcmV0dXJuIFwiQ2xvdWR5XCI7XHJcbiAgICBjYXNlIFwicGFydGx5LWNsb3VkeS1kYXlcIjpcclxuICAgICAgcmV0dXJuIFwiUGFydGx5IENsb3VkeVwiO1xyXG4gICAgY2FzZSBcInBhcnRseS1jbG91ZHktbmlnaHRcIjpcclxuICAgICAgcmV0dXJuIFwiUGFydGx5IENsb3VkeVwiO1xyXG4gICAgY2FzZSBcImhhaWxcIjpcclxuICAgICAgcmV0dXJuIFwiSGFpbFwiO1xyXG4gICAgY2FzZSBcInRodW5kZXJzdG9ybVwiOlxyXG4gICAgICByZXR1cm4gXCJUaHVuZGVyc3Rvcm1cIjtcclxuICAgIGNhc2UgXCJ0b3JuYWRvXCI6XHJcbiAgICAgIHJldHVybiBcIlRvcm5hZG9cIjtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3I6IE5vIENvbmRpdGlvbiBTZXRcIik7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTW9vbiA9IHtcclxuICBwaGFzZXM6IFtcclxuICAgIFwiTmV3IE1vb25cIixcclxuICAgIFwiV2F4aW5nIENyZXNjZW50IE1vb25cIixcclxuICAgIFwiUXVhcnRlciBNb29uXCIsXHJcbiAgICBcIldheGluZyBHaWJib3VzIE1vb25cIixcclxuICAgIFwiRnVsbCBNb29uXCIsXHJcbiAgICBcIldhbmluZyBHaWJib3VzIE1vb25cIixcclxuICAgIFwiTGFzdCBRdWFydGVyIE1vb25cIixcclxuICAgIFwiV2FuaW5nIENyZXNjZW50IE1vb25cIlxyXG4gIF0sXHJcbiAgcGhhc2U6IGZ1bmN0aW9uKHllYXIsIG1vbnRoLCBkYXkpIHtcclxuICAgIGxldCBjLFxyXG4gICAgICBiLFxyXG4gICAgICBqZCxcclxuICAgICAgZSA9IDA7XHJcblxyXG4gICAgaWYgKG1vbnRoIDwgMykge1xyXG4gICAgICB5ZWFyLS07XHJcbiAgICAgIG1vbnRoICs9IDEyO1xyXG4gICAgfVxyXG5cclxuICAgICsrbW9udGg7XHJcbiAgICBjID0gMzY1LjI1ICogeWVhcjtcclxuICAgIGUgPSAzMC42ICogbW9udGg7XHJcbiAgICBqZCA9IGMgKyBlICsgZGF5IC0gNjk0MDM5LjA5OyAvLyBqZCBpcyB0b3RhbCBkYXlzIGVsYXBzZWRcclxuICAgIGpkIC89IDI5LjUzMDU4ODI7IC8vIGRpdmlkZSBieSB0aGUgbW9vbiBjeWNsZVxyXG4gICAgYiA9IHBhcnNlSW50KGpkKTsgLy8gaW50KGpkKSAtPiBiLCB0YWtlIGludGVnZXIgcGFydCBvZiBqZFxyXG4gICAgamQgLT0gYjsgLy8gc3VidHJhY3QgaW50ZWdlciBwYXJ0IHRvIGxlYXZlIGZyYWN0aW9uYWwgcGFydCBvZiBvcmlnaW5hbCBqZFxyXG4gICAgYiA9IE1hdGgucm91bmQoamQgKiA4KTsgLy8gc2NhbGUgZnJhY3Rpb24gZnJvbSAwLTggYW5kIHJvdW5kXHJcblxyXG4gICAgaWYgKGIgPj0gOCkgYiA9IDA7IC8vIDAgYW5kIDggYXJlIHRoZSBzYW1lIHNvIHR1cm4gOCBpbnRvIDBcclxuICAgIHJldHVybiB7IHBoYXNlOiBiLCBuYW1lOiBNb29uLnBoYXNlc1tiXSB9O1xyXG4gIH1cclxufTsiLCJleHBvcnQgZnVuY3Rpb24gY29udmVydFJlZ2lvbihzdGF0ZSkge1xyXG4gICAgdmFyIHN0YXRlcyA9IFtcclxuICAgICAgW1wiQWxhYmFtYVwiLCBcIkFMXCJdLFxyXG4gICAgICBbXCJBbGFza2FcIiwgXCJBS1wiXSxcclxuICAgICAgW1wiQW1lcmljYW4gU2Ftb2FcIiwgXCJBU1wiXSxcclxuICAgICAgW1wiQXJpem9uYVwiLCBcIkFaXCJdLFxyXG4gICAgICBbXCJBcmthbnNhc1wiLCBcIkFSXCJdLFxyXG4gICAgICBbXCJBcm1lZCBGb3JjZXMgQW1lcmljYXNcIiwgXCJBQVwiXSxcclxuICAgICAgW1wiQXJtZWQgRm9yY2VzIEV1cm9wZVwiLCBcIkFFXCJdLFxyXG4gICAgICBbXCJBcm1lZCBGb3JjZXMgUGFjaWZpY1wiLCBcIkFQXCJdLFxyXG4gICAgICBbXCJDYWxpZm9ybmlhXCIsIFwiQ0FcIl0sXHJcbiAgICAgIFtcIkNvbG9yYWRvXCIsIFwiQ09cIl0sXHJcbiAgICAgIFtcIkNvbm5lY3RpY3V0XCIsIFwiQ1RcIl0sXHJcbiAgICAgIFtcIkRlbGF3YXJlXCIsIFwiREVcIl0sXHJcbiAgICAgIFtcIkRpc3RyaWN0IE9mIENvbHVtYmlhXCIsIFwiRENcIl0sXHJcbiAgICAgIFtcIkZsb3JpZGFcIiwgXCJGTFwiXSxcclxuICAgICAgW1wiR2VvcmdpYVwiLCBcIkdBXCJdLFxyXG4gICAgICBbXCJHdWFtXCIsIFwiR1VcIl0sXHJcbiAgICAgIFtcIkhhd2FpaVwiLCBcIkhJXCJdLFxyXG4gICAgICBbXCJJZGFob1wiLCBcIklEXCJdLFxyXG4gICAgICBbXCJJbGxpbm9pc1wiLCBcIklMXCJdLFxyXG4gICAgICBbXCJJbmRpYW5hXCIsIFwiSU5cIl0sXHJcbiAgICAgIFtcIklvd2FcIiwgXCJJQVwiXSxcclxuICAgICAgW1wiS2Fuc2FzXCIsIFwiS1NcIl0sXHJcbiAgICAgIFtcIktlbnR1Y2t5XCIsIFwiS1lcIl0sXHJcbiAgICAgIFtcIkxvdWlzaWFuYVwiLCBcIkxBXCJdLFxyXG4gICAgICBbXCJNYWluZVwiLCBcIk1FXCJdLFxyXG4gICAgICBbXCJNYXJzaGFsbCBJc2xhbmRzXCIsIFwiTUhcIl0sXHJcbiAgICAgIFtcIk1hcnlsYW5kXCIsIFwiTURcIl0sXHJcbiAgICAgIFtcIk1hc3NhY2h1c2V0dHNcIiwgXCJNQVwiXSxcclxuICAgICAgW1wiTWljaGlnYW5cIiwgXCJNSVwiXSxcclxuICAgICAgW1wiTWlubmVzb3RhXCIsIFwiTU5cIl0sXHJcbiAgICAgIFtcIk1pc3Npc3NpcHBpXCIsIFwiTVNcIl0sXHJcbiAgICAgIFtcIk1pc3NvdXJpXCIsIFwiTU9cIl0sXHJcbiAgICAgIFtcIk1vbnRhbmFcIiwgXCJNVFwiXSxcclxuICAgICAgW1wiTmVicmFza2FcIiwgXCJORVwiXSxcclxuICAgICAgW1wiTmV2YWRhXCIsIFwiTlZcIl0sXHJcbiAgICAgIFtcIk5ldyBIYW1wc2hpcmVcIiwgXCJOSFwiXSxcclxuICAgICAgW1wiTmV3IEplcnNleVwiLCBcIk5KXCJdLFxyXG4gICAgICBbXCJOZXcgTWV4aWNvXCIsIFwiTk1cIl0sXHJcbiAgICAgIFtcIk5ldyBZb3JrXCIsIFwiTllcIl0sXHJcbiAgICAgIFtcIk5vcnRoIENhcm9saW5hXCIsIFwiTkNcIl0sXHJcbiAgICAgIFtcIk5vcnRoIERha290YVwiLCBcIk5EXCJdLFxyXG4gICAgICBbXCJOb3J0aGVybiBNYXJpYW5hIElzbGFuZHNcIiwgXCJOUFwiXSxcclxuICAgICAgW1wiT2hpb1wiLCBcIk9IXCJdLFxyXG4gICAgICBbXCJPa2xhaG9tYVwiLCBcIk9LXCJdLFxyXG4gICAgICBbXCJPcmVnb25cIiwgXCJPUlwiXSxcclxuICAgICAgW1wiUGVubnN5bHZhbmlhXCIsIFwiUEFcIl0sXHJcbiAgICAgIFtcIlB1ZXJ0byBSaWNvXCIsIFwiUFJcIl0sXHJcbiAgICAgIFtcIlJob2RlIElzbGFuZFwiLCBcIlJJXCJdLFxyXG4gICAgICBbXCJTb3V0aCBDYXJvbGluYVwiLCBcIlNDXCJdLFxyXG4gICAgICBbXCJTb3V0aCBEYWtvdGFcIiwgXCJTRFwiXSxcclxuICAgICAgW1wiVGVubmVzc2VlXCIsIFwiVE5cIl0sXHJcbiAgICAgIFtcIlRleGFzXCIsIFwiVFhcIl0sXHJcbiAgICAgIFtcIlVTIFZpcmdpbiBJc2xhbmRzXCIsIFwiVklcIl0sXHJcbiAgICAgIFtcIlV0YWhcIiwgXCJVVFwiXSxcclxuICAgICAgW1wiVmVybW9udFwiLCBcIlZUXCJdLFxyXG4gICAgICBbXCJWaXJnaW5pYVwiLCBcIlZBXCJdLFxyXG4gICAgICBbXCJXYXNoaW5ndG9uXCIsIFwiV0FcIl0sXHJcbiAgICAgIFtcIldlc3QgVmlyZ2luaWFcIiwgXCJXVlwiXSxcclxuICAgICAgW1wiV2lzY29uc2luXCIsIFwiV0lcIl0sXHJcbiAgICAgIFtcIld5b21pbmdcIiwgXCJXWVwiXVxyXG4gICAgXTtcclxuICBcclxuICAgIC8vIFNvIGhhcHB5IHRoYXQgQ2FuYWRhIGFuZCB0aGUgVVMgaGF2ZSBkaXN0aW5jdCBhYmJyZXZpYXRpb25zXHJcbiAgICB2YXIgcHJvdmluY2VzID0gW1xyXG4gICAgICBbXCJBbGJlcnRhXCIsIFwiQUJcIl0sXHJcbiAgICAgIFtcIkJyaXRpc2ggQ29sdW1iaWFcIiwgXCJCQ1wiXSxcclxuICAgICAgW1wiTWFuaXRvYmFcIiwgXCJNQlwiXSxcclxuICAgICAgW1wiTmV3IEJydW5zd2lja1wiLCBcIk5CXCJdLFxyXG4gICAgICBbXCJOZXdmb3VuZGxhbmRcIiwgXCJORlwiXSxcclxuICAgICAgW1wiTm9ydGh3ZXN0IFRlcnJpdG9yeVwiLCBcIk5UXCJdLFxyXG4gICAgICBbXCJOb3ZhIFNjb3RpYVwiLCBcIk5TXCJdLFxyXG4gICAgICBbXCJOdW5hdnV0XCIsIFwiTlVcIl0sXHJcbiAgICAgIFtcIk9udGFyaW9cIiwgXCJPTlwiXSxcclxuICAgICAgW1wiUHJpbmNlIEVkd2FyZCBJc2xhbmRcIiwgXCJQRVwiXSxcclxuICAgICAgW1wiUXVlYmVjXCIsIFwiUUNcIl0sXHJcbiAgICAgIFtcIlNhc2thdGNoZXdhblwiLCBcIlNLXCJdLFxyXG4gICAgICBbXCJZdWtvblwiLCBcIllUXCJdXHJcbiAgICBdO1xyXG4gIFxyXG4gICAgY29uc3Qgc2VsZWN0ZWRTdGF0ZSA9IHN0YXRlcy5maW5kKHMgPT4gcy5maW5kKHggPT4geC50b0xvd2VyQ2FzZSgpID09PSBzdGF0ZS50b0xvd2VyQ2FzZSgpKSk7XHJcbiAgICBpZiAoIXNlbGVjdGVkU3RhdGUpIHJldHVybiBudWxsO1xyXG4gICAgcmV0dXJuIHNlbGVjdGVkU3RhdGUuZmlsdGVyKHMgPT4gcy50b0xvd2VyQ2FzZSgpICE9PSBzdGF0ZS50b0xvd2VyQ2FzZSgpKS5qb2luKFwiXCIpO1xyXG4gIH0iLCJpbXBvcnQgeyB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUlzTW91bnQgPSAoKSA9PiB7XHJcbiAgY29uc3QgaXNNb3VudFJlZiA9IHVzZVJlZih0cnVlKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaXNNb3VudFJlZi5jdXJyZW50ID0gZmFsc2U7XHJcbiAgfSwgW10pO1xyXG4gIHJldHVybiBpc01vdW50UmVmLmN1cnJlbnQ7XHJcbn07IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZGF0ZS1mbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZGF0ZS1mbnMvZnJvbVVuaXhUaW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImVhc3ktcGVhc3lcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInB1YmxpYy1pcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pZC1zd2lwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbWljcm8tbW9kYWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcGxhY2VzLWF1dG9jb21wbGV0ZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10YWJzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXRvYXN0aWZ5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0c3RyYXBcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==