'use strict';
const gulp = require('gulp');
const fsbx = require('fuse-box');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');
const browserSync = require('browser-sync').create();
const distDIR = 'dist';

const fuseBox = new fsbx.FuseBox({
    homeDir: 'src/',
    sourceMap: {
        bundleReference: 'app.js.map',
        outFile: './dist/app.js.map',
    },
    cache: true,
    outFile: './dist/app.js',
    plugins: [
        fsbx.TypeScriptHelpers,
        fsbx.JSONPlugin,
        fsbx.HTMLPlugin({ useDefault: false })
    ]
});

gulp.task('ts', () => {
    return fuseBox.bundle('>main.ts');
});
gulp.task('sass', () => {
    return gulp.src('src/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(rename('app.css'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(distDIR));
});
gulp.task('index', () => {
    return gulp.src('src/index.html').pipe(gulp.dest(distDIR));
});
gulp.task('watch', ['ts', 'sass', 'index'], () => {
    gulp.watch('src/**/*.ts', ['ts']);
    gulp.watch('src/**/*.html', ['ts']);
    gulp.watch('src/**/*.scss', ['sass']);
    gulp.watch('src/index.html', ['index']);
});
gulp.task('default', ['watch'], () => {
    browserSync.init({
        server: { baseDir: distDIR, directory: false },
        startPath: '/'
    });
    gulp.watch('dist/**/*').on('change', browserSync.reload);
});