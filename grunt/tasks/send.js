'use strict';

module.exports = function(grunt) {
  grunt.registerTask('send', 'Simulates an email delivery.', function() {
    grunt.task.run([
      'base_dev',
      'premailer:dev_html',
      'premailer:dev_txt',
      // 'nodemailer:email1',
      // 'nodemailer:email2',
      // 'nodemailer:email3',
      'nodemailer:emailpng',
      'connect:send_dev'
    ]);
  });
};