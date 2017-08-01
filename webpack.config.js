var webpack = require('webpack');
var path = require('path');

var entryPath = path.resolve(__dirname, 'client/main.jsx');
var outputPath = path.resolve(__dirname, 'client/')


const config = {
  entry: entryPath,

  output: {
    path: outputPath,
    filename: 'index.js'
  },

  devServer: {
    inline: true,
    port: 3030
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',

        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};

module.exports = config;
