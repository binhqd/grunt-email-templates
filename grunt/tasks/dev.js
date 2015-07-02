'use strict';

module.exports = function(grunt) {
  grunt.registerTask('dev', [
    'base_dev',
    'connect:dev',
    'concurrent',
    'assemble'
  ]);
};