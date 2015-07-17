/*global require  */

'use strict';

/**
 * Less Task for gulp
 *
 * This task takes all less files from the config file and compiles them to CSS.
 * We are including source maps in the compiled css using the gulp-sourcemaps
 * module, and are relying on a less plugin to include less files from npm
 * modules (bootstrap).
 */

var gulp  = require('gulp');
var less  = require('gulp-less');
var debug = require('gulp-debug');
var sourcemaps = require('gulp-sourcemaps');
var LessPluginNpmImport = require('less-plugin-npm-import');
var LessPluginCleanCSS = require('less-plugin-clean-css');
var npmimport = new LessPluginNpmImport();
var cleancssplugin = new LessPluginCleanCSS({advanced: true});

var LESS_BASE_FILE = require('../config').css.LESS_BASE_FILE;
var DEST_FOLDER = require('../config').css.CSS_DEST_FOLDER;
var LESS_BASE_FOLDER = require('../config').css.LESS_BASE_FOLDER;

gulp.task('less', function() {
  return gulp.src(LESS_BASE_FILE)
          .pipe(sourcemaps.init())
          .pipe(debug({title : 'debug-less-module'}))
          .pipe(less({
            paths: [
                LESS_BASE_FOLDER
            ],
            plugins: [npmimport, cleancssplugin]
          }))
          .pipe(sourcemaps.write())
          .pipe(gulp.dest(DEST_FOLDER));
});