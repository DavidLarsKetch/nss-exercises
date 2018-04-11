module.exports = function(grunt) {
  grunt.initConfig({
    browserify: {
      files: {
        src: ['./assets/js/main.js', './assets/templates/*.hbs'],
        dest: './dist/app.js'
      },
      options: {
        transform: ['hbsfy'],
      }
    },
    jshint: {
      files: ['./assets/js/**/*.js'],
      options: {
        predef: ["document", "console"],
        esnext: true,
        globalstrict: true,
        globals: {},
        browserify: true
      }
    },
    sass: {
      dist: {
        files: {
          "assets/stylesheets/main.css": "assets/sass/main.scss"
        }
      }
    },
    watch: {
      javascripts: {
        files: ['./assets/js/**/*.js'],
        tasks: ['jshint', 'sass', 'browserify']
      },
      hbs: {
        files: ['./assets/templates/**/*.hbs'],
        tasks: ['browserify']
      }
    }
  });

  require('matchdep').filter('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', ['jshint', 'sass', 'browserify', 'watch']);
};
