var generator = require('custom-template-generator');
var beautify = require('js-beautify').js_beautify;

generator({
    componentName: "button",
    customTemplatesUrl: './templates/',
    dest: 'src',
    templateName: 'component',
    data: {
        uiconfig: beautify(JSON.stringify({
            test: 42,
            lolo: {
                pop: 42,
                storme: 2
            }
        }))
    }
});