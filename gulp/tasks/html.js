const gulp = require('gulp');
const debug = require('gulp-debug');
const include = require('gulp-file-include');
const replace = require('gulp-replace');
const gulpif = require('gulp-if');
const isDev = require('../utils/isDev');

gulp.task('html', function() {
  return gulp
    .src('./app/pages/*.html')
    .pipe(
      include({
        prefix: '@@',
        basepath: './app'
      })
    )
    .pipe(
      debug({
        title: 'html:include'
      })
    )
    .pipe(debug({ title: 'html:' }))
    .pipe(gulpif(!isDev(), replace(/(\.\.\/)/g, '')))
    .pipe(gulp.dest('./build'));
});
