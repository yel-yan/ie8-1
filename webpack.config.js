const merge = require('webpack-merge');

const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const commonConfig = require('./webpack.common.config.js');

const publicConfig = {
    devtool: 'cheap-module-source-map',
    module: {
        loaders: [
            {   test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader","postcss-loader")
            },
            {
                test: /\.less$/i,
                loader: ExtractTextPlugin.extract(
                    'style-loader',
                    'css-loader?-autoprefixer!postcss-loader!less-loader',
                ),
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new UglifyJSPlugin({
            sourceMap: false,
            uglifyOptions: {
                ie8: true,
                output: {
                    comments: false,
                    beautify: false,
                },
                compress: {
                    warnings: false,
                    drop_debugger:true,
                    drop_console:true,
                    pure_funcs:['console.log'],
                    properties: false
                },
            },
            cache: true,
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new ExtractTextPlugin('css/[name].[contenthash:5].css')
    ]

};

module.exports = merge(commonConfig, publicConfig);
