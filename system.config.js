SystemJS.config({
    pluginFirst: true,
    map: {
        'css': 'node_modules/systemjs-plugin-css',
        'less': 'node_modules/systemjs-plugin-less',
        'lesscss': 'node_modules/less',
        'plugin-babel': 'node_modules/systemjs-plugin-babel/plugin-babel.js',
        'systemjs-babel-build': 'node_modules/systemjs-plugin-babel/systemjs-babel-browser.js',
        'showdown': 'node_modules/showdown/dist/showdown.js',
        'ace': 'node_modules/ace/lib/ace'
    },
    transpiler: 'plugin-babel',
    meta: {
        '*.less': { loader: 'less'},
        'node_modules/ace-builds/src-noconflict/*.js': {
            format: 'global'
        }
    },
    packages: {
        lesscss: {
            main: {
                browser: './dist/less.min.js',
                node: '@node/less'
            }
        },
        css: { main: 'css.js' },
        less: { main: 'less.js' },
        ace: {
            main: 'ace.js',
            meta: {
                '*.css': {
                    loader: 'css'
                }
            }
        }
    }
});
