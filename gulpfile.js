var gulp = require('gulp');
var ts = require('gulp-typescript');

exports.default = defaultTask;
exports.build = buildTask;

function defaultTask(cb) {
    console.log("gulp default task");
    cb();
  }
  
  function buildTask(cb) {
    console.log("gulp build");
    gulp.task('default', function () {
      return gulp.src('src/**/*.ts')
          .pipe(ts({
              noImplicitAny: true,
              outFile: 'output.js'
          }))
          .pipe(gulp.dest('built/local'));
  });
    cb();
  }
