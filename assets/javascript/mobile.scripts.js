/**
 * mobile.scripts.js
 *
 * Mobile specific scripts
 */

// Only serve javascript to 'Cutting the Mustard' browsers
if(cutsthemustard){

	document.addEventListener('DOMContentLoaded', function() {

		/* Add 'js' class to html element, when not using modernizr */
		// var htmlEl = document.querySelector('html');
		// htmlEl.classList.remove('no-js');
		// htmlEl.classList.add('js');

		/* Initiate all available classes */
		// alerts.init(push_message);                // Init alerts
		// navMain.init();                           // Init main navigation

	}, false);
}
