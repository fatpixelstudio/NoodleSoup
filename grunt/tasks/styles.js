module.exports = function(grunt) {

	grunt.registerTask('sass-concat', [], function () {
		grunt.loadNpmTasks('grunt-sass');
		grunt.loadNpmTasks('grunt-autoprefixer');
		grunt.loadNpmTasks('grunt-notify');
		grunt.task.run(
			'sass:debug',
			'autoprefixer:main',
			'autoprefixer:print',
			'notify:styles'
		);
	});

	grunt.registerTask('sass-minify', [], function () {
		grunt.loadNpmTasks('grunt-contrib-clean');
		grunt.loadNpmTasks('grunt-csso');
		grunt.task.run(
			'clean:styles',
			'csso'
		);
	});

	grunt.registerTask('styles', [], function () {
		// grunt.loadNpmTasks('grunt-contrib-watch');
		grunt.task.run(
			'sass-concat'
			// 'watch'
		);
	});

};
