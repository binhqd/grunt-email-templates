module.exports = {
  css : {
    options : {
      mode : 'gzip'
    },
    files : [
      {
        expand : true,
        cwd : '<%= yeoman.dist %>/styles',
        dest : '.tmp/compressed/styles',
        src : [
          '**/*.css'
        ]
      }
    ]
  },
  js : {
    options : {
      mode : 'gzip'
    },
    files : [
      {
        expand : true,
        cwd : '<%= yeoman.dist %>/scripts',
        dest : '.tmp/compressed/scripts',
        src : [
          '**/*.js'
        ]
      }
    ]
  }
};