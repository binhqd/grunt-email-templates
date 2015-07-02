// Copies remaining files to places other tasks can use
module.exports = {
  images : {
    files : [ {
      expand : true,
      cwd : '<%= paths.src %>/images',
      src : [ '**/*.{gif,png,jpg}' ],
      dest : '<%= paths.tmp %>/images'
    } ]
  }
};