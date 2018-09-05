var merge = require('webpack-merge');
var common = require('./webpack.common.js');
var path = require('path');

module.exports = merge(common, {
	mode: 'development',
	watch: true,
	devServer: {
		contentBase: [path.join(__dirname, "public"), 
			path.join(__dirname, "src")],
		historyApiFallback: true,
		publicPath: '/public/',
		compress: true,
		open: true
	}
});