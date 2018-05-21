module.exports = {
		entry: './src/App.js',
		output: {
			filename: 'bundle.js'
		},
		mode: 'development',
		module: {
			rules: [
				{
					test: /\.css$/,
					use: ['style-loader', 'css-loader']
				},
				{
					test: /\.js$/,
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader'
					}
				}
			]
		}
}