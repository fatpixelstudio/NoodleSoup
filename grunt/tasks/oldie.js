module.exports = function(grunt) {

	grunt.registerTask('oldie', [], function () {
		grunt.loadNpmTasks('grunt-sass');
		grunt.loadNpmTasks('grunt-autoprefixer');
		grunt.loadNpmTasks('grunt-stripmq');
		grunt.loadNpmTasks('grunt-pixrem');
		grunt.loadNpmTasks('grunt-notify');
		grunt.task.run(
			'sass:debug',
			'autoprefixer:oldie',
			'stripmq',
			'pixrem',
			'notify:oldie'
		);
	});

};
