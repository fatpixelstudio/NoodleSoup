module.exports = function(grunt) {

	grunt.registerTask('release', [], function () {
		grunt.loadNpmTasks('grunt-bump');
		grunt.loadNpmTasks('grunt-hashify');
		grunt.loadNpmTasks('grunt-notify');
		grunt.task.run(
			'bump-only:minor', // Version bumped from 0.0.x to 0.1.0
			'bump-commit',
			'sass-concat',
			'oldie',
			'sass-minify',
			'scripts-concat',
			'scripts-uglify',
			'hashify',
			'notify:release'
		);
	});

};
