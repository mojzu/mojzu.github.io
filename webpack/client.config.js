const webpack = require("webpack");
const config = require("sapper/webpack/config.js");

const mode = process.env.NODE_ENV;
const isDevelopment = mode === "development";

module.exports = {
  entry: config.client.entry(),
  output: config.client.output(),
  resolve: {
    extensions: [".js", ".json", ".html"],
    mainFields: ["svelte", "module", "browser", "main"]
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: {
          loader: "svelte-loader",
          options: {
            dev: isDevelopment,
            hydratable: true,
            hotReload: true
          }
        }
      }
    ]
  },
  mode,
  plugins: [
    isDevelopment && new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      "process.browser": true,
      "process.env.NODE_ENV": JSON.stringify(mode)
    })
  ].filter(Boolean),
  devtool: isDevelopment && "inline-source-map"
};
