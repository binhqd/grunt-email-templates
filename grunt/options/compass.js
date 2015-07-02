'use strict';
// Compiles Sass to CSS and generates necessary files if requested

var path = require('path');

module.exports = {
  options : {
    sassDir: 'src/scss',
    cssDir: '.tmp/css',
    generatedImagesDir: '.tmp/images/generated',
    imagesDir: 'images',
    javascriptsDir: 'scripts',
    fontsDir: 'styles/fonts',
    httpImagesPath: '/images',
    httpGeneratedImagesPath: '/images/generated',
    httpFontsPath: '/styles/fonts',
    relativeAssets: false,
    assetCacheBuster: false,
    raw: 'Sass::Script::Number.precision = 10\n'
  },

  watch : {
    options : {
      watch : true
    }
  },

  dev : {},

  dist : {
    options : {
      cssDir : '<%= paths.dist %>/css',
      imagesDir : '<%= paths.dist %>/images',
      force : true,
      environment : 'production'
    }
  }
};