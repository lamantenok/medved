const gulp = require('gulp');
const sass = require('gulp-sass');
const combiner = require('stream-combiner2').obj; // вызывает потоки поочередно, имеет один общий обработчик ошибок для всех потоков
const debug = require('gulp-debug');
const notify = require('gulp-notify');
const gulpif = require('gulp-if');
const sourcemaps = require('gulp-sourcemaps');
const isDev = require('../utils/isDev');
const csso = require('gulp-csso');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

gulp.task('sass', function() {
  return combiner(
    gulp.src('./app/styles/**/*.scss'),
    gulpif(isDev, sourcemaps.init()),
    sass(),
    debug({ title: 'sass' }),
    postcss([autoprefixer()]),
    gulpif(isDev, sourcemaps.write()),
    gulpif(!isDev, csso()),
    gulp.dest('./build/styles')
  ).on(
    'error',
    notify.onError(
      notify.onError(function(err) {
        return {
          title: 'sass',
          message: err.message
        };
      })
    )
  );
  // return gulp.src('./assets/**/*.scss')
  //
  //     .pipe(gulpif(isDev, sourcemaps.init()))
  //     .pipe(sass())
  //     .pipe(debug({ title: 'sass' }))
  //     .pipe(gulpif(isDev, sourcemaps.write()))
  //     .pipe(gulp.dest('public'));

  // .pipe(plumber({
  //     errorHandler: notify.onError(function(err) {
  //         return {
  //             title: 'Sass',
  //             message: err.message,
  //         }
  //     })
  // }))
  // .on('error', function(err) {
  //     console.log('err!!!!', err.message);
  //     this.end(); // правила хорошего тона при ошибки сказать что поток закрыт
  // })
});
