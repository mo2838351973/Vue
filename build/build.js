//cross-env NODE_ENV=production webpack --mode production

const webpack = require('webpack')
const rm = require('rimraf')
const chalk = require('chalk')
const webpackConfig = require('./webpack.prod.conf')

rm("./dist",err=>{
   if(err) throw err
   webpack(webpackConfig, function(err, stats) {
       process.stdout.write(stats.toString({
           colors: true,
           modules: false,
           children: false,
           chunks: false,
           chunkModules: false
       }));

       if (stats.hasErrors()) {
           console.log(chalk.red('  Build failed with errors.\n'))
           process.exit(1)
       }

       console.log(chalk.cyan(' \n Build complete.\n'))
       // console.log(chalk.yellow(
       //     '  Tip: built files are meant to be served over an HTTP server.\n' +
       //     '  Opening index.html over file:// won\'t work.\n'
       // ))

   })
})
