# Fusebox and angular2 in 50ms


Try FuseBox with angular2. The setup is absolutely minimalist. 
[Index.html](https://github.com/fuse-box/angular2-example/blob/master/index.html) requires only 1 bundle file. 
FuseBox Configuration is very simple:

```js
// Create FuseBox Instance
let fuseBox = new fsbx.FuseBox({
    homeDir: "src/",
    sourceMap: {
        bundleReference: "sourcemaps.js.map",
        outFile: "./build/sourcemaps.js.map",
    },
    cache: true,
    outFile: "./build/out.js",
    plugins: [fsbx.TypeScriptHelpers, fsbx.JSONPlugin]
});
```

```js
npm install
gulp start
```

And open index.html in your favourite browser. Start making changes!

Project re-compiles (with cache) in approx. 40-50ms!


