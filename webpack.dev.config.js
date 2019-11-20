const merge = require('webpack-merge');
const path = require('path');

const HappyPack = require("happypack");
const webpack = require('webpack');
const FriendlyErrorsPlugin = require("friendly-errors-webpack-plugin");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const commonConfig = require('./webpack.common.config.js');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

const devConfig = {
    devtool: 'cheap-module-source-map',// eval不兼容ie8
    watchOptions: {
        ignored: /node_modules|dist|build/,
        aggregateTimeout: 3000, //监听到变化发生后等300ms再去执行动作，防止文件更新太快导致编译频率太高
        poll: 200 //通过不停的询问文件是否改变来判断文件是否发生变化，默认每1000次
    },
    output: {
        filename: '[name].[hash].js'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loaders: ["style-loader", "css-loader", "postcss-loader"]
            },
            {
                test: /\.less$/i,
                loaders: ["style-loader", "css-loader", "postcss-loader", "less-loader"],
            },
        ]
    },
    plugins:[
        // new HappyPack({
        //     id: "cssm",
        //     threads: 4,
        //     loaders: ["style-loader", "css-loader", "postcss-loader"],
        // }),
        // new HappyPack({
        //     id: "css",
        //     threads: 4,
        //     loaders: ["style-loader", "css-loader", "postcss-loader"],
        // }),
        // new HappyPack({
        //     id: "less",
        //     threads: 4,
        //     loaders: ["style-loader", "css-loader", "postcss-loader", "less-loader"],
        // }),
        // new FriendlyErrorsPlugin(),
        // new webpack.NamedModulesPlugin(),
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
        // new BrowserSyncPlugin({
        //     // browse to http://localhost:3000/ during development,
        //     // ./public directory is being served
        //     host: 'localhost',
        //     port: 3000,
        //     server: { baseDir: ['./dist'] },
        //     proxy: {
        //         "/api/*": {
        //             target: "http://oa-api.1024web.cn",
        //             pathRewrite: {"^/api" : ""},
        //             changeOrigin: true,     // target是域名的话，需要这个参数，
        //             secure: false,          // 设置支持https协议的代理
        //         },
        //         "/img/*": {
        //             target: "http://193.112.23.168:8088",
        //             pathRewrite: {"^/img" : ""},
        //             changeOrigin: true,     // target是域名的话，需要这个参数，
        //             secure: false,          // 设置支持https协议的代理
        //         }
        //     }
        // })
    ],
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
            },
            "/img/*": {
                target: "http://193.112.23.168:8088",
                pathRewrite: {"^/img" : ""},
                changeOrigin: true,     // target是域名的话，需要这个参数，
                secure: false,          // 设置支持https协议的代理
            }
        }
    }
};

module.exports = merge(commonConfig, devConfig);