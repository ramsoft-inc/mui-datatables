const webpack = require('webpack');

module.exports = {
	optimization: {
		splitChunks: {
			// include all types of chunks
			chunks: "all",
		},
		//runtimeChunk: 'single',
		minimize: false,
		sideEffects: true,
		moduleIds: 'named'
	},
	entry: {
		app: ['core-js/stable', 'regenerator-runtime/runtime', '../examples/Router/index.js'],
	},
	stats: 'verbose',
	context: __dirname,
	output: {
		filename: 'bundle.js',
	},
	devtool: 'source-map',
	devServer: {
		disableHostCheck: true,
		host: 'localhost',
		hot: true,
		inline: true,
		port: 5050,
		stats: 'errors-warnings',
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/i,
				exclude: /(node_modules)/,
				use: ['babel-loader', 'eslint-loader'],
			},
			{
				// css/less
				test: /\.(le|c)ss$/i,
				use: ['style-loader', 'css-loader', 'less-loader'],
			},
			{
				test: /\.mdx$/i,
				use: ['babel-loader', '@mdx-js/loader']
			},
		],
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.DefinePlugin({
		'process.env': {
			NODE_ENV: JSON.stringify('development'),
		},
		}),
	],
};
