var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: "./public/javascripts/entry.js",
  module: {
	  loaders: [
	      {
	        test: /\.jsx?$/,
	        exclude: /node_modules/,
	        loader: 'babel-loader',
	        query: {
	          presets: ['react', 'es2015']
	        }
	      }
	    ]
  },
  output: {
    path: path.join(__dirname),
    filename: "./public/javascripts/bundle.js"
  }
};
