'use strict';

module.exports = function(grunt) {
  grunt.registerTask('base_dev', [
    'clean',
    'copy',
    'compass:dev',
    'assemble',
    'render',
    'preprocess:dev'
  ]);
};