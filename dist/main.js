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

/***/ "./src/stylesheets/main.styles.scss":
/*!******************************************!*\
  !*** ./src/stylesheets/main.styles.scss ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/javascript/modules/fontobserver/fontobserver.module.js":
/*!********************************************************************!*\
  !*** ./src/javascript/modules/fontobserver/fontobserver.module.js ***!
  \********************************************************************/
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
		var maison_book = new (fontfaceobserver__WEBPACK_IMPORTED_MODULE_0___default())('Maison Neue', {
			weight: 400
		});

		// Loading groups of fonts with a timeout
		Promise.all([
			maison_book.load()
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

/***/ "./src/javascript/modules/navigation/navmain.module.js":
/*!*************************************************************!*\
  !*** ./src/javascript/modules/navigation/navmain.module.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_transitionend_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/transitionend.util */ "./src/javascript/utils/transitionend.util.js");
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

/***/ "./src/javascript/modules/popups/popups.module.js":
/*!********************************************************!*\
  !*** ./src/javascript/modules/popups/popups.module.js ***!
  \********************************************************/
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

/***/ "./src/javascript/utils/transitionend.util.js":
/*!****************************************************!*\
  !*** ./src/javascript/utils/transitionend.util.js ***!
  \****************************************************/
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!****************************************!*\
  !*** ./src/javascript/main.scripts.js ***!
  \****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _stylesheets_main_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../stylesheets/main.styles.scss */ "./src/stylesheets/main.styles.scss");
/* harmony import */ var domready__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! domready */ "./node_modules/domready/ready.js");
/* harmony import */ var domready__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(domready__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_fontobserver_fontobserver_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/fontobserver/fontobserver.module */ "./src/javascript/modules/fontobserver/fontobserver.module.js");
/* harmony import */ var _modules_navigation_navmain_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/navigation/navmain.module */ "./src/javascript/modules/navigation/navmain.module.js");
/* harmony import */ var _modules_popups_popups_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/popups/popups.module */ "./src/javascript/modules/popups/popups.module.js");


// Import plugins and utils

// import loadJS from './utils/loadjs.util';

// Import Fontobserver module


// Import other modules



function isIE() {
    // IE 10 and IE 11
    return /Trident\/|MSIE/.test(window.navigator.userAgent);
}

