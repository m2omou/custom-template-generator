'use strict';

var path = require('path');
var fs = require('fs');
var format = require('string-template');
var _s = require('underscore.string');
var inquirer = require('inquirer');
var mkdirp = require('mkdirp');
var _ = require('lodash');
var beautify = require('js-beautify').js_beautify;

module.exports = function (options) {
    var files = [];
    var templateAbsolutePath = path.join(__dirname, '../..', options.customTemplatesUrl + '/' + options.templateName.toLowerCase());

    // set variables
    init();

    // component template folder url
    if (options.customTemplatesUrl) {
        files = getFiles(templateAbsolutePath);
    } else {
        throw new Error('Specify the location of the templates folder using the customTemplatesUrl');
    }

    if (options.showPrompt) {
        inquirer.prompt([{
            type: "confirm",
            message: "Are you sure you want to create '" + options.componentName + "'?",
            name: "confirmed",
            default: true
        }], function (answers) {
            if (answers.confirmed) {
                return finalize();
            }
            return false;
        });
    } else {
        return finalize();
    }

    /**
     * @name getFiles
     * @description get files inside folder recursively
     * @param {array} args
     */
    function getFiles(dir, files_) {
        if (dir === undefined || !fs.existsSync(dir.toLowerCase())) {
            return [];
        }

        files_ = files_ || [];
        var files = fs.readdirSync(dir);

        for (var i in files) {
            var name = dir + '/' + files[i];
            if (fs.statSync(name).isDirectory()){
                getFiles(name, files_);
            } else {
                files_.push(name);
            }
        }
        return files_;
    }

    /**
     * @name generateTemplate
     * @description generate file template
     * @param {file} template
     */
    function generateTemplate(templatePath) {
        var absoluteTemplatePath = path.resolve(templatePath);
        var dest = options.wrapInFolder ? options.componentName + "/" : "";

        // check if the file need a specific location
        if (options.dest) {
            dest = options.dest + "/" + dest;
        }

        fs.readFile(absoluteTemplatePath, 'utf8', function(err, data) {
            if (err) throw err;
            var templateFilename = absoluteTemplatePath.replace(templateAbsolutePath + "/", "");
            var templatePathWithoutFileName = templateFilename.substring(0, templateFilename.lastIndexOf("/"));
            var fileExt = templateFilename ? templateFilename.split('.').pop() : '';

            mkdirp(dest + templatePathWithoutFileName, function () {
                var injectedData = {
                    name: options.componentName,
                    Name: _s.classify(options.componentName)
                };

                // Inject the data defined through the options.
                if (options.data) {
                    injectedData = _.extend(options.data, injectedData);
                }

                var formattedData = format(data, injectedData);

                // will auto indent the whole file
                if (options.autoIndent === true &&  options.autoIndentExtensions.includes(fileExt)) {
                    formattedData = beautify(formattedData);
                }

                fs.writeFile(dest + templateFilename.replace("{component}", options.componentName), formattedData, function (err) {
                    if (err) { return console.log(err); }
                    console.log('\x1b[32m%s\x1b[0m: ', "Created: " + dest + templateFilename.replace("{component}", options.componentName));
                });
            });
        });
    }
    /**
     * @name init
     * @description set the options, file name, etc
     * @param none
     */
    function init() {
        var defaultOptions = {
            showPrompt: true,
            wrapInFolder: true,
            autoIndentExtensions: ['js', 'ts']
        }
        options = _.extend(defaultOptions, options);
    }
    /**
     * @name finalize
     * @description generate files
     * @param none
     */
    function finalize() {
        // generate templates
        for (var i = 0; i < files.length; i++) {
            generateTemplate(files[i]);
        }
        return true;
    }
};