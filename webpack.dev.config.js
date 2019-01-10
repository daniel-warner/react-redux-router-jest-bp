const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");


module.exports = {
  mode: 'development',
  //devtool: 'eval-cheap-module-source-map',
  entry: ["./src/js/"],
  output: {
    path: path.resolve(__dirname, './src'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({template: './src/index.html'}),
    new OptimizeCSSAssetsPlugin({}),
    new UglifyJsPlugin({
      cache: true,
      parallel: true
      //sourceMap: true
    })
  ],
  devServer: {
    contentBase: "/",
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.(sc|c)ss$/,
        use: [
          'style-loader',
          'css-loader',
          {loader: 'postcss-loader',
            options: {
              plugins: () => [require('autoprefixer')]
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      },
      {
        test: /\.(jpg|png|gif|jpeg)$/,
        use: {
            loader: 'file-loader',
            options: {
                name: '[name].[ext]',
                outputPath: 'img/',
                publicPath: 'img/'
            }
        }
      }
    ]
  }
};
