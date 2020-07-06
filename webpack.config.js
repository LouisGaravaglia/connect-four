var HtmlWebpackPlugin = require("html-webpack-plugin");
const { ResolvePlugin } = require("webpack");
module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      title: "Connect Four",
      template: "./src/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
