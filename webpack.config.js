const path = require('path');
const webpack = require('webpack');

module.exports = {

    mode: 'development',
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'js'),
        filename: 'app-bundle.js'
    },

    resolve: {
        alias: {
          'vue$': 'vue/dist/vue.common.dev.js'
        }
    },

    module: {

        rules: [
            {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: { presets: [['@babel/preset-env']] }
              }
            }
          ]
    },

    plugins: [
 
        new webpack.ProvidePlugin({
          process: 'process/browser'
    })
    ]
}