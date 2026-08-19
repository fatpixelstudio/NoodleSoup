/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/domready/ready.js":
/*!****************************************!*\
  !*** ./node_modules/domready/ready.js ***!
  \****************************************/
/***/ (function(module) {

/*!
  * domready (c) Dustin Diaz 2014 - License MIT
  */
!function (name, definition) {

  if (true) module.exports = definition()
  else // removed by dead control flow
{}

}('domready', function () {

  var fns = [], listener
    , doc = document
    , hack = doc.documentElement.doScroll
    , domContentLoaded = 'DOMContentLoaded'
    , loaded = (hack ? /^loaded|^c/ : /^loaded|^i|^c/).test(doc.readyState)


  if (!loaded)
  doc.addEventListener(domContentLoaded, listener = function () {
    doc.removeEventListener(domContentLoaded, listener)
    loaded = 1
    while (listener = fns.shift()) listener()
  })

  return function (fn) {
    loaded ? setTimeout(fn, 0) : fns.push(fn)
  }

});


/***/ }),

/***/ "./node_modules/fontfaceobserver/fontfaceobserver.standalone.js":
/*!**********************************************************************!*\
  !*** ./node_modules/fontfaceobserver/fontfaceobserver.standalone.js ***!
  \**********************************************************************/
/***/ (function(module) {

/* Font Face Observer v2.3.0 - © Bram Stein. License: BSD-3-Clause */(function(){function p(a,c){document.addEventListener?a.addEventListener("scroll",c,!1):a.attachEvent("scroll",c)}function u(a){document.body?a():document.addEventListener?document.addEventListener("DOMContentLoaded",function b(){document.removeEventListener("DOMContentLoaded",b);a()}):document.attachEvent("onreadystatechange",function g(){if("interactive"==document.readyState||"complete"==document.readyState)document.detachEvent("onreadystatechange",g),a()})};function w(a){this.g=document.createElement("div");this.g.setAttribute("aria-hidden","true");this.g.appendChild(document.createTextNode(a));this.h=document.createElement("span");this.i=document.createElement("span");this.m=document.createElement("span");this.j=document.createElement("span");this.l=-1;this.h.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.i.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
this.j.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.m.style.cssText="display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;";this.h.appendChild(this.m);this.i.appendChild(this.j);this.g.appendChild(this.h);this.g.appendChild(this.i)}
function x(a,c){a.g.style.cssText="max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:"+c+";"}function B(a){var c=a.g.offsetWidth,b=c+100;a.j.style.width=b+"px";a.i.scrollLeft=b;a.h.scrollLeft=a.h.scrollWidth+100;return a.l!==c?(a.l=c,!0):!1}function C(a,c){function b(){var e=g;B(e)&&null!==e.g.parentNode&&c(e.l)}var g=a;p(a.h,b);p(a.i,b);B(a)};function D(a,c,b){c=c||{};b=b||window;this.family=a;this.style=c.style||"normal";this.weight=c.weight||"normal";this.stretch=c.stretch||"normal";this.context=b}var E=null,F=null,G=null,H=null;function I(a){null===F&&(M(a)&&/Apple/.test(window.navigator.vendor)?(a=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent),F=!!a&&603>parseInt(a[1],10)):F=!1);return F}function M(a){null===H&&(H=!!a.document.fonts);return H}
function N(a,c){var b=a.style,g=a.weight;if(null===G){var e=document.createElement("div");try{e.style.font="condensed 100px sans-serif"}catch(q){}G=""!==e.style.font}return[b,g,G?a.stretch:"","100px",c].join(" ")}
D.prototype.load=function(a,c){var b=this,g=a||"BESbswy",e=0,q=c||3E3,J=(new Date).getTime();return new Promise(function(K,L){if(M(b.context)&&!I(b.context)){var O=new Promise(function(r,t){function h(){(new Date).getTime()-J>=q?t(Error(""+q+"ms timeout exceeded")):b.context.document.fonts.load(N(b,'"'+b.family+'"'),g).then(function(n){1<=n.length?r():setTimeout(h,25)},t)}h()}),P=new Promise(function(r,t){e=setTimeout(function(){t(Error(""+q+"ms timeout exceeded"))},q)});Promise.race([P,O]).then(function(){clearTimeout(e);
K(b)},L)}else u(function(){function r(){var d;if(d=-1!=k&&-1!=l||-1!=k&&-1!=m||-1!=l&&-1!=m)(d=k!=l&&k!=m&&l!=m)||(null===E&&(d=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent),E=!!d&&(536>parseInt(d[1],10)||536===parseInt(d[1],10)&&11>=parseInt(d[2],10))),d=E&&(k==y&&l==y&&m==y||k==z&&l==z&&m==z||k==A&&l==A&&m==A)),d=!d;d&&(null!==f.parentNode&&f.parentNode.removeChild(f),clearTimeout(e),K(b))}function t(){if((new Date).getTime()-J>=q)null!==f.parentNode&&f.parentNode.removeChild(f),
L(Error(""+q+"ms timeout exceeded"));else{var d=b.context.document.hidden;if(!0===d||void 0===d)k=h.g.offsetWidth,l=n.g.offsetWidth,m=v.g.offsetWidth,r();e=setTimeout(t,50)}}var h=new w(g),n=new w(g),v=new w(g),k=-1,l=-1,m=-1,y=-1,z=-1,A=-1,f=document.createElement("div");f.dir="ltr";x(h,N(b,"sans-serif"));x(n,N(b,"serif"));x(v,N(b,"monospace"));f.appendChild(h.g);f.appendChild(n.g);f.appendChild(v.g);b.context.document.body.appendChild(f);y=h.g.offsetWidth;z=n.g.offsetWidth;A=v.g.offsetWidth;t();
C(h,function(d){k=d;r()});x(h,N(b,'"'+b.family+'",sans-serif'));C(n,function(d){l=d;r()});x(n,N(b,'"'+b.family+'",serif'));C(v,function(d){m=d;r()});x(v,N(b,'"'+b.family+'",monospace'))})})}; true?module.exports=D:(0);}());


/***/ }),

/***/ "./src/styles/main.styles.scss":
/*!*************************************!*\
  !*** ./src/styles/main.styles.scss ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scripts/modules/fontobserver/fontobserver.module.js":
/*!*****************************************************************!*\
  !*** ./src/scripts/modules/fontobserver/fontobserver.module.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fontfaceobserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fontfaceobserver */ "./node_modules/fontfaceobserver/fontfaceobserver.standalone.js");
/* harmony import */ var fontfaceobserver__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fontfaceobserver__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Fontobserver module
 *
 * More info: https://www.bramstein.com/writing/web-font-loading-patterns.html
 */



