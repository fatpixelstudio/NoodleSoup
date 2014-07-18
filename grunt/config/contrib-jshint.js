module.exports = function(grunt) {

	grunt.config('jshint', {

		dist: {
			options : {
				jshintrc: '.jshintrc',
				reporter: require('jshint-stylish'),
			},
			src: [
				'Gruntfile.js',
				'<%= project.scripts_dev %>/*.hint.js',
			],
		},

	});

};
