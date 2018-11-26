const webpack = require("webpack")
const path = require("path");
const merge = require('webpack-merge')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin")
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseWebpackConfig = require('./webpack.base.conf')
const config = require("../config")
const webpackConfig = merge(baseWebpackConfig, {
    output: {
        publicPath:config.build.assetsPublicPath
    },
    devtool: 'source-map',
    mode: 'production',
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: config.build.productionSourceMap, // set to true if you want JS source maps
            }),
            new OptimizeCSSAssetsPlugin({})
        ],
        splitChunks: {
            chunks: 'all',
            minSize: 30000,
            cacheGroups: {
                vendors: {
                    test: /node_modules/,
                    name: "vendors",
                },
                manifest: {
                    name: "manifest",
                    minChunks: Infinity,
                },
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.styl(us)?$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../',
                            sourceMap: true
                        },
                    },
                    'css-loader',
                    {
                        loader: "postcss-loader",
                    },
                    'stylus-loader',
                ]
            },
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': require("../config/prod.env")
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "css/[name].[hash:5].css",
            chunkFilename: "css/[id].css"
        }),
        new HtmlWebpackPlugin({
            inject: true,
            favicon:path.resolve('./favicon.ico'),
            meta:{
                viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'
            },
            template: '../index.html',
            filename: '../admin.html'
        }),
        new webpack.HashedModuleIdsPlugin({}),
        new webpack.optimize.ModuleConcatenationPlugin(),//scope hoisting

    ],
})
 if(config.build.productionGzip){
    webpackConfig.plugins.push(
        new CompressionPlugin({
            filename: '[path].gz[query]',
            algorithm: 'gzip',
            test: new RegExp(
                '\\.(' +
                config.build.productionGzipExtensions.join('|') +
                ')$'
            ),
            threshold: 10240,
            minRatio: 0.8
        })
    )
 }
 if(config.build.bundleAnalyzerReport){
     webpackConfig.plugins.push(
        new BundleAnalyzerPlugin()
    )
 }
module.exports = webpackConfig;
