var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var basePath = __dirname;

module.exports = {
  mode: 'development',
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
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
    devMiddleware: {
      writeToDisk: true,
    },
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
     {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            }
          }
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html'
    }),
  ],
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  }
}
