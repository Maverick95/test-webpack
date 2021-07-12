const getEntryPointsJs = require('./src/myModules/getEntryPointsJs.js');
const path = require('path');

module.exports = {
  mode: 'production',
  entry: getEntryPointsJs(),
  output: {
    filename: 'script-[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader"
      }
    ],
  },
};
