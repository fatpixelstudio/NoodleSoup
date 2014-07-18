/**
 * head.script.js
 *
 * Essential scripts, to be loaded in the head of the document
 * Only import (prepend) scripts. No additional scripting!
 */

/**
 * Cutting the mustard
 *
 * Check if the browser is an 'HTML4 or HTML5' browser.
 * Why? See: http://responsivenews.co.uk/post/18948466399/cutting-the-mustard
 *
 * Always enabled; it's added in the Gruntfile.js in the jsfiles section.
 */

// "assets/javascript/vendor/ctm.js",

/**
 * Typekit
 *
 * Load Typekit fonts asynchronously with controlling the Flash of
 * Unstyled Text (FOUT) using Font Events (.wf-loading, etc.).
 *
 * Enable the use of Typekit font, by adding (out-commenting) it in the
 * Gruntfile.js in the jsfiles section.
 *
 * Make sure to set the Typekit account id in typekit.min.js.
 */

// "assets/javascript/vendor/typekit.min.js",

/**
 * WebFont Loader
 *
 * Load custom, Google, Ascender, Fonts.com (Monotype), Fontdeck and/or
 * Typekit web fonts (or from multiple) with Google's WebFont Loader.
 * Version of webfont.min.js: 1.5.0 (check: http://j.mp/1475wC9).
 *
 * Enable the use of WebFont Loader, by adding (out-commenting) the correct
 * line in the Gruntfile.js in the 'head' part of the 'Set js files and
 * order' section. Then out-comment the code snippet below and use the webfont
 * service of your choice or use custom (sef-hosted) web fonts!
 */

// "assets/javascript/vendor/webfont.min.js",

/* Call webfont loader */

//WebFont.load({
//	google: { families: ['Fontname1', 'Fontname2']},
//	ascender: { key:'xxxxxxx', families: ['Fontname:bold,bolditalic,italic,regular']},
//	monotype: { projectId: 'xxxxxxx'},
//	fontdeck: { id: 'xxxxx'},
//	typekit: { id: 'xxxxxxx'},
//	custom: {
//		families:['TeXGyreAdventor-Bold', 'TeXGyreAdventor-Regular'],
//		urls:['<?php echo url('/assets/webfonts/texgyreadventor/texgyreadventor.css'); ?>']
//	}
//});

/**
 * ReSRC.it
 *
 * ReSRC delivers responsive images on-demand, direct from the cloud.
 * The ReSRC script is loaded asynchronously.
 * For more information see: http://www.resrc.it/docs/javascript/0.7
 *
 * Enable the use of ReSRC, by adding (out-commenting) it in the
 * Gruntfile.js in the jsfiles section.
 */

// "assets/javascript/vendor/resrc.js",
