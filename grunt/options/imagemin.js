// The following *-min tasks produce minified files in the dist folder
module.exports = {
  options : {
    progressive : false
  },
  dist : {
    files : [ {
      expand : true,
      cwd : '<%= paths.tmp %>/images',
      src : [ '**/*.{gif,png,jpg}' ],
      dest : '<%= paths.dist %>/images'
    } ]
  }
};