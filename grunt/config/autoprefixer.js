module.exports = function(grunt) {

	grunt.config('autoprefixer', {
		options: {
			browsers: ['> 1%', 'last 2 versions', 'ie 8', 'ie 9'], // Is default value; other example: ['last 2 version', 'ie 8', 'ie 9']
			map: true,
			cascade: true,
		},
		main: {
			src: '<%= project.styles_dev %>/main.concat.css', // if only the `src` param is specified, the destination will be set automatically (and source files will be overwritten)
			dest: '<%= project.styles_dev %>/main.dev.css',
		},
		mobile: {
			src: '<%= project.styles_dev %>/mobile.concat.css',
			dest: '<%= project.styles_dev %>/mobile.dev.css',
		},
		print: {
			src: '<%= project.styles_dev %>/print.concat.css',
			dest: '<%= project.styles_dev %>/print.dev.css',
		},
		oldie: {
			options: {
				browsers: ['ie 8'],
				map: false,
				cascade: true,
			},
			src: '<%= project.styles_dev %>/main.concat.css',
			dest: '<%= project.styles_dev %>/oldie.dev.css',
		},
	});

};
