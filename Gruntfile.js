module.exports = function(grunt) {
  
  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'app/*.js']
    },
    watch: {
      files: ['app/*.js', 'app/*.html', 'app/*.css'],
      tasks: ['jshint'],
      options: {
        livereload: true,
        atBegin: true
      }
    },
    mochaTest: {
      src: ['tests.js']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-mocha-test');

  grunt.registerTask('default', ['jshint']);
};