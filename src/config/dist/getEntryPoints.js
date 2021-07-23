"use strict";

var _path = _interopRequireDefault(require("path"));

var _fs = _interopRequireDefault(require("fs"));

var _htmlWebpackPlugin = _interopRequireDefault(require("html-webpack-plugin"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const _source = 'myPages';
const _filename = 'index';
const _suffix = 'ts';

const getEntryPoints = () => {
  const entries = {};
  const outputs = [];

  const dirSource = _path.default.resolve('src', _source);

  if (_fs.default.existsSync(dirSource)) {
    const contents = _fs.default.readdirSync(dirSource, {
      withFileTypes: true
    }).filter(d => d.isDirectory); // For each directory, look for index.js file name.


    contents.forEach(c => {
      const filename = _path.default.resolve(dirSource, c.name, `${_filename}.${_suffix}`);

      if (_fs.default.existsSync(filename)) {
        entries[c.name] = {
          import: filename
        };
        outputs.push(new _htmlWebpackPlugin.default({
          filename: `${c.name}.html`,
          template: 'src/myPages/page.html',
          templateParameters: {
            script: `script-${c.name}.js`
          },
          inject: false
        }));
      }
    });
  }

  console.log(entries);
  return {
    entries,
    outputs
  };
};

module.exports = getEntryPoints;
