var webpack = require('webpack');
module.exports = {
	entry: [
		// 写在入口文件之前
	    "webpack-dev-server/client?http://0.0.0.0:3000",
	    "webpack/hot/only-dev-server",
	    // 这里是你的入口文件
		"./app.js"
	],
	output: {
		path: __dirname + '/static',
		filename: "bundle.js",
		publicPath: "/static"
	},
	module: {
		loaders: [
			{ test: /\.js[x]?$/, exclude: /node_modules/, loader: 'babel-loader' },
			// { test: /\.js?$/, loader: 'babel-loader', query: { presets: ['es2015', 'react'] }, exclude: /node_module/ },
			{ test: /\.css$/, loader: 'style!css' }
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
}