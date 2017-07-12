const {
    BabelPlugin,
    FuseBox,
    SassPlugin,
    CSSPlugin,
    WebIndexPlugin,
    TypeScriptHelpers,
    JSONPlugin,
    HTMLPlugin,
    Sparky,
    QuantumPlugin,
} = require('fuse-box');

let fuse, app, vendor, isProduction;

Sparky.task("config", () => {
    fuse = FuseBox.init({
        homeDir: `src/`,
        output: `dist/$name.js`,
        hash: isProduction,
        target: "browser",
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
            JSONPlugin(),
            HTMLPlugin({
                useDefault: false,
            }),
            // http://fuse-box.org/page/quantum
            isProduction && QuantumPlugin({
                uglify: true,
                hoisting: { names: ["tslib_1"] },
                treeshake: true
            }),
        ],
    });

    vendor = fuse.bundle('vendor').instructions(' ~ main.ts');
    app = fuse.bundle('app')
        .sourceMaps(!isProduction)
        .instructions(' !> [main.ts]');
});

Sparky.task("default", ["clean", "config"], () => {
    fuse.dev();
    // add dev instructions
    app.watch().hmr()
    return fuse.run();
});

Sparky.task("clean", () => Sparky.src("dist/").clean("dist/"));
Sparky.task("prod-env", ["clean"], () => { isProduction = true })
Sparky.task("dist", ["prod-env", "config"], () => {
    // comment out to prevent dev server from running (left for the demo)
    fuse.dev();
    return fuse.run();
});