/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _src_App__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/App */ \"./src/App.js\");\n\n\n\n\n\n\n\nconst PORT = process.env.PORT || 3006;\nconst app = express__WEBPACK_IMPORTED_MODULE_3___default()();\napp.use(express__WEBPACK_IMPORTED_MODULE_3___default.a.static('build/'));\napp.get('/*', (req, res) => {\n  const react_app = react_dom_server__WEBPACK_IMPORTED_MODULE_4___default.a.renderToString(react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__[\"StaticRouter\"], {\n    location: req.url\n  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_src_App__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null)));\n  const indexFile = path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve('build/index.html');\n  fs__WEBPACK_IMPORTED_MODULE_1___default.a.readFile(indexFile, 'utf8', (err, data) => {\n    if (err) {\n      console.error('Something went wrong:', err);\n      return res.status(500).send('Oops, better luck next time!');\n    }\n\n    return res.send(data.replace('<div id=\"root\"></div>', \"<div id=\\\"root\\\">\".concat(react_app, \"</div>\")));\n  });\n});\napp.listen(PORT, () => {\n  console.log(\"\\uD83D\\uDE0E Server is listening on port \".concat(PORT));\n});\n\n//# sourceURL=webpack:///./server/index.js?");

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_SignupPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/SignupPage */ \"./src/pages/SignupPage/index.js\");\n/* harmony import */ var _pages_HomePage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/HomePage */ \"./src/pages/HomePage/index.js\");\n/* harmony import */ var _pages_AboutPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/AboutPage */ \"./src/pages/AboutPage/index.js\");\n/* harmony import */ var _pages_LoginPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/LoginPage */ \"./src/pages/LoginPage/index.js\");\n/* harmony import */ var _pages_P2PPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/P2PPage */ \"./src/pages/P2PPage/index.js\");\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/NavBar */ \"./src/components/NavBar/index.js\");\n/* harmony import */ var _pages_Samvid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/Samvid */ \"./src/pages/Samvid/index.js\");\n\n\n\n\n\n\n\n\n\n\nfunction App() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"font-sans bg-gray-100 min-h-screen\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NavBar__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"container mx-auto\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Switch\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    exact: true,\n    path: \"/\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_HomePage__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    exact: true,\n    path: \"/about\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_AboutPage__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    exact: true,\n    path: \"/login\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_LoginPage__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    exact: true,\n    path: \"/signup\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_SignupPage__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    exact: true,\n    path: \"/p2p\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_P2PPage__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    exact: true,\n    path: \"/samvid\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_Samvid__WEBPACK_IMPORTED_MODULE_8__[\"default\"], null)))));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ }),

/***/ "./src/components/CheckoutForm/index.js":
/*!**********************************************!*\
  !*** ./src/components/CheckoutForm/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_stripe_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-stripe-elements */ \"react-stripe-elements\");\n/* harmony import */ var react_stripe_elements__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_stripe_elements__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nclass CheckoutForm extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  onPaymentSubmitClcik(ev) {\n    console.log(\"payment submission started!\");\n  }\n\n  render() {\n    const {\n      price,\n      paymentRequest\n    } = this.props;\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n      action: \"/charge\",\n      method: \"POST\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n      className: \"text-indigo-600\"\n    }, \"Debit or Credit card\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"py-4 px-2 mt-2 border-solid border rounded-sm border-indigo-600 shadow-inner shadow-lg\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_stripe_elements__WEBPACK_IMPORTED_MODULE_1__[\"CardElement\"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"hr\", null), !paymentRequest.canMakePayment() ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_stripe_elements__WEBPACK_IMPORTED_MODULE_1__[\"PaymentRequestButtonElement\"], {\n      paymentRequest: paymentRequest\n    }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n      className: \"btn btn-indigo  px-4\",\n      type: \"submit\",\n      onClick: this.onPaymentSubmitClcik\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n      className: \"mx-6\"\n    }, \"Pay $\", price)));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_stripe_elements__WEBPACK_IMPORTED_MODULE_1__[\"injectStripe\"])(CheckoutForm));\n\n//# sourceURL=webpack:///./src/components/CheckoutForm/index.js?");

/***/ }),

