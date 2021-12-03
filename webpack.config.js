const path = require('path')
const webpack = require('webpack')

module.exports = {

    mode: 'development',
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'js'),
        filename: 'app-bundle.js'
    },
    resolve: {
        alias: {
          'vue$': 'vue/dist/vue.esm.js'
        }
    },

    plugins: [
        // fix "process is not defined" error:
        // (do "npm install process" before running the build)
        new webpack.ProvidePlugin({
          process: 'process/browser',
        }),
      ]
}