'use strict';

module.exports = function(grunt) {
  'use strict';

  function loadConfig(path) {
    var glob = require('glob'), object = {};

    glob.sync('*', {
      cwd : path
    }).forEach(function(option) {
      var key = option.replace(/\.js$/, ''), data = require(path + option);
      object[key] = typeof data === 'function' ? data(grunt) : data;
    });

    return object;
  }

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);
  grunt.loadTasks('grunt/tasks');

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Define the configuration for all the tasks
  var config = {
    // Project settings
    yeoman : {
      // configurable paths
      app : require('./package.json').appPath || '',
      dist : 'dist'
    },
    pkg : grunt.file.readJSON('package.json'),
    secrets : grunt.file.readJSON('config/secrets.json'),

    /* rigt now this is useless... */
    meta : {
      banner : ''
    },

    /**
     * Project Paths Configuration ===============================
     */
    paths : {
      // where to store built files
      dist : 'dist',
      // sources
      src : 'src',
      // where json files are stored
      data : '<%= paths.src %>/data',
      // temporary files
      tmp : 'tmp',
      // pattern to HTML email files
      email : '*.html'
    },

    /**
     * Hosts Configuration ===============================
     */
    hosts : {
      // enter here yout production host details
      production : {
        url : 'http://www.mydomain.com',
        host : 'remote.host',
        username : 'username',
        path : '/path/to/www'
      },
      development : {
        // this is the default development domain
        url : 'http://localhost',
        host : 'local.host',
        username : 'username',
        path : '/path/to/www',
        port : 8000
      }
    },
  };

  grunt.util._.extend(config, loadConfig('./grunt/options/'));
  grunt.initConfig(config);

  // Load assemble
  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-litmus');

};
