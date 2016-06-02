/// <reference path="typings/globals/node/index.d.ts"/>

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://0.0.0.0:3000',
        'webpack/hot/only-dev-server',
        path.resolve(__dirname, 'src', 'index.tsx')
    ],

    devtool: 'source-map',

    output: {
        publicPath: 'http://localhost:3000/',
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
    },

    resolve: {
        extensions: ['', '.ts', '.tsx', '.js', '.scss'],
        modulesDirectories: [
            'node_modules'
        ]
    },

    module: {
        preLoaders: [
            {
                test: /\.tsx?$/,
                loader: 'tslint'
            }
        ],
        loaders: [
            {
                test: /\.tsx?$/,
                loaders: ['react-hot', 'babel', 'ts'],
                exclude: /node_modules/
            }, {
                test: /(\.scss|\.css)$/,
                loader: 'style!css?modules!postcss!resolve-url!sass'
            }, {
                test: /\.(png|jpg)$/,
                loader: 'file'
            }, {
                test: /.(woff(2)?|eot|ttf|svg|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file'
            }
        ]
    },

    plugins: [
        new webpack.BannerPlugin('Copyright Production Point LLC'),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'index.html')
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    ]
}