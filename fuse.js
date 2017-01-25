const fsbx = require('fuse-box');
const closure = require('fusebox-closure-plugin').default
const fuseBox = fsbx.FuseBox.init({
    homeDir: 'src/',
    outFile: './app.js',
    plugins: [
        [
            fsbx.SassPlugin({ outputStyle: 'compressed' }),
            fsbx.CSSPlugin()
        ],
        fsbx.TypeScriptHelpers(),
        fsbx.JSONPlugin(),
        fsbx.HTMLPlugin({ useDefault: false }),
        fsbx.UglifyJSPlugin()
    ]
});

fuseBox.bundle('>main.ts');