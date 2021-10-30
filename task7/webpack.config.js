'use strict';

let path = require('path');

module.exports = {
  mode: 'development',
  entry: './index.js',
  output: {
    filename: 'main.js',
    path: __dirname + '/scripts/webpack'
  },
  watch: true,
  devtool: "source-map",

  module: {}
};
