const path = require('path');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');

const config = {

    resolve: {
        extensions: ['', '.ts', '.tsx', '.js', '.scss'],
        modulesDirectories: [
            'node_modules'
        ]
    },

    devtool: 'eval-source-map',

    debug: true,

    resolveLoader: {
        root: path.resolve(__dirname, 'node_modules')
    },

    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loaders: ['babel', 'ts'],
                exclude: /node_modules/
            }, {
                test: /\.jsx?$/,
                loaders: ['babel'],
                exclude: /node_modules/
            }, {
                test: /(\.scss|\.css)$/,
                loader: 'null'
            }, {
                test: /\.(png|jpg)$/,
                loader: 'null'
            }, {
                test: /.(woff(2)?|eot|ttf|svg|otf)$/,
                loader: 'null'
            }
        ]
    }
};

module.exports = config;