var FontObserverHandler = (function () {

	function init(){

		// If the class `fonts-loaded` is already set, we're good
		if(document.documentElement.className.indexOf('fonts-loaded') > -1 ) {
		// if (document.documentElement.classList.contains('fonts-loaded')) {
			return;
		}

		// Define the fonts and font variants to observed
		var roboto_book = new (fontfaceobserver__WEBPACK_IMPORTED_MODULE_0___default())('Roboto', {
			weight: 400
		});
		var roboto_bold = new (fontfaceobserver__WEBPACK_IMPORTED_MODULE_0___default())('Roboto', {
			weight: 700
		});

		// Loading groups of fonts with a timeout
		Promise.all([
			roboto_book.load(),
			roboto_bold.load()
		]).then(function () {
			document.documentElement.className += ' fonts-loaded';
			// document.documentElement.classList.add('fonts-loaded');
			enhance.cookie('fonts_loaded', 'true', 7);
			// console.log('Kawak fonts have loaded.');
		}).catch(function () {
			// document.documentElement.classList.add('fonts-failed');
			// console.info('Web fonts could not be loaded in time. Falling back to system fonts.');
		});

		// // Timer helper function
		// function timer(time) {
		// 	return new Promise(function (resolve, reject) {
		// 		setTimeout(reject, time);
		// 	});
		// }

		// // Loading groups of fonts with a timeout
		// Promise.race([
		// 	timer(3000),
		// 	kawak_light.load(),
		// 	kawak_regular.load()
		// ]).then(function () {
		// 	document.documentElement.className += ' fonts-loaded';
		// 	// document.documentElement.classList.add('fonts-loaded');
		// 	enhance.cookie('fonts_loaded', 'true', 7);
		// 	// console.info('Kawak fonts have loaded.');
		// }).catch(function () {
		// 	// document.documentElement.classList.add('fonts-failed');
		// 	console.info('Kawak fonts loading has timed out (> 3 sec.). Falling back to system fonts.');
		// });

		// // Prioritised loading
		// kawak_light.load().then(function () {
		// 	document.documentElement.className += ' kawak-light-loaded';
		// 	console.info('Kawak Light font has loaded.');

		// 	kawak_regular.load().then(function () {
		// 		document.documentElement.className += ' kawak-regular-loaded';
		// 		document.documentElement.className += ' fonts-loaded';
		// 		console.info('Kawak Regular font has loaded.');
		// 	});
		// });

	}

	/**
	 * Return public methods
	 */
	return {
		init: init
	};
})();

/* harmony default export */ __webpack_exports__["default"] = (FontObserverHandler);


/***/ }),

/***/ "./src/scripts/modules/navigation/navmain.module.js":
/*!**********************************************************!*\
  !*** ./src/scripts/modules/navigation/navmain.module.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_transitionend_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/transitionend.util */ "./src/scripts/utils/transitionend.util.js");
/**
 * Navigation module
 * Add accessible navigation toggle to .js-nav-main element
 *
 * Usage:
 * NavMain.init();
 */



var NavMain = (function () {

	var elements = {
		html: document.querySelector('html'),
		navEl: null,
		toggle: null,
		closeBtn: null,
	};

	var focusableSelectors = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

	function getFocusable() {
		return Array.from(elements.navEl.querySelectorAll(focusableSelectors));
	}

	function trapFocus(event) {
		var focusable = getFocusable();
		var first = focusable[0];
		var last = focusable[focusable.length - 1];

		if (event.key === 'Tab') {
			if (event.shiftKey) {
				if (document.activeElement === first) {
					event.preventDefault();
					last.focus();
				}
			} else {
				if (document.activeElement === last) {
					event.preventDefault();
					first.focus();
				}
			}
		}

		if (event.key === 'Escape') {
			closeNav();
		}
	}

	function openNav() {
		elements.html.classList.add('is-open-main-nav');
		elements.toggle.setAttribute('aria-expanded', 'true');
		document.addEventListener('keydown', trapFocus, false);

		var focusable = getFocusable();
		if (focusable.length) focusable[0].focus();
	}

	function closeNav() {
		elements.navEl.addEventListener(_utils_transitionend_util__WEBPACK_IMPORTED_MODULE_0__["default"], function endTransitionNavClose() {
			elements.html.classList.remove('is-closing-main-nav');
			elements.html.classList.remove('is-open-main-nav');
			this.removeEventListener(_utils_transitionend_util__WEBPACK_IMPORTED_MODULE_0__["default"], endTransitionNavClose, false);
		}, false);

		elements.html.classList.add('is-closing-main-nav');
		elements.toggle.setAttribute('aria-expanded', 'false');
		document.removeEventListener('keydown', trapFocus, false);
		elements.toggle.focus();
	}

	function init() {
		elements.toggle  = document.querySelector('.js-nav-main-toggle');
		elements.closeBtn = document.querySelector('.js-nav-main-close');
		elements.navEl   = document.querySelector('.js-nav-main');

		if (!elements.navEl || !elements.toggle) return;

		elements.toggle.addEventListener('click', openNav, false);
		if (elements.closeBtn) elements.closeBtn.addEventListener('click', closeNav, false);
	}

	return {
		openNav: openNav,
		closeNav: closeNav,
		init: init,
	};
}());

/* harmony default export */ __webpack_exports__["default"] = (NavMain);


/***/ }),

/***/ "./src/scripts/modules/popups/popups.module.js":
/*!*****************************************************!*\
  !*** ./src/scripts/modules/popups/popups.module.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Popup window module
 *
 * Simple popupwindow
 * Use eventlistener that delegates to popup.openWindow to initiate
 * Between curly braces set custom height and width, or leave empty.
 * Goes a little something like this: {w: 400, h: 800}
 */

var Popup = (function () {

	function init() {
		var popuplinks = document.querySelectorAll('.js-popup');
		for (var i = 0; i < popuplinks.length; i++) {
			if (popuplinks[i] !== null) {
				popuplinks[i].addEventListener('click', Popup.openWindow, false);
			}
		}

	}

	function openWindow(event){
		var url = event.currentTarget.getAttribute('href');
		window.open(url, 'popupwin', 'height=800,width=650,resizable=1,toolbar=0,menubar=0,status=0,location=0,scrollbars=1');
		event.preventDefault();
	}

	/**
	 * Return public methods
	 */
	return {
		openWindow: openWindow,
		init: init
	};
})();

/* harmony default export */ __webpack_exports__["default"] = (Popup);


/***/ }),

/***/ "./src/scripts/utils/transitionend.util.js":
/*!*************************************************!*\
  !*** ./src/scripts/utils/transitionend.util.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Initialize a variable with the right transitionEnd prefix based on the support in the browser.
 *
 * Use it like this:
 * element.addEventListener(transitionEnd, theFunctionToInvoke, false);
 *
 * Or:
 * notification.on(transitionEnd, theFunctionToInvoke);
 */

