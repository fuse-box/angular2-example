const {
    FuseBox,
    Sparky,
    WebIndexPlugin,
    HTMLPlugin,
    SassPlugin,
    JSONPlugin,
    CSSPlugin,
    QuantumPlugin
} = require("fuse-box");
const {src, task, watch, context, fuse} = require("fuse-box/sparky");


context(class {
    getConfig() {
        return FuseBox.init({
            homeDir: "src",
            output: "dist/$name.js",
            target: "browser@es5",
            hash: this.isProduction,
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
                this.isProduction && QuantumPlugin({
                    //bakeApiIntoBundle: "app",
                    uglify: true
                })
            ]
        })
    }

    createBundle(fuse) {
        const vendor = fuse.bundle("vendor").instructions("~ main.ts");
        if (!this.isProduction) {
            vendor.watch()
            vendor.hmr()
        }

        const app = fuse.bundle("app");
        if (!this.isProduction) {
            app.watch()
            app.hmr()
        }
        app.instructions(">[main.ts]");
        return app;
    }
});

task("clean", () => src("dist").clean("dist").exec())

task("default", ["clean"], async context => {
    const fuse = context.getConfig();
    fuse.dev();
    context.createBundle(fuse);
    await fuse.run();
});

task("dist", ["clean"], async context => {
    context.isProduction = true;
    const fuse = context.getConfig();
    fuse.dev(); // remove it later
    context.createBundle(fuse);
    await fuse.run();
});