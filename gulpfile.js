const gulp = require('gulp');
const ts = require('gulp-typescript');
const del = require('del');
// const uglify = require("gulp-uglify");
// pull in the project TypeScript config
const tsProject = ts.createProject('tsconfig.json');

const JSON_FILES = ['src/*.json', 'src/**/*.json'];
const OUTPUT_DIR = 'dist';

gulp.task('transpile', () => {
  const tsResult = tsProject
    .src()
    .pipe(tsProject())
    .on('error', function(err) {
      console.log(err.toString());
      this.emit('end');
    });
  return tsResult.js.pipe(gulp.dest(OUTPUT_DIR));
});

gulp.task('watch', () => {
  gulp.watch('src/**/*.ts', gulp.series('transpile'));
  gulp.watch('src/**/*.html', gulp.series('html'));
  gulp.watch('src/**/*.css', gulp.series('css'));
  gulp.watch('src/**/*.pem', gulp.series('ssl'));
});

gulp.task('assets', function() {
  return gulp.src(JSON_FILES).pipe(gulp.dest(OUTPUT_DIR));
});

// Gulp task to copy HTML files to output directory
gulp.task('html', function() {
  return gulp.src('src/**/*.html').pipe(gulp.dest(OUTPUT_DIR));
});

// Gulp task to copy css files to output directory
gulp.task('css', function() {
  return gulp.src('src/**/*.css').pipe(gulp.dest(OUTPUT_DIR));
});

// Gulp task to copy ssl cetificat files to output directory
gulp.task('ssl', function() {
  return gulp.src('src/**/*.pem').pipe(gulp.dest(OUTPUT_DIR));
});

gulp.task('clean', function(cb) {
  return del(`${OUTPUT_DIR}/**`, { force: true });
});

gulp.task('default', gulp.series('clean', 'ssl', 'css', 'html', 'transpile'));
