const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');

var commonConfig = {
  output: {
    path: path.resolve(__dirname + '/dist/'),
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: __dirname,
        exclude: /node_modules/
      },

      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },

      {
        test: /\.css$/,
        loader: 'css-loader'
      }
    ]
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin( {
      minimize : true,
      sourceMap : false,
      mangle: true,
      compress: {
        warnings: false
      }
    })
  ]
};

module.exports = [
  merge(commonConfig, {
    entry: path.resolve(__dirname, './src/plugin.js'),
    output: {
      filename: 'vuejs-date-calendar.min.js',
      libraryTarget: 'window',
      library: 'vuejs-date-calendar',
    }
  }),

  merge(commonConfig, {
    entry: path.resolve(__dirname, './src/plugin.js'),
    output: {
      filename: 'vuejs-date-calendar.js',
      libraryTarget: 'umd',
      library: 'vuejs-date-calendar',
      umdNamedDefine: true
    }
  })
];