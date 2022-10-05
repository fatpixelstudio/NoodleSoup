import '../stylesheets/main.styles.scss';

// Import plugins and utils
import domready from 'domready';
// import loadJS from './utils/loadjs.util';

// Import Fontobserver module
import FontObserver from './modules/fontobserver/fontobserver.module';

// Import other modules
import NavMain from './modules/navigation/navmain.module';
import Popups from './modules/popups/popups.module';

function isIE() {
    // IE 10 and IE 11
    return /Trident\/|MSIE/.test(window.navigator.userAgent);
}

domready(function () {
	if (isIE()) {
		var body = document.querySelector('body');
		var oldiemessage = document.createElement('p');
		oldiemessage.classList.add('oldie-message');
		oldiemessage.innerHTML = 'Let op! U gebruikt Internet Explorer 11 of lager (een <strong>sterk verouderd</strong> internetprogramma) om deze website te bekijken. <br /> <a href="http://browsehappy.com/">Download gratis een snellere en veiligere versie</a> om deze website optimaal te ervaren.';
		body.insertBefore(oldiemessage, body.firstChild);
		return false;
	}

	FontObserver.init();
	NavMain.init();
	Popups.init();

	console.log('test');
});
