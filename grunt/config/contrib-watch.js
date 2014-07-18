module.exports = function(grunt) {

	grunt.config('watch', {
		styles: {
			files: ['<%= project.styles_scss %>/**/*.scss'],
			tasks: ['sass-concat'],
		},
		scripts: {
			files: [
				'<%= project.scripts %>/*.js',
				'<%= project.scripts %>/classes/*.js',
				'<%= project.scripts %>/polyfills/*.js',
				'<%= project.scripts %>/plugins/*.js',
				'<%= project.scripts %>/utils/*.js',
				'<%= project.scripts %>/vendor/*.js',
			],
			tasks: ['scripts-concat'],
		},
		jshint: {
			files: ['<%= project.scripts_dev %>/*.js'],
			tasks: ['scripts-hint'],
		},
	});

};
