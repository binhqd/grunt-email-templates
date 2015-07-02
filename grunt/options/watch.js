// Watches files for changes and runs tasks based on the changed files
module.exports = {
  js : {
    files : [
      'scripts/{,*/}*.js'
    ],
    tasks : [
      'newer:jshint:all'
    ]
  },
  jsTest : {
    files : [
      'test/spec/{,*/}*.js'
    ],
    tasks : [
      'newer:jshint:test'
    ]
  },
  compass : {
    files : [
      'styles/{,*/}*.{scss,sass}'
    ],
    tasks : [
      'compass:server',
      'autoprefixer'
    ]
  },
  views : {
    files : [
      'app/views/{,*/}*.html'
    ],
    tasks : [
      'clean:views',
      'useminPrepare',
      'concat',
      'copy:views',
      'rev',
      'usemin',
      'htmlmin'
    ]
  },
  gruntfile : {
    files : [
      'Gruntfile.js'
    ]
  },
  dev : {
    files : [
      '{,*/}*.html',
      'assets/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
      'views/{,*/}*.html',
      'styles/{,*/}*.{scss,sass}',
      'scripts/{,*/}*.js',
      'bower_components/{,*/}*.js'
    ],
    tasks : [
      'clean:dist',
      // 'bowerInstall',
      'copy:fonts',
      'concurrent:server',
      'autoprefixer',
      'copy:dev'
    ]
  }
};