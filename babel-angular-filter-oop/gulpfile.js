var gulp = require("gulp");
var watch = require('gulp-watch');
var sourcemaps = require("gulp-sourcemaps");
var babel = require("gulp-babel");
var concat = require("gulp-concat");
var connect = require('gulp-connect');

gulp.task('connect', function() {
  connect.server({
    root: './public',
    livereload: true
  });
});

// Html task
gulp.task('html', function() {
  gulp.src('*.html')
  .pipe(connect.reload());
});

// Watch our changes
gulp.task('watch', function(){
  //html
  gulp.watch(['*.html'], ['html']);
  gulp.watch(['src/**/*.js'], ['js']);
});

gulp.task("js", function () {
  return gulp.src("src/**/*.js")
    .pipe(sourcemaps.init())
    // .pipe(concat("app.js"))
    .pipe(babel())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("public/app"));
});

gulp.task('default', ['connect','watch']);
