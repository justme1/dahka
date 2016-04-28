var path = require('path');
var webpack = require("webpack");

var buildPath = path.resolve(__dirname, 'dist');
module.exports = {


  watchOptions: {
    poll: true
  },
  entry: {
    "vendor": [
      path.resolve(__dirname, 'app', 'vendor')
    ],
    "app": [
      path.resolve(__dirname, 'app', 'boot')
    ]
  },
  output: {
    publicPath:'/dist',
    path: buildPath,
    filename: '[name].js',
  },
  resolve: {
    extensions: ['', '.js', '.ts'],
    modulesDirectories: ['node_modules', 'resources', 'app']
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.ts/,
        loaders: ['ts-loader'],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js")
  ]
}
