module.exports = function(grunt) {

	// Initialize config
	grunt.initConfig({

		// Load package.json
		pkg: require('./package.json'),

		// Project paths
		project: {
			src: 'assets',
			styles: '<%= project.src %>/stylesheets',
			styles_scss: '<%= project.styles %>/scss',
			styles_dev: '<%= project.styles %>/dev',
			styles_min: '<%= project.styles %>/min',
			scripts: '<%= project.src %>/javascript',
			scripts_dev: '<%= project.src %>/javascript/dev',
			scripts_min: '<%= project.src %>/javascript/min',
			design_assets: 'design/assets',
		},

		// Project banner
		tag: {
			banner: '/**\n' +
					' * <%= pkg.name %>\n' +
					' *\n' +
					' * <%= pkg.description %>\n' +
					' *\n' +
					' * @authors\t<%= pkg.author %>\n' +
					// ' * @copyright\t<%= grunt.template.today("yyyy") %> <%= pkg.copyright %>\n' +
					' * @license\t<%= pkg.license %>\n' +
					' * @link\t<%= pkg.url %>\n' +
					' * @version\t<%= pkg.version %>\n' +
					' * @generated\t<%= grunt.template.today("yyyy-mm-dd:hh:mm") %>\n' +
					' */\n'
		},

		// JS files and order
		jsfiles: {
			head: [
				//'<%= project.scripts %>/vendor/ctm.js',
				// '<%= project.scripts %>/vendor/typekit.min.js',
				// '<%= project.scripts %>/vendor/webfont.min.js',
				// '<%= project.scripts %>/vendor/resrc.js',
				'<%= project.scripts %>/head.scripts.js',
			],
			main: {
				checks: [
					'<%= project.scripts %>/vendor/modernizr.dev.js',
					// '<%= project.scripts %>/vendor/modernizr.min.js',
				],
				polyfills: [
					'<%= project.scripts %>/polyfills/classlist.js',
				],
				plugins: [
					'<%= project.scripts %>/plugins/transitionend.js',
					'<%= project.scripts %>/plugins/smoothscroll.js',
				],
				utils: [
					'<%= project.scripts %>/utils/extend.util.js',
					'<%= project.scripts %>/utils/alerts.util.js',
					// '<%= project.scripts %>/utils/ajax.util.js',
				],
				other: [
				// Classes
					'<%= project.scripts %>/classes/navmain.class.js',
					'<%= project.scripts %>/classes/popup.class.js',
				// Main
					'<%= project.scripts %>/main.scripts.js',
				],
			},
		},
	});

	// Load per-task config from separate files
	grunt.loadTasks('grunt/config');

	// Register alias tasks from separate files
	grunt.loadTasks('grunt/tasks');

	// Register default task
	grunt.registerTask('default', ['develop']);

};
