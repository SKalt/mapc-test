/* global __dirname*/
const path = require('path');
const webpack = require('webpack');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
const fs = require('fs');

module.exports = (env={}) => {
  return {
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    devtool: 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'dist')
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            'file-loader'
          ]
        }
      ]
    },
    plugins: [
      new webpack.DefinePlugin(Object.assign({ // defaults
        ENV: '"debugging"',
        GEOSERVER_URL: 'https://www.example.com', // TODO: fill in geoserver url 
        MB_ACCESS_TOKEN: `'${fs.readFileSync('api-keys/mapbox.txt', 'utf8').trim()}'`,
        MZ_API_KEY: `'${fs.readFileSync('api-keys/mapzen.txt', 'utf8').trim()}'`
      }, env)),
      // new CleanWebpackPlugin(['dist']),
    ],
  };
};