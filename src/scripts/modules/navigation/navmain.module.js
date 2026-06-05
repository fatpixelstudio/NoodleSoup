/**
 * Navigation module
 * Add accessible navigation toggle to .js-nav-main element
 *
 * Usage:
 * NavMain.init();
 */

import transitionEnd from "../../utils/transitionend.util";

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
		elements.navEl.addEventListener(transitionEnd, function endTransitionNavClose() {
			elements.html.classList.remove('is-closing-main-nav');
			elements.html.classList.remove('is-open-main-nav');
			this.removeEventListener(transitionEnd, endTransitionNavClose, false);
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

export default NavMain;
