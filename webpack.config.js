const path = require('path');

const CSSModuleLoader = {
  loader: 'css-loader',
  options: {
    modules: true,
    sourceMap: true,
    localIdentName: '[local]__[hash:base64:5]',
    minimize: true
  }
}

const CSSLoader = {
  loader: 'css-loader',
  options: {
    modules: false,
    sourceMap: true,
    minimize: true
  }
}

const postCSSLoader = {
  loader: 'postcss-loader',
  options: {
    ident: 'postcss',
    sourceMap: true,
  }
}

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
				exclude: /\.module\.scss$/,
				use: ['style-loader', CSSLoader,
				// postCSSLoader,
				 'sass-loader']
			},
			{
				test: /\.module\.scss$/,
				use: [
					'style-loader',
					CSSModuleLoader,
					// postCSSLoader,
					'sass-loader',
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
