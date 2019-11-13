const merge = require('webpack-merge');
const path = require('path');
const HappyPack = require("happypack");
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const FriendlyErrorsPlugin = require("friendly-errors-webpack-plugin");
const commonConfig = require('./webpack.common.config.js');

const devConfig = {
    devtool: 'cheap-eval-source-map',
    output: {
        filename: '[name].[hash].js'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: "happypack/loader?cacheDirectory=true&id=cssm",
            },
            {
				test: /[^_]\.css$/i,
				loader: "happypack/loader?cacheDirectory=true&id=css",
			},
            {
                test: /\.less$/i,
                loader: "happypack/loader?cacheDirectory=true&id=less",
            },
        ]
    },
    plugins:[
        new HappyPack({
            id: "cssm",
            threads: 4,
            loaders: ["style-loader", "css-loader", "postcss-loader"],
        }),
        new HappyPack({
            id: "css",
            threads: 4,
            loaders: ["style-loader", "css-loader", "postcss-loader"],
        }),
        new HappyPack({
            id: "less",
            threads: 4,
            loaders: ["style-loader", "css-loader", "postcss-loader", "less-loader"],
        }),
        new FriendlyErrorsPlugin(),
        new webpack.NamedModulesPlugin(),
        // new UglifyJSPlugin({
        //     compress: {
        //         properties: false,
        //         warnings: false
        //     },
        //     output: {
        //         beautify: true,
        //         quote_keys: true
        //     },
        //     mangle: {
        //         screw_ie8: false
        //     },
        //     sourceMap: false
        // }),
    ],
    dev: {
        env: {
          NODE_ENV: '"development"'
        }
    },
    devServer: {
        contentBase: path.join(__dirname, './dist'),
        historyApiFallback: true,
        compress: true,
        noInfo: true,
        host: '0.0.0.0',
        proxy: {
            "/api/*": {
                target: "http://oa-api.1024web.cn",
                pathRewrite: {"^/api" : ""},
                changeOrigin: true,     // target是域名的话，需要这个参数，
                secure: false,          // 设置支持https协议的代理
            }
        }
    }
};

module.exports = merge(commonConfig, devConfig);
