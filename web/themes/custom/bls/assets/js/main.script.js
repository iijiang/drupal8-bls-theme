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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/block/block.scss":
/*!*****************************************!*\
  !*** ./src/components/block/block.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/components/breadcrumb/_breadcrumb.scss":
/*!****************************************************!*\
  !*** ./src/components/breadcrumb/_breadcrumb.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/components/button/button.scss":
/*!*******************************************!*\
  !*** ./src/components/button/button.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/components/dropdown/_dropdown.scss":
/*!************************************************!*\
  !*** ./src/components/dropdown/_dropdown.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/components/logo/_logo.scss":
/*!****************************************!*\
  !*** ./src/components/logo/_logo.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/components/nav/_nav.scss":
/*!**************************************!*\
  !*** ./src/components/nav/_nav.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/components/navbar/_navbar.scss":
/*!********************************************!*\
  !*** ./src/components/navbar/_navbar.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/components/node/_node.scss":
/*!****************************************!*\
  !*** ./src/components/node/_node.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/components/page/_page.scss":
/*!****************************************!*\
  !*** ./src/components/page/_page.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/components/section/_section.scss":
/*!**********************************************!*\
  !*** ./src/components/section/_section.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/components/title/_title.scss":
/*!******************************************!*\
  !*** ./src/components/title/_title.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/js/main.script.js":
/*!*******************************!*\
  !*** ./src/js/main.script.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polyfill */ "./src/js/polyfill.js");
/* harmony import */ var _polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_polyfill__WEBPACK_IMPORTED_MODULE_0__);




(function ($) {
  // Responsive check helper:
  // USAGE: if (Drupal.device.isMobile()) {}
  Drupal.device = {
    isDesktop: function isDesktop() {
      return $(window).innerWidth() > 980;
    },
    isTablet: function isTablet() {
      return $(window).innerWidth() <= 980 && $(window).innerWidth() > 728;
    },
    isMobile: function isMobile() {
      return $(window).innerWidth() <= 728;
    }
  };
})(jQuery, Drupal);

/***/ }),

/***/ "./src/js/polyfill.js":
/*!****************************!*\
  !*** ./src/js/polyfill.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Add your JS/node package pollyfills here

/***/ }),

/***/ "./src/sass/main.style.scss":
/*!**********************************!*\
  !*** ./src/sass/main.style.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./src/js/main.script.js ./src/sass/main.style.scss ./src/components/block/block.scss ./src/components/breadcrumb/_breadcrumb.scss ./src/components/button/button.scss ./src/components/dropdown/_dropdown.scss ./src/components/logo/_logo.scss ./src/components/nav/_nav.scss ./src/components/navbar/_navbar.scss ./src/components/node/_node.scss ./src/components/page/_page.scss ./src/components/section/_section.scss ./src/components/title/_title.scss ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /var/www/html/web/themes/custom/bls/src/js/main.script.js */"./src/js/main.script.js");
__webpack_require__(/*! /var/www/html/web/themes/custom/bls/src/sass/main.style.scss */"./src/sass/main.style.scss");
__webpack_require__(/*! /var/www/html/web/themes/custom/bls/src/components/block/block.scss */"./src/components/block/block.scss");
__webpack_require__(/*! /var/www/html/web/themes/custom/bls/src/components/breadcrumb/_breadcrumb.scss */"./src/components/breadcrumb/_breadcrumb.scss");
__webpack_require__(/*! /var/www/html/web/themes/custom/bls/src/components/button/button.scss */"./src/components/button/button.scss");
__webpack_require__(/*! /var/www/html/web/themes/custom/bls/src/components/dropdown/_dropdown.scss */"./src/components/dropdown/_dropdown.scss");
__webpack_require__(/*! /var/www/html/web/themes/custom/bls/src/components/logo/_logo.scss */"./src/components/logo/_logo.scss");
__webpack_require__(/*! /var/www/html/web/themes/custom/bls/src/components/nav/_nav.scss */"./src/components/nav/_nav.scss");
__webpack_require__(/*! /var/www/html/web/themes/custom/bls/src/components/navbar/_navbar.scss */"./src/components/navbar/_navbar.scss");
__webpack_require__(/*! /var/www/html/web/themes/custom/bls/src/components/node/_node.scss */"./src/components/node/_node.scss");
__webpack_require__(/*! /var/www/html/web/themes/custom/bls/src/components/page/_page.scss */"./src/components/page/_page.scss");
__webpack_require__(/*! /var/www/html/web/themes/custom/bls/src/components/section/_section.scss */"./src/components/section/_section.scss");
module.exports = __webpack_require__(/*! /var/www/html/web/themes/custom/bls/src/components/title/_title.scss */"./src/components/title/_title.scss");


/***/ })

/******/ });