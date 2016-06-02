'use strict';

const Hapi = require('hapi');
const inert = require('inert');
const path = require('path');
const bunyan = require('bunyan');
const webpack = require('webpack');

const LOG = bunyan.createLogger({ name: 'app' });

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (process.env.NODE_ENV === 'development') {
    const config = require('./webpack.config');
    const WebpackDevServer = require('webpack-dev-server');

    new WebpackDevServer(webpack(config), {
        publicPath: config.output.publicPath,
        colors: true,
        historyApiFallback: true,
        inline: true,
        hot: true,
        watch: true
    }).listen(3000, 'localhost', (err, result) => {
        if (err) {
            LOG.error({ error: err });
        }
        LOG.info('hot server listening at localhost:3000');
    });
} else {
    const server = new Hapi.Server();

    server.connection({
        port: process.env.PORT || 8080
    });

    server.register(inert, (err) => {
        if (err) {
            throw err;
        }
    });

    server.route({
        method: 'GET',
        path: '/{param*}',
        handler: {
            file: {
                path: path.join(__dirname, 'build', 'index.html')
            }
        }
    });

    server.route({
        method: 'GET',
        path: '/assets/{param*}',
        handler: {
            directory: {
                path: path.join(__dirname, 'build')
            }
        }
    });

    server.start((err) => {
        if (err) {
            LOG.error({ error: err });
            throw err;
        }

        LOG.info(`Server has started at ${server.info.uri}`);
    });
}
