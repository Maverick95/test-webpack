"use strict";

var _path = _interopRequireDefault(require("path"));

var _fs = _interopRequireDefault(require("fs"));

var _htmlWebpackPlugin = _interopRequireDefault(require("html-webpack-plugin"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const _source = 'myPages';
const _template = 'page';
const _filename = 'index';
const _filetype = 'tsx';

const getEntryPoints = () => {
  const set = {
    entries: {},
    outputs: []
  };

  const dirSource = _path.default.resolve('src', _source);

  if (_fs.default.existsSync(dirSource)) {
    const pages = _fs.default.readdirSync(dirSource, {
      withFileTypes: true
    }).filter(d => d.isDirectory); // For each directory, look for index.js file name.


    pages.forEach(p => {
      const filename = _path.default.resolve(dirSource, p.name, `${_filename}.${_filetype}`);

      if (_fs.default.existsSync(filename)) {
        set.entries[p.name] = {
          import: filename
        };
        set.outputs.push(new _htmlWebpackPlugin.default({
          filename: `${p.name}.html`,
          template: _path.default.resolve('src', _source, `${_template}.html`),
          templateParameters: {
            script: `script-${p.name}.js`
          },
          inject: false
        }));
      }
    });
  }

  return set;
};

module.exports = getEntryPoints;
