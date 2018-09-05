var copy = require('copy-webpack-plugin');
var path = require('path');
var Dotenv = require('dotenv-webpack');

module.exports = {
    entry: './src/index.jsx',
	output: {
		path: path.resolve(__dirname, 'public/'),
		filename: 'app.min.jsgz',
		publicPath: 'public/'
	},
    resolve: {
        extensions: ['.js', '.jsx', '.scss']
    },
    module: {
    rules: [
        {
            loader: 'babel-loader',
            query: {
                cacheDirectory: true,
                presets: ['react', 'es2015', 'stage-0']
            }
        },
        {
            test: /\.(scss|css)$/,
			exclude: /node_modules/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader',
                'resolve-url-loader',
                'sass-loader?sourceMap'
            ]
        },
        {
            test: /.(png|jpg|jpeg|gif|svg)$/,
            exclude: /node_modules/,
            loader: 'url-loader?limit=1024&name=img/[hash].[ext]'
        },
        {
            test: /.(woff|woff2|ttf|eot)$/,
            exclude: /node_modules/,
            loader: 'url-loader?limit=1024&name=fonts/[hash].[ext]'
        }
    ]},
    plugins: [
        new copy([{ context: './src', from: 'index.html', to: '' },
        { context: './src', from: 'favicon.ico', to: '' },
        { context: './src', from: 'manifest.json', to: '' }]),
        new Dotenv({ path: './.env', safe: true})	
    ]
}