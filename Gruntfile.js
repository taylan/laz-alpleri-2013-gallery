module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    cssmin: {
      combine: {
        files: {
          'css/styles-combined-<%= pkg.version %>.css': ['css/bootstrap.min.css', 'css/bootstrap-glyphicons.css', 'css/colorbox.css', 'css/jquery.qtip.min.css', 'css/styles.css']
        }
      }
    },
    concat: {
      js: {
        src: [
        "js/jquery-2.0.3.min.js",
        "js/jquery.colorbox-min.js",
        "js/jquery.qtip.min.js",
        "js/bootstrap.min.js",
        "js/angular.min.js",
        "js/paths.js",
        "js/people.js",
        "js/photos.js",
        "js/actions.js",
        "js/scripts.js"],
        dest: 'js/scripts-combined-<%= pkg.version %>.js',
      }
    },
    replace: {
        "update-version": {
            src: ["app.yaml"],
            overwrite: true,
            replacements: [
                {
                    from: /version: (\d+)-(\d+)-(\d+)/ig,
                    to: 'version: <%= pkg.version %>'
                }
            ]
        },
        "fix-app-yaml-version": {
            src: ["app.yaml"],
            overwrite: true,
            replacements: [
                {
                    from: /version: (\d+)\.(\d+)\.(\d+)/ig,
                    to: 'version: $1-$2-$3'
                }
            ]
        },
        "update-index-html": {
            src: ["static/index.html"],
            overwrite: true,
            replacements: [
                {
                    from: /css\/styles-combined-(\d+\.\d+\.\d+)\.css/ig,
                    to: 'css/styles-combined-<%= pkg.version %>.css'
                },
                {
                    from: /js\/scripts-combined-(\d+\.\d+\.\d+)\.js/ig,
                    to: 'js/scripts-combined-<%= pkg.version %>.js'
                }
            ]
        }
    },
    clean: {
        "clean-old-bundles": {
            src: ["js/scripts-combined*", "css/styles-combined*"]
        }
    },
    watch: {
        bundles: {
            files: ["css/*.css", "js/*.js", "!css/styles-combined*", "!js/scripts-combined*"],
            tasks: ['cssmin', 'concat']
        }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-bump');
  grunt.loadNpmTasks('grunt-text-replace');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('bump-patch', ['bump-only:patch']);
  grunt.registerTask('bump-minor', ['bump-only:minor']);
  grunt.registerTask('bump-major', ['bump-only:major']);

  grunt.registerTask('bundle-assets', ['clean', 'cssmin', 'concat']);
  grunt.registerTask('update-version', ['replace']);

  grunt.registerTask('pre-push', ['update-version', 'bundle-assets']);
};
