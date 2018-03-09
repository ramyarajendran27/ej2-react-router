var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var basePath = __dirname;

module.exports = {
  context: path.join(basePath, "src"),
  resolve: {
      extensions: ['.js', '.ts', '.tsx']
  },

  entry: [
    './main.tsx',
  ],
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js'
  },

  devServer: {
       port: 5001,
       stats: 'errors-only'
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'awesome-typescript-loader',
        options: {
          useBabel: true,
        },
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: {
            loader: 'css-loader',
          },
        }),
      },  
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'bundle.css',
      disable: false,
      allChunks: true,
    }),
  ]
}