/***/ "./src/components/MapComponent/index.js":
/*!**********************************************!*\
  !*** ./src/components/MapComponent/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var google_maps_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! google-maps-react */ \"google-maps-react\");\n/* harmony import */ var google_maps_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(google_maps_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _MapMarker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../MapMarker */ \"./src/components/MapMarker/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nclass MapComponent extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(...args) {\n    super(...args);\n\n    _defineProperty(this, \"state\", {\n      selectedPlace: {\n        properties: {}\n      },\n      activeMarker: {},\n      showingInfoWindow: false\n    });\n\n    _defineProperty(this, \"onMarkerClicked\", (props, marker, ev) => {\n      console.log(props, marker, ev);\n      this.setState({\n        selectedPlace: props,\n        activeMarker: marker,\n        showingInfoWindow: true\n      });\n    });\n  }\n\n  render() {\n    const {\n      features\n    } = this.props.collection;\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"w-full h-screen\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(google_maps_react__WEBPACK_IMPORTED_MODULE_1__[\"Map\"], {\n      google: this.props.google,\n      zoom: 12,\n      initialCenter: {\n        lat: 29.761993,\n        lng: -95.366302\n      },\n      mapTypeId: \"terrain\",\n      containerStyle: {\n        width: \"100%\",\n        height: \"100%\",\n        position: \"relative\"\n      }\n    }, features.map(feature => {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(google_maps_react__WEBPACK_IMPORTED_MODULE_1__[\"Marker\"], {\n        key: feature.properties.FacilityName,\n        properties: feature.properties,\n        position: {\n          lat: feature.geometry.coordinates[1],\n          lng: feature.geometry.coordinates[0]\n        },\n        onClick: this.onMarkerClicked\n      });\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(google_maps_react__WEBPACK_IMPORTED_MODULE_1__[\"InfoWindow\"], {\n      marker: this.state.activeMarker,\n      visible: this.state.showingInfoWindow\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n      className: \"text-indigo-700 text-lg\"\n    }, this.state.selectedPlace.properties.FacilityName)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"b\", null, \"Facility type: \"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, this.state.selectedPlace.properties.FacilityType)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"b\", null, \"Address: \"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, this.state.selectedPlace.properties.Address), \", \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, this.state.selectedPlace.properties.City), \", \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, this.state.selectedPlace.properties.State)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"b\", null, \"ZipCode: \"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, this.state.selectedPlace.properties.ZipCode)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n      href: this.state.selectedPlace.properties.WebSite\n    }, \"Visit our website!\"))))));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(google_maps_react__WEBPACK_IMPORTED_MODULE_1__[\"GoogleApiWrapper\"])({\n  apiKey: \"AIzaSyD25uACj9DuRe_b1anOs__B12acAO9eZeY\"\n})(MapComponent));\n\n//# sourceURL=webpack:///./src/components/MapComponent/index.js?");

/***/ }),

/***/ "./src/components/MapMarker/index.js":
/*!*******************************************!*\
  !*** ./src/components/MapMarker/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MapMarker; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nclass MapMarker extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"border-solid border-8 border-blue-500 rounded-full w-16 h-16 bg-white-100\"\n    }, this.props.text ? this.props.text : this.props.children);\n  }\n\n}\n\n//# sourceURL=webpack:///./src/components/MapMarker/index.js?");

/***/ }),

/***/ "./src/components/NavBar/index.js":
/*!****************************************!*\
  !*** ./src/components/NavBar/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return NavBar; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ \"firebase\");\n/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nclass NavBar extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(props) {\n    super(props);\n    this.state = {\n      btn1: {\n        name: \"Login\",\n        link: \"/\",\n        id: \"Login\"\n      },\n      btn2: {\n        name: \"SignUp\",\n        link: \"/\",\n        id: \"Signup\"\n      }\n    };\n    this.element = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();\n  }\n\n  componentDidMount() {\n    try {\n      const list = document.getElementById('SignOut');\n      list.addEventListener('click', this.SignOut);\n    } catch (error) {}\n\n    if (localStorage.yourObject != \"null\") {\n      this.setState({\n        btn1: {\n          name: \"Profile\",\n          link: \"/\",\n          id: \"Profile\"\n        },\n        btn2: {\n          name: \"Sign Out\",\n          link: \"/\",\n          id: \"SignOut\"\n        }\n      });\n    } else {\n      this.setState({\n        btn1: {\n          name: \"Login\",\n          link: \"/login\",\n          id: \"Login\"\n        },\n        btn2: {\n          name: \"Sign Up\",\n          link: \"/signup\",\n          id: \"Signup\"\n        }\n      });\n    }\n  }\n\n  SignOut() {\n    if (localStorage.yourObject != \"null\") {\n      // [START signout]\n      firebase__WEBPACK_IMPORTED_MODULE_2__[\"auth\"]().signOut();\n      localStorage.yourObject = \"null\";\n    }\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"header\", {\n      className: \"bg-black text-white p-4 flex flex-row items-center\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n      className: \"text-3xl w-24 mr-12\"\n    }, \"Weplay\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"flex flex-row justify-between w-full\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n      className: \"flex flex-row\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n      className: \"mr-4\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n      to: \"/\"\n    }, \"Home\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n      className: \"mr-4\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n      to: \"/about\"\n    }, \"About\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n      to: \"/p2p\"\n    }, \"p2p\"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n      className: \"flex flex-row\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n      className: \"mr-4\"\n    }, \" \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n      to: this.state.btn1.link\n    }, this.state.btn1.name), \" \"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n      id: 'SignOut'\n    }, \" \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n      to: this.state.btn2.link\n    }, this.state.btn2.name), \" \"))));\n  }\n\n}\n\n//# sourceURL=webpack:///./src/components/NavBar/index.js?");

/***/ }),

