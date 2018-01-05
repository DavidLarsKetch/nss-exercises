module.exports = function(grunt) {
  grunt.initConfig({
    browserify: {
      files: {
        src: './assets/js/main.js',
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
    watch: {
      javascripts: {
        files: ['./assets/js/**/*.js'],
        tasks: ['jshint', 'browserify']
      },
      hbs: {
        files: ['./assets/templates/**/*.hbs']
      }
    }
  });

  require('matchdep').filter('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', ['jshint', 'browserify', 'watch']);
};
