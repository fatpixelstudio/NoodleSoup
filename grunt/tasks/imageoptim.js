module.exports = function(grunt) {

	grunt.registerTask('imageoptim', [], function () {
		grunt.loadNpmTasks('grunt-imageoptim');
		grunt.loadNpmTasks('grunt-svgmin');
		grunt.loadNpmTasks('grunt-notify');
		grunt.task.run(
			// 'imageoptim:jpgs',
			'imageoptim:pngs',
			'svgmin:styles',
			'notify:imageoptim'
		);
	});

};
