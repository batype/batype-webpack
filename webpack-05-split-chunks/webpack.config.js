const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
  },

  devServer: {
    static: "./dist",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "SplitChunks",
    }),
    new MiniCssExtractPlugin({
      // 类似于 webpackOptions.output 中的选项
      // 所有选项都是可选的
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
  ],
  devtool: "inline-source-map",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
};