/***/ "./src/components/ProfileCard/index.js":
/*!*********************************************!*\
  !*** ./src/components/ProfileCard/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ProfileCard; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nclass ProfileCard extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null);\n  }\n\n}\n\n_defineProperty(ProfileCard, \"propTypes\", {\n  profileImg: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string\n});\n\n//# sourceURL=webpack:///./src/components/ProfileCard/index.js?");

/***/ }),

/***/ "./src/pages/AboutPage/index.js":
/*!**************************************!*\
  !*** ./src/pages/AboutPage/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AboutPage; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_ProfileCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../components/ProfileCard */ \"./src/components/ProfileCard/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nclass AboutPage extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(...args) {\n    super(...args);\n\n    _defineProperty(this, \"teammates\", []);\n  }\n\n  componentWillMount() {\n    this.teammates = this.props.teammates;\n  }\n\n  componentDidMount() {}\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"mt-24\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n      className: \"text-2xl\"\n    }, \"About us!\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"We are a tight, niche group of young entrepreneurs. Our shared values and beliefs influence the work that we do, along with the positive impact we hope to instill in communities.\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", {\n      className: \"text-2xl\"\n    }, \"Our Story\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"It all began while refereeing at a local indoor soccer facility to make enough money to pay for school. Late hours turned into learning sessions. I began to think about how could I improve the business for the better. In the background, hearing players complaining about league information they didn\\u2019t have, players not aware of game times, owners not receiving payments on time, etc. WePlay is a social network search engine service, namely, providing an online social network in the field of sports recreation and providing management tools to facilitate things, such as; payment, marketing, and communication. From designing VR/AR games, playing guitar, writing code, an athlete, Yu-gi-oh card players, our team is unique in its essence to practice creative collaboration. All backgrounds, experiences, and skillsets truly define WePlay.  WePlay is at the forefront of creating change through social network efforts, connecting the dots between consumers and businesses.\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", {\n      className: \"text-2xl\"\n    }, \"Meet the team\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, this.teammates ? this.teammates.map(teamamte => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ProfileCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      teamamte: teamamte\n    })) : \"\")));\n  }\n\n}\n\n//# sourceURL=webpack:///./src/pages/AboutPage/index.js?");

/***/ }),

