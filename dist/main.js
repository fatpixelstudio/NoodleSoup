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
  else {}

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
 * Add simple navigation functionality (open and close) to .js-navMain element
 *
 * Usage:
 * NavMain.init(); // navigation fixed on top of window
 */



var NavMain = (function () {

	/**
	 * Privates
	 */
	var navelements = {
		banner: document.querySelector('.banner'),
		html: document.querySelector('html'),
		navEl: document.querySelector('.js-nav-main')
	};

	function handleNavClick(event) {
		var target = event.target;
		if((target.classList.contains('js-nav-main')) || (event.keyCode === 27)) {
			NavMain.closeNav(event);
		}
	}

	function setNavHandlers() {
		// var navMainEl =  document.querySelector('.js-navMain');
		// navMainEl.addEventListener('click', handleNavClick, false); // Only do this if navheight != windowheight
		document.addEventListener('keyup', handleNavClick, false);
	}

	function unsetNavHandlers() {
		// var navMainEl =  document.querySelector('.js-navMain');
		// navMainEl.removeEventListener('click', handleNavClick, false); // Only do this if navheight != windowheight
		document.removeEventListener('keyup', handleNavClick, false);
	}

	function openNav(event) {
		if(typeof event !== 'undefined'){
			event.preventDefault();
		}
		navelements.html.classList.add('is-open-main-nav');
		setNavHandlers(true);
	}

	function closeNav(event) {
		if(typeof event !== 'undefined'){
			event.preventDefault();
		}

		navelements.navEl.addEventListener(_utils_transitionend_util__WEBPACK_IMPORTED_MODULE_0__["default"], function endTransitionNavClose(){
			navelements.html.classList.remove('is-closing-main-nav');
			navelements.html.classList.remove('is-open-main-nav');
			this.removeEventListener(_utils_transitionend_util__WEBPACK_IMPORTED_MODULE_0__["default"], endTransitionNavClose, false);
		},false);

		navelements.html.classList.add('is-closing-main-nav');

		unsetNavHandlers();
	}

	function init() {
		var navMainShow = document.querySelector('.js-nav-main-show');
		var navMainHide = document.querySelector('.js-nav-main-hide');

		navelements.navEl = document.querySelector('.js-nav-main');

		// Check if nav-main, and nav-main-show DOM navelements exist
		if (typeof(navelements.navEl) !== 'undefined' && navelements.navEl !== null && typeof(navMainShow) !== 'undefined' && navMainShow !== null) {
			// Set the event listeners
			navMainShow.addEventListener('click', openNav, false);
			navMainHide.addEventListener('click', closeNav, false);
		}
	}

	/**
	 * Return public methods
	 */
	return {
		openNav: openNav,
		closeNav: closeNav,
		init: init
	};
})();

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


/***/ }),

