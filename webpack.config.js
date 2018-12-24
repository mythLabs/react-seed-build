var path = require('path');
var HtmlWebPackplugin = require('html-webpack-plugin');

module.exports = {
    entry: './app/index.js',
    output:{
       path: path.resolve(__dirname, 'dist'),
       filename: 'index_bundle.js'
    },
    devtool: 'cheap-module-source-map',
     module: {
         rules: [
             {test: /\.(js)$/,exclude:'/node_modules/', use:'babel-loader'},
             {test: /\.(css)$/, use: ['style-loader','css-loader']}
         ]
     },
     mode: 'development',
     plugins:[
         new HtmlWebPackplugin({
             template: 'app/index.html'
         })
     ]
}