/***/ "./src/pages/HomePage/index.js":
/*!*************************************!*\
  !*** ./src/pages/HomePage/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return HomePage; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_MapComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/MapComponent */ \"./src/components/MapComponent/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nclass HomePage extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"max-w-full\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MapComponent__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      collection: featureCollection\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Link\"], {\n      to: \"../samvid\"\n    }, \"touch me\"));\n  }\n\n}\n\n_defineProperty(HomePage, \"propTypes\", {\n  user: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object\n});\n\nconst featureCollection = {\n  \"type\": \"FeatureCollection\",\n  \"features\": [{\n    \"type\": \"Feature\",\n    \"geometry\": {\n      \"type\": \"Point\",\n      \"coordinates\": [-95.618808, 29.623674]\n    },\n    \"properties\": {\n      \"FacilityName\": \"Eldridge Park\",\n      \"FacilityType\": \"park\",\n      \"Address\": \"2511 Eldridge Rd\",\n      \"City\": \"Sugar Land\",\n      \"State\": \"TX\",\n      \"ZipCode\": 77478,\n      \"Website\": \"\"\n    }\n  }, {\n    \"type\": \"Feature\",\n    \"geometry\": {\n      \"type\": \"Point\",\n      \"coordinates\": [-95.470328, 29.705764]\n    },\n    \"properties\": {\n      \"FacilityName\": \"Alief Community Park\",\n      \"FacilityType\": \"park\",\n      \"Address\": \"11903 Bellaire Blvd\",\n      \"City\": \"Houston\",\n      \"State\": \"TX\",\n      \"ZipCode\": 77072,\n      \"Website\": \"\"\n    }\n  }, {\n    \"type\": \"Feature\",\n    \"geometry\": {\n      \"type\": \"Point\",\n      \"coordinates\": [-94.98423, 29.392187]\n    },\n    \"properties\": {\n      \"FacilityName\": \"Memorial Park\",\n      \"FacilityType\": \"park\",\n      \"Address\": \"6501 Memorial Dr\",\n      \"City\": \"Houston\",\n      \"State\": \"TX\",\n      \"ZipCode\": 77007,\n      \"Website\": \"\"\n    }\n  }, {\n    \"type\": \"Feature\",\n    \"geometry\": {\n      \"type\": \"Point\",\n      \"coordinates\": [-95.575193, 29.694969]\n    },\n    \"properties\": {\n      \"FacilityName\": \"Boone Road Park\",\n      \"FacilityType\": \"park\",\n      \"Address\": \"7700 Boone Rd\",\n      \"City\": \"Houston\",\n      \"State\": \"TX\",\n      \"ZipCode\": 77072,\n      \"Website\": \"\"\n    }\n  }, {\n    \"type\": \"Feature\",\n    \"geometry\": {\n      \"type\": \"Point\",\n      \"coordinates\": [-95.70757, 29.725531]\n    },\n    \"properties\": {\n      \"FacilityName\": \"George Bush Park\",\n      \"FacilityType\": \"park\",\n      \"Address\": \"16756 Westheimer Pkwy\",\n      \"City\": \"Houston\",\n      \"State\": \"TX\",\n      \"ZipCode\": 77082,\n      \"Website\": \"\"\n    }\n  }, {\n    \"type\": \"Feature\",\n    \"geometry\": {\n      \"type\": \"Point\",\n      \"coordinates\": [-95.646701, 29.71015]\n    },\n    \"properties\": {\n      \"FacilityName\": \"Alief Family YMCA\",\n      \"FacilityType\": \"park\",\n      \"Address\": \"7850 Howell Sugar Land Rd\",\n      \"City\": \"Houston\",\n      \"State\": \"TX\",\n      \"ZipCode\": 77083,\n      \"Website\": \"\"\n    }\n  }, {\n    \"type\": \"Feature\",\n    \"geometry\": {\n      \"type\": \"Point\",\n      \"coordinates\": {}\n    },\n    \"properties\": {\n      \"FacilityName\": \"\",\n      \"FacilityType\": \"\",\n      \"Address\": \"\",\n      \"City\": \"\",\n      \"State\": \"\",\n      \"ZipCode\": null,\n      \"Website\": \"\"\n    }\n  }, {\n    \"type\": \"Feature\",\n    \"geometry\": {\n      \"type\": \"Point\",\n      \"coordinates\": [-95.510908, 29.709095]\n    },\n    \"properties\": {\n      \"FacilityName\": \"Indoor 59\",\n      \"FacilityType\": \"indoor \",\n      \"Address\": \"7115 Clarewood Dr\",\n      \"City\": \"Houston\",\n      \"State\": \"TX\",\n      \"ZipCode\": 77036,\n      \"Website\": \"https://www.sports59.com/indoorsoccer/\"\n    }\n  }, {\n    \"type\": \"Feature\",\n    \"geometry\": {\n      \"type\": \"Point\",\n      \"coordinates\": [-95.492973, 29.826677]\n    },\n    \"properties\": {\n      \"FacilityName\": \"Q&B INDOOR SPORTS\",\n      \"FacilityType\": \"indoor \",\n      \"Address\": \"1739 Bingle Rd\",\n      \"City\": \"Houston\",\n      \"State\": \"TX\",\n      \"ZipCode\": 77055,\n      \"Website\": \"https://www.qbsports.net\"\n    }\n  }, {\n    \"type\": \"Feature\",\n    \"geometry\": {\n      \"type\": \"Point\",\n      \"coordinates\": [-95.60626, 29.757162]\n    },\n    \"properties\": {\n      \"FacilityName\": \"Memorial Indoor Soccer\",\n      \"FacilityType\": \"indoor \",\n      \"Address\": \"1322 S Dairy Ashford Rd\",\n      \"City\": \"Houston\",\n      \"State\": \"TX\",\n      \"ZipCode\": 77077,\n      \"Website\": \"https://memorialindoor.com\"\n    }\n  }, {\n    \"type\": \"Feature\",\n    \"geometry\": {\n      \"type\": \"Point\",\n      \"coordinates\": [-95.559558, 29.634647]\n    },\n    \"properties\": {\n      \"FacilityName\": \"Southwest Indoor Soccer\",\n      \"FacilityType\": \"indoor \",\n      \"Address\": \"12950 Sugar Ridge Blvd\",\n      \"City\": \"Stafford\",\n      \"State\": \"TX\",\n      \"ZipCode\": 77477,\n      \"Website\": \"https://www.letsplaysoccer.com/stafford\"\n    }\n  }, {\n    \"type\": \"Feature\",\n    \"geometry\": {\n      \"type\": \"Point\",\n      \"coordinates\": [-95.486075, 29.996855]\n    },\n    \"properties\": {\n      \"FacilityName\": \"Northwest Indoor Soccer Center\",\n      \"FacilityType\": \"indoor \",\n      \"Address\": \"14647 Walters Rd\",\n      \"City\": \"Houston\",\n      \"State\": \"TX\",\n      \"ZipCode\": 77068,\n      \"Website\": \"https://www.letsplaysoccer.com/houston\"\n    }\n  }, {\n    \"type\": \"Feature\",\n    \"geometry\": {\n      \"type\": \"Point\",\n      \"coordinates\": [-95.659963, 29.830956]\n    },\n    \"properties\": {\n      \"FacilityName\": \"West Houston Indoor Soccer\",\n      \"FacilityType\": \"indoor \",\n      \"Address\": \"17115 Clay Rd\",\n      \"City\": \"Houston\",\n      \"State\": \"TX\",\n      \"ZipCode\": 77084,\n      \"Website\": \"http://westhoustonindoor.com\"\n    }\n  }, {\n    \"type\": \"Feature\",\n    \"geometry\": {\n      \"type\": \"Point\",\n      \"coordinates\": [-95.361049, 29.775331]\n    },\n    \"properties\": {\n      \"FacilityName\": \"Main Street Indoor Soccer\",\n      \"FacilityType\": \"indoor \",\n      \"Address\": \"615 Pinckney St\",\n      \"City\": \"Houston\",\n      \"State\": \"TX\",\n      \"ZipCode\": 77009,\n      \"Website\": \"https://www.mainstreetsoccer.com\"\n    }\n  }, {\n    \"type\": \"Feature\",\n    \"geometry\": {\n      \"type\": \"Point\",\n      \"coordinates\": [-95.449408, 29.84098]\n    },\n    \"properties\": {\n      \"FacilityName\": \"Texans Indoor Soccer\",\n      \"FacilityType\": \"indoor \",\n      \"Address\": \"4137 Pinemont Dr\",\n      \"City\": \"Houston\",\n      \"State\": \"TX\",\n      \"ZipCode\": 77018,\n      \"Website\": \"https://www.facebook.com/pages/category/Stadium--Arena---Sports-Venue/Texans-Indoor-Soccer-249007908513755/\"\n    }\n  }, {\n    \"type\": \"Feature\",\n    \"geometry\": {\n      \"type\": \"Point\",\n      \"coordinates\": [-95.213317, 29.763789]\n    },\n    \"properties\": {\n      \"FacilityName\": \"Upper 90 Indoor Soccer Club\",\n      \"FacilityType\": \"indoor \",\n      \"Address\": \"1622 Federal Rd\",\n      \"City\": \"Houston\",\n      \"State\": \"TX\",\n      \"ZipCode\": 77015,\n      \"Website\": \"https://www.upper90houston.com\"\n    }\n  }, {\n    \"type\": \"Feature\",\n    \"geometry\": {\n      \"type\": \"Point\",\n      \"coordinates\": [-95.4923728, 29.7046591]\n    },\n    \"properties\": {\n      \"FacilityName\": \"Aztec Indoor Soccer\",\n      \"FacilityType\": \"indoor \",\n      \"Address\": \"6909A Hillcroft Ave\",\n      \"City\": \"Houston\",\n      \"State\": \"TX\",\n      \"ZipCode\": 77081,\n      \"Website\": \"https://www.facebook.com/Aztec-indoor-soccer-1-315068145650763/\"\n    }\n  }, {\n    \"type\": \"Feature\",\n    \"geometry\": {\n      \"type\": \"Point\",\n      \"coordinates\": [-95.1962108, 29.7677783]\n    },\n    \"properties\": {\n      \"FacilityName\": \"INTERNATIONAL INDOOR SOCCER\",\n      \"FacilityType\": \"indoor \",\n      \"Address\": \"13024 Market St\",\n      \"City\": \"Houston\",\n      \"State\": \"TX\",\n      \"ZipCode\": 77015,\n      \"Website\": \"http://internationalindoor.com\"\n    }\n  }, {\n    \"type\": \"Feature\",\n    \"geometry\": {\n      \"type\": \"Point\",\n      \"coordinates\": [-95.60089, 29.772869]\n    },\n    \"properties\": {\n      \"FacilityName\": \"Houston Toros Center\",\n      \"FacilityType\": \"indoor \",\n      \"Address\": \"785 Country Pl Dr\",\n      \"City\": \"Houston\",\n      \"State\": \"TX\",\n      \"ZipCode\": 77079,\n      \"Website\": \"https://www.houstontoros.com\"\n    }\n  }, {\n    \"type\": \"Feature\",\n    \"geometry\": {\n      \"type\": \"Point\",\n      \"coordinates\": [-95.2749332, 29.7185362]\n    },\n    \"properties\": {\n      \"FacilityName\": \"Soccer Centro\",\n      \"FacilityType\": \"indoor \",\n      \"Address\": \"8333 Manchester St\",\n      \"City\": \"Houston\",\n      \"State\": \"TX\",\n      \"ZipCode\": 77012,\n      \"Website\": \"https://www.launidadsoccer.com\"\n    }\n  }, {\n    \"type\": \"Feature\",\n    \"geometry\": {\n      \"type\": \"Point\",\n      \"coordinates\": [-95.52962, 29.83209]\n    },\n    \"properties\": {\n      \"FacilityName\": \"Kids Soccer Academy\",\n      \"FacilityType\": \"indoor \",\n      \"Address\": \"9585 Clay Rd #11 \",\n      \"City\": \"Houston\",\n      \"State\": \"TX\",\n      \"ZipCode\": 77080,\n      \"Website\": \"https://ksahouston.webs.com\"\n    }\n  }]\n};\n\n//# sourceURL=webpack:///./src/pages/HomePage/index.js?");

