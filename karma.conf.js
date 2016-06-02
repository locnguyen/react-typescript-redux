/// <reference path="typings/globals/node/index.d.ts"/>

var path = require('path');
var WebpackConfig = require('webpack-config');
var webpackConfig = new WebpackConfig.Config().extend('webpack.test.config');

module.exports = function(config) {
    config.set({
        logLevel: config.LOG_DEBUG,
        port: 3334,
        browsers: ['PhantomJS'],
        singleRun: true, // just run once by default
        frameworks: ['jasmine', 'phantomjs-shim'], // use jasmine as framework
        // files: [
        //     'node_modules/babel-polyfill/dist/polyfill.js',
        //     '/node_modules/phantomjs-polyfill/bind-polyfill.js',
        //     // './src/**/*.+(ts|tsx)',
        //     'src/**/*.spec.+(ts|tsx)'
        // ],
        files: [
            {pattern: 'karma.tests.js', watched: false}
        ],
        preprocessors: {
          // '../src/**/*.+(ts|tsx)': ['webpack', 'sourcemap'],
          // '../src/**/*.spec.+(ts|tsx)': ['webpack', 'sourcemap'] // preprocess with webpack and sourcemap loader
          'karma.tests.js': ['webpack']
        },
        reporters: ['progress'], // report results in this format
        webpack: webpackConfig
    });
};
