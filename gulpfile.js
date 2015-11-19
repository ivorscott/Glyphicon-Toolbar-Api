/*
 * file: gulpfile.js
 * 
 * Glyphicon-Toolbar Api 
 * _____________________________________________________________
 * 
 * Front-end Development Environment
 * _____________________________________________________________
 * 
 * Usage: 'gulp serve'
 *
 * Purpose: automates browser refresh when changes occur
 *
 * @ivorscott
*/
'use strict';
var gulp = require("gulp"), // CLI task runner
  browserSync = require('browser-sync'),// browser refresh
  reload = browserSync.reload;

var webroot = './';

// Watch files for chnages and reload
gulp.task('serve', function() {
  browserSync({
    server: {
      baseDir: 'public'
    }
  });

// If any changes in any .scss files, perform '' task
  gulp.watch(['*.html','css/**/*.css','js/**/*.js'], {cwd: 'public'}, reload);
});
