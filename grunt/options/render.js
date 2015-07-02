'use strict';

module.exports = {
  options : {
    data : [ '<%= paths.data %>/*.json' ],
  },

  html : {
    files : [ {
      expand : true,
      cwd : '<%= paths.src %>/',
      src : [ '<%= paths.email %>' ],
      dest : '<%= paths.tmp %>/'
    } ]
  }
};