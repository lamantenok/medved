const gulp = require('gulp');
const debug = require('gulp-debug');
const gulpif = require('gulp-if');
const imagemin = require('gulp-imagemin');
const isDev = require('../utils/isDev');

gulp.task('images', function() {
  return gulp
    .src('./app/images/**/*.{png,jpg,svg,gif,ico}')
    .pipe(gulpif(!isDev(), imagemin({})))
    .pipe(
      debug({
        title: 'images:imagemin'
      })
    )
    .pipe(gulp.dest('./build/images'));
});
