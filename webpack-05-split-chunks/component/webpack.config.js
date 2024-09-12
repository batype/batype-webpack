const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    print: {
      import: "./src/print.js",
      dependOn: "shared",
    },
    index: {
      import: "./src/index.js",
      dependOn: "shared",
    },

    another: {
      import: "./src/another-module.js",
      dependOn: "shared",
    },
    shared: "lodash",
  },

  devServer: {
    static: "./dist",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "SplitChunks",
    }),
  ],
  devtool: "inline-source-map",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    publicPath: "/",
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
};