function whichTransitionEvent(){
	var t;
	var el = document.createElement('fakeelement');
	var transitions = {
		'transition':'transitionend',
		'OTransition':'oTransitionEnd',
		'MozTransition':'transitionend',
		'WebkitTransition':'webkitTransitionEnd'
	};

	for(t in transitions){
		if( el.style[t] !== undefined ){
			return transitions[t];
		}
	}
}

var transitionEnd = whichTransitionEvent();

/* harmony default export */ __webpack_exports__["default"] = (transitionEnd);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter/value functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			if(Array.isArray(definition)) {
/******/ 				var i = 0;
/******/ 				while(i < definition.length) {
/******/ 					var key = definition[i++];
/******/ 					var binding = definition[i++];
/******/ 					if(!__webpack_require__.o(exports, key)) {
/******/ 						if(binding === 0) {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, value: definition[i++] });
/******/ 						} else {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, get: binding });
/******/ 						}
/******/ 					} else if(binding === 0) { i++; }
/******/ 				}
/******/ 			} else {
/******/ 				for(var key in definition) {
/******/ 					if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 						Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
!function() {
"use strict";
/*!*************************************!*\
  !*** ./src/scripts/main.scripts.js ***!
  \*************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/main.styles.scss */ "./src/styles/main.styles.scss");
/* harmony import */ var domready__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! domready */ "./node_modules/domready/ready.js");
/* harmony import */ var domready__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(domready__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_fontobserver_fontobserver_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/fontobserver/fontobserver.module */ "./src/scripts/modules/fontobserver/fontobserver.module.js");
/* harmony import */ var _modules_navigation_navmain_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/navigation/navmain.module */ "./src/scripts/modules/navigation/navmain.module.js");
/* harmony import */ var _modules_popups_popups_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/popups/popups.module */ "./src/scripts/modules/popups/popups.module.js");


// Import plugins and utils

// import loadJS from './utils/loadjs.util';

// Import Fontobserver module


// Import other modules



function isIE() {
    // IE 10 and IE 11
    return /Trident\/|MSIE/.test(window.navigator.userAgent);
}