/***/ "./src/styles/main.styles.scss":
/*!*************************************!*\
  !*** ./src/styles/main.styles.scss ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNwRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM3QkE7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL25vb2RsZXNvdXAvLi9ub2RlX21vZHVsZXMvZG9tcmVhZHkvcmVhZHkuanMiLCJ3ZWJwYWNrOi8vbm9vZGxlc291cC8uL25vZGVfbW9kdWxlcy9mb250ZmFjZW9ic2VydmVyL2ZvbnRmYWNlb2JzZXJ2ZXIuc3RhbmRhbG9uZS5qcyIsIndlYnBhY2s6Ly9ub29kbGVzb3VwLy4vc3JjL3NjcmlwdHMvbW9kdWxlcy9mb250b2JzZXJ2ZXIvZm9udG9ic2VydmVyLm1vZHVsZS5qcyIsIndlYnBhY2s6Ly9ub29kbGVzb3VwLy4vc3JjL3NjcmlwdHMvbW9kdWxlcy9uYXZpZ2F0aW9uL25hdm1haW4ubW9kdWxlLmpzIiwid2VicGFjazovL25vb2RsZXNvdXAvLi9zcmMvc2NyaXB0cy9tb2R1bGVzL3BvcHVwcy9wb3B1cHMubW9kdWxlLmpzIiwid2VicGFjazovL25vb2RsZXNvdXAvLi9zcmMvc2NyaXB0cy91dGlscy90cmFuc2l0aW9uZW5kLnV0aWwuanMiLCJ3ZWJwYWNrOi8vbm9vZGxlc291cC8uL3NyYy9zdHlsZXMvbWFpbi5zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly9ub29kbGVzb3VwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL25vb2RsZXNvdXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbm9vZGxlc291cC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbm9vZGxlc291cC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL25vb2RsZXNvdXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9ub29kbGVzb3VwLy4vc3JjL3NjcmlwdHMvbWFpbi5zY3JpcHRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICAqIGRvbXJlYWR5IChjKSBEdXN0aW4gRGlheiAyMDE0IC0gTGljZW5zZSBNSVRcbiAgKi9cbiFmdW5jdGlvbiAobmFtZSwgZGVmaW5pdGlvbikge1xuXG4gIGlmICh0eXBlb2YgbW9kdWxlICE9ICd1bmRlZmluZWQnKSBtb2R1bGUuZXhwb3J0cyA9IGRlZmluaXRpb24oKVxuICBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT0gJ29iamVjdCcpIGRlZmluZShkZWZpbml0aW9uKVxuICBlbHNlIHRoaXNbbmFtZV0gPSBkZWZpbml0aW9uKClcblxufSgnZG9tcmVhZHknLCBmdW5jdGlvbiAoKSB7XG5cbiAgdmFyIGZucyA9IFtdLCBsaXN0ZW5lclxuICAgICwgZG9jID0gZG9jdW1lbnRcbiAgICAsIGhhY2sgPSBkb2MuZG9jdW1lbnRFbGVtZW50LmRvU2Nyb2xsXG4gICAgLCBkb21Db250ZW50TG9hZGVkID0gJ0RPTUNvbnRlbnRMb2FkZWQnXG4gICAgLCBsb2FkZWQgPSAoaGFjayA/IC9ebG9hZGVkfF5jLyA6IC9ebG9hZGVkfF5pfF5jLykudGVzdChkb2MucmVhZHlTdGF0ZSlcblxuXG4gIGlmICghbG9hZGVkKVxuICBkb2MuYWRkRXZlbnRMaXN0ZW5lcihkb21Db250ZW50TG9hZGVkLCBsaXN0ZW5lciA9IGZ1bmN0aW9uICgpIHtcbiAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcihkb21Db250ZW50TG9hZGVkLCBsaXN0ZW5lcilcbiAgICBsb2FkZWQgPSAxXG4gICAgd2hpbGUgKGxpc3RlbmVyID0gZm5zLnNoaWZ0KCkpIGxpc3RlbmVyKClcbiAgfSlcblxuICByZXR1cm4gZnVuY3Rpb24gKGZuKSB7XG4gICAgbG9hZGVkID8gc2V0VGltZW91dChmbiwgMCkgOiBmbnMucHVzaChmbilcbiAgfVxuXG59KTtcbiIsIi8qIEZvbnQgRmFjZSBPYnNlcnZlciB2Mi4zLjAgLSDCqSBCcmFtIFN0ZWluLiBMaWNlbnNlOiBCU0QtMy1DbGF1c2UgKi8oZnVuY3Rpb24oKXtmdW5jdGlvbiBwKGEsYyl7ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcj9hLmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIixjLCExKTphLmF0dGFjaEV2ZW50KFwic2Nyb2xsXCIsYyl9ZnVuY3Rpb24gdShhKXtkb2N1bWVudC5ib2R5P2EoKTpkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyP2RvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsZnVuY3Rpb24gYigpe2RvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsYik7YSgpfSk6ZG9jdW1lbnQuYXR0YWNoRXZlbnQoXCJvbnJlYWR5c3RhdGVjaGFuZ2VcIixmdW5jdGlvbiBnKCl7aWYoXCJpbnRlcmFjdGl2ZVwiPT1kb2N1bWVudC5yZWFkeVN0YXRlfHxcImNvbXBsZXRlXCI9PWRvY3VtZW50LnJlYWR5U3RhdGUpZG9jdW1lbnQuZGV0YWNoRXZlbnQoXCJvbnJlYWR5c3RhdGVjaGFuZ2VcIixnKSxhKCl9KX07ZnVuY3Rpb24gdyhhKXt0aGlzLmc9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTt0aGlzLmcuc2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIixcInRydWVcIik7dGhpcy5nLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGEpKTt0aGlzLmg9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7dGhpcy5pPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO3RoaXMubT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTt0aGlzLmo9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7dGhpcy5sPS0xO3RoaXMuaC5zdHlsZS5jc3NUZXh0PVwibWF4LXdpZHRoOm5vbmU7ZGlzcGxheTppbmxpbmUtYmxvY2s7cG9zaXRpb246YWJzb2x1dGU7aGVpZ2h0OjEwMCU7d2lkdGg6MTAwJTtvdmVyZmxvdzpzY3JvbGw7Zm9udC1zaXplOjE2cHg7XCI7dGhpcy5pLnN0eWxlLmNzc1RleHQ9XCJtYXgtd2lkdGg6bm9uZTtkaXNwbGF5OmlubGluZS1ibG9jaztwb3NpdGlvbjphYnNvbHV0ZTtoZWlnaHQ6MTAwJTt3aWR0aDoxMDAlO292ZXJmbG93OnNjcm9sbDtmb250LXNpemU6MTZweDtcIjtcbnRoaXMuai5zdHlsZS5jc3NUZXh0PVwibWF4LXdpZHRoOm5vbmU7ZGlzcGxheTppbmxpbmUtYmxvY2s7cG9zaXRpb246YWJzb2x1dGU7aGVpZ2h0OjEwMCU7d2lkdGg6MTAwJTtvdmVyZmxvdzpzY3JvbGw7Zm9udC1zaXplOjE2cHg7XCI7dGhpcy5tLnN0eWxlLmNzc1RleHQ9XCJkaXNwbGF5OmlubGluZS1ibG9jazt3aWR0aDoyMDAlO2hlaWdodDoyMDAlO2ZvbnQtc2l6ZToxNnB4O21heC13aWR0aDpub25lO1wiO3RoaXMuaC5hcHBlbmRDaGlsZCh0aGlzLm0pO3RoaXMuaS5hcHBlbmRDaGlsZCh0aGlzLmopO3RoaXMuZy5hcHBlbmRDaGlsZCh0aGlzLmgpO3RoaXMuZy5hcHBlbmRDaGlsZCh0aGlzLmkpfVxuZnVuY3Rpb24geChhLGMpe2EuZy5zdHlsZS5jc3NUZXh0PVwibWF4LXdpZHRoOm5vbmU7bWluLXdpZHRoOjIwcHg7bWluLWhlaWdodDoyMHB4O2Rpc3BsYXk6aW5saW5lLWJsb2NrO292ZXJmbG93OmhpZGRlbjtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDphdXRvO21hcmdpbjowO3BhZGRpbmc6MDt0b3A6LTk5OXB4O3doaXRlLXNwYWNlOm5vd3JhcDtmb250LXN5bnRoZXNpczpub25lO2ZvbnQ6XCIrYytcIjtcIn1mdW5jdGlvbiBCKGEpe3ZhciBjPWEuZy5vZmZzZXRXaWR0aCxiPWMrMTAwO2Euai5zdHlsZS53aWR0aD1iK1wicHhcIjthLmkuc2Nyb2xsTGVmdD1iO2EuaC5zY3JvbGxMZWZ0PWEuaC5zY3JvbGxXaWR0aCsxMDA7cmV0dXJuIGEubCE9PWM/KGEubD1jLCEwKTohMX1mdW5jdGlvbiBDKGEsYyl7ZnVuY3Rpb24gYigpe3ZhciBlPWc7QihlKSYmbnVsbCE9PWUuZy5wYXJlbnROb2RlJiZjKGUubCl9dmFyIGc9YTtwKGEuaCxiKTtwKGEuaSxiKTtCKGEpfTtmdW5jdGlvbiBEKGEsYyxiKXtjPWN8fHt9O2I9Ynx8d2luZG93O3RoaXMuZmFtaWx5PWE7dGhpcy5zdHlsZT1jLnN0eWxlfHxcIm5vcm1hbFwiO3RoaXMud2VpZ2h0PWMud2VpZ2h0fHxcIm5vcm1hbFwiO3RoaXMuc3RyZXRjaD1jLnN0cmV0Y2h8fFwibm9ybWFsXCI7dGhpcy5jb250ZXh0PWJ9dmFyIEU9bnVsbCxGPW51bGwsRz1udWxsLEg9bnVsbDtmdW5jdGlvbiBJKGEpe251bGw9PT1GJiYoTShhKSYmL0FwcGxlLy50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudmVuZG9yKT8oYT0vQXBwbGVXZWJLaXRcXC8oWzAtOV0rKSg/OlxcLihbMC05XSspKSg/OlxcLihbMC05XSspKS8uZXhlYyh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCksRj0hIWEmJjYwMz5wYXJzZUludChhWzFdLDEwKSk6Rj0hMSk7cmV0dXJuIEZ9ZnVuY3Rpb24gTShhKXtudWxsPT09SCYmKEg9ISFhLmRvY3VtZW50LmZvbnRzKTtyZXR1cm4gSH1cbmZ1bmN0aW9uIE4oYSxjKXt2YXIgYj1hLnN0eWxlLGc9YS53ZWlnaHQ7aWYobnVsbD09PUcpe3ZhciBlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7dHJ5e2Uuc3R5bGUuZm9udD1cImNvbmRlbnNlZCAxMDBweCBzYW5zLXNlcmlmXCJ9Y2F0Y2gocSl7fUc9XCJcIiE9PWUuc3R5bGUuZm9udH1yZXR1cm5bYixnLEc/YS5zdHJldGNoOlwiXCIsXCIxMDBweFwiLGNdLmpvaW4oXCIgXCIpfVxuRC5wcm90b3R5cGUubG9hZD1mdW5jdGlvbihhLGMpe3ZhciBiPXRoaXMsZz1hfHxcIkJFU2Jzd3lcIixlPTAscT1jfHwzRTMsSj0obmV3IERhdGUpLmdldFRpbWUoKTtyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24oSyxMKXtpZihNKGIuY29udGV4dCkmJiFJKGIuY29udGV4dCkpe3ZhciBPPW5ldyBQcm9taXNlKGZ1bmN0aW9uKHIsdCl7ZnVuY3Rpb24gaCgpeyhuZXcgRGF0ZSkuZ2V0VGltZSgpLUo+PXE/dChFcnJvcihcIlwiK3ErXCJtcyB0aW1lb3V0IGV4Y2VlZGVkXCIpKTpiLmNvbnRleHQuZG9jdW1lbnQuZm9udHMubG9hZChOKGIsJ1wiJytiLmZhbWlseSsnXCInKSxnKS50aGVuKGZ1bmN0aW9uKG4pezE8PW4ubGVuZ3RoP3IoKTpzZXRUaW1lb3V0KGgsMjUpfSx0KX1oKCl9KSxQPW5ldyBQcm9taXNlKGZ1bmN0aW9uKHIsdCl7ZT1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dChFcnJvcihcIlwiK3ErXCJtcyB0aW1lb3V0IGV4Y2VlZGVkXCIpKX0scSl9KTtQcm9taXNlLnJhY2UoW1AsT10pLnRoZW4oZnVuY3Rpb24oKXtjbGVhclRpbWVvdXQoZSk7XG5LKGIpfSxMKX1lbHNlIHUoZnVuY3Rpb24oKXtmdW5jdGlvbiByKCl7dmFyIGQ7aWYoZD0tMSE9ayYmLTEhPWx8fC0xIT1rJiYtMSE9bXx8LTEhPWwmJi0xIT1tKShkPWshPWwmJmshPW0mJmwhPW0pfHwobnVsbD09PUUmJihkPS9BcHBsZVdlYktpdFxcLyhbMC05XSspKD86XFwuKFswLTldKykpLy5leGVjKHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KSxFPSEhZCYmKDUzNj5wYXJzZUludChkWzFdLDEwKXx8NTM2PT09cGFyc2VJbnQoZFsxXSwxMCkmJjExPj1wYXJzZUludChkWzJdLDEwKSkpLGQ9RSYmKGs9PXkmJmw9PXkmJm09PXl8fGs9PXomJmw9PXomJm09PXp8fGs9PUEmJmw9PUEmJm09PUEpKSxkPSFkO2QmJihudWxsIT09Zi5wYXJlbnROb2RlJiZmLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZiksY2xlYXJUaW1lb3V0KGUpLEsoYikpfWZ1bmN0aW9uIHQoKXtpZigobmV3IERhdGUpLmdldFRpbWUoKS1KPj1xKW51bGwhPT1mLnBhcmVudE5vZGUmJmYucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChmKSxcbkwoRXJyb3IoXCJcIitxK1wibXMgdGltZW91dCBleGNlZWRlZFwiKSk7ZWxzZXt2YXIgZD1iLmNvbnRleHQuZG9jdW1lbnQuaGlkZGVuO2lmKCEwPT09ZHx8dm9pZCAwPT09ZClrPWguZy5vZmZzZXRXaWR0aCxsPW4uZy5vZmZzZXRXaWR0aCxtPXYuZy5vZmZzZXRXaWR0aCxyKCk7ZT1zZXRUaW1lb3V0KHQsNTApfX12YXIgaD1uZXcgdyhnKSxuPW5ldyB3KGcpLHY9bmV3IHcoZyksaz0tMSxsPS0xLG09LTEseT0tMSx6PS0xLEE9LTEsZj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2YuZGlyPVwibHRyXCI7eChoLE4oYixcInNhbnMtc2VyaWZcIikpO3gobixOKGIsXCJzZXJpZlwiKSk7eCh2LE4oYixcIm1vbm9zcGFjZVwiKSk7Zi5hcHBlbmRDaGlsZChoLmcpO2YuYXBwZW5kQ2hpbGQobi5nKTtmLmFwcGVuZENoaWxkKHYuZyk7Yi5jb250ZXh0LmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZik7eT1oLmcub2Zmc2V0V2lkdGg7ej1uLmcub2Zmc2V0V2lkdGg7QT12Lmcub2Zmc2V0V2lkdGg7dCgpO1xuQyhoLGZ1bmN0aW9uKGQpe2s9ZDtyKCl9KTt4KGgsTihiLCdcIicrYi5mYW1pbHkrJ1wiLHNhbnMtc2VyaWYnKSk7QyhuLGZ1bmN0aW9uKGQpe2w9ZDtyKCl9KTt4KG4sTihiLCdcIicrYi5mYW1pbHkrJ1wiLHNlcmlmJykpO0ModixmdW5jdGlvbihkKXttPWQ7cigpfSk7eCh2LE4oYiwnXCInK2IuZmFtaWx5KydcIixtb25vc3BhY2UnKSl9KX0pfTtcIm9iamVjdFwiPT09dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1EOih3aW5kb3cuRm9udEZhY2VPYnNlcnZlcj1ELHdpbmRvdy5Gb250RmFjZU9ic2VydmVyLnByb3RvdHlwZS5sb2FkPUQucHJvdG90eXBlLmxvYWQpO30oKSk7XG4iLCIvKipcbiAqIEZvbnRvYnNlcnZlciBtb2R1bGVcbiAqXG4gKiBNb3JlIGluZm86IGh0dHBzOi8vd3d3LmJyYW1zdGVpbi5jb20vd3JpdGluZy93ZWItZm9udC1sb2FkaW5nLXBhdHRlcm5zLmh0bWxcbiAqL1xuXG5pbXBvcnQgRm9udEZhY2VPYnNlcnZlciBmcm9tIFwiZm9udGZhY2VvYnNlcnZlclwiO1xuXG52YXIgRm9udE9ic2VydmVySGFuZGxlciA9IChmdW5jdGlvbiAoKSB7XG5cblx0ZnVuY3Rpb24gaW5pdCgpe1xuXG5cdFx0Ly8gSWYgdGhlIGNsYXNzIGBmb250cy1sb2FkZWRgIGlzIGFscmVhZHkgc2V0LCB3ZSdyZSBnb29kXG5cdFx0aWYoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTmFtZS5pbmRleE9mKCdmb250cy1sb2FkZWQnKSA+IC0xICkge1xuXHRcdC8vIGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdmb250cy1sb2FkZWQnKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIERlZmluZSB0aGUgZm9udHMgYW5kIGZvbnQgdmFyaWFudHMgdG8gb2JzZXJ2ZWRcblx0XHR2YXIgcm9ib3RvX2Jvb2sgPSBuZXcgRm9udEZhY2VPYnNlcnZlcignUm9ib3RvJywge1xuXHRcdFx0d2VpZ2h0OiA0MDBcblx0XHR9KTtcblx0XHR2YXIgcm9ib3RvX2JvbGQgPSBuZXcgRm9udEZhY2VPYnNlcnZlcignUm9ib3RvJywge1xuXHRcdFx0d2VpZ2h0OiA3MDBcblx0XHR9KTtcblxuXHRcdC8vIExvYWRpbmcgZ3JvdXBzIG9mIGZvbnRzIHdpdGggYSB0aW1lb3V0XG5cdFx0UHJvbWlzZS5hbGwoW1xuXHRcdFx0cm9ib3RvX2Jvb2subG9hZCgpLFxuXHRcdFx0cm9ib3RvX2JvbGQubG9hZCgpXG5cdFx0XSkudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NOYW1lICs9ICcgZm9udHMtbG9hZGVkJztcblx0XHRcdC8vIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdmb250cy1sb2FkZWQnKTtcblx0XHRcdGVuaGFuY2UuY29va2llKCdmb250c19sb2FkZWQnLCAndHJ1ZScsIDcpO1xuXHRcdFx0Ly8gY29uc29sZS5sb2coJ0thd2FrIGZvbnRzIGhhdmUgbG9hZGVkLicpO1xuXHRcdH0pLmNhdGNoKGZ1bmN0aW9uICgpIHtcblx0XHRcdC8vIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdmb250cy1mYWlsZWQnKTtcblx0XHRcdC8vIGNvbnNvbGUuaW5mbygnV2ViIGZvbnRzIGNvdWxkIG5vdCBiZSBsb2FkZWQgaW4gdGltZS4gRmFsbGluZyBiYWNrIHRvIHN5c3RlbSBmb250cy4nKTtcblx0XHR9KTtcblxuXHRcdC8vIC8vIFRpbWVyIGhlbHBlciBmdW5jdGlvblxuXHRcdC8vIGZ1bmN0aW9uIHRpbWVyKHRpbWUpIHtcblx0XHQvLyBcdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0Ly8gXHRcdHNldFRpbWVvdXQocmVqZWN0LCB0aW1lKTtcblx0XHQvLyBcdH0pO1xuXHRcdC8vIH1cblxuXHRcdC8vIC8vIExvYWRpbmcgZ3JvdXBzIG9mIGZvbnRzIHdpdGggYSB0aW1lb3V0XG5cdFx0Ly8gUHJvbWlzZS5yYWNlKFtcblx0XHQvLyBcdHRpbWVyKDMwMDApLFxuXHRcdC8vIFx0a2F3YWtfbGlnaHQubG9hZCgpLFxuXHRcdC8vIFx0a2F3YWtfcmVndWxhci5sb2FkKClcblx0XHQvLyBdKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHQvLyBcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc05hbWUgKz0gJyBmb250cy1sb2FkZWQnO1xuXHRcdC8vIFx0Ly8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2ZvbnRzLWxvYWRlZCcpO1xuXHRcdC8vIFx0ZW5oYW5jZS5jb29raWUoJ2ZvbnRzX2xvYWRlZCcsICd0cnVlJywgNyk7XG5cdFx0Ly8gXHQvLyBjb25zb2xlLmluZm8oJ0thd2FrIGZvbnRzIGhhdmUgbG9hZGVkLicpO1xuXHRcdC8vIH0pLmNhdGNoKGZ1bmN0aW9uICgpIHtcblx0XHQvLyBcdC8vIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdmb250cy1mYWlsZWQnKTtcblx0XHQvLyBcdGNvbnNvbGUuaW5mbygnS2F3YWsgZm9udHMgbG9hZGluZyBoYXMgdGltZWQgb3V0ICg+IDMgc2VjLikuIEZhbGxpbmcgYmFjayB0byBzeXN0ZW0gZm9udHMuJyk7XG5cdFx0Ly8gfSk7XG5cblx0XHQvLyAvLyBQcmlvcml0aXNlZCBsb2FkaW5nXG5cdFx0Ly8ga2F3YWtfbGlnaHQubG9hZCgpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdC8vIFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTmFtZSArPSAnIGthd2FrLWxpZ2h0LWxvYWRlZCc7XG5cdFx0Ly8gXHRjb25zb2xlLmluZm8oJ0thd2FrIExpZ2h0IGZvbnQgaGFzIGxvYWRlZC4nKTtcblxuXHRcdC8vIFx0a2F3YWtfcmVndWxhci5sb2FkKCkudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0Ly8gXHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc05hbWUgKz0gJyBrYXdhay1yZWd1bGFyLWxvYWRlZCc7XG5cdFx0Ly8gXHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc05hbWUgKz0gJyBmb250cy1sb2FkZWQnO1xuXHRcdC8vIFx0XHRjb25zb2xlLmluZm8oJ0thd2FrIFJlZ3VsYXIgZm9udCBoYXMgbG9hZGVkLicpO1xuXHRcdC8vIFx0fSk7XG5cdFx0Ly8gfSk7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm4gcHVibGljIG1ldGhvZHNcblx0ICovXG5cdHJldHVybiB7XG5cdFx0aW5pdDogaW5pdFxuXHR9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgRm9udE9ic2VydmVySGFuZGxlcjtcbiIsIi8qKlxuICogTmF2aWdhdGlvbiBtb2R1bGVcbiAqIEFkZCBzaW1wbGUgbmF2aWdhdGlvbiBmdW5jdGlvbmFsaXR5IChvcGVuIGFuZCBjbG9zZSkgdG8gLmpzLW5hdk1haW4gZWxlbWVudFxuICpcbiAqIFVzYWdlOlxuICogTmF2TWFpbi5pbml0KCk7IC8vIG5hdmlnYXRpb24gZml4ZWQgb24gdG9wIG9mIHdpbmRvd1xuICovXG5cbmltcG9ydCB0cmFuc2l0aW9uRW5kIGZyb20gXCIuLi8uLi91dGlscy90cmFuc2l0aW9uZW5kLnV0aWxcIjtcblxudmFyIE5hdk1haW4gPSAoZnVuY3Rpb24gKCkge1xuXG5cdC8qKlxuXHQgKiBQcml2YXRlc1xuXHQgKi9cblx0dmFyIG5hdmVsZW1lbnRzID0ge1xuXHRcdGJhbm5lcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhbm5lcicpLFxuXHRcdGh0bWw6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2h0bWwnKSxcblx0XHRuYXZFbDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLW5hdi1tYWluJylcblx0fTtcblxuXHRmdW5jdGlvbiBoYW5kbGVOYXZDbGljayhldmVudCkge1xuXHRcdHZhciB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG5cdFx0aWYoKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2pzLW5hdi1tYWluJykpIHx8IChldmVudC5rZXlDb2RlID09PSAyNykpIHtcblx0XHRcdE5hdk1haW4uY2xvc2VOYXYoZXZlbnQpO1xuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIHNldE5hdkhhbmRsZXJzKCkge1xuXHRcdC8vIHZhciBuYXZNYWluRWwgPSAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLW5hdk1haW4nKTtcblx0XHQvLyBuYXZNYWluRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVOYXZDbGljaywgZmFsc2UpOyAvLyBPbmx5IGRvIHRoaXMgaWYgbmF2aGVpZ2h0ICE9IHdpbmRvd2hlaWdodFxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgaGFuZGxlTmF2Q2xpY2ssIGZhbHNlKTtcblx0fVxuXG5cdGZ1bmN0aW9uIHVuc2V0TmF2SGFuZGxlcnMoKSB7XG5cdFx0Ly8gdmFyIG5hdk1haW5FbCA9ICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtbmF2TWFpbicpO1xuXHRcdC8vIG5hdk1haW5FbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZU5hdkNsaWNrLCBmYWxzZSk7IC8vIE9ubHkgZG8gdGhpcyBpZiBuYXZoZWlnaHQgIT0gd2luZG93aGVpZ2h0XG5cdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBoYW5kbGVOYXZDbGljaywgZmFsc2UpO1xuXHR9XG5cblx0ZnVuY3Rpb24gb3Blbk5hdihldmVudCkge1xuXHRcdGlmKHR5cGVvZiBldmVudCAhPT0gJ3VuZGVmaW5lZCcpe1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHR9XG5cdFx0bmF2ZWxlbWVudHMuaHRtbC5jbGFzc0xpc3QuYWRkKCdpcy1vcGVuLW1haW4tbmF2Jyk7XG5cdFx0c2V0TmF2SGFuZGxlcnModHJ1ZSk7XG5cdH1cblxuXHRmdW5jdGlvbiBjbG9zZU5hdihldmVudCkge1xuXHRcdGlmKHR5cGVvZiBldmVudCAhPT0gJ3VuZGVmaW5lZCcpe1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHR9XG5cblx0XHRuYXZlbGVtZW50cy5uYXZFbC5hZGRFdmVudExpc3RlbmVyKHRyYW5zaXRpb25FbmQsIGZ1bmN0aW9uIGVuZFRyYW5zaXRpb25OYXZDbG9zZSgpe1xuXHRcdFx0bmF2ZWxlbWVudHMuaHRtbC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1jbG9zaW5nLW1haW4tbmF2Jyk7XG5cdFx0XHRuYXZlbGVtZW50cy5odG1sLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLW9wZW4tbWFpbi1uYXYnKTtcblx0XHRcdHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcih0cmFuc2l0aW9uRW5kLCBlbmRUcmFuc2l0aW9uTmF2Q2xvc2UsIGZhbHNlKTtcblx0XHR9LGZhbHNlKTtcblxuXHRcdG5hdmVsZW1lbnRzLmh0bWwuY2xhc3NMaXN0LmFkZCgnaXMtY2xvc2luZy1tYWluLW5hdicpO1xuXG5cdFx0dW5zZXROYXZIYW5kbGVycygpO1xuXHR9XG5cblx0ZnVuY3Rpb24gaW5pdCgpIHtcblx0XHR2YXIgbmF2TWFpblNob3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtbmF2LW1haW4tc2hvdycpO1xuXHRcdHZhciBuYXZNYWluSGlkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1uYXYtbWFpbi1oaWRlJyk7XG5cblx0XHRuYXZlbGVtZW50cy5uYXZFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1uYXYtbWFpbicpO1xuXG5cdFx0Ly8gQ2hlY2sgaWYgbmF2LW1haW4sIGFuZCBuYXYtbWFpbi1zaG93IERPTSBuYXZlbGVtZW50cyBleGlzdFxuXHRcdGlmICh0eXBlb2YobmF2ZWxlbWVudHMubmF2RWwpICE9PSAndW5kZWZpbmVkJyAmJiBuYXZlbGVtZW50cy5uYXZFbCAhPT0gbnVsbCAmJiB0eXBlb2YobmF2TWFpblNob3cpICE9PSAndW5kZWZpbmVkJyAmJiBuYXZNYWluU2hvdyAhPT0gbnVsbCkge1xuXHRcdFx0Ly8gU2V0IHRoZSBldmVudCBsaXN0ZW5lcnNcblx0XHRcdG5hdk1haW5TaG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3Blbk5hdiwgZmFsc2UpO1xuXHRcdFx0bmF2TWFpbkhpZGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU5hdiwgZmFsc2UpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm4gcHVibGljIG1ldGhvZHNcblx0ICovXG5cdHJldHVybiB7XG5cdFx0b3Blbk5hdjogb3Blbk5hdixcblx0XHRjbG9zZU5hdjogY2xvc2VOYXYsXG5cdFx0aW5pdDogaW5pdFxuXHR9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2TWFpbjtcbiIsIi8qKlxuICogUG9wdXAgd2luZG93IG1vZHVsZVxuICpcbiAqIFNpbXBsZSBwb3B1cHdpbmRvd1xuICogVXNlIGV2ZW50bGlzdGVuZXIgdGhhdCBkZWxlZ2F0ZXMgdG8gcG9wdXAub3BlbldpbmRvdyB0byBpbml0aWF0ZVxuICogQmV0d2VlbiBjdXJseSBicmFjZXMgc2V0IGN1c3RvbSBoZWlnaHQgYW5kIHdpZHRoLCBvciBsZWF2ZSBlbXB0eS5cbiAqIEdvZXMgYSBsaXR0bGUgc29tZXRoaW5nIGxpa2UgdGhpczoge3c6IDQwMCwgaDogODAwfVxuICovXG5cbnZhciBQb3B1cCA9IChmdW5jdGlvbiAoKSB7XG5cblx0ZnVuY3Rpb24gaW5pdCgpIHtcblx0XHR2YXIgcG9wdXBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1wb3B1cCcpO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgcG9wdXBsaW5rcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKHBvcHVwbGlua3NbaV0gIT09IG51bGwpIHtcblx0XHRcdFx0cG9wdXBsaW5rc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFBvcHVwLm9wZW5XaW5kb3csIGZhbHNlKTtcblx0XHRcdH1cblx0XHR9XG5cblx0fVxuXG5cdGZ1bmN0aW9uIG9wZW5XaW5kb3coZXZlbnQpe1xuXHRcdHZhciB1cmwgPSBldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuXHRcdHdpbmRvdy5vcGVuKHVybCwgJ3BvcHVwd2luJywgJ2hlaWdodD04MDAsd2lkdGg9NjUwLHJlc2l6YWJsZT0xLHRvb2xiYXI9MCxtZW51YmFyPTAsc3RhdHVzPTAsbG9jYXRpb249MCxzY3JvbGxiYXJzPTEnKTtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybiBwdWJsaWMgbWV0aG9kc1xuXHQgKi9cblx0cmV0dXJuIHtcblx0XHRvcGVuV2luZG93OiBvcGVuV2luZG93LFxuXHRcdGluaXQ6IGluaXRcblx0fTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IFBvcHVwO1xuIiwiLyoqXG4gKiBJbml0aWFsaXplIGEgdmFyaWFibGUgd2l0aCB0aGUgcmlnaHQgdHJhbnNpdGlvbkVuZCBwcmVmaXggYmFzZWQgb24gdGhlIHN1cHBvcnQgaW4gdGhlIGJyb3dzZXIuXG4gKlxuICogVXNlIGl0IGxpa2UgdGhpczpcbiAqIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0cmFuc2l0aW9uRW5kLCB0aGVGdW5jdGlvblRvSW52b2tlLCBmYWxzZSk7XG4gKlxuICogT3I6XG4gKiBub3RpZmljYXRpb24ub24odHJhbnNpdGlvbkVuZCwgdGhlRnVuY3Rpb25Ub0ludm9rZSk7XG4gKi9cblxuZnVuY3Rpb24gd2hpY2hUcmFuc2l0aW9uRXZlbnQoKXtcblx0dmFyIHQ7XG5cdHZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zha2VlbGVtZW50Jyk7XG5cdHZhciB0cmFuc2l0aW9ucyA9IHtcblx0XHQndHJhbnNpdGlvbic6J3RyYW5zaXRpb25lbmQnLFxuXHRcdCdPVHJhbnNpdGlvbic6J29UcmFuc2l0aW9uRW5kJyxcblx0XHQnTW96VHJhbnNpdGlvbic6J3RyYW5zaXRpb25lbmQnLFxuXHRcdCdXZWJraXRUcmFuc2l0aW9uJzond2Via2l0VHJhbnNpdGlvbkVuZCdcblx0fTtcblxuXHRmb3IodCBpbiB0cmFuc2l0aW9ucyl7XG5cdFx0aWYoIGVsLnN0eWxlW3RdICE9PSB1bmRlZmluZWQgKXtcblx0XHRcdHJldHVybiB0cmFuc2l0aW9uc1t0XTtcblx0XHR9XG5cdH1cbn1cblxudmFyIHRyYW5zaXRpb25FbmQgPSB3aGljaFRyYW5zaXRpb25FdmVudCgpO1xuXG5leHBvcnQgZGVmYXVsdCB0cmFuc2l0aW9uRW5kO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0ZnVuY3Rpb24oKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG5cdFx0ZnVuY3Rpb24oKSB7IHJldHVybiBtb2R1bGU7IH07XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH0iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi4vc3R5bGVzL21haW4uc3R5bGVzLnNjc3MnO1xuXG4vLyBJbXBvcnQgcGx1Z2lucyBhbmQgdXRpbHNcbmltcG9ydCBkb21yZWFkeSBmcm9tICdkb21yZWFkeSc7XG4vLyBpbXBvcnQgbG9hZEpTIGZyb20gJy4vdXRpbHMvbG9hZGpzLnV0aWwnO1xuXG4vLyBJbXBvcnQgRm9udG9ic2VydmVyIG1vZHVsZVxuaW1wb3J0IEZvbnRPYnNlcnZlciBmcm9tICcuL21vZHVsZXMvZm9udG9ic2VydmVyL2ZvbnRvYnNlcnZlci5tb2R1bGUnO1xuXG4vLyBJbXBvcnQgb3RoZXIgbW9kdWxlc1xuaW1wb3J0IE5hdk1haW4gZnJvbSAnLi9tb2R1bGVzL25hdmlnYXRpb24vbmF2bWFpbi5tb2R1bGUnO1xuaW1wb3J0IFBvcHVwcyBmcm9tICcuL21vZHVsZXMvcG9wdXBzL3BvcHVwcy5tb2R1bGUnO1xuXG5mdW5jdGlvbiBpc0lFKCkge1xuICAgIC8vIElFIDEwIGFuZCBJRSAxMVxuICAgIHJldHVybiAvVHJpZGVudFxcL3xNU0lFLy50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KTtcbn1cblxuZG9tcmVhZHkoZnVuY3Rpb24gKCkge1xuXHRpZiAoaXNJRSgpKSB7XG5cdFx0dmFyIGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5cdFx0dmFyIG9sZGllbWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblx0XHRvbGRpZW1lc3NhZ2UuY2xhc3NMaXN0LmFkZCgnb2xkaWUtbWVzc2FnZScpO1xuXHRcdG9sZGllbWVzc2FnZS5pbm5lckhUTUwgPSAnTGV0IG9wISBVIGdlYnJ1aWt0IEludGVybmV0IEV4cGxvcmVyIDExIG9mIGxhZ2VyIChlZW4gPHN0cm9uZz5zdGVyayB2ZXJvdWRlcmQ8L3N0cm9uZz4gaW50ZXJuZXRwcm9ncmFtbWEpIG9tIGRlemUgd2Vic2l0ZSB0ZSBiZWtpamtlbi4gPGJyIC8+IDxhIGhyZWY9XCJodHRwOi8vYnJvd3NlaGFwcHkuY29tL1wiPkRvd25sb2FkIGdyYXRpcyBlZW4gc25lbGxlcmUgZW4gdmVpbGlnZXJlIHZlcnNpZTwvYT4gb20gZGV6ZSB3ZWJzaXRlIG9wdGltYWFsIHRlIGVydmFyZW4uJztcblx0XHRib2R5Lmluc2VydEJlZm9yZShvbGRpZW1lc3NhZ2UsIGJvZHkuZmlyc3RDaGlsZCk7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0Rm9udE9ic2VydmVyLmluaXQoKTtcblx0TmF2TWFpbi5pbml0KCk7XG5cdFBvcHVwcy5pbml0KCk7XG5cblx0Y29uc29sZS5sb2coJ21haW4gc2NyaXB0cyBsb2FkZWQhJyk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==