/**
 * resrc.js
 * --------------------------------------------------------
 * Load the ReSRC script asynchronously (http://j.mp/1sRgEPV)
 */

(function () {
	var d = false;
	var r = document.createElement('script');
	r.src = '//use.resrc.it/0.7';
	r.type = 'text/javascript';
	r.async = 'true';
	r.onload = r.onreadystatechange = function () {
		var rs = this.readyState;
		if (d || rs && rs != 'complete' && rs != 'loaded') return;
		d = true;
		try {
			resrc.ready(function () {
				resrc.resrc();
			});
		} catch (e) {}
	};
	var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(r, s);
})();
