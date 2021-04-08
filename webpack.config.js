module.exports = {
	entry: './app/app.ts',
	devtool: 'inline-source-map',
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader', //to compile the ts
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	output: {
		filename: 'bundle.js', //name of the bundle file webpack will produce
	},
	devServer: {
		inline: false, //to prevent or allow default refresh on changes.
	},
};
