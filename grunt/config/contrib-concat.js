module.exports = function(grunt) {

	grunt.config('concat', {
		options: {
			nonull: true,
			separator: '',
			stripBanners: true,
		},
		dist: {
			options: {
				banner: '<%= tag.banner %>',
			},
			files: {
				'<%= project.scripts_dev %>/head.scripts.dev.js': '<%= jsfiles.head %>', // destination: source
				'<%= project.scripts_dev %>/main.scripts.dev.js': ['<%= jsfiles.main.checks %>', '<%= jsfiles.main.polyfills %>', '<%= jsfiles.main.plugins %>', '<%= jsfiles.main.utils %>', '<%= jsfiles.main.other %>'],
			},
		},
		forhint: {
			files: {
				'<%= project.scripts_dev %>/head.scripts.hint.js': '<%= project.scripts %>/head.scripts.js',
				'<%= project.scripts_dev %>/main.scripts.hint.js': '<%= jsfiles.main.other %>',
			},
		},
	});

};
