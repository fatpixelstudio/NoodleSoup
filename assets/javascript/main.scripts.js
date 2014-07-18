/**
 * main.script.js
 *
 * Custom, additional scripts
 */

// Only serve javascript to 'Cutting the Mustard' browsers
if(cutsthemustard){

	document.addEventListener('DOMContentLoaded', function() {

		/* Initiate all available classes */
		alerts.init(push_message);                // Init alerts
		navMain.init();                           // Init main navigation
		popup.init();                             // Init popup

		/* Init example of an error in a modal box */
		// alerts.addMessage({status: 'error', content: 'OMG! Something terrible must have happened here!', timeout: 0, type: 'box-modal'});

		/* Echo Lazyloading */
//		echo.init({
//			offset: '0',
//			throttle: '50'
//		});

	}, false);

}
