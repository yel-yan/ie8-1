const merge = require('webpack-merge');

const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const commonConfig = require('./webpack.common.config.js');

const publicConfig = {
    devtool: 'source-map',
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
            compress: {
                properties: false,
                warnings: false,
                drop_debugger: true,//console
                drop_console: true,
                pure_funcs: ['console.log']//移除console
            },
            output: {
                beautify: true,
                quote_keys: true
            },
            mangle: {
                screw_ie8: false
            },
            sourceMap: false
        }),
        // new webpack.DefinePlugin({
        //     'process.env': {
        //         'NODE_ENV': JSON.stringify('production')
        //     }
        // }),
        new ExtractTextPlugin('css/[name].[contenthash:5].css')
    ]

};

module.exports = merge(commonConfig, publicConfig);