/***/ }),

/***/ "./src/pages/LoginPage/index.js":
/*!**************************************!*\
  !*** ./src/pages/LoginPage/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return LoginPage; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);\n\n\n // Your web app's Firebase configuration\n\nvar firebaseConfig = {\n  apiKey: \"AIzaSyCUW5-DvZrZLS_l3Xo5D3tsylSyx7iECVU\",\n  authDomain: \"weplaywebsite-df154.firebaseapp.com\",\n  databaseURL: \"https://weplaywebsite-df154.firebaseio.com\",\n  projectId: \"weplaywebsite-df154\",\n  storageBucket: \"weplaywebsite-df154.appspot.com\",\n  messagingSenderId: \"438050842700\",\n  appId: \"1:438050842700:web:c68fa340ce8435d5\"\n}; // Initialize Firebase\n\nfirebase_app__WEBPACK_IMPORTED_MODULE_2__[\"initializeApp\"](firebaseConfig);\nclass LoginPage extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(props) {\n    super(props); //this.state = {num: 0}\n\n    this.element = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();\n  }\n\n  componentDidMount() {\n    this.element.current.addEventListener('click', this);\n  }\n\n  toggleSignIn(email, password) {\n    if (email.length < 4) {\n      alert('Please enter an email address.');\n      return;\n    }\n\n    if (password.length < 4) {\n      alert('Please enter a password.');\n      return;\n    } // Sign in with email and pass.\n    // [START authwithemail]\n\n\n    firebase_app__WEBPACK_IMPORTED_MODULE_2__[\"auth\"]().signInWithEmailAndPassword(email, password).catch(function (error) {\n      // Handle Errors here.\n      var errorCode = error.code;\n      var errorMessage = error.message; // [START_EXCLUDE]\n\n      if (errorCode === 'auth/wrong-password') {\n        alert('Wrong password.');\n        return;\n      } else {\n        alert(errorMessage);\n        return;\n      }\n\n      console.log(error); //document.getElementById('quickstart-sign-in').disabled = false;\n      // [END_EXCLUDE]\n    }); // [END authwithemail]\n    //document.getElementById('quickstart-sign-in').disabled = true;\n  }\n\n  initApp() {\n    // Listening for auth state changes.\n    // [START authstatelistener]\n    firebase_app__WEBPACK_IMPORTED_MODULE_2__[\"auth\"]().onAuthStateChanged(function (user) {\n      // [START_EXCLUDE silent]\n      //document.getElementById('quickstart-verify-email').disabled = true;\n      // [END_EXCLUDE]\n      if (user) {\n        // User is signed in.\n        var displayName = user.displayName;\n        var email = user.email;\n        var emailVerified = user.emailVerified;\n        var photoURL = user.photoURL;\n        var isAnonymous = user.isAnonymous;\n        var uid = user.uid;\n        var providerData = user.providerData;\n        console.log(user); // if (localStorage.yourObject==\"null\") {\n\n        localStorage.yourObject = JSON.stringify(user, null, ' '); //window.location.href=\"/html/profile.html\";\n        // }\n      }\n    }); // [END authstatelistener]\n    //document.getElementById('quickstart-sign-in').addEventListener('click', this.toggleSignIn, false);\n  }\n\n  render() {\n    this.initApp();\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"mt-24\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"flex flex-row justify-center\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      ref: this.element,\n      className: \"p-12 bg-white rounded shadow-lg rounded\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n      className: \"my-6\"\n    }, \"Username or e-mail\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      className: \"w-64 my-6 bg-gray-100 p-4\",\n      placeholder: \"username/email\",\n      id: \"email\",\n      type: \"text\"\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n      className: \"my-6\"\n    }, \"Password\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      className: \"w-64 my-6 bg-gray-100 p-4\",\n      placeholder: \"password\",\n      id: \"password\",\n      type: \"password\"\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n      type: \"submit\",\n      className: \"btn btn-indigo w-full\",\n      id: \"quickstart-sign-in\"\n    }, \"login\"))));\n  }\n\n  handleEvent(e) {\n    var email = document.getElementById('email').value;\n    var password = document.getElementById('password').value; // console.log(password);\n    // console.log(email);\n\n    e.target.id === 'quickstart-sign-in' && this.toggleSignIn(email, password);\n  }\n\n}\n\n//# sourceURL=webpack:///./src/pages/LoginPage/index.js?");

/***/ }),

