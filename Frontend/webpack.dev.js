var merge = require('webpack-merge');
var common = require('./webpack.common.js');
var Dotenv = require('dotenv-webpack');

module.exports = merge(common, {
	mode: 'development',
	watch: false,
	devServer: {
		historyApiFallback: true,
	},
	plugins: [
		new Dotenv({ path: './.env', safe: true})		
	]
});