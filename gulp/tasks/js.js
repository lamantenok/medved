const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const gulpif = require('gulp-if');
const isDev = require('../utils/isDev');

gulp.task('js', function() {
  return gulp
    .src('./app/scripts/**/*.js')
    .pipe(concat('app.min.js'))
    .pipe(gulpif(!isDev(), uglify()))
    .pipe(gulp.dest('./build/js'));
});
