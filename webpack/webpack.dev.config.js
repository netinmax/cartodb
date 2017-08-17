const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

const PACKAGE = require('./../package.json');
const version = PACKAGE.version;

const entryPoints = {
  static: [
    './lib/assets/javascripts/cartodb/dashboard/static.js'
  ]
};

module.exports = {
  entry: entryPoints,
  output: {
    filename: `${version}/javascripts/[name].js`,
    path: path.resolve(__dirname, '../public/assets'),
    publicPath: '/assets/'
  },
  devtool: 'cheap-module-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, '../public/static/dashboard/index.html'),
      template: path.resolve(__dirname, '../lib/assets/javascripts/cartodb/dashboard/views/index.jst.ejs'),
      version: version
    })
  ]
};