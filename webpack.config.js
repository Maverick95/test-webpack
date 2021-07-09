const getEntryPoints = require('./src/myModules/getEntryPointsJs.js');
const path = require('path');

module.exports = {
  mode: 'production',
  entry: getEntryPoints(),
  output: {
    filename: 'script-[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
};