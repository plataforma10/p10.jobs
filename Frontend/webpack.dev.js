var merge = require('webpack-merge');
var common = require('./webpack.common.js');
var webpack = require('webpack');

module.exports = merge(common, {
	mode: 'development',
	watch: true,
	devServer: {
		historyApiFallback: true,
	},
	plugins: [		
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('development')
			}
		}),
	]
});