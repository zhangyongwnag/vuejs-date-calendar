const path = require('path');
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  entry: path.resolve(__dirname, 'src/plugin.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'vuejs-date-calendar.js',
    libraryTarget: 'umd',
    library: 'vuejs-date-calendar',
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
        use: {
          loader: 'css-loader'
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}
