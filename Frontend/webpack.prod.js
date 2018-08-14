var merge = require('webpack-merge');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var CompressionPlugin = require("compression-webpack-plugin")
var common = require('./webpack.common.js');

module.exports = merge(common, {
  plugins: [
    new UglifyJSPlugin(),
    new CompressionPlugin({
      include: /app.min.jsgz/,
      filename (asset) {
        asset = 'app.min.jsgz'
        return asset
      },      
      algorithm: 'gzip'
    })
  ]
});