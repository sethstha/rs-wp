const ReactRefreshPlugin = require("@rspack/plugin-react-refresh");
const path = require("path");
module.exports = {
  context: __dirname,
  mode: "development",
  entry: "./src/main.tsx", // Adjust the entry point as needed
  output: {
    path: path.resolve(__dirname, "dist"), // Output directory for the bundle
    filename: "bundle.js", // Output filename
    publicPath: "http://localhost:3000/dist",
  },
  devServer: {
    hot: true, // Enable Hot Module Replacement (HMR)
    open: true,
    port: 3000,
    host: "localhost",
    allowedHosts: "all",
    headers: { "Access-Control-Allow-Origin": "*" },
    client: {
      overlay: false,
    },

    static: {
      directory: path.join(__dirname, "dist"),
    },
  },
  externals: {
    react: "React",
    "react-dom": "ReactDOM",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Match .js and .jsx files
        use: {
          loader: "babel-loader", // Use Babel for JS/JSX files
          options: {
            plugins: [require.resolve("react-refresh/babel")], // Enable React Refresh
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.tsx?$/, // Match .ts and .tsx files
        use: {
          loader: "builtin:swc-loader", // Use ts-loader for TypeScript files
          options: {
            transpileOnly: true, // Faster builds with type checking disabled
          },
        },
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new ReactRefreshPlugin(), // Enable React Refresh
  ],
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"], // Resolve these file extensions
  },
  devtool: "cheap-module-source-map",
};
