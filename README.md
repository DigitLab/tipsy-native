# Tipsy Native

[![Downloads](https://img.shields.io/github/downloads/digitlab/tipsy-native/latest/total.svg)](https://github.com/digitlab/tipsy-native)
[![Latest Release](https://img.shields.io/github/release/digitlab/tipsy-native.svg)](https://github.com/digitlab/tipsy-native)
[![License](https://img.shields.io/github/license/digitlab/tipsy-native.svg)](https://github.com/digitlab/tipsy-native)

Facebook-style tooltip javascript library.

## Description

Tipsy Native is a simple javascript library for generating Facebook-style tooltips.

This is almost a direct port to native javascript of [tipsy](http://onehackoranother.com/projects/jquery/tipsy) by Jason Frame.

## Documentation

[http://digitlab.github.io/tipsy-native](http://digitlab.github.io/tipsy-native)

## Supported Browsers

// TODO:

## Usage

1. Copy the contents of dist to the corresponding asset directories in your project.

2. Insert the necessary elements in your document's `<head>` section, e.g.:
   
   ```html
   <script src='/js/tipsy.js'></script>
   <link rel="stylesheet" href="/css/tipsy.css" type="text/css" />
   ```

3. Initialise Tipsy in your document.onload, e.g.:

   ```html
   <script type='text/javascript'>
       document.addEventListener("DOMContentLoaded", function(event) {
           Tipsy.watchSelector('a[rel=tipsy]');
       });
   </script>
   ```

Please refer to the docs directory for more examples and documentation.

## License

Tipsy Native is licensed under [The MIT License (MIT)](LICENSE).