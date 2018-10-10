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
        extensions: ['.js', '.jsx']
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
        new Dotenv({ path: './.env', safe: true})	
    ]
}