const path = require('path');
const webpack = require('webpack')
const {VueLoaderPlugin} = require('vue-loader')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, 'src/plugin.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'v-data-calendar.js',
    libraryTarget: 'umd',
    library: 'v-data-calendar',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            exclude: /node_modules/
          }
        }
      },
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    // webpack插件
    new UglifyJsPlugin()
  ]
}
