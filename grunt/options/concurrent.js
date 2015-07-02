// Run some tasks in parallel to speed up the build process
module.exports = {
  options : {
    logConcurrentOutput : true
  },
  dev : [ 'watch', 'compass:watch' ]
};