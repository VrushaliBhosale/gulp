var gulp = require('gulp');
var sass = require('gulp-sass');
watch = require('gulp-watch');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('default', defaultTask);

function defaultTask(done) {
  console.log("hello gulp!");

  return gulp.src('demo1/*.scss') // Get source files with gulp.src
    .pipe(sourcemaps.init())
    .pipe(sass()) // Sends it through a gulp plugin
    .pipe(sourcemaps.write('../maps'))
    .pipe(gulp.dest('destination'))
}

gulp.task('watch', function () {
  return gulp.watch('demo1/style.scss', gulp.series(defaultTask));
});