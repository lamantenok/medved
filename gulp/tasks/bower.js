const gulp = require('gulp');
const filter = require('gulp-filter');
const bowerFiles = require('gulp-main-bower-files');
const concat = require('gulp-concat');
const flatten = require('gulp-flatten');
const gulpif = require('gulp-if');
const isDev = require('../utils/isDev');
const csso = require('gulp-csso');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const sass = require('gulp-sass');

// https://github.com/notbrain/viceroy/blob/master/gulp/tasks/bower.js
gulp.task('bower', function() {
  const jsFilter = filter('**/*.js', {
    restore: true
  });
  const cssFilter = filter('**/*.css', {
    restore: true
  });
  const scssFilter = filter('**/*.scss', {
    restore: true
  });
  const assetsFilter = filter('**/*.{gif,png,jpg,jpeg}', {
    restore: true
  });
  const fontFilter = filter('**/*{eot,woff,svg,ttf}', {
    restore: true
  });

  return (
    gulp
      .src('./bower.json')
      .pipe(bowerFiles())

      //JS
      .pipe(jsFilter)
      .pipe(concat('vendors.js'))
      .pipe(gulpif(!isDev(), uglify()))
      .pipe(gulp.dest('./build/vendors'))
      .pipe(jsFilter.restore)

      //CSS
      .pipe(cssFilter)
      .pipe(concat('vendors.css'))
      .pipe(gulpif(!isDev(), postcss([autoprefixer()])))
      .pipe(gulpif(!isDev(), csso()))
      .pipe(gulp.dest('./build/vendors'))
      .pipe(cssFilter.restore)

      //SCSS
      // TODO

      // IMAGES
      .pipe(assetsFilter)
      .pipe(flatten())
      .pipe(gulpif(!isDev(), imagemin({})))
      .pipe(gulp.dest('./build/vendors/images'))
      .pipe(assetsFilter.restore)

      // FONTS
      .pipe(fontFilter)
      .pipe(flatten())
      .pipe(gulp.dest('./build/vendors/fonts'))
      .pipe(fontFilter.restore)
  );
});
