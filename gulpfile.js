const gulp = require('gulp');
const fsbx = require('fuse-box');
const browserSync = require('browser-sync').create();

const fuseBox = fsbx.FuseBox.init({
    homeDir: 'src/',
    sourceMap: {
        bundleReference: 'app.js.map',
        outFile: './dist/app.js.map',
    },
    outFile: './dist/app.js',
    plugins: [
        [
            fsbx.SassPlugin({ outputStyle: 'compressed' }),
            fsbx.CSSPlugin({ write: true })
        ],
        fsbx.TypeScriptHelpers(),
        fsbx.JSONPlugin(),
        fsbx.HTMLPlugin({ useDefault: false })
    ]
});

gulp.task('fusebox', () => {
    return fuseBox.bundle('>main.ts');
});

gulp.task('index', () => {
    return gulp.src('src/index.html').pipe(gulp.dest('dist'));
});
gulp.task('watch', ['fusebox', 'index'], () => {
    gulp.watch('src/**/*.**', ['fusebox', 'index']);
});
gulp.task('default', ['watch'], () => {
    browserSync.init({
        server: { baseDir: 'dist', directory: false },
        startPath: '/'
    });
    gulp.watch('dist/**/*').on('change', browserSync.reload);
});