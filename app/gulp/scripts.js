const gulp = require('gulp');
const uglify = require('gulp-uglify');
const baseDir = 'app/static/scripts/';

gulp
    .src(baseDir + 'lazyloading.js')
    // .pipe(uglify())
    .pipe(gulp.dest(baseDir));