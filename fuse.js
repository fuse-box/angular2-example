const { FuseBox, SassPlugin, CSSPlugin, TypeScriptHelpers, JSONPlugin, HTMLPlugin } = require('fuse-box');
const path = require("path");

const fuseBox = FuseBox.init({
    homeDir: `src/`,
    sourcemaps: true,
    outFile: `dist/app.js`,
    plugins: [
        [
            SassPlugin({ outputStyle: 'compressed' }),
            CSSPlugin()
        ],
        TypeScriptHelpers(),
        JSONPlugin(),
        HTMLPlugin({ useDefault: false })
    ]
});

fuseBox.devServer('>main.ts', {
    port: 4445
});