/***/ "./src/pages/P2PPage/index.js":
/*!************************************!*\
  !*** ./src/pages/P2PPage/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return P2PPage; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_stripe_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-stripe-elements */ \"react-stripe-elements\");\n/* harmony import */ var react_stripe_elements__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_stripe_elements__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_CheckoutForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../components/CheckoutForm */ \"./src/components/CheckoutForm/index.js\");\n\n\n\nclass P2PPage extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor() {\n    super();\n    this.state = {\n      stripe: null\n    };\n  }\n\n  componentDidMount() {\n    if (window.Stripe) {\n      this.setState({\n        stripe: window.Stripe('pk_test_bEa1MzXESTbRKCAgrpCjmHH000IrRQU0TB')\n      });\n    } else {\n      document.querySelector('#stripe-js').addEventListener('load', () => {\n        // Create Stripe instance once Stripe.js loads\n        this.setState({\n          stripe: window.Stripe('pk_test_bEa1MzXESTbRKCAgrpCjmHH000IrRQU0TB')\n        });\n      });\n    }\n  }\n\n  render() {\n    if (!this.state.stripe) {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null);\n    }\n\n    const paymentRequest = this.state.stripe.paymentRequest({\n      country: 'US',\n      currency: 'usd',\n      total: {\n        label: 'Demo payment request',\n        amount: 25\n      },\n      requestPayerName: true,\n      requestPayerEmail: true\n    });\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"my-24\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"p-6 bg-white rounded-lg shadow-lg\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n      className: \"text-2xl\"\n    }, \" \", \"Weplay Pro\", \" \"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n      className: \"text-2xl\"\n    }, \" \", \"20$\", \" \"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_stripe_elements__WEBPACK_IMPORTED_MODULE_1__[\"StripeProvider\"], {\n      stripe: this.state.stripe,\n      className: \"pt-16\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_stripe_elements__WEBPACK_IMPORTED_MODULE_1__[\"Elements\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_CheckoutForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      price: \"20\",\n      paymentRequest: paymentRequest\n    })))));\n  }\n\n}\n\n//# sourceURL=webpack:///./src/pages/P2PPage/index.js?");

