const esbuild = require('esbuild')
const cssModulesPlugin = require('esbuild-css-modules-plugin')
const bs = require('browser-sync').create();

esbuild.build({
    entryPoints: ["./src/index.tsx"],
    bundle: true,
    sourcemap: true,
    outdir: "./public/dist/",
    define: {
        "process.env.NODE_ENV": '"development"',
    },
    watch: {
        onRebuild(error, result) {
            if (error) console.error('watch build failed:', error)
            else {
                bs.reload("*.html");
                if (result.warnings) console.log(...result.warnings);
            }
        },
    },
    plugins: [
        cssModulesPlugin()
    ],
}).then(res => {
    bs.init({
        server: "./public/"
    });
});
