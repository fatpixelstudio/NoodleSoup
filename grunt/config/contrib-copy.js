module.exports = function(grunt) {

	grunt.config('copy', {
		gruntpngs: {
			files: [{
				expand: true,
				src: ['<%= project.styles_scss %>/img/*.png'],
				dest: '<%= project.styles %>/img/',
				flatten: true,
				filter: 'isFile',
			}],
		},
	});

};
