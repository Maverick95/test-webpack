const getEntryPoints = require('./src/myModules/getEntryPointsJs.js');
const path = require('path');

module.exports = {
  module: {
    rules: [
      { test: "/\.ts$/", use: "ts-loader" }
    ],
  },
  mode: 'development',
  entry: getEntryPoints(),
  output: {
    filename: 'script-[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
};