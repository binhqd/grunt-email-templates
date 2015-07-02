module.exports = {
  dist : {
    options : {
      force : true
    },
    files : [
      {
        expand : true,
        cwd : 'assets/images',
        src : '{,*/}*.svg',
        dest : '<%= yeoman.dist %>/assets/images'
      }
    ]
  }
};