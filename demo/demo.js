var generator = require('custom-template-generator');

generator({
    componentName: "button",
    customTemplatesUrl: './templates/',
    dest: 'src',
    templateName: 'component'
});