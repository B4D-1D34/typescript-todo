const path = require("path");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

import { Configuration } from "webpack";

import "webpack-dev-server";

const plugins = [
  new MiniCssExtractPlugin(),
  new HtmlWebpackPlugin({
    template: "./src/index.html",
  }),
  new BundleAnalyzerPlugin({
    analyzerMode: process.env.STATS || "disabled",
  }),
];

if (process.env.NODE_ENV) plugins.push(new ReactRefreshWebpackPlugin());

const config: Configuration = {
  output: {
    path: path.resolve(__dirname, "build"),
    assetModuleFilename: "images/[name][ext]",
    clean: true,
  },

  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },

  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg|ico)$/i,
        type: "asset/resource",
        // TO CHANGE SIZE THRESHOLD
        // parser: {
        //   dataUrlCondition: {
        //     maxSize: 30 * 1024,
        //   },
        // },
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "ts-loader",
      },
      {
        test: /\.(s[ac]|c)ss$/i,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
    ],
  },

  plugins: plugins,

  resolve: {
    extensions: [".js", ".tsx", ".ts"],
  },

  devtool: "source-map",

  devServer: {
    static: { directory: path.join(__dirname, "build") },
  },
};

export default config;
