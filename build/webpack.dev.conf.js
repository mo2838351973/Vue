'use strict'
const path = require('path');
const webpack = require("webpack")
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const portfinder = require('portfinder')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

const utils = require("./utils.js")
const HOST = process.env.HOST;
const PORT = process.env.PORT;// && Number(process.env.PORT)

const config = require("../config")
const devWebpackConfig = merge(baseWebpackConfig, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        host: HOST || config.dev.host,
        port: PORT || config.dev.port,
        contentBase: './dist',
        historyApiFallback: true,
        inline: true,
        hot: true,
        open: true,
        quiet: true,
    },
    module: {
        rules: [
            {
                test: /\.styl(us)?$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    // {
                    //     loader: 'px2rem-loader',
                    //     // options here
                    //     options: {
                    //         remUni: 75,
                    //         remPrecision: 8
                    //     }
                    // },
                    {
                        loader: "postcss-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                    'stylus-loader',
                    
                ]
            },
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': require("../config/dev.env")
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),//当开启 HMR 的时候使用该插件会显示模块的相对路径，建议用于开发环境。

    ],
})

module.exports = new Promise((resolve, reject) => {
    portfinder.basePort = process.env.PORT || config.dev.port
    portfinder.getPort((err, port) => {
        if (err) {
            reject(err);
        } else {
            process.env.PORT = port
            devWebpackConfig.devServer.port = port;
            devWebpackConfig.plugins.push(
                new FriendlyErrorsWebpackPlugin(
                    {
                        compilationSuccessInfo: {
                            messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
                        },
                        onErrors: config.dev.notifyOnErrors
                            ? utils.createNotifierCallback()
                            : undefined
                    }
                ));
            resolve(devWebpackConfig)
        }
    })
});


