/// <reference path="typings/globals/node/index.d.ts"/>

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        vendor: ['react', 'react-dom', 'redux'],
        app: path.join(__dirname, 'src',  'index.tsx')
    },

    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name]-[hash].js'
    },

    resolve: {
        extensions: ['', '.ts', '.tsx', '.js', '.scss'],
        modulesDirectories: [
            'node_modules'
        ]
    },

    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loaders: ['babel', 'ts'],
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

    postcss: [require('autoprefixer')],

    plugins: [
        new webpack.BannerPlugin('Copyright Production Point LLC'),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'index.html')
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor-[hash].js'
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin('[name]-[hash].css', {allChunks: true}),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
};