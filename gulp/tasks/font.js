const gulp = require('gulp');

gulp.task('font', function() {
  return gulp.src('./app/fonts/**/*').pipe(gulp.dest('./build/fonts'));
});
