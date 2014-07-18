module.exports = function(grunt) {

	grunt.config('stripmq', {
		options: {
			width: '0em',
			type: 'screen'
		},
		dist: {
			files: {
				'<%= project.styles_dev %>/oldie.dev.css': '<%= project.styles_dev %>/oldie.dev.css', // destination: [source]
			},
		},
	});

};
