// The actual grunt server settings
module.exports = {
  options : {
    hostname : '*',
    port : '<%= hosts.development.port %>',
    open : '<%= hosts.development.url %>:<%= hosts.development.port %>/',
    base : [ '<%= paths.tmp %>' ]
  },

  dev : {
    options : {
      livereload : true
    }
  },

  send_dev : {
    options : {
      // keep the server on
      keepalive : true
    }
  }
};