/***/ }),

/***/ "./src/pages/Samvid/index.js":
/*!***********************************!*\
  !*** ./src/pages/Samvid/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Samvid; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nclass Samvid extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  render() {\n    console.log(\"We out hea!\");\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, \"Samvid is the best!\")) // <div className={`mt-24`}>\n    //     {/* <Helmet>\n    //         <script src=\"http://192.168.0.99:8097\"></script>\n    //     </Helmet> */}\n    //     <div className={`flex flex-row justify-center`}>\n    //         <div ref={this.element} className={`p-12 bg-white rounded shadow-lg rounded`}>\n    //             <label className={`my-6`}>{\"Username or e-mail\"}</label>\n    //             <br />\n    //             <input className={`w-64 my-6 bg-gray-100 p-4`} placeholder={`username/email`} id={`email`} type=\"text\"></input>\n    //             <br />\n    //             <label className={`my-6`}>{\"Password\"}</label>\n    //             <br />\n    //             <input className={`w-64 my-6 bg-gray-100 p-4`} placeholder={`password`} id={`password`} type=\"password\"></input>\n    //             <br />\n    //             <button type=\"submit\" className={`btn btn-indigo w-full`} id={`quickstart-sign-in`} >login</button>\n    //         </div>\n    //     </div>\n    // </div>\n    ;\n  }\n\n}\n\n//# sourceURL=webpack:///./src/pages/Samvid/index.js?");

