var Builder = require('systemjs-builder');
var builder = new Builder('.', 'system.config.js');

builder.config({
    separateCSS: true
});

builder.bundle('main.js + ace/mode/markdown.js + ace/theme/twilight.js', 'out.js', { sourceMaps: true });
