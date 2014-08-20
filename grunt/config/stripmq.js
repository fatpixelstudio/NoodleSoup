module.exports = function(grunt) {

	grunt.config('stripmq', {
		options: {
			width: '50em', // what breakpoints do we want to include from _settings.breakpoints.scss
			type: 'screen'
		},
		dist: {
			files: {
				'<%= project.styles_dev %>/oldie.dev.css': '<%= project.styles_dev %>/oldie.dev.css', // destination: [source]
			},
		},
	});

};
