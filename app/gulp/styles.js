const gulp = require('gulp');
const concat = require('gulp-concat');
const purgecss = require('gulp-purgecss');
const cssnano = require('gulp-cssnano');
const baseDir = 'app/static/css/';

gulp
    .src(baseDir + 'styles.css')
    .pipe(concat('styles.min.css'))
    .pipe(purgecss({
        content: ["app/views/**/*.ejs"]
    }))
    .pipe(cssnano({
        discardComments: {
            removeAll: true
        }
    }))
    .pipe(gulp.dest(baseDir));