Simple example of jasmine. I ran `jasmine examples` and fixed the paths so the tests work. I also added `src/Add.js` and `spec/my_examples/AddSpec.js`.

## Setup

* `npm install` to install the jasmine cli runner
* `./node_modules/jasmine/bin/jasmine` to run tests
    * [Karma](http://karma-runner.github.io/) is also installed, although when
    used with browserify I think it's more complicated than just using gulp to
    run jasmine. `karma start` to use karma.

## Getting started with Jasmine on another project

1. get jasmine via `npm install -g jasmine` or just with the local project with
   `npm install --save-dev jasmine`. In that case jasmine will be in
   `./node_modules/jasmine/bin/jasmine.js`
    * If you don't have a `package.json` you might want to `npm init` before
      installing locally so the jasmine requirement gets saved to your manifest
    * If installing locally you should probably add `node_modules` to `.gitignore`
2. Are you testing only commonjs modules?
    * `jasmine init` to set up a spec folder and basic config for commonjs testing
    * create a `WhateverSpec.js` in the `spec` folder. You can also organize
      specs into any depth of folders under `spec`. Fill the test with a
      jasmine test suite.
    * the test should use the `require()` function to assign a commonjs module
      to a variable.
    * `jasmine` from project root to run tests
    * Want to use karma?
         * `npm install --save-dev karma karma-jasmine karma-browserify`
         * `karma init`, jasmine, no requirejs, add `spec/**/*Spec.js` to files
           block, no blacklist, watch for changes
         * not done yet - now open `karma.conf.js`, add `browserify` and
           `jasmine` to the `frameworks` array
         * under `preprocessors` add `'spec/**/*Spec.js': ['browserify']`
         * add a new config at the end: `browserify: {debug: true}` otherwise
    debugging failed tests will be impossibru
3. Or are you testing some other non-commonjs javascript?
     * I think you'll need a `SpecRunner.html` to include your dependencies in
       script tags in order. It needs a bunch of other boilerplate too.
     * Download the [standalone version](https://github.com/jasmine/jasmine/releases)
       and unzip it into a `jasmine` folder. Or just copy/paste this:
       `mkdir jasmine && wget -O ./jasmine/jasmine.zip https://github.com/jasmine/jasmine/releases/download/v2.1.3/jasmine-standalone-2.1.3.zip && cd jasmine && unzip jasmine.zip && rm -f jasmine.zip && cd ..`
     * create a `WhateverSpec.js` in the `jasmine/spec` folder. You can also
       organize specs into any depth of folders under `spec`. Fill the test with a
       jasmine test suite.
     * open the `SpecRunner.html` in your browser
     * you can also use [jasmine-html-runner](https://www.npmjs.com/package/jasmine-html-runner)
       to run it on the command line

