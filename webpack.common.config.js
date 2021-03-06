const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HappyPack = require("happypack");
const webpack = require('webpack');
const es3ifyPlugin = require('es3ify-webpack-plugin');

const resolve = dir => path.resolve(__dirname, dir);

commonConfig = {
    entry: {
        app: [
            path.join(__dirname, 'src/index.js')
        ],
        shim: [
            "es5-shim", // 支持 IE8 所必须,且顺序在babel-polyfill前
            "es5-shim/es5-sham",
            "html5shiv",
            'es6-promise',
            "babel-polyfill",
            'media-match'
            // "media-match", // 支持 antd 所必须
        ],
        vendorChunk: [
            'react',
            'react-dom',
            'react-redux',
            'react-router-dom',
            "redux-logger"
        ],
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'js/[name].[chunkhash].js',
        chunkFilename: 'js/[name].[chunkhash].js',
        publicPath: "/"
    },
    module: {
        // noParse: /node_modules\/(jquey|moment|chart\.js)/,
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: "happypack/loader?cacheDirectory=true&id=jsx",
                include: [path.resolve(__dirname, './src')],
                exclude: path => !!path.match(/node_modules|src\/assets/),
            },
            {
                test: /\.(jpe?g|png|gif|bmp|ico)(\?.*)?$/i,
                loader: "url-loader?limit=4048&name=assets/url-img/[name].[hash:5].[ext]",
            },
            {
                test: /\.(woff2?|svg|ttf|otf|eot)(\?.*)?$/i,
                loader: "url-loader?limit=2048&name=font/[name].[hash:5].[ext]",
                exclude: path => !!path.match(/node_modules|src\/assets/),
            }
        ],
        postLoaders: [
            {
                test: /\.(js|jsx)$/,
                loader: "happypack/loader?cacheDirectory=true&id=pre",
                // loaders: ['export-from-ie8/loader','es3ify-loader']
            }
        ]
    },
    plugins: [
        new HappyPack({
            id: "pre",
            threads: 4,
            loaders: [{
                loader: "export-from-ie8/loader",
                options: {
                    cacheDirectory: true,
                },
            }],
        }),
        new HappyPack({
			id: "jsx",
			threads: 4,
			loaders: [{
				loader: "babel-loader",
				options: {
					cacheDirectory: true,
				},
			}],
		}),
        new HtmlWebpackPlugin({
            title: "创视天成OA系统",
            filename: 'index.html',
            template: path.join(__dirname, 'src/index.html'),
            minify: {
                collapseWhitespace: true, //把生成的 index.html 文件的内容的没用空格去掉，减少空间
            },
            hash: true, //为了更好的 cache，可以在文件名后加个 hash。
        }),
        // new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: "appChunk",
            minChunks: 2,
            chunks: ["index"]
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "baseChunk",//
            minChunks: 2,
            chunks: ["appChunk", "vendorChunk"]
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "runtime",
            minChunks: Infinity,
        }),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'vendor',
        //     minChunks: Infinity,
        // }),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'runtime',
        //     minChunks: Infinity,
        // }),
        // 设置全局变量process.env.NODE_ENV开发模式，cross-env跨平台设置
        new webpack.DefinePlugin({
            "process.env.NODE_ENV" : (JSON.stringify(process.env.NODE_ENV))
        }),
        new CopyWebpackPlugin([
            {
                from: "src/assets/static",
                to: "assets/static",
            }
        ]),
        new es3ifyPlugin()
    ],

    resolve: {
        alias: {
            '@': resolve('src'),
            pages: path.join(__dirname, 'src/pages'),
            components: path.join(__dirname, 'src/components'),
            router: path.join(__dirname, 'src/router'),
            store: path.join(__dirname, 'src/redux/store'),
            actions: path.join(__dirname, 'src/redux/actions'),
            reducers: path.join(__dirname, 'src/redux/reducers'),
            utils:path.join(__dirname,'src/utils')
        },
        root: path.resolve('src'),
        modulesDirectories: ['node_modules'],
        extensions: ["", ".js", ".jsx", ".json"],
    }
};

module.exports = commonConfig;
