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
  reload = browserSync.reload,
  gutil = require("gulp-util"), // used for logs
  sourcemaps = require('gulp-sourcemaps'),// keep track of sass file source in developer console
  sass = require("gulp-sass"); // CSS with superpowers

var webroot = './';

var paths = {
  sassPath: webroot + "assets/sass/**/*.scss",
  sassMainPath: webroot + "assets/sass/master.scss",
  sassOutputPath: webroot + "assets/css"
};

// Task to compile SASS files
gulp.task('sass', function () {
    gulp.src(paths.sassMainPath) // use sassMain file source
      .pipe(sourcemaps.init())
      .pipe(sass({
          outputStyle: 'compressed' // Style of compiled CSS
      })
      .on('error', gutil.log)) // Log descriptive errors to the terminal
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(paths.sassOutputPath)); // The destination for the compiled file
});

// Watch files for chnages and reload
gulp.task('serve', function() {
  browserSync({
    server: {
      baseDir: 'assets'
    }
  });

  gulp.watch([paths.sassPath], ['sass']);
// If any changes in any .scss files, perform '' task
  gulp.watch(['*.html','css/**/*.css','js/**/*.js'], {cwd: 'assets'}, reload);
});
