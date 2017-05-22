const {
    BabelPlugin,
    FuseBox,
    SassPlugin,
    CSSPlugin,
    WebIndexPlugin,
    TypeScriptHelpers,
    JSONPlugin,
    HTMLPlugin,
} = require('fuse-box');

const fuse = FuseBox.init({
    homeDir: `src/`,
    output: `dist/$name.js`,
    plugins: [
        WebIndexPlugin({
            title: 'FuseBox + Angular',
            template: 'src/index.html',
        }), [
            SassPlugin({
                outputStyle: 'compressed',
            }),
            CSSPlugin(),
        ],
        TypeScriptHelpers(),
        JSONPlugin(),
        HTMLPlugin({
            useDefault: false,
        }),
    ],
});

// setup development sever
fuse.dev({
    port: 4445,
});

// bundle vendor
fuse.bundle('vendor').hmr().instructions(' ~ main.ts');

// bundle application
fuse.bundle('app').sourceMaps(true).instructions(' !> [main.ts]').watch().hmr();

// run the factory
fuse.run();