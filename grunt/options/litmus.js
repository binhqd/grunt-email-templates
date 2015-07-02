'use strict';

module.exports = function(grunt) {
  return {
    test : {
      src : [
        '<%= paths.dist %>/' + grunt.option('template')
      ],
      options : {
        username : '<%= secrets.litmus.username %>',
        password : '<%= secrets.litmus.password %>',
        url : 'https://<%= secrets.litmus.company %>.litmus.com',
        clients : [
          'android4',
          'aolonline',
          'androidgmailapp',
          'aolonline',
          'ffaolonline',
          'chromeaolonline',
          'appmail5',
          'appmail6',
          'appmail7',
          'appmail8',
          'iphone6',
          'iphone5s',
          'iphone5sios8',
          'blackberry8900',
          'ipadmini',
          'ipad',
          'gmailnew',
          'chromegmailnew',
          'iphone6plus',
          'notes85',
          'ol2002',
          'ol2003',
          'ol2007',
          'ol2010',
          'ol2011',
          'ffgmailnew',
          'notes6',
          'notes7',
          'notes8',
          'ol2013',
          'ol2015',
          'outlookcom',
          'ffoutlookcom',
          'chromeoutlookcom',
          'chromeyahoo',
          'windowsphone8',
          'thunderbirdlatest'
        ]
      }
    }
  };
}