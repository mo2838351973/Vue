'use strict'
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const webpack = require("webpack")
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const vueLoaderConfig = require("./vue-loader.conf")
const config = require("../config")

module.exports = {
    context:path.resolve('./src'),//编译的基础目录，使配置独立于工程目录
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js', // Use the full build
            '@': path.join(__dirname, '..', 'src')
        }
    },
    entry: {
        app: './index.js',
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: vueLoaderConfig
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10240,
                            name: process.env.NODE_ENV === 'production' ?  'images/[name].[hash:5].[ext]':'images/[name].[ext]',
                        }
                    }
                ]
            },
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new HtmlWebpackPlugin({
            inject: true,
            favicon:path.resolve('./favicon.ico'),
            meta:{
                viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'
            },
            template: '../index.html',
        }),
        // copy custom static assets
        new CopyWebpackPlugin([{
            from: path.resolve(__dirname, "../static"),
            to: process.env.NODE_ENV === 'production' ? config.build.assetsSubDirectory : config.dev.assetsSubDirectory,
            ignore: ['.*']
        }]),
    ],
    output: {
        filename: 'js/[name].[hash:5].bundle.js',
        chunkFilename:'js/[name].[chunkhash:5].chunk.js',
        //打包文件输出的目录
        path: path.resolve('./dist/static'),
        //静态资源最终访问路径
        publicPath: process.env.NODE_ENV === 'production'
            ? config.build.assetsPublicPath
            : config.dev.assetsPublicPath
    }
}


