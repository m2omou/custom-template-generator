## template-generator

[![npm version](https://badge.fury.io/js/custom-template-generator.svg)](https://badge.fury.io/js/custom-template-generator)

Help generate template files (angular, nodejs, backbone, java...)

## Prerequisites

This project has a dependencies that require Node to be installed. For help to install Node, go to:

https://nodejs.org

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)

## Installation

**BEFORE YOU INSTALL:** please read the [prerequisites](#prerequisites)
```bash
npm install custom-template-generator
```

Once the plugin has been installed, just need to add this line:

```javascript
var generator = require('custom-template-generator');
```

## Overview

```javascript
var generator = require('custom-template-generator');

generator({
    componentName: "button",
    customTemplatesUrl: './templates/',
    dest: 'src',
    componentType: 'component'
});
```

## Usage

```bash
grunt generate:module:component:name
```

### Options



Scaffold               | Type      | Usage
---                    |---        | ---
componentName          | `string`  | Name of the component
customTemplatesUrl     | `string`  | Location of the custom templates folder
dest                   | `string`  | Destination of generated templates files
templateName           | `string`  | Template name


### Meta data

The meta data helps customize your templates, here are some options:


Name               | Description
---                |---
name               | Component name
Name               | capitalized component name

### Example

The following template:

```javascript
// Angular imports
import { ElementRef, Renderer } from '@angular/core';
// Custom imports
import { {Name}Config } from './config/{name}.config';

export interface {Name}Interface<T> {
    /*
     * Model from the {name}.
     */
    model: T;
    /*
     * Stores config for the {name}.
     */
    readonly options: {Name}Config;
    /*
     * init
     */
    ngOnInit(): void;
}

```

By running this function

```javascript
generator({
    componentName: "button",
    customTemplatesUrl: './templates/',
    dest: 'src',
    templateName: 'component'
});
```

Will generate this file

```javascript
// Angular imports
import { ElementRef, Renderer } from '@angular/core';
// Custom imports
import { ButtonConfig } from './config/button.config';

export interface ButtonInterface<T> {
    /*
     * Model from the button.
     */
    model: T;
    /*
     * Stores config for the button.
     */
    readonly options: ButtonConfig;
    /*
     * init
     */
    ngOnInit(): void;
}

```

## License

MIT
