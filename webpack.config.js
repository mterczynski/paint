const path = require('path');

module.exports = {
	entry: './src/App.tsx',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/dist'
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js"]
	},
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.ts(x?)$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.scss$/,
				use: [
					"style-loader", // creates style nodes from JS strings
					"css-loader", // translates CSS into CommonJS
					"sass-loader" // compiles Sass to CSS
				]
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.(png|jpg|PNG)$/,
				loader: 'url-loader'
			}
		]
	},
	watchOptions: {
		ignored: /node_modules/
	}
}
