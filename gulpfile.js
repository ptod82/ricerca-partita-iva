var gulp = require('gulp');

gulp.task('images', function() {
    return gulp.src('dev/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('html/images'));
});

let concat = require('gulp-concat');
let rename = require('gulp-rename');
let uglify = require('gulp-uglify');
let CacheBuster = require('gulp-cachebust');
let cachebust = new CacheBuster();

let rimraf = require('rimraf');
let through = require('through2');
let path = require('path');

function cleaner() {
    return through.obj(function (file, enc, cb) {
        rimraf(path.resolve((file.cwd || process.cwd()), file.path), function (err) {
            if (err) {
                this.emit('error', new gutil.PluginError('Cleanup old files', err));
            }
            this.push(file);
            cb();
        }.bind(this));
    });
}

function myRevOutdated(keepQuantity) {

    'use strict';
    keepQuantity = parseInt(keepQuantity) || 2;
    var lists = {};

    return through.obj(function (file, enc, cb) {
        var regex = new RegExp('^(.*)\.[0-9a-f]{8,10}(?:\\.min)?\\' + path.extname(file.path) + '$');
        if (regex.test(file.path)) {
            var identifier = regex.exec(file.path)[1] + path.extname(file.path);
            if (lists[identifier] === undefined) {
                lists[identifier] = [];
            }
            lists[identifier].push({
                file: file,
                time: file.stat.ctime.getTime()
            });
        }
        cb();
    }, function (cb) {
        Object.keys(lists).forEach(function (identifier) {
            lists[identifier].sort(function (a, b) {
                return b.time - a.time;
            })
                .slice(keepQuantity)
                .forEach(function (f) {
                    this.push(f.file);
                }, this);
        }, this);
        cb();
    });
}

let cleanCSS = require('gulp-clean-css');

// styles concat
const cssFolder = '.css/',
    cssDest = 'css/',
    cssMin = [
        cssFolder + 'footer.css'
    ]

gulp.task('minify-css', () => {
    return gulp.src(cssMin)
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(concat('css-min.css'))
        .pipe(cachebust.resources())
        .pipe(gulp.dest(cssDest));
});

gulp.task('css_bust', ['minify-css'], () => {
    return gulp.src('./base.html.twig')
        .pipe(cachebust.references())
        .pipe(gulp.dest('src/QM/TuttovisureBundle/Resources/views/'));
});

gulp.task('css', ['css_bust'], function () {
    return gulp.src(['./css/css-min.*.css'], {read: false})
        .pipe(myRevOutdated(1))
        .pipe(cleaner());
});