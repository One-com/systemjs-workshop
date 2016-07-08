import 'main.less';
import showdown from 'showdown';
import ace from 'ace';

var converter = new showdown.Converter();
var editor = ace.edit('editor');
editor.setShowPrintMargin(false);
editor.getSession().setMode('ace/mode/markdown');
editor.setTheme('ace/theme/twilight');

editor.getSession().on('change', function(e) {
    output.innerHTML = converter.makeHtml(editor.getValue());
});

output.innerHTML = converter.makeHtml(editor.getValue());
