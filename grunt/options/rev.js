// Renames files for browser caching purposes
module.exports = {
  dist : {
    files : {
      src : [
        '<%= yeoman.dist %>/scripts/{,*/}*.js',
        '<%= yeoman.dist %>/styles/{,*/}*.css',
        '<%= yeoman.dist %>/assets/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
      // '<%= yeoman.dist %>/styles/fonts/*'
      ]
    }
  },
  ngtemplates : {
    files : {
      src : [
        '<%= yeoman.dist %>/scripts/templates.js'
      ]
    }
  }
};