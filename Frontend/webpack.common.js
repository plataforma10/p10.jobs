var copy = require('copy-webpack-plugin');
var path = require('path');

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'app.min.jsgz'
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
            test: /.(png|jpg|jpeg|gif)$/,
            exclude: /node_modules/,
            loader: 'url-loader?limit=1024&name=img/[hash].[ext]'
        },
		{
			test: /\.svg$/,
            exclude: /node_modules/,
			loader: 'file-loader?limit=1024&name=img/[hash].[ext]'
		},
        {
            test: /.(woff|woff2|ttf|eot)$/,
            exclude: /node_modules/,
            loader: 'url-loader?limit=1024&name=fonts/[hash].[ext]'
        }
    ]},
    plugins: [
        new copy([{ context: './src', from: 'index.html', to: '' }])
    ]
}