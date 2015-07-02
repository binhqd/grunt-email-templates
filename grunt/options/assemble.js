'use strict';

module.exports = {
  options : {
    layoutdir : '<%= paths.src %>/layouts',
    partials : [
      '<%= paths.src %>/partials/**/*.hbs'
    ],
    data : [
      '<%= paths.src %>/data/*.{json,yml}'
    ],
    flatten : true
  },
  pages : {
    src : [
      '<%= paths.src %>/emails/*.hbs'
    ],
    dest : '<%= paths.dist %>/'
  }
};