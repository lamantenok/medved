/* eslint-disable no-console */
const gulp = require('gulp');
const HubRegistry = require('gulp-hub');
const browserSync = require('browser-sync').create();

/* load some files into the registry */
const hub = new HubRegistry(['./gulp/tasks/*.js']);

/* tell gulp to use the tasks just loaded */
gulp.registry(hub);

/*
  TODO
  export paths object(containe all pathes)
*/

const isDev = require('./gulp/utils/isDev');

console.log('---env---');
console.log('process.platform', process.platform);
console.log('process.env.NODE_ENV', process.env.NODE_ENV);
console.log('isDev():', isDev());
console.log('---end---');
gulp.task('serve', function() {
  browserSync.init({
    server: './build'
  });

  browserSync.watch('./build/**/*.{css,js,jpg,png,svg,html}').on('change', browserSync.reload);
});

gulp.task('build', gulp.series('clean', gulp.parallel('html', 'sass', 'images', 'font', 'js', 'bower')));

gulp.task('watch', function() {
  gulp.watch('./app/styles/**/*.scss', gulp.series('sass'));
  gulp.watch('./app/pages/*.html', gulp.series('html'));
  gulp.watch('./app/templates/*.html', gulp.series('html'));
  gulp.watch('./app/font/**/*', gulp.series('font'));
  gulp.watch('./app/scripts/**/*', gulp.series('js'));
  gulp.watch('./app/images/**/*.{png,jpg,svg}', gulp.series('images'));
  gulp.watch('./bower.json', gulp.series('bower'));
});

gulp.task('dev',
  gulp.series('build', gulp.parallel('watch', 'serve'))
);
