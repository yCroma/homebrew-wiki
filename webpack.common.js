 const path = require('path');
 const HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {
   entry: {
     app: './src/index.js',
   },
	 resolve: {
		 alias: {
			 "Src": path.resolve(__dirname, "src"),
			 "Stories": path.resolve(__dirname, "src/stories"),
			 "GlobalAffects": path.resolve(__dirname, "src/web/globalAffects"),
			 "Components": path.resolve(__dirname, "src/web/components"),
			 "Events": path.resolve(__dirname, "src/web/customeEvents"),
			 "Pages": path.resolve(__dirname, "src/pages"),
			 "assets": path.resolve(__dirname, "src/web/assets")
		 }
	 },
	 module: {
		 rules: [
			 {
				 test: /.txt$/i,
				 use: 'raw-loader'
			 },
			 {
				 test: /\.html/i,
				 use: 'html-loader'
			 },
			 {
				 test: /\.css$/i,
				 use: ["to-string-loader", "css-loader"]
			 },
			 {
				 test: /\.svg$/i,
				 use: [
					 {
						 loader: 'url-loader',
					 }
				 ]
			 }
		 ]
	 },
   plugins: [
     new HtmlWebpackPlugin({
			 template: `${__dirname}/src/index.html`
     }),
   ],
   output: {
     filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist'),
		 publicPath: '/'
   },
 };
