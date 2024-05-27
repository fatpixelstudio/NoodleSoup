/**
 * Fontobserver module
 *
 * More info: https://www.bramstein.com/writing/web-font-loading-patterns.html
 */

import FontFaceObserver from "fontfaceobserver";

var FontObserverHandler = (function () {

	function init(){

		// If the class `fonts-loaded` is already set, we're good
		if(document.documentElement.className.indexOf('fonts-loaded') > -1 ) {
		// if (document.documentElement.classList.contains('fonts-loaded')) {
			return;
		}

		// Define the fonts and font variants to observed
		var roboto_book = new FontFaceObserver('Roboto', {
			weight: 400
		});
		var roboto_bold = new FontFaceObserver('Roboto', {
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

export default FontObserverHandler;
