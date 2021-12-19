const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const paths = require("./paths");

module.exports = {
  entry: [paths.src + "/index.js"],
  output: {
    path: paths.build,
    filename: "[name].js",
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: paths.db,
          to: "db",
          noErrorOnMissing: true,
        },
        {
          from: paths.icons,
          to: "icons",
          noErrorOnMissing: true,
        },
        {
          from: paths.images,
          to: "images",
          noErrorOnMissing: true,
        },
      ],
    }),

    new HtmlWebpackPlugin({
      template: paths.src + "/template.html",
      filename: "index.html",
    }),
  ],

  module: {
    rules: [
      { test: /\.js$/, use: ["babel-loader"] },
    ],
  },
};
