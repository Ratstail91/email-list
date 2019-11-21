module.exports = env => {
	return {
		//entry: `./src/index${env === 'production' ? '' : '_dev'}.jsx`,
		entry: `./src/index_dev.jsx`,
		output: {
			path: __dirname + '/public/',
			filename: 'app.bundle.js',
			sourceMapFilename: 'app.bundle.js.map'
		},
		devtool: 'source-map',
		module: {
			rules: [
				{
					test: /(\.js$|\.jsx$)/,
					exclude: /(node_modules)/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env', '@babel/preset-react'],
						}
					}
				}
			]
		}
	};
};