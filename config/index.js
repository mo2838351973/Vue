'use strict'
const path = require("path")
module.exports = {
    dev:{
        host:"127.0.0.1",//can be overwrite by process.env.HOST
        port:"8001",//can be overwrited by process.env.PORT
        devtool:"cheap-module-eval-source-map",
        assetsSubDirectory:"static",
        notifyOnErrors:true,
        assetsPublicPath:"/",
        cacheBusting: true,
        cssSourceMap: true
},
    build:{
    devtool:"source-map",
        index:path.resolve(__dirname, '../dist/index.html'),
        productionSourceMap:true, // set to true if you want JS source maps
        productionGzipExtensions: ['js', 'css'],
        assetsSubDirectory:"",
        productionGzip:false,
        bundleAnalyzerReport:false,//Visualize size of webpack output files with an interactive zoomable treemap.
        assetsPublicPath:'./static/'
}
}
