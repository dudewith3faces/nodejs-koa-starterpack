const gulp = require('gulp');
const ts = require('gulp-typescript');
const JSON_FILES = ['src/*.json', 'src/**/*.json'];
const del = require('del');
// const uglify = require("gulp-uglify");
// pull in the project TypeScript config
const tsProject = ts.createProject('tsconfig.json');

gulp.task('transpile', () => {
  const tsResult = tsProject
    .src()
    .pipe(tsProject())
    .on('error', function(err) {
      console.log(err.toString());
      this.emit('end');
    });
  return tsResult.js.pipe(gulp.dest('dist'));
});

gulp.task('watch', () => {
  gulp.watch('src/**/*.ts', gulp.series('transpile'));
  gulp.watch('src/**/*.html', gulp.series('html'));
});

gulp.task('assets', function() {
  return gulp.src(JSON_FILES).pipe(gulp.dest('dist'));
});

// Gulp task to copy HTML files to output directory
gulp.task('html', function() {
  return gulp.src('src/**/*.html').pipe(gulp.dest('dist'));
});

gulp.task('clean', function(cb) {
  return del('dist/**', { force: true });
});

gulp.task('default', gulp.series('clean', 'html', 'transpile', 'watch'));
