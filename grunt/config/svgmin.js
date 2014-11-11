module.exports = function(grunt) {

	grunt.config('svgmin', {
		options: {
			plugins: [{
				removeViewBox: false,
			}],
		},
		design: {
			files: [{
				expand: true,
				cwd: '<%= project.design_assets %>/svg',
				src: ['*.svg'],
				dest: '<%= project.design_assets %>/svg/min/',
				ext: '.svg',
			}],
		},
		styles: {
			files: [{
				expand: true,
				cwd: '<%= project.styles %>/img',
				src: ['*.svg'],
				dest: '<%= project.styles %>/img',
				ext: '.svg',
			}],
		}
	});

};
