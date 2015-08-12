var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var rimraf = require('gulp-rimraf');

var cleanDir = [
    './node_modules/**/*.*',
    './dist/**/*.*'
];

var libSrc = [
    './node_modules/dottie/dottie.js',
    './node_modules/string/dist/string.js'
];

gulp.task('clean', function () {
    return gulp.src(cleanDir, {read: false})
        .pipe(rimraf({force: true}));
});

gulp.task('babel', function () {
  return gulp.src('./src/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat('all.js'))
    .pipe(babel())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/javascript'));
});

gulp.task('css', function () {
    return gulp.src('./src/css/**/*.css')
        .pipe(concat('all.css'))
        .pipe(gulp.dest('dist/css'));
})

gulp.task('lib', function () {
  return gulp.src(libSrc)
    .pipe(concat('lib.js'))
    .pipe(gulp.dest('dist/javascript'));
});

gulp.task('watch', function () {
    gulp.watch('./src/javascript/**/*.*', ['babel']);
    gulp.watch('./src/css/**/*.*', ['css']);
});

gulp.task('default', ['watch', 'css', 'babel', 'lib']);