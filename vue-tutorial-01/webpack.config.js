const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        include: /src/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
        }
      },
      {
        test: /\.js$/,
        include: /src/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: ['style-loader', 'css-loader'],
      },
      {
        test: /\.png$/,
        include: /src/,
        loader: 'file-loader',
        options: {},
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, 'src', 'index.html'),
    }]),
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.js'
    },
  },
  devServer: {
    contentBase: 'public', // Relative directory for base of server
    port: 3000, // Port Number
    host: 'localhost', // Change to '0.0.0.0' for external facing server
    historyApiFallback: true,
  },
};