domready__WEBPACK_IMPORTED_MODULE_1___default()(function () {
	if (isIE()) {
		var body = document.querySelector('body');
		var oldiemessage = document.createElement('p');
		oldiemessage.classList.add('oldie-message');
		oldiemessage.innerHTML = 'Let op! U gebruikt Internet Explorer 11 of lager (een <strong>sterk verouderd</strong> internetprogramma) om deze website te bekijken. <br /> <a href="http://browsehappy.com/">Download gratis een snellere en veiligere versie</a> om deze website optimaal te ervaren.';
		body.insertBefore(oldiemessage, body.firstChild);
		return false;
	}

	_modules_fontobserver_fontobserver_module__WEBPACK_IMPORTED_MODULE_2__["default"].init();
	_modules_navigation_navmain_module__WEBPACK_IMPORTED_MODULE_3__["default"].init();
	_modules_popups_popups_module__WEBPACK_IMPORTED_MODULE_4__["default"].init();

	console.log('main scripts loaded!');
});

}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNQQTs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDcEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3pGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUN0QkE7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9vZGxlc291cC8uL25vZGVfbW9kdWxlcy9kb21yZWFkeS9yZWFkeS5qcyIsIndlYnBhY2s6Ly9ub29kbGVzb3VwLy4vbm9kZV9tb2R1bGVzL2ZvbnRmYWNlb2JzZXJ2ZXIvZm9udGZhY2VvYnNlcnZlci5zdGFuZGFsb25lLmpzIiwid2VicGFjazovL25vb2RsZXNvdXAvLi9zcmMvc3R5bGVzL21haW4uc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vbm9vZGxlc291cC8uL3NyYy9zY3JpcHRzL21vZHVsZXMvZm9udG9ic2VydmVyL2ZvbnRvYnNlcnZlci5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vbm9vZGxlc291cC8uL3NyYy9zY3JpcHRzL21vZHVsZXMvbmF2aWdhdGlvbi9uYXZtYWluLm1vZHVsZS5qcyIsIndlYnBhY2s6Ly9ub29kbGVzb3VwLy4vc3JjL3NjcmlwdHMvbW9kdWxlcy9wb3B1cHMvcG9wdXBzLm1vZHVsZS5qcyIsIndlYnBhY2s6Ly9ub29kbGVzb3VwLy4vc3JjL3NjcmlwdHMvdXRpbHMvdHJhbnNpdGlvbmVuZC51dGlsLmpzIiwid2VicGFjazovL25vb2RsZXNvdXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbm9vZGxlc291cC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9ub29kbGVzb3VwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9ub29kbGVzb3VwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbm9vZGxlc291cC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL25vb2RsZXNvdXAvLi9zcmMvc2NyaXB0cy9tYWluLnNjcmlwdHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gICogZG9tcmVhZHkgKGMpIER1c3RpbiBEaWF6IDIwMTQgLSBMaWNlbnNlIE1JVFxuICAqL1xuIWZ1bmN0aW9uIChuYW1lLCBkZWZpbml0aW9uKSB7XG5cbiAgaWYgKHR5cGVvZiBtb2R1bGUgIT0gJ3VuZGVmaW5lZCcpIG1vZHVsZS5leHBvcnRzID0gZGVmaW5pdGlvbigpXG4gIGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PSAnb2JqZWN0JykgZGVmaW5lKGRlZmluaXRpb24pXG4gIGVsc2UgdGhpc1tuYW1lXSA9IGRlZmluaXRpb24oKVxuXG59KCdkb21yZWFkeScsIGZ1bmN0aW9uICgpIHtcblxuICB2YXIgZm5zID0gW10sIGxpc3RlbmVyXG4gICAgLCBkb2MgPSBkb2N1bWVudFxuICAgICwgaGFjayA9IGRvYy5kb2N1bWVudEVsZW1lbnQuZG9TY3JvbGxcbiAgICAsIGRvbUNvbnRlbnRMb2FkZWQgPSAnRE9NQ29udGVudExvYWRlZCdcbiAgICAsIGxvYWRlZCA9IChoYWNrID8gL15sb2FkZWR8XmMvIDogL15sb2FkZWR8Xml8XmMvKS50ZXN0KGRvYy5yZWFkeVN0YXRlKVxuXG5cbiAgaWYgKCFsb2FkZWQpXG4gIGRvYy5hZGRFdmVudExpc3RlbmVyKGRvbUNvbnRlbnRMb2FkZWQsIGxpc3RlbmVyID0gZnVuY3Rpb24gKCkge1xuICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKGRvbUNvbnRlbnRMb2FkZWQsIGxpc3RlbmVyKVxuICAgIGxvYWRlZCA9IDFcbiAgICB3aGlsZSAobGlzdGVuZXIgPSBmbnMuc2hpZnQoKSkgbGlzdGVuZXIoKVxuICB9KVxuXG4gIHJldHVybiBmdW5jdGlvbiAoZm4pIHtcbiAgICBsb2FkZWQgPyBzZXRUaW1lb3V0KGZuLCAwKSA6IGZucy5wdXNoKGZuKVxuICB9XG5cbn0pO1xuIiwiLyogRm9udCBGYWNlIE9ic2VydmVyIHYyLjMuMCAtIMKpIEJyYW0gU3RlaW4uIExpY2Vuc2U6IEJTRC0zLUNsYXVzZSAqLyhmdW5jdGlvbigpe2Z1bmN0aW9uIHAoYSxjKXtkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyP2EuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLGMsITEpOmEuYXR0YWNoRXZlbnQoXCJzY3JvbGxcIixjKX1mdW5jdGlvbiB1KGEpe2RvY3VtZW50LmJvZHk/YSgpOmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXI/ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixmdW5jdGlvbiBiKCl7ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixiKTthKCl9KTpkb2N1bWVudC5hdHRhY2hFdmVudChcIm9ucmVhZHlzdGF0ZWNoYW5nZVwiLGZ1bmN0aW9uIGcoKXtpZihcImludGVyYWN0aXZlXCI9PWRvY3VtZW50LnJlYWR5U3RhdGV8fFwiY29tcGxldGVcIj09ZG9jdW1lbnQucmVhZHlTdGF0ZSlkb2N1bWVudC5kZXRhY2hFdmVudChcIm9ucmVhZHlzdGF0ZWNoYW5nZVwiLGcpLGEoKX0pfTtmdW5jdGlvbiB3KGEpe3RoaXMuZz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3RoaXMuZy5zZXRBdHRyaWJ1dGUoXCJhcmlhLWhpZGRlblwiLFwidHJ1ZVwiKTt0aGlzLmcuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYSkpO3RoaXMuaD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTt0aGlzLmk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7dGhpcy5tPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO3RoaXMuaj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTt0aGlzLmw9LTE7dGhpcy5oLnN0eWxlLmNzc1RleHQ9XCJtYXgtd2lkdGg6bm9uZTtkaXNwbGF5OmlubGluZS1ibG9jaztwb3NpdGlvbjphYnNvbHV0ZTtoZWlnaHQ6MTAwJTt3aWR0aDoxMDAlO292ZXJmbG93OnNjcm9sbDtmb250LXNpemU6MTZweDtcIjt0aGlzLmkuc3R5bGUuY3NzVGV4dD1cIm1heC13aWR0aDpub25lO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3Bvc2l0aW9uOmFic29sdXRlO2hlaWdodDoxMDAlO3dpZHRoOjEwMCU7b3ZlcmZsb3c6c2Nyb2xsO2ZvbnQtc2l6ZToxNnB4O1wiO1xudGhpcy5qLnN0eWxlLmNzc1RleHQ9XCJtYXgtd2lkdGg6bm9uZTtkaXNwbGF5OmlubGluZS1ibG9jaztwb3NpdGlvbjphYnNvbHV0ZTtoZWlnaHQ6MTAwJTt3aWR0aDoxMDAlO292ZXJmbG93OnNjcm9sbDtmb250LXNpemU6MTZweDtcIjt0aGlzLm0uc3R5bGUuY3NzVGV4dD1cImRpc3BsYXk6aW5saW5lLWJsb2NrO3dpZHRoOjIwMCU7aGVpZ2h0OjIwMCU7Zm9udC1zaXplOjE2cHg7bWF4LXdpZHRoOm5vbmU7XCI7dGhpcy5oLmFwcGVuZENoaWxkKHRoaXMubSk7dGhpcy5pLmFwcGVuZENoaWxkKHRoaXMuaik7dGhpcy5nLmFwcGVuZENoaWxkKHRoaXMuaCk7dGhpcy5nLmFwcGVuZENoaWxkKHRoaXMuaSl9XG5mdW5jdGlvbiB4KGEsYyl7YS5nLnN0eWxlLmNzc1RleHQ9XCJtYXgtd2lkdGg6bm9uZTttaW4td2lkdGg6MjBweDttaW4taGVpZ2h0OjIwcHg7ZGlzcGxheTppbmxpbmUtYmxvY2s7b3ZlcmZsb3c6aGlkZGVuO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOmF1dG87bWFyZ2luOjA7cGFkZGluZzowO3RvcDotOTk5cHg7d2hpdGUtc3BhY2U6bm93cmFwO2ZvbnQtc3ludGhlc2lzOm5vbmU7Zm9udDpcIitjK1wiO1wifWZ1bmN0aW9uIEIoYSl7dmFyIGM9YS5nLm9mZnNldFdpZHRoLGI9YysxMDA7YS5qLnN0eWxlLndpZHRoPWIrXCJweFwiO2EuaS5zY3JvbGxMZWZ0PWI7YS5oLnNjcm9sbExlZnQ9YS5oLnNjcm9sbFdpZHRoKzEwMDtyZXR1cm4gYS5sIT09Yz8oYS5sPWMsITApOiExfWZ1bmN0aW9uIEMoYSxjKXtmdW5jdGlvbiBiKCl7dmFyIGU9ZztCKGUpJiZudWxsIT09ZS5nLnBhcmVudE5vZGUmJmMoZS5sKX12YXIgZz1hO3AoYS5oLGIpO3AoYS5pLGIpO0IoYSl9O2Z1bmN0aW9uIEQoYSxjLGIpe2M9Y3x8e307Yj1ifHx3aW5kb3c7dGhpcy5mYW1pbHk9YTt0aGlzLnN0eWxlPWMuc3R5bGV8fFwibm9ybWFsXCI7dGhpcy53ZWlnaHQ9Yy53ZWlnaHR8fFwibm9ybWFsXCI7dGhpcy5zdHJldGNoPWMuc3RyZXRjaHx8XCJub3JtYWxcIjt0aGlzLmNvbnRleHQ9Yn12YXIgRT1udWxsLEY9bnVsbCxHPW51bGwsSD1udWxsO2Z1bmN0aW9uIEkoYSl7bnVsbD09PUYmJihNKGEpJiYvQXBwbGUvLnRlc3Qod2luZG93Lm5hdmlnYXRvci52ZW5kb3IpPyhhPS9BcHBsZVdlYktpdFxcLyhbMC05XSspKD86XFwuKFswLTldKykpKD86XFwuKFswLTldKykpLy5leGVjKHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KSxGPSEhYSYmNjAzPnBhcnNlSW50KGFbMV0sMTApKTpGPSExKTtyZXR1cm4gRn1mdW5jdGlvbiBNKGEpe251bGw9PT1IJiYoSD0hIWEuZG9jdW1lbnQuZm9udHMpO3JldHVybiBIfVxuZnVuY3Rpb24gTihhLGMpe3ZhciBiPWEuc3R5bGUsZz1hLndlaWdodDtpZihudWxsPT09Ryl7dmFyIGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTt0cnl7ZS5zdHlsZS5mb250PVwiY29uZGVuc2VkIDEwMHB4IHNhbnMtc2VyaWZcIn1jYXRjaChxKXt9Rz1cIlwiIT09ZS5zdHlsZS5mb250fXJldHVybltiLGcsRz9hLnN0cmV0Y2g6XCJcIixcIjEwMHB4XCIsY10uam9pbihcIiBcIil9XG5ELnByb3RvdHlwZS5sb2FkPWZ1bmN0aW9uKGEsYyl7dmFyIGI9dGhpcyxnPWF8fFwiQkVTYnN3eVwiLGU9MCxxPWN8fDNFMyxKPShuZXcgRGF0ZSkuZ2V0VGltZSgpO3JldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihLLEwpe2lmKE0oYi5jb250ZXh0KSYmIUkoYi5jb250ZXh0KSl7dmFyIE89bmV3IFByb21pc2UoZnVuY3Rpb24ocix0KXtmdW5jdGlvbiBoKCl7KG5ldyBEYXRlKS5nZXRUaW1lKCktSj49cT90KEVycm9yKFwiXCIrcStcIm1zIHRpbWVvdXQgZXhjZWVkZWRcIikpOmIuY29udGV4dC5kb2N1bWVudC5mb250cy5sb2FkKE4oYiwnXCInK2IuZmFtaWx5KydcIicpLGcpLnRoZW4oZnVuY3Rpb24obil7MTw9bi5sZW5ndGg/cigpOnNldFRpbWVvdXQoaCwyNSl9LHQpfWgoKX0pLFA9bmV3IFByb21pc2UoZnVuY3Rpb24ocix0KXtlPXNldFRpbWVvdXQoZnVuY3Rpb24oKXt0KEVycm9yKFwiXCIrcStcIm1zIHRpbWVvdXQgZXhjZWVkZWRcIikpfSxxKX0pO1Byb21pc2UucmFjZShbUCxPXSkudGhlbihmdW5jdGlvbigpe2NsZWFyVGltZW91dChlKTtcbksoYil9LEwpfWVsc2UgdShmdW5jdGlvbigpe2Z1bmN0aW9uIHIoKXt2YXIgZDtpZihkPS0xIT1rJiYtMSE9bHx8LTEhPWsmJi0xIT1tfHwtMSE9bCYmLTEhPW0pKGQ9ayE9bCYmayE9bSYmbCE9bSl8fChudWxsPT09RSYmKGQ9L0FwcGxlV2ViS2l0XFwvKFswLTldKykoPzpcXC4oWzAtOV0rKSkvLmV4ZWMod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpLEU9ISFkJiYoNTM2PnBhcnNlSW50KGRbMV0sMTApfHw1MzY9PT1wYXJzZUludChkWzFdLDEwKSYmMTE+PXBhcnNlSW50KGRbMl0sMTApKSksZD1FJiYoaz09eSYmbD09eSYmbT09eXx8az09eiYmbD09eiYmbT09enx8az09QSYmbD09QSYmbT09QSkpLGQ9IWQ7ZCYmKG51bGwhPT1mLnBhcmVudE5vZGUmJmYucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChmKSxjbGVhclRpbWVvdXQoZSksSyhiKSl9ZnVuY3Rpb24gdCgpe2lmKChuZXcgRGF0ZSkuZ2V0VGltZSgpLUo+PXEpbnVsbCE9PWYucGFyZW50Tm9kZSYmZi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGYpLFxuTChFcnJvcihcIlwiK3ErXCJtcyB0aW1lb3V0IGV4Y2VlZGVkXCIpKTtlbHNle3ZhciBkPWIuY29udGV4dC5kb2N1bWVudC5oaWRkZW47aWYoITA9PT1kfHx2b2lkIDA9PT1kKWs9aC5nLm9mZnNldFdpZHRoLGw9bi5nLm9mZnNldFdpZHRoLG09di5nLm9mZnNldFdpZHRoLHIoKTtlPXNldFRpbWVvdXQodCw1MCl9fXZhciBoPW5ldyB3KGcpLG49bmV3IHcoZyksdj1uZXcgdyhnKSxrPS0xLGw9LTEsbT0tMSx5PS0xLHo9LTEsQT0tMSxmPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7Zi5kaXI9XCJsdHJcIjt4KGgsTihiLFwic2Fucy1zZXJpZlwiKSk7eChuLE4oYixcInNlcmlmXCIpKTt4KHYsTihiLFwibW9ub3NwYWNlXCIpKTtmLmFwcGVuZENoaWxkKGguZyk7Zi5hcHBlbmRDaGlsZChuLmcpO2YuYXBwZW5kQ2hpbGQodi5nKTtiLmNvbnRleHQuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmKTt5PWguZy5vZmZzZXRXaWR0aDt6PW4uZy5vZmZzZXRXaWR0aDtBPXYuZy5vZmZzZXRXaWR0aDt0KCk7XG5DKGgsZnVuY3Rpb24oZCl7az1kO3IoKX0pO3goaCxOKGIsJ1wiJytiLmZhbWlseSsnXCIsc2Fucy1zZXJpZicpKTtDKG4sZnVuY3Rpb24oZCl7bD1kO3IoKX0pO3gobixOKGIsJ1wiJytiLmZhbWlseSsnXCIsc2VyaWYnKSk7Qyh2LGZ1bmN0aW9uKGQpe209ZDtyKCl9KTt4KHYsTihiLCdcIicrYi5mYW1pbHkrJ1wiLG1vbm9zcGFjZScpKX0pfSl9O1wib2JqZWN0XCI9PT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPUQ6KHdpbmRvdy5Gb250RmFjZU9ic2VydmVyPUQsd2luZG93LkZvbnRGYWNlT2JzZXJ2ZXIucHJvdG90eXBlLmxvYWQ9RC5wcm90b3R5cGUubG9hZCk7fSgpKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8qKlxuICogRm9udG9ic2VydmVyIG1vZHVsZVxuICpcbiAqIE1vcmUgaW5mbzogaHR0cHM6Ly93d3cuYnJhbXN0ZWluLmNvbS93cml0aW5nL3dlYi1mb250LWxvYWRpbmctcGF0dGVybnMuaHRtbFxuICovXG5cbmltcG9ydCBGb250RmFjZU9ic2VydmVyIGZyb20gXCJmb250ZmFjZW9ic2VydmVyXCI7XG5cbnZhciBGb250T2JzZXJ2ZXJIYW5kbGVyID0gKGZ1bmN0aW9uICgpIHtcblxuXHRmdW5jdGlvbiBpbml0KCl7XG5cblx0XHQvLyBJZiB0aGUgY2xhc3MgYGZvbnRzLWxvYWRlZGAgaXMgYWxyZWFkeSBzZXQsIHdlJ3JlIGdvb2Rcblx0XHRpZihkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NOYW1lLmluZGV4T2YoJ2ZvbnRzLWxvYWRlZCcpID4gLTEgKSB7XG5cdFx0Ly8gaWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2ZvbnRzLWxvYWRlZCcpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gRGVmaW5lIHRoZSBmb250cyBhbmQgZm9udCB2YXJpYW50cyB0byBvYnNlcnZlZFxuXHRcdHZhciByb2JvdG9fYm9vayA9IG5ldyBGb250RmFjZU9ic2VydmVyKCdSb2JvdG8nLCB7XG5cdFx0XHR3ZWlnaHQ6IDQwMFxuXHRcdH0pO1xuXHRcdHZhciByb2JvdG9fYm9sZCA9IG5ldyBGb250RmFjZU9ic2VydmVyKCdSb2JvdG8nLCB7XG5cdFx0XHR3ZWlnaHQ6IDcwMFxuXHRcdH0pO1xuXG5cdFx0Ly8gTG9hZGluZyBncm91cHMgb2YgZm9udHMgd2l0aCBhIHRpbWVvdXRcblx0XHRQcm9taXNlLmFsbChbXG5cdFx0XHRyb2JvdG9fYm9vay5sb2FkKCksXG5cdFx0XHRyb2JvdG9fYm9sZC5sb2FkKClcblx0XHRdKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc05hbWUgKz0gJyBmb250cy1sb2FkZWQnO1xuXHRcdFx0Ly8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2ZvbnRzLWxvYWRlZCcpO1xuXHRcdFx0ZW5oYW5jZS5jb29raWUoJ2ZvbnRzX2xvYWRlZCcsICd0cnVlJywgNyk7XG5cdFx0XHQvLyBjb25zb2xlLmxvZygnS2F3YWsgZm9udHMgaGF2ZSBsb2FkZWQuJyk7XG5cdFx0fSkuY2F0Y2goZnVuY3Rpb24gKCkge1xuXHRcdFx0Ly8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2ZvbnRzLWZhaWxlZCcpO1xuXHRcdFx0Ly8gY29uc29sZS5pbmZvKCdXZWIgZm9udHMgY291bGQgbm90IGJlIGxvYWRlZCBpbiB0aW1lLiBGYWxsaW5nIGJhY2sgdG8gc3lzdGVtIGZvbnRzLicpO1xuXHRcdH0pO1xuXG5cdFx0Ly8gLy8gVGltZXIgaGVscGVyIGZ1bmN0aW9uXG5cdFx0Ly8gZnVuY3Rpb24gdGltZXIodGltZSkge1xuXHRcdC8vIFx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcblx0XHQvLyBcdFx0c2V0VGltZW91dChyZWplY3QsIHRpbWUpO1xuXHRcdC8vIFx0fSk7XG5cdFx0Ly8gfVxuXG5cdFx0Ly8gLy8gTG9hZGluZyBncm91cHMgb2YgZm9udHMgd2l0aCBhIHRpbWVvdXRcblx0XHQvLyBQcm9taXNlLnJhY2UoW1xuXHRcdC8vIFx0dGltZXIoMzAwMCksXG5cdFx0Ly8gXHRrYXdha19saWdodC5sb2FkKCksXG5cdFx0Ly8gXHRrYXdha19yZWd1bGFyLmxvYWQoKVxuXHRcdC8vIF0pLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdC8vIFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTmFtZSArPSAnIGZvbnRzLWxvYWRlZCc7XG5cdFx0Ly8gXHQvLyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZm9udHMtbG9hZGVkJyk7XG5cdFx0Ly8gXHRlbmhhbmNlLmNvb2tpZSgnZm9udHNfbG9hZGVkJywgJ3RydWUnLCA3KTtcblx0XHQvLyBcdC8vIGNvbnNvbGUuaW5mbygnS2F3YWsgZm9udHMgaGF2ZSBsb2FkZWQuJyk7XG5cdFx0Ly8gfSkuY2F0Y2goZnVuY3Rpb24gKCkge1xuXHRcdC8vIFx0Ly8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2ZvbnRzLWZhaWxlZCcpO1xuXHRcdC8vIFx0Y29uc29sZS5pbmZvKCdLYXdhayBmb250cyBsb2FkaW5nIGhhcyB0aW1lZCBvdXQgKD4gMyBzZWMuKS4gRmFsbGluZyBiYWNrIHRvIHN5c3RlbSBmb250cy4nKTtcblx0XHQvLyB9KTtcblxuXHRcdC8vIC8vIFByaW9yaXRpc2VkIGxvYWRpbmdcblx0XHQvLyBrYXdha19saWdodC5sb2FkKCkudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0Ly8gXHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NOYW1lICs9ICcga2F3YWstbGlnaHQtbG9hZGVkJztcblx0XHQvLyBcdGNvbnNvbGUuaW5mbygnS2F3YWsgTGlnaHQgZm9udCBoYXMgbG9hZGVkLicpO1xuXG5cdFx0Ly8gXHRrYXdha19yZWd1bGFyLmxvYWQoKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHQvLyBcdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTmFtZSArPSAnIGthd2FrLXJlZ3VsYXItbG9hZGVkJztcblx0XHQvLyBcdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTmFtZSArPSAnIGZvbnRzLWxvYWRlZCc7XG5cdFx0Ly8gXHRcdGNvbnNvbGUuaW5mbygnS2F3YWsgUmVndWxhciBmb250IGhhcyBsb2FkZWQuJyk7XG5cdFx0Ly8gXHR9KTtcblx0XHQvLyB9KTtcblxuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybiBwdWJsaWMgbWV0aG9kc1xuXHQgKi9cblx0cmV0dXJuIHtcblx0XHRpbml0OiBpbml0XG5cdH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBGb250T2JzZXJ2ZXJIYW5kbGVyO1xuIiwiLyoqXG4gKiBOYXZpZ2F0aW9uIG1vZHVsZVxuICogQWRkIGFjY2Vzc2libGUgbmF2aWdhdGlvbiB0b2dnbGUgdG8gLmpzLW5hdi1tYWluIGVsZW1lbnRcbiAqXG4gKiBVc2FnZTpcbiAqIE5hdk1haW4uaW5pdCgpO1xuICovXG5cbmltcG9ydCB0cmFuc2l0aW9uRW5kIGZyb20gXCIuLi8uLi91dGlscy90cmFuc2l0aW9uZW5kLnV0aWxcIjtcblxudmFyIE5hdk1haW4gPSAoZnVuY3Rpb24gKCkge1xuXG5cdHZhciBlbGVtZW50cyA9IHtcblx0XHRodG1sOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdodG1sJyksXG5cdFx0bmF2RWw6IG51bGwsXG5cdFx0dG9nZ2xlOiBudWxsLFxuXHRcdGNsb3NlQnRuOiBudWxsLFxuXHR9O1xuXG5cdHZhciBmb2N1c2FibGVTZWxlY3RvcnMgPSAnYVtocmVmXSwgYnV0dG9uOm5vdChbZGlzYWJsZWRdKSwgW3RhYmluZGV4XTpub3QoW3RhYmluZGV4PVwiLTFcIl0pJztcblxuXHRmdW5jdGlvbiBnZXRGb2N1c2FibGUoKSB7XG5cdFx0cmV0dXJuIEFycmF5LmZyb20oZWxlbWVudHMubmF2RWwucXVlcnlTZWxlY3RvckFsbChmb2N1c2FibGVTZWxlY3RvcnMpKTtcblx0fVxuXG5cdGZ1bmN0aW9uIHRyYXBGb2N1cyhldmVudCkge1xuXHRcdHZhciBmb2N1c2FibGUgPSBnZXRGb2N1c2FibGUoKTtcblx0XHR2YXIgZmlyc3QgPSBmb2N1c2FibGVbMF07XG5cdFx0dmFyIGxhc3QgPSBmb2N1c2FibGVbZm9jdXNhYmxlLmxlbmd0aCAtIDFdO1xuXG5cdFx0aWYgKGV2ZW50LmtleSA9PT0gJ1RhYicpIHtcblx0XHRcdGlmIChldmVudC5zaGlmdEtleSkge1xuXHRcdFx0XHRpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gZmlyc3QpIHtcblx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdGxhc3QuZm9jdXMoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IGxhc3QpIHtcblx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdGZpcnN0LmZvY3VzKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoZXZlbnQua2V5ID09PSAnRXNjYXBlJykge1xuXHRcdFx0Y2xvc2VOYXYoKTtcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBvcGVuTmF2KCkge1xuXHRcdGVsZW1lbnRzLmh0bWwuY2xhc3NMaXN0LmFkZCgnaXMtb3Blbi1tYWluLW5hdicpO1xuXHRcdGVsZW1lbnRzLnRvZ2dsZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpO1xuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0cmFwRm9jdXMsIGZhbHNlKTtcblxuXHRcdHZhciBmb2N1c2FibGUgPSBnZXRGb2N1c2FibGUoKTtcblx0XHRpZiAoZm9jdXNhYmxlLmxlbmd0aCkgZm9jdXNhYmxlWzBdLmZvY3VzKCk7XG5cdH1cblxuXHRmdW5jdGlvbiBjbG9zZU5hdigpIHtcblx0XHRlbGVtZW50cy5uYXZFbC5hZGRFdmVudExpc3RlbmVyKHRyYW5zaXRpb25FbmQsIGZ1bmN0aW9uIGVuZFRyYW5zaXRpb25OYXZDbG9zZSgpIHtcblx0XHRcdGVsZW1lbnRzLmh0bWwuY2xhc3NMaXN0LnJlbW92ZSgnaXMtY2xvc2luZy1tYWluLW5hdicpO1xuXHRcdFx0ZWxlbWVudHMuaHRtbC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1vcGVuLW1haW4tbmF2Jyk7XG5cdFx0XHR0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIodHJhbnNpdGlvbkVuZCwgZW5kVHJhbnNpdGlvbk5hdkNsb3NlLCBmYWxzZSk7XG5cdFx0fSwgZmFsc2UpO1xuXG5cdFx0ZWxlbWVudHMuaHRtbC5jbGFzc0xpc3QuYWRkKCdpcy1jbG9zaW5nLW1haW4tbmF2Jyk7XG5cdFx0ZWxlbWVudHMudG9nZ2xlLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xuXHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0cmFwRm9jdXMsIGZhbHNlKTtcblx0XHRlbGVtZW50cy50b2dnbGUuZm9jdXMoKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGluaXQoKSB7XG5cdFx0ZWxlbWVudHMudG9nZ2xlICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1uYXYtbWFpbi10b2dnbGUnKTtcblx0XHRlbGVtZW50cy5jbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1uYXYtbWFpbi1jbG9zZScpO1xuXHRcdGVsZW1lbnRzLm5hdkVsICAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtbmF2LW1haW4nKTtcblxuXHRcdGlmICghZWxlbWVudHMubmF2RWwgfHwgIWVsZW1lbnRzLnRvZ2dsZSkgcmV0dXJuO1xuXG5cdFx0ZWxlbWVudHMudG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3Blbk5hdiwgZmFsc2UpO1xuXHRcdGlmIChlbGVtZW50cy5jbG9zZUJ0bikgZWxlbWVudHMuY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU5hdiwgZmFsc2UpO1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRvcGVuTmF2OiBvcGVuTmF2LFxuXHRcdGNsb3NlTmF2OiBjbG9zZU5hdixcblx0XHRpbml0OiBpbml0LFxuXHR9O1xufSgpKTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2TWFpbjtcbiIsIi8qKlxuICogUG9wdXAgd2luZG93IG1vZHVsZVxuICpcbiAqIFNpbXBsZSBwb3B1cHdpbmRvd1xuICogVXNlIGV2ZW50bGlzdGVuZXIgdGhhdCBkZWxlZ2F0ZXMgdG8gcG9wdXAub3BlbldpbmRvdyB0byBpbml0aWF0ZVxuICogQmV0d2VlbiBjdXJseSBicmFjZXMgc2V0IGN1c3RvbSBoZWlnaHQgYW5kIHdpZHRoLCBvciBsZWF2ZSBlbXB0eS5cbiAqIEdvZXMgYSBsaXR0bGUgc29tZXRoaW5nIGxpa2UgdGhpczoge3c6IDQwMCwgaDogODAwfVxuICovXG5cbnZhciBQb3B1cCA9IChmdW5jdGlvbiAoKSB7XG5cblx0ZnVuY3Rpb24gaW5pdCgpIHtcblx0XHR2YXIgcG9wdXBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1wb3B1cCcpO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgcG9wdXBsaW5rcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKHBvcHVwbGlua3NbaV0gIT09IG51bGwpIHtcblx0XHRcdFx0cG9wdXBsaW5rc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFBvcHVwLm9wZW5XaW5kb3csIGZhbHNlKTtcblx0XHRcdH1cblx0XHR9XG5cblx0fVxuXG5cdGZ1bmN0aW9uIG9wZW5XaW5kb3coZXZlbnQpe1xuXHRcdHZhciB1cmwgPSBldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuXHRcdHdpbmRvdy5vcGVuKHVybCwgJ3BvcHVwd2luJywgJ2hlaWdodD04MDAsd2lkdGg9NjUwLHJlc2l6YWJsZT0xLHRvb2xiYXI9MCxtZW51YmFyPTAsc3RhdHVzPTAsbG9jYXRpb249MCxzY3JvbGxiYXJzPTEnKTtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybiBwdWJsaWMgbWV0aG9kc1xuXHQgKi9cblx0cmV0dXJuIHtcblx0XHRvcGVuV2luZG93OiBvcGVuV2luZG93LFxuXHRcdGluaXQ6IGluaXRcblx0fTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IFBvcHVwO1xuIiwiLyoqXG4gKiBJbml0aWFsaXplIGEgdmFyaWFibGUgd2l0aCB0aGUgcmlnaHQgdHJhbnNpdGlvbkVuZCBwcmVmaXggYmFzZWQgb24gdGhlIHN1cHBvcnQgaW4gdGhlIGJyb3dzZXIuXG4gKlxuICogVXNlIGl0IGxpa2UgdGhpczpcbiAqIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0cmFuc2l0aW9uRW5kLCB0aGVGdW5jdGlvblRvSW52b2tlLCBmYWxzZSk7XG4gKlxuICogT3I6XG4gKiBub3RpZmljYXRpb24ub24odHJhbnNpdGlvbkVuZCwgdGhlRnVuY3Rpb25Ub0ludm9rZSk7XG4gKi9cblxuZnVuY3Rpb24gd2hpY2hUcmFuc2l0aW9uRXZlbnQoKXtcblx0dmFyIHQ7XG5cdHZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zha2VlbGVtZW50Jyk7XG5cdHZhciB0cmFuc2l0aW9ucyA9IHtcblx0XHQndHJhbnNpdGlvbic6J3RyYW5zaXRpb25lbmQnLFxuXHRcdCdPVHJhbnNpdGlvbic6J29UcmFuc2l0aW9uRW5kJyxcblx0XHQnTW96VHJhbnNpdGlvbic6J3RyYW5zaXRpb25lbmQnLFxuXHRcdCdXZWJraXRUcmFuc2l0aW9uJzond2Via2l0VHJhbnNpdGlvbkVuZCdcblx0fTtcblxuXHRmb3IodCBpbiB0cmFuc2l0aW9ucyl7XG5cdFx0aWYoIGVsLnN0eWxlW3RdICE9PSB1bmRlZmluZWQgKXtcblx0XHRcdHJldHVybiB0cmFuc2l0aW9uc1t0XTtcblx0XHR9XG5cdH1cbn1cblxudmFyIHRyYW5zaXRpb25FbmQgPSB3aGljaFRyYW5zaXRpb25FdmVudCgpO1xuXG5leHBvcnQgZGVmYXVsdCB0cmFuc2l0aW9uRW5kO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRpZiAoIShtb2R1bGVJZCBpbiBfX3dlYnBhY2tfbW9kdWxlc19fKSkge1xuXHRcdGRlbGV0ZSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIG1vZHVsZUlkICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZTsgfTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIvdmFsdWUgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0aWYoQXJyYXkuaXNBcnJheShkZWZpbml0aW9uKSkge1xuXHRcdHZhciBpID0gMDtcblx0XHR3aGlsZShpIDwgZGVmaW5pdGlvbi5sZW5ndGgpIHtcblx0XHRcdHZhciBrZXkgPSBkZWZpbml0aW9uW2krK107XG5cdFx0XHR2YXIgYmluZGluZyA9IGRlZmluaXRpb25baSsrXTtcblx0XHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0XHRpZihiaW5kaW5nID09PSAwKSB7XG5cdFx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogZGVmaW5pdGlvbltpKytdIH0pO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBiaW5kaW5nIH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYoYmluZGluZyA9PT0gMCkgeyBpKys7IH1cblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH0iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi4vc3R5bGVzL21haW4uc3R5bGVzLnNjc3MnO1xuXG4vLyBJbXBvcnQgcGx1Z2lucyBhbmQgdXRpbHNcbmltcG9ydCBkb21yZWFkeSBmcm9tICdkb21yZWFkeSc7XG4vLyBpbXBvcnQgbG9hZEpTIGZyb20gJy4vdXRpbHMvbG9hZGpzLnV0aWwnO1xuXG4vLyBJbXBvcnQgRm9udG9ic2VydmVyIG1vZHVsZVxuaW1wb3J0IEZvbnRPYnNlcnZlciBmcm9tICcuL21vZHVsZXMvZm9udG9ic2VydmVyL2ZvbnRvYnNlcnZlci5tb2R1bGUnO1xuXG4vLyBJbXBvcnQgb3RoZXIgbW9kdWxlc1xuaW1wb3J0IE5hdk1haW4gZnJvbSAnLi9tb2R1bGVzL25hdmlnYXRpb24vbmF2bWFpbi5tb2R1bGUnO1xuaW1wb3J0IFBvcHVwcyBmcm9tICcuL21vZHVsZXMvcG9wdXBzL3BvcHVwcy5tb2R1bGUnO1xuXG5mdW5jdGlvbiBpc0lFKCkge1xuICAgIC8vIElFIDEwIGFuZCBJRSAxMVxuICAgIHJldHVybiAvVHJpZGVudFxcL3xNU0lFLy50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KTtcbn1cblxuZG9tcmVhZHkoZnVuY3Rpb24gKCkge1xuXHRpZiAoaXNJRSgpKSB7XG5cdFx0dmFyIGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5cdFx0dmFyIG9sZGllbWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblx0XHRvbGRpZW1lc3NhZ2UuY2xhc3NMaXN0LmFkZCgnb2xkaWUtbWVzc2FnZScpO1xuXHRcdG9sZGllbWVzc2FnZS5pbm5lckhUTUwgPSAnTGV0IG9wISBVIGdlYnJ1aWt0IEludGVybmV0IEV4cGxvcmVyIDExIG9mIGxhZ2VyIChlZW4gPHN0cm9uZz5zdGVyayB2ZXJvdWRlcmQ8L3N0cm9uZz4gaW50ZXJuZXRwcm9ncmFtbWEpIG9tIGRlemUgd2Vic2l0ZSB0ZSBiZWtpamtlbi4gPGJyIC8+IDxhIGhyZWY9XCJodHRwOi8vYnJvd3NlaGFwcHkuY29tL1wiPkRvd25sb2FkIGdyYXRpcyBlZW4gc25lbGxlcmUgZW4gdmVpbGlnZXJlIHZlcnNpZTwvYT4gb20gZGV6ZSB3ZWJzaXRlIG9wdGltYWFsIHRlIGVydmFyZW4uJztcblx0XHRib2R5Lmluc2VydEJlZm9yZShvbGRpZW1lc3NhZ2UsIGJvZHkuZmlyc3RDaGlsZCk7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0Rm9udE9ic2VydmVyLmluaXQoKTtcblx0TmF2TWFpbi5pbml0KCk7XG5cdFBvcHVwcy5pbml0KCk7XG5cblx0Y29uc29sZS5sb2coJ21haW4gc2NyaXB0cyBsb2FkZWQhJyk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==