/***/ }),

/***/ "./src/pages/SignupPage/index.js":
/*!***************************************!*\
  !*** ./src/pages/SignupPage/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SignupPage; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_1__);\n\n\nclass SignupPage extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(props) {\n    super(props);\n    this.element = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();\n  }\n\n  componentDidMount() {\n    const button = document.getElementById('signUp');\n    button.addEventListener('click', this.handleSignUp);\n  }\n\n  sendEmailVerification() {\n    firebase_app__WEBPACK_IMPORTED_MODULE_1__[\"auth\"]().currentUser.sendEmailVerification().then(function () {\n      alert('Email Verification Sent!');\n    });\n  }\n\n  handleSignUp() {\n    var email = document.getElementById('email').value;\n    var password = document.getElementById('password').value;\n    var c_password = document.getElementById('conf_password').value;\n\n    if (email.length < 4) {\n      alert('Please enter an email address.');\n      return;\n    }\n\n    if (password.length < 4) {\n      alert('Please enter a password.');\n      return;\n    }\n\n    if (c_password != password) {\n      alert('Passwords do not match.');\n      return;\n    } // Sign in with email and pass.\n\n\n    firebase_app__WEBPACK_IMPORTED_MODULE_1__[\"auth\"]().createUserWithEmailAndPassword(email, password).catch(function (error) {\n      // Handle Errors here.\n      var errorCode = error.code;\n      var errorMessage = error.message;\n\n      if (errorCode == 'auth/weak-password') {\n        alert('The password is too weak.');\n      } else {\n        alert(errorMessage);\n      }\n\n      console.log(error);\n    });\n    this.sendEmailVerification(); // window.location.href=\"/html/profile.html\";\n  }\n\n  initApp() {\n    // Listening for auth state changes.\n    firebase_app__WEBPACK_IMPORTED_MODULE_1__[\"auth\"]().onAuthStateChanged(function (user) {\n      if (user) {\n        // User is signed in.\n        var displayName = user.displayName;\n        var email = user.email;\n        var emailVerified = user.emailVerified;\n        var photoURL = user.photoURL;\n        var isAnonymous = user.isAnonymous;\n        var uid = user.uid;\n        var providerData = user.providerData;\n        localStorage.yourObject = JSON.stringify(user, null, ' '); //window.location.href=\"/html/profile.html\";\n        // }\n      }\n    });\n  }\n\n  render() {\n    this.initApp();\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"mt-24\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"flex flex-row justify-center\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n      className: \"p-12 bg-white rounded shadow-lg rounded\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, \"Username/e-mail: \"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      placeholder: \"username/e-mail\",\n      className: \"w-64 my-6 bg-gray-100 p-4\",\n      id: \"email\",\n      type: \"text\"\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, \"Password: \"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      placeholder: \"password\",\n      className: \"w-64 my-6 bg-gray-100 p-4\",\n      id: \"password\",\n      type: \"password\"\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, \"Confirm Password: \"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      placeholder: \"confirm password\",\n      className: \"w-64 my-6 bg-gray-100 p-4\",\n      id: \"conf_password\",\n      type: \"password\"\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n      type: \"submit\",\n      className: \"btn btn-indigo w-full\",\n      id: \"signUp\"\n    }, \"Signup\"))));\n  }\n\n}\n\n//# sourceURL=webpack:///./src/pages/SignupPage/index.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "firebase":
/*!***************************!*\
  !*** external "firebase" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"firebase\");\n\n//# sourceURL=webpack:///external_%22firebase%22?");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"firebase/app\");\n\n//# sourceURL=webpack:///external_%22firebase/app%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "google-maps-react":
/*!************************************!*\
  !*** external "google-maps-react" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"google-maps-react\");\n\n//# sourceURL=webpack:///external_%22google-maps-react%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");\n\n//# sourceURL=webpack:///external_%22prop-types%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-helmet\");\n\n//# sourceURL=webpack:///external_%22react-helmet%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "react-stripe-elements":
/*!****************************************!*\
  !*** external "react-stripe-elements" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-stripe-elements\");\n\n//# sourceURL=webpack:///external_%22react-stripe-elements%22?");

/***/ })

/******/ });