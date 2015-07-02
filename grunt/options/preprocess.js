'use strict';
module.exports = {
  options : {
    inline : true
  },
  dev : {
    src : [ '<%= paths.tmp %>/<%= paths.email %>' ]
  },
  dist : {
    options : {
      context : {
        PRODUCTION : true
      }
    },
    files : [ {
      expand : true,
      cwd : '<%= paths.tmp %>/',
      src : [ '<%= paths.email %>' ],
      dest : '<%= paths.dist %>/'
    } ]
  }
};