module.exports = function(grunt) {
  grunt.initConfig({
    browserify: {
      'dist/bundle.js': ['module-xhr.js']
    },
    jshint: {
      files: ["*.js"],
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
        files: ["*.js"],
        tasks: ["jshint", "browserify"]
      },
    }
  });

  require("matchdep")
    .filter("grunt-*")
    .forEach(grunt.loadNpmTasks);

  grunt.registerTask("default", ['jshint', 'browserify', 'watch']);
};
