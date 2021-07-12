const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const _source = 'myPages';
const _filename = 'index.js';

const getEntryPoints = () => {

  const entries = {};
  const outputs = [];

  const dirSource = path.resolve('src', _source);

  if (fs.existsSync(dirSource)) {

    const contents = fs.readdirSync(dirSource, {withFileTypes: true}).filter((d) => d.isDirectory);

    // For each directory, look for index.js file name.

    contents.forEach(c => {

      const filename = path.resolve(dirSource, c.name, _filename);

      if (fs.existsSync(filename)) {
        entries[c.name] = { import: filename };
        outputs.push(new HtmlWebpackPlugin({
          filename: `${c.name}.html`,
          template: 'src/myPages/page.html',
        }));
      }

    });

  }

  console.log(entries);

  return {
    entries,
    outputs,
  };

};

module.exports = getEntryPoints;