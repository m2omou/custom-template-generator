var generator = require('custom-template-generator');

generator({
    componentName: "button",
    customTemplatesUrl: './templates/',
    dest: 'src',
    templateName: 'component',
    autoIndent: true,
    data: {
        uiconfig: JSON.stringify({
            test: 42,
            lolo: {
                pop: 42,
                storme: 2
            }
        })
    }
});