domready__WEBPACK_IMPORTED_MODULE_1___default()(function () {
	_modules_fontobserver_fontobserver_module__WEBPACK_IMPORTED_MODULE_2__["default"].init();
	_modules_navigation_navmain_module__WEBPACK_IMPORTED_MODULE_3__["default"].init();
	_modules_popups_popups_module__WEBPACK_IMPORTED_MODULE_4__["default"].init();

	console.log('test');

	if(isIE()) {
		var body = document.querySelector('body');
		var oldiemessage = document.createElement('p');
		oldiemessage.classList.add('oldie-message');
		oldiemessage.innerHTML = 'Let op! U gebruikt Internet Explorer 11 of lager (een <strong>sterk verouderd</strong> internetprogramma) om deze website te bekijken. <br /> <a href="http://browsehappy.com/">Download gratis een snellere en veiligere versie</a> om deze website optimaal te ervaren.';
		body.insertBefore(oldiemessage, body.firstChild);
		return false;
	}
});

}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDUEE7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNoRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbmRlYmxhdXcvLi9ub2RlX21vZHVsZXMvZG9tcmVhZHkvcmVhZHkuanMiLCJ3ZWJwYWNrOi8vZW5kZWJsYXV3Ly4vbm9kZV9tb2R1bGVzL2ZvbnRmYWNlb2JzZXJ2ZXIvZm9udGZhY2VvYnNlcnZlci5zdGFuZGFsb25lLmpzIiwid2VicGFjazovL2VuZGVibGF1dy8uL3NyYy9zdHlsZXNoZWV0cy9tYWluLnN0eWxlcy5zY3NzIiwid2VicGFjazovL2VuZGVibGF1dy8uL3NyYy9qYXZhc2NyaXB0L21vZHVsZXMvZm9udG9ic2VydmVyL2ZvbnRvYnNlcnZlci5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vZW5kZWJsYXV3Ly4vc3JjL2phdmFzY3JpcHQvbW9kdWxlcy9uYXZpZ2F0aW9uL25hdm1haW4ubW9kdWxlLmpzIiwid2VicGFjazovL2VuZGVibGF1dy8uL3NyYy9qYXZhc2NyaXB0L21vZHVsZXMvcG9wdXBzL3BvcHVwcy5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vZW5kZWJsYXV3Ly4vc3JjL2phdmFzY3JpcHQvdXRpbHMvdHJhbnNpdGlvbmVuZC51dGlsLmpzIiwid2VicGFjazovL2VuZGVibGF1dy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9lbmRlYmxhdXcvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZW5kZWJsYXV3L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9lbmRlYmxhdXcvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9lbmRlYmxhdXcvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9lbmRlYmxhdXcvLi9zcmMvamF2YXNjcmlwdC9tYWluLnNjcmlwdHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gICogZG9tcmVhZHkgKGMpIER1c3RpbiBEaWF6IDIwMTQgLSBMaWNlbnNlIE1JVFxuICAqL1xuIWZ1bmN0aW9uIChuYW1lLCBkZWZpbml0aW9uKSB7XG5cbiAgaWYgKHR5cGVvZiBtb2R1bGUgIT0gJ3VuZGVmaW5lZCcpIG1vZHVsZS5leHBvcnRzID0gZGVmaW5pdGlvbigpXG4gIGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PSAnb2JqZWN0JykgZGVmaW5lKGRlZmluaXRpb24pXG4gIGVsc2UgdGhpc1tuYW1lXSA9IGRlZmluaXRpb24oKVxuXG59KCdkb21yZWFkeScsIGZ1bmN0aW9uICgpIHtcblxuICB2YXIgZm5zID0gW10sIGxpc3RlbmVyXG4gICAgLCBkb2MgPSBkb2N1bWVudFxuICAgICwgaGFjayA9IGRvYy5kb2N1bWVudEVsZW1lbnQuZG9TY3JvbGxcbiAgICAsIGRvbUNvbnRlbnRMb2FkZWQgPSAnRE9NQ29udGVudExvYWRlZCdcbiAgICAsIGxvYWRlZCA9IChoYWNrID8gL15sb2FkZWR8XmMvIDogL15sb2FkZWR8Xml8XmMvKS50ZXN0KGRvYy5yZWFkeVN0YXRlKVxuXG5cbiAgaWYgKCFsb2FkZWQpXG4gIGRvYy5hZGRFdmVudExpc3RlbmVyKGRvbUNvbnRlbnRMb2FkZWQsIGxpc3RlbmVyID0gZnVuY3Rpb24gKCkge1xuICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKGRvbUNvbnRlbnRMb2FkZWQsIGxpc3RlbmVyKVxuICAgIGxvYWRlZCA9IDFcbiAgICB3aGlsZSAobGlzdGVuZXIgPSBmbnMuc2hpZnQoKSkgbGlzdGVuZXIoKVxuICB9KVxuXG4gIHJldHVybiBmdW5jdGlvbiAoZm4pIHtcbiAgICBsb2FkZWQgPyBzZXRUaW1lb3V0KGZuLCAwKSA6IGZucy5wdXNoKGZuKVxuICB9XG5cbn0pO1xuIiwiLyogRm9udCBGYWNlIE9ic2VydmVyIHYyLjMuMCAtIMKpIEJyYW0gU3RlaW4uIExpY2Vuc2U6IEJTRC0zLUNsYXVzZSAqLyhmdW5jdGlvbigpe2Z1bmN0aW9uIHAoYSxjKXtkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyP2EuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLGMsITEpOmEuYXR0YWNoRXZlbnQoXCJzY3JvbGxcIixjKX1mdW5jdGlvbiB1KGEpe2RvY3VtZW50LmJvZHk/YSgpOmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXI/ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixmdW5jdGlvbiBiKCl7ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixiKTthKCl9KTpkb2N1bWVudC5hdHRhY2hFdmVudChcIm9ucmVhZHlzdGF0ZWNoYW5nZVwiLGZ1bmN0aW9uIGcoKXtpZihcImludGVyYWN0aXZlXCI9PWRvY3VtZW50LnJlYWR5U3RhdGV8fFwiY29tcGxldGVcIj09ZG9jdW1lbnQucmVhZHlTdGF0ZSlkb2N1bWVudC5kZXRhY2hFdmVudChcIm9ucmVhZHlzdGF0ZWNoYW5nZVwiLGcpLGEoKX0pfTtmdW5jdGlvbiB3KGEpe3RoaXMuZz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3RoaXMuZy5zZXRBdHRyaWJ1dGUoXCJhcmlhLWhpZGRlblwiLFwidHJ1ZVwiKTt0aGlzLmcuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYSkpO3RoaXMuaD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTt0aGlzLmk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7dGhpcy5tPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO3RoaXMuaj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTt0aGlzLmw9LTE7dGhpcy5oLnN0eWxlLmNzc1RleHQ9XCJtYXgtd2lkdGg6bm9uZTtkaXNwbGF5OmlubGluZS1ibG9jaztwb3NpdGlvbjphYnNvbHV0ZTtoZWlnaHQ6MTAwJTt3aWR0aDoxMDAlO292ZXJmbG93OnNjcm9sbDtmb250LXNpemU6MTZweDtcIjt0aGlzLmkuc3R5bGUuY3NzVGV4dD1cIm1heC13aWR0aDpub25lO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3Bvc2l0aW9uOmFic29sdXRlO2hlaWdodDoxMDAlO3dpZHRoOjEwMCU7b3ZlcmZsb3c6c2Nyb2xsO2ZvbnQtc2l6ZToxNnB4O1wiO1xudGhpcy5qLnN0eWxlLmNzc1RleHQ9XCJtYXgtd2lkdGg6bm9uZTtkaXNwbGF5OmlubGluZS1ibG9jaztwb3NpdGlvbjphYnNvbHV0ZTtoZWlnaHQ6MTAwJTt3aWR0aDoxMDAlO292ZXJmbG93OnNjcm9sbDtmb250LXNpemU6MTZweDtcIjt0aGlzLm0uc3R5bGUuY3NzVGV4dD1cImRpc3BsYXk6aW5saW5lLWJsb2NrO3dpZHRoOjIwMCU7aGVpZ2h0OjIwMCU7Zm9udC1zaXplOjE2cHg7bWF4LXdpZHRoOm5vbmU7XCI7dGhpcy5oLmFwcGVuZENoaWxkKHRoaXMubSk7dGhpcy5pLmFwcGVuZENoaWxkKHRoaXMuaik7dGhpcy5nLmFwcGVuZENoaWxkKHRoaXMuaCk7dGhpcy5nLmFwcGVuZENoaWxkKHRoaXMuaSl9XG5mdW5jdGlvbiB4KGEsYyl7YS5nLnN0eWxlLmNzc1RleHQ9XCJtYXgtd2lkdGg6bm9uZTttaW4td2lkdGg6MjBweDttaW4taGVpZ2h0OjIwcHg7ZGlzcGxheTppbmxpbmUtYmxvY2s7b3ZlcmZsb3c6aGlkZGVuO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOmF1dG87bWFyZ2luOjA7cGFkZGluZzowO3RvcDotOTk5cHg7d2hpdGUtc3BhY2U6bm93cmFwO2ZvbnQtc3ludGhlc2lzOm5vbmU7Zm9udDpcIitjK1wiO1wifWZ1bmN0aW9uIEIoYSl7dmFyIGM9YS5nLm9mZnNldFdpZHRoLGI9YysxMDA7YS5qLnN0eWxlLndpZHRoPWIrXCJweFwiO2EuaS5zY3JvbGxMZWZ0PWI7YS5oLnNjcm9sbExlZnQ9YS5oLnNjcm9sbFdpZHRoKzEwMDtyZXR1cm4gYS5sIT09Yz8oYS5sPWMsITApOiExfWZ1bmN0aW9uIEMoYSxjKXtmdW5jdGlvbiBiKCl7dmFyIGU9ZztCKGUpJiZudWxsIT09ZS5nLnBhcmVudE5vZGUmJmMoZS5sKX12YXIgZz1hO3AoYS5oLGIpO3AoYS5pLGIpO0IoYSl9O2Z1bmN0aW9uIEQoYSxjLGIpe2M9Y3x8e307Yj1ifHx3aW5kb3c7dGhpcy5mYW1pbHk9YTt0aGlzLnN0eWxlPWMuc3R5bGV8fFwibm9ybWFsXCI7dGhpcy53ZWlnaHQ9Yy53ZWlnaHR8fFwibm9ybWFsXCI7dGhpcy5zdHJldGNoPWMuc3RyZXRjaHx8XCJub3JtYWxcIjt0aGlzLmNvbnRleHQ9Yn12YXIgRT1udWxsLEY9bnVsbCxHPW51bGwsSD1udWxsO2Z1bmN0aW9uIEkoYSl7bnVsbD09PUYmJihNKGEpJiYvQXBwbGUvLnRlc3Qod2luZG93Lm5hdmlnYXRvci52ZW5kb3IpPyhhPS9BcHBsZVdlYktpdFxcLyhbMC05XSspKD86XFwuKFswLTldKykpKD86XFwuKFswLTldKykpLy5leGVjKHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KSxGPSEhYSYmNjAzPnBhcnNlSW50KGFbMV0sMTApKTpGPSExKTtyZXR1cm4gRn1mdW5jdGlvbiBNKGEpe251bGw9PT1IJiYoSD0hIWEuZG9jdW1lbnQuZm9udHMpO3JldHVybiBIfVxuZnVuY3Rpb24gTihhLGMpe3ZhciBiPWEuc3R5bGUsZz1hLndlaWdodDtpZihudWxsPT09Ryl7dmFyIGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTt0cnl7ZS5zdHlsZS5mb250PVwiY29uZGVuc2VkIDEwMHB4IHNhbnMtc2VyaWZcIn1jYXRjaChxKXt9Rz1cIlwiIT09ZS5zdHlsZS5mb250fXJldHVybltiLGcsRz9hLnN0cmV0Y2g6XCJcIixcIjEwMHB4XCIsY10uam9pbihcIiBcIil9XG5ELnByb3RvdHlwZS5sb2FkPWZ1bmN0aW9uKGEsYyl7dmFyIGI9dGhpcyxnPWF8fFwiQkVTYnN3eVwiLGU9MCxxPWN8fDNFMyxKPShuZXcgRGF0ZSkuZ2V0VGltZSgpO3JldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihLLEwpe2lmKE0oYi5jb250ZXh0KSYmIUkoYi5jb250ZXh0KSl7dmFyIE89bmV3IFByb21pc2UoZnVuY3Rpb24ocix0KXtmdW5jdGlvbiBoKCl7KG5ldyBEYXRlKS5nZXRUaW1lKCktSj49cT90KEVycm9yKFwiXCIrcStcIm1zIHRpbWVvdXQgZXhjZWVkZWRcIikpOmIuY29udGV4dC5kb2N1bWVudC5mb250cy5sb2FkKE4oYiwnXCInK2IuZmFtaWx5KydcIicpLGcpLnRoZW4oZnVuY3Rpb24obil7MTw9bi5sZW5ndGg/cigpOnNldFRpbWVvdXQoaCwyNSl9LHQpfWgoKX0pLFA9bmV3IFByb21pc2UoZnVuY3Rpb24ocix0KXtlPXNldFRpbWVvdXQoZnVuY3Rpb24oKXt0KEVycm9yKFwiXCIrcStcIm1zIHRpbWVvdXQgZXhjZWVkZWRcIikpfSxxKX0pO1Byb21pc2UucmFjZShbUCxPXSkudGhlbihmdW5jdGlvbigpe2NsZWFyVGltZW91dChlKTtcbksoYil9LEwpfWVsc2UgdShmdW5jdGlvbigpe2Z1bmN0aW9uIHIoKXt2YXIgZDtpZihkPS0xIT1rJiYtMSE9bHx8LTEhPWsmJi0xIT1tfHwtMSE9bCYmLTEhPW0pKGQ9ayE9bCYmayE9bSYmbCE9bSl8fChudWxsPT09RSYmKGQ9L0FwcGxlV2ViS2l0XFwvKFswLTldKykoPzpcXC4oWzAtOV0rKSkvLmV4ZWMod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpLEU9ISFkJiYoNTM2PnBhcnNlSW50KGRbMV0sMTApfHw1MzY9PT1wYXJzZUludChkWzFdLDEwKSYmMTE+PXBhcnNlSW50KGRbMl0sMTApKSksZD1FJiYoaz09eSYmbD09eSYmbT09eXx8az09eiYmbD09eiYmbT09enx8az09QSYmbD09QSYmbT09QSkpLGQ9IWQ7ZCYmKG51bGwhPT1mLnBhcmVudE5vZGUmJmYucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChmKSxjbGVhclRpbWVvdXQoZSksSyhiKSl9ZnVuY3Rpb24gdCgpe2lmKChuZXcgRGF0ZSkuZ2V0VGltZSgpLUo+PXEpbnVsbCE9PWYucGFyZW50Tm9kZSYmZi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGYpLFxuTChFcnJvcihcIlwiK3ErXCJtcyB0aW1lb3V0IGV4Y2VlZGVkXCIpKTtlbHNle3ZhciBkPWIuY29udGV4dC5kb2N1bWVudC5oaWRkZW47aWYoITA9PT1kfHx2b2lkIDA9PT1kKWs9aC5nLm9mZnNldFdpZHRoLGw9bi5nLm9mZnNldFdpZHRoLG09di5nLm9mZnNldFdpZHRoLHIoKTtlPXNldFRpbWVvdXQodCw1MCl9fXZhciBoPW5ldyB3KGcpLG49bmV3IHcoZyksdj1uZXcgdyhnKSxrPS0xLGw9LTEsbT0tMSx5PS0xLHo9LTEsQT0tMSxmPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7Zi5kaXI9XCJsdHJcIjt4KGgsTihiLFwic2Fucy1zZXJpZlwiKSk7eChuLE4oYixcInNlcmlmXCIpKTt4KHYsTihiLFwibW9ub3NwYWNlXCIpKTtmLmFwcGVuZENoaWxkKGguZyk7Zi5hcHBlbmRDaGlsZChuLmcpO2YuYXBwZW5kQ2hpbGQodi5nKTtiLmNvbnRleHQuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmKTt5PWguZy5vZmZzZXRXaWR0aDt6PW4uZy5vZmZzZXRXaWR0aDtBPXYuZy5vZmZzZXRXaWR0aDt0KCk7XG5DKGgsZnVuY3Rpb24oZCl7az1kO3IoKX0pO3goaCxOKGIsJ1wiJytiLmZhbWlseSsnXCIsc2Fucy1zZXJpZicpKTtDKG4sZnVuY3Rpb24oZCl7bD1kO3IoKX0pO3gobixOKGIsJ1wiJytiLmZhbWlseSsnXCIsc2VyaWYnKSk7Qyh2LGZ1bmN0aW9uKGQpe209ZDtyKCl9KTt4KHYsTihiLCdcIicrYi5mYW1pbHkrJ1wiLG1vbm9zcGFjZScpKX0pfSl9O1wib2JqZWN0XCI9PT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPUQ6KHdpbmRvdy5Gb250RmFjZU9ic2VydmVyPUQsd2luZG93LkZvbnRGYWNlT2JzZXJ2ZXIucHJvdG90eXBlLmxvYWQ9RC5wcm90b3R5cGUubG9hZCk7fSgpKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8qKlxuICogRm9udG9ic2VydmVyIG1vZHVsZVxuICpcbiAqIE1vcmUgaW5mbzogaHR0cHM6Ly93d3cuYnJhbXN0ZWluLmNvbS93cml0aW5nL3dlYi1mb250LWxvYWRpbmctcGF0dGVybnMuaHRtbFxuICovXG5cbmltcG9ydCBGb250RmFjZU9ic2VydmVyIGZyb20gXCJmb250ZmFjZW9ic2VydmVyXCI7XG5cbnZhciBGb250T2JzZXJ2ZXJIYW5kbGVyID0gKGZ1bmN0aW9uICgpIHtcblxuXHRmdW5jdGlvbiBpbml0KCl7XG5cblx0XHQvLyBJZiB0aGUgY2xhc3MgYGZvbnRzLWxvYWRlZGAgaXMgYWxyZWFkeSBzZXQsIHdlJ3JlIGdvb2Rcblx0XHRpZihkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NOYW1lLmluZGV4T2YoJ2ZvbnRzLWxvYWRlZCcpID4gLTEgKSB7XG5cdFx0Ly8gaWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2ZvbnRzLWxvYWRlZCcpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gRGVmaW5lIHRoZSBmb250cyBhbmQgZm9udCB2YXJpYW50cyB0byBvYnNlcnZlZFxuXHRcdHZhciBtYWlzb25fYm9vayA9IG5ldyBGb250RmFjZU9ic2VydmVyKCdNYWlzb24gTmV1ZScsIHtcblx0XHRcdHdlaWdodDogNDAwXG5cdFx0fSk7XG5cblx0XHQvLyBMb2FkaW5nIGdyb3VwcyBvZiBmb250cyB3aXRoIGEgdGltZW91dFxuXHRcdFByb21pc2UuYWxsKFtcblx0XHRcdG1haXNvbl9ib29rLmxvYWQoKVxuXHRcdF0pLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTmFtZSArPSAnIGZvbnRzLWxvYWRlZCc7XG5cdFx0XHQvLyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZm9udHMtbG9hZGVkJyk7XG5cdFx0XHRlbmhhbmNlLmNvb2tpZSgnZm9udHNfbG9hZGVkJywgJ3RydWUnLCA3KTtcblx0XHRcdC8vIGNvbnNvbGUubG9nKCdLYXdhayBmb250cyBoYXZlIGxvYWRlZC4nKTtcblx0XHR9KS5jYXRjaChmdW5jdGlvbiAoKSB7XG5cdFx0XHQvLyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZm9udHMtZmFpbGVkJyk7XG5cdFx0XHQvLyBjb25zb2xlLmluZm8oJ1dlYiBmb250cyBjb3VsZCBub3QgYmUgbG9hZGVkIGluIHRpbWUuIEZhbGxpbmcgYmFjayB0byBzeXN0ZW0gZm9udHMuJyk7XG5cdFx0fSk7XG5cblx0XHQvLyAvLyBUaW1lciBoZWxwZXIgZnVuY3Rpb25cblx0XHQvLyBmdW5jdGlvbiB0aW1lcih0aW1lKSB7XG5cdFx0Ly8gXHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdC8vIFx0XHRzZXRUaW1lb3V0KHJlamVjdCwgdGltZSk7XG5cdFx0Ly8gXHR9KTtcblx0XHQvLyB9XG5cblx0XHQvLyAvLyBMb2FkaW5nIGdyb3VwcyBvZiBmb250cyB3aXRoIGEgdGltZW91dFxuXHRcdC8vIFByb21pc2UucmFjZShbXG5cdFx0Ly8gXHR0aW1lcigzMDAwKSxcblx0XHQvLyBcdGthd2FrX2xpZ2h0LmxvYWQoKSxcblx0XHQvLyBcdGthd2FrX3JlZ3VsYXIubG9hZCgpXG5cdFx0Ly8gXSkudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0Ly8gXHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NOYW1lICs9ICcgZm9udHMtbG9hZGVkJztcblx0XHQvLyBcdC8vIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdmb250cy1sb2FkZWQnKTtcblx0XHQvLyBcdGVuaGFuY2UuY29va2llKCdmb250c19sb2FkZWQnLCAndHJ1ZScsIDcpO1xuXHRcdC8vIFx0Ly8gY29uc29sZS5pbmZvKCdLYXdhayBmb250cyBoYXZlIGxvYWRlZC4nKTtcblx0XHQvLyB9KS5jYXRjaChmdW5jdGlvbiAoKSB7XG5cdFx0Ly8gXHQvLyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZm9udHMtZmFpbGVkJyk7XG5cdFx0Ly8gXHRjb25zb2xlLmluZm8oJ0thd2FrIGZvbnRzIGxvYWRpbmcgaGFzIHRpbWVkIG91dCAoPiAzIHNlYy4pLiBGYWxsaW5nIGJhY2sgdG8gc3lzdGVtIGZvbnRzLicpO1xuXHRcdC8vIH0pO1xuXG5cdFx0Ly8gLy8gUHJpb3JpdGlzZWQgbG9hZGluZ1xuXHRcdC8vIGthd2FrX2xpZ2h0LmxvYWQoKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHQvLyBcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc05hbWUgKz0gJyBrYXdhay1saWdodC1sb2FkZWQnO1xuXHRcdC8vIFx0Y29uc29sZS5pbmZvKCdLYXdhayBMaWdodCBmb250IGhhcyBsb2FkZWQuJyk7XG5cblx0XHQvLyBcdGthd2FrX3JlZ3VsYXIubG9hZCgpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdC8vIFx0XHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NOYW1lICs9ICcga2F3YWstcmVndWxhci1sb2FkZWQnO1xuXHRcdC8vIFx0XHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NOYW1lICs9ICcgZm9udHMtbG9hZGVkJztcblx0XHQvLyBcdFx0Y29uc29sZS5pbmZvKCdLYXdhayBSZWd1bGFyIGZvbnQgaGFzIGxvYWRlZC4nKTtcblx0XHQvLyBcdH0pO1xuXHRcdC8vIH0pO1xuXG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJuIHB1YmxpYyBtZXRob2RzXG5cdCAqL1xuXHRyZXR1cm4ge1xuXHRcdGluaXQ6IGluaXRcblx0fTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IEZvbnRPYnNlcnZlckhhbmRsZXI7XG4iLCIvKipcbiAqIE5hdmlnYXRpb24gbW9kdWxlXG4gKiBBZGQgc2ltcGxlIG5hdmlnYXRpb24gZnVuY3Rpb25hbGl0eSAob3BlbiBhbmQgY2xvc2UpIHRvIC5qcy1uYXZNYWluIGVsZW1lbnRcbiAqXG4gKiBVc2FnZTpcbiAqIE5hdk1haW4uaW5pdCgpOyAvLyBuYXZpZ2F0aW9uIGZpeGVkIG9uIHRvcCBvZiB3aW5kb3dcbiAqL1xuXG5pbXBvcnQgdHJhbnNpdGlvbkVuZCBmcm9tIFwiLi4vLi4vdXRpbHMvdHJhbnNpdGlvbmVuZC51dGlsXCI7XG5cbnZhciBOYXZNYWluID0gKGZ1bmN0aW9uICgpIHtcblxuXHQvKipcblx0ICogUHJpdmF0ZXNcblx0ICovXG5cdHZhciBuYXZlbGVtZW50cyA9IHtcblx0XHRiYW5uZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYW5uZXInKSxcblx0XHRodG1sOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdodG1sJyksXG5cdFx0bmF2RWw6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1uYXYtbWFpbicpXG5cdH07XG5cblx0ZnVuY3Rpb24gaGFuZGxlTmF2Q2xpY2soZXZlbnQpIHtcblx0XHR2YXIgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuXHRcdGlmKCh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdqcy1uYXYtbWFpbicpKSB8fCAoZXZlbnQua2V5Q29kZSA9PT0gMjcpKSB7XG5cdFx0XHROYXZNYWluLmNsb3NlTmF2KGV2ZW50KTtcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBzZXROYXZIYW5kbGVycygpIHtcblx0XHQvLyB2YXIgbmF2TWFpbkVsID0gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1uYXZNYWluJyk7XG5cdFx0Ly8gbmF2TWFpbkVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlTmF2Q2xpY2ssIGZhbHNlKTsgLy8gT25seSBkbyB0aGlzIGlmIG5hdmhlaWdodCAhPSB3aW5kb3doZWlnaHRcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGhhbmRsZU5hdkNsaWNrLCBmYWxzZSk7XG5cdH1cblxuXHRmdW5jdGlvbiB1bnNldE5hdkhhbmRsZXJzKCkge1xuXHRcdC8vIHZhciBuYXZNYWluRWwgPSAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLW5hdk1haW4nKTtcblx0XHQvLyBuYXZNYWluRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVOYXZDbGljaywgZmFsc2UpOyAvLyBPbmx5IGRvIHRoaXMgaWYgbmF2aGVpZ2h0ICE9IHdpbmRvd2hlaWdodFxuXHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleXVwJywgaGFuZGxlTmF2Q2xpY2ssIGZhbHNlKTtcblx0fVxuXG5cdGZ1bmN0aW9uIG9wZW5OYXYoZXZlbnQpIHtcblx0XHRpZih0eXBlb2YgZXZlbnQgIT09ICd1bmRlZmluZWQnKXtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0fVxuXHRcdG5hdmVsZW1lbnRzLmh0bWwuY2xhc3NMaXN0LmFkZCgnaXMtb3Blbi1tYWluLW5hdicpO1xuXHRcdHNldE5hdkhhbmRsZXJzKHRydWUpO1xuXHR9XG5cblx0ZnVuY3Rpb24gY2xvc2VOYXYoZXZlbnQpIHtcblx0XHRpZih0eXBlb2YgZXZlbnQgIT09ICd1bmRlZmluZWQnKXtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0fVxuXG5cdFx0bmF2ZWxlbWVudHMubmF2RWwuYWRkRXZlbnRMaXN0ZW5lcih0cmFuc2l0aW9uRW5kLCBmdW5jdGlvbiBlbmRUcmFuc2l0aW9uTmF2Q2xvc2UoKXtcblx0XHRcdG5hdmVsZW1lbnRzLmh0bWwuY2xhc3NMaXN0LnJlbW92ZSgnaXMtY2xvc2luZy1tYWluLW5hdicpO1xuXHRcdFx0bmF2ZWxlbWVudHMuaHRtbC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1vcGVuLW1haW4tbmF2Jyk7XG5cdFx0XHR0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIodHJhbnNpdGlvbkVuZCwgZW5kVHJhbnNpdGlvbk5hdkNsb3NlLCBmYWxzZSk7XG5cdFx0fSxmYWxzZSk7XG5cblx0XHRuYXZlbGVtZW50cy5odG1sLmNsYXNzTGlzdC5hZGQoJ2lzLWNsb3NpbmctbWFpbi1uYXYnKTtcblxuXHRcdHVuc2V0TmF2SGFuZGxlcnMoKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGluaXQoKSB7XG5cdFx0dmFyIG5hdk1haW5TaG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLW5hdi1tYWluLXNob3cnKTtcblx0XHR2YXIgbmF2TWFpbkhpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtbmF2LW1haW4taGlkZScpO1xuXG5cdFx0bmF2ZWxlbWVudHMubmF2RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtbmF2LW1haW4nKTtcblxuXHRcdC8vIENoZWNrIGlmIG5hdi1tYWluLCBhbmQgbmF2LW1haW4tc2hvdyBET00gbmF2ZWxlbWVudHMgZXhpc3Rcblx0XHRpZiAodHlwZW9mKG5hdmVsZW1lbnRzLm5hdkVsKSAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2ZWxlbWVudHMubmF2RWwgIT09IG51bGwgJiYgdHlwZW9mKG5hdk1haW5TaG93KSAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2TWFpblNob3cgIT09IG51bGwpIHtcblx0XHRcdC8vIFNldCB0aGUgZXZlbnQgbGlzdGVuZXJzXG5cdFx0XHRuYXZNYWluU2hvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5OYXYsIGZhbHNlKTtcblx0XHRcdG5hdk1haW5IaWRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VOYXYsIGZhbHNlKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJuIHB1YmxpYyBtZXRob2RzXG5cdCAqL1xuXHRyZXR1cm4ge1xuXHRcdG9wZW5OYXY6IG9wZW5OYXYsXG5cdFx0Y2xvc2VOYXY6IGNsb3NlTmF2LFxuXHRcdGluaXQ6IGluaXRcblx0fTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IE5hdk1haW47XG4iLCIvKipcbiAqIFBvcHVwIHdpbmRvdyBtb2R1bGVcbiAqXG4gKiBTaW1wbGUgcG9wdXB3aW5kb3dcbiAqIFVzZSBldmVudGxpc3RlbmVyIHRoYXQgZGVsZWdhdGVzIHRvIHBvcHVwLm9wZW5XaW5kb3cgdG8gaW5pdGlhdGVcbiAqIEJldHdlZW4gY3VybHkgYnJhY2VzIHNldCBjdXN0b20gaGVpZ2h0IGFuZCB3aWR0aCwgb3IgbGVhdmUgZW1wdHkuXG4gKiBHb2VzIGEgbGl0dGxlIHNvbWV0aGluZyBsaWtlIHRoaXM6IHt3OiA0MDAsIGg6IDgwMH1cbiAqL1xuXG52YXIgUG9wdXAgPSAoZnVuY3Rpb24gKCkge1xuXG5cdGZ1bmN0aW9uIGluaXQoKSB7XG5cdFx0dmFyIHBvcHVwbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtcG9wdXAnKTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHBvcHVwbGlua3MubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmIChwb3B1cGxpbmtzW2ldICE9PSBudWxsKSB7XG5cdFx0XHRcdHBvcHVwbGlua3NbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBQb3B1cC5vcGVuV2luZG93LCBmYWxzZSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdH1cblxuXHRmdW5jdGlvbiBvcGVuV2luZG93KGV2ZW50KXtcblx0XHR2YXIgdXJsID0gZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcblx0XHR3aW5kb3cub3Blbih1cmwsICdwb3B1cHdpbicsICdoZWlnaHQ9ODAwLHdpZHRoPTY1MCxyZXNpemFibGU9MSx0b29sYmFyPTAsbWVudWJhcj0wLHN0YXR1cz0wLGxvY2F0aW9uPTAsc2Nyb2xsYmFycz0xJyk7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm4gcHVibGljIG1ldGhvZHNcblx0ICovXG5cdHJldHVybiB7XG5cdFx0b3BlbldpbmRvdzogb3BlbldpbmRvdyxcblx0XHRpbml0OiBpbml0XG5cdH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBQb3B1cDtcbiIsIi8qKlxuICogSW5pdGlhbGl6ZSBhIHZhcmlhYmxlIHdpdGggdGhlIHJpZ2h0IHRyYW5zaXRpb25FbmQgcHJlZml4IGJhc2VkIG9uIHRoZSBzdXBwb3J0IGluIHRoZSBicm93c2VyLlxuICpcbiAqIFVzZSBpdCBsaWtlIHRoaXM6XG4gKiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodHJhbnNpdGlvbkVuZCwgdGhlRnVuY3Rpb25Ub0ludm9rZSwgZmFsc2UpO1xuICpcbiAqIE9yOlxuICogbm90aWZpY2F0aW9uLm9uKHRyYW5zaXRpb25FbmQsIHRoZUZ1bmN0aW9uVG9JbnZva2UpO1xuICovXG5cbmZ1bmN0aW9uIHdoaWNoVHJhbnNpdGlvbkV2ZW50KCl7XG5cdHZhciB0O1xuXHR2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmYWtlZWxlbWVudCcpO1xuXHR2YXIgdHJhbnNpdGlvbnMgPSB7XG5cdFx0J3RyYW5zaXRpb24nOid0cmFuc2l0aW9uZW5kJyxcblx0XHQnT1RyYW5zaXRpb24nOidvVHJhbnNpdGlvbkVuZCcsXG5cdFx0J01velRyYW5zaXRpb24nOid0cmFuc2l0aW9uZW5kJyxcblx0XHQnV2Via2l0VHJhbnNpdGlvbic6J3dlYmtpdFRyYW5zaXRpb25FbmQnXG5cdH07XG5cblx0Zm9yKHQgaW4gdHJhbnNpdGlvbnMpe1xuXHRcdGlmKCBlbC5zdHlsZVt0XSAhPT0gdW5kZWZpbmVkICl7XG5cdFx0XHRyZXR1cm4gdHJhbnNpdGlvbnNbdF07XG5cdFx0fVxuXHR9XG59XG5cbnZhciB0cmFuc2l0aW9uRW5kID0gd2hpY2hUcmFuc2l0aW9uRXZlbnQoKTtcblxuZXhwb3J0IGRlZmF1bHQgdHJhbnNpdGlvbkVuZDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4uL3N0eWxlc2hlZXRzL21haW4uc3R5bGVzLnNjc3MnO1xuXG4vLyBJbXBvcnQgcGx1Z2lucyBhbmQgdXRpbHNcbmltcG9ydCBkb21yZWFkeSBmcm9tICdkb21yZWFkeSc7XG4vLyBpbXBvcnQgbG9hZEpTIGZyb20gJy4vdXRpbHMvbG9hZGpzLnV0aWwnO1xuXG4vLyBJbXBvcnQgRm9udG9ic2VydmVyIG1vZHVsZVxuaW1wb3J0IEZvbnRPYnNlcnZlciBmcm9tICcuL21vZHVsZXMvZm9udG9ic2VydmVyL2ZvbnRvYnNlcnZlci5tb2R1bGUnO1xuXG4vLyBJbXBvcnQgb3RoZXIgbW9kdWxlc1xuaW1wb3J0IE5hdk1haW4gZnJvbSAnLi9tb2R1bGVzL25hdmlnYXRpb24vbmF2bWFpbi5tb2R1bGUnO1xuaW1wb3J0IFBvcHVwcyBmcm9tICcuL21vZHVsZXMvcG9wdXBzL3BvcHVwcy5tb2R1bGUnO1xuXG5mdW5jdGlvbiBpc0lFKCkge1xuICAgIC8vIElFIDEwIGFuZCBJRSAxMVxuICAgIHJldHVybiAvVHJpZGVudFxcL3xNU0lFLy50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KTtcbn1cblxuZG9tcmVhZHkoZnVuY3Rpb24gKCkge1xuXHRGb250T2JzZXJ2ZXIuaW5pdCgpO1xuXHROYXZNYWluLmluaXQoKTtcblx0UG9wdXBzLmluaXQoKTtcblxuXHRjb25zb2xlLmxvZygndGVzdCcpO1xuXG5cdGlmKGlzSUUoKSkge1xuXHRcdHZhciBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuXHRcdHZhciBvbGRpZW1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cdFx0b2xkaWVtZXNzYWdlLmNsYXNzTGlzdC5hZGQoJ29sZGllLW1lc3NhZ2UnKTtcblx0XHRvbGRpZW1lc3NhZ2UuaW5uZXJIVE1MID0gJ0xldCBvcCEgVSBnZWJydWlrdCBJbnRlcm5ldCBFeHBsb3JlciAxMSBvZiBsYWdlciAoZWVuIDxzdHJvbmc+c3RlcmsgdmVyb3VkZXJkPC9zdHJvbmc+IGludGVybmV0cHJvZ3JhbW1hKSBvbSBkZXplIHdlYnNpdGUgdGUgYmVraWprZW4uIDxiciAvPiA8YSBocmVmPVwiaHR0cDovL2Jyb3dzZWhhcHB5LmNvbS9cIj5Eb3dubG9hZCBncmF0aXMgZWVuIHNuZWxsZXJlIGVuIHZlaWxpZ2VyZSB2ZXJzaWU8L2E+IG9tIGRlemUgd2Vic2l0ZSBvcHRpbWFhbCB0ZSBlcnZhcmVuLic7XG5cdFx0Ym9keS5pbnNlcnRCZWZvcmUob2xkaWVtZXNzYWdlLCBib2R5LmZpcnN0Q2hpbGQpO1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=