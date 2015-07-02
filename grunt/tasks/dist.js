'use strict';

module.exports = function(grunt) {
  grunt.registerTask('dist', [
    'clean',
    'copy',
    'imagemin',
    'compass:dist',
    'assemble',
    'render',
    'preprocess:dist',
    'premailer:dist_html',
    'premailer:dist_txt'
  ]);
};