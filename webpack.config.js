const getEntryPointsJs = require('./src/helpers/getEntryPointsJs');
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
      }
    ],
  },
  plugins: data.outputs,
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx'],
  },
};
