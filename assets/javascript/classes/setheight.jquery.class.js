/**
 * setheight
 *
 * Needs jQuery
 */

var setheight = {

	/**
	 * Init the navigation
	 */
	init: function() {
		setheight.setSiblingHeight($('.js-set-sibling-height'));
		setheight.setParentHeight($('.js-set-parent-height'));
		setheight.setEqualHeight($('.js-set-equal-height'));
	},

	setSiblingHeight: function(element) {
		siblingheight = element.siblings('.js-setheight-origin').outerHeight();
		element.css('min-height',siblingheight);
	},

	setParentHeight: function(element) {
		parentheight = element.parents('.js-setheight-origin').outerHeight();
		element.css('min-height',parentheight);
	},

	setEqualHeight: function(element) {
		var elheight = 0;
		element.each(function(){
			if($(this).outerHeight() > elheight) {
				elheight = $(this).outerHeight();
			}
		});
		element.css('min-height',elheight);
	}

};
