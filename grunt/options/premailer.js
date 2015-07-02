
module.exports = {
  options : {
    preserveStyles : true
  },

  dist_html : {
    options : {
      // see https://github.com/dwightjack/grunt-premailer#options
      // css is used to be sure that external CSS files are parsed
      css : [ '<%= paths.dist %>/css/*.css' ],
      baseUrl : '<%= hosts.production.url %>/'
    },
    files : [ {
      expand : true,
      cwd : '<%= paths.dist %>/',
      src : [ '<%= paths.email %>' ],
      dest : '<%= paths.dist %>/'
    } ]

  },
  dist_txt : {
    options : {
      baseUrl : '<%= hosts.production.url %>/',
      mode : 'txt'
    },
    files : [ {
      expand : true,
      cwd : '<%= paths.dist %>/',
      src : [ '<%= paths.email %>' ],
      dest : '<%= paths.dist %>/',
      ext : '.txt'
    } ]

  },

  dev_html : {
    options : {
      css : [ '<%= paths.tmp %>/css/*.css' ],
      baseUrl : '<%= hosts.development.url %>:<%= hosts.development.port %>/'
    },
    files : [ {
      expand : true,
      cwd : '<%= paths.tmp %>/',
      src : [ '<%= paths.email %>' ],
      dest : '<%= paths.tmp %>/'
    } ]
  },
  dev_txt : {
    options : {
      baseUrl : '<%= hosts.development.url %>:<%= hosts.development.port %>/',
      mode : 'txt'
    },
    files : [ {
      expand : true,
      cwd : '<%= paths.tmp %>/',
      src : [ '<%= paths.email %>' ],
      dest : '<%= paths.tmp %>/',
      ext : '.txt'
    } ]
  }
};