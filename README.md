Simple example of jasmine. I ran `jasmine examples` and fixed the paths so the tests work. I also added `src/Add.js` and `spec/my_examples/AddSpec.js`.

## Setup

* `npm install` to install the jasmine cli runner
* `./node_modules/jasmine/bin/jasmine` to run tests

## Getting started with Jasmine on another project

1. get jasmine via `npm install -g jasmine` or just with the local project with `npm install --save-dev jasmine`. 
 * If you don't have a `package.json` you might want to `npm init` before installing locally so the jasmine requirement gets saved to your manifest
2. `jasmine init` to set up a spec folder and basic config
3. create a `WhateverSpec.js` in the `spec` folder. You can also organize specs into any depth of folders under `spec`. Fill it with a jasmine test suite.
 * the test should use the `require()` function to assign a commonjs module to a variable.
 * if it's not a commonjs module I think you'll need a `SpecRunner.html` to include your dependencies in script tags in order. It needs a bunch of other boilerplate too.
  * Download the [standalone version](https://github.com/jasmine/jasmine/releases) and unzip it into a `jasmine` folder. Or just copy/paste this: `mkdir jasmine && wget -O ./jasmine/jasmine.zip https://github.com/jasmine/jasmine/releases/download/v2.1.3/jasmine-standalone-2.1.3.zip && cd jasmine && unzip jasmine.zip && rm -f jasmine.zip && cd ..`
  * open the `SpecRunner.html` in your browser
  * you can also use [jasmine-html-runner](https://www.npmjs.com/package/jasmine-html-runner) to run it on the command line
4. `jasmine` from project root to run tests
