const getEntryPointsJs = require('./src/config/dist/getEntryPoints');
const path = require('path');

const data = getEntryPointsJs();

module.exports = {
  mode: 'production',
  entry: data.entries,
  output: {
    filename: 'script-[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        use: "babel-loader"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ],
  },
  plugins: data.outputs,
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx'],
  },
};
