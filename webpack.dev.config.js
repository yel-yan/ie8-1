const merge = require('webpack-merge');
const path = require('path');

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const commonConfig = require('./webpack.common.config.js');

const devConfig = {
    devtool: 'inline-source-map',
    output: {
        /*这里本来应该是[chunkhash]的，但是由于[chunkhash]和react-hot-loader不兼容。只能妥协*/
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
        ],
        // plugins:[
        //     new UglifyJSPlugin({
        //         compress: {
        //             properties: false,
        //             warnings: false
        //         },
        //         output: {
        //             beautify: true,
        //             quote_keys: true
        //         },
        //         mangle: {
        //             screw_ie8: false
        //         },
        //         sourceMap: false
        //     }),
        // ]
    },
    devServer: {
        contentBase: path.join(__dirname, './dist'),
        historyApiFallback: true,
        compress: true,
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
