import path from 'path';
import fs from 'fs';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const _source: string = 'myPages';
const _filename: string = 'index';
const _suffix: string = 'ts';

const getEntryPoints = () => {

  const entries = {};
  const outputs = [];

  const dirSource = path.resolve('src', _source);

  if (fs.existsSync(dirSource)) {

    const contents = fs.readdirSync(dirSource, {withFileTypes: true}).filter((d) => d.isDirectory);

    // For each directory, look for index.js file name.

    contents.forEach(c => {

      const filename = path.resolve(dirSource, c.name, `${_filename}.${_suffix}`);

      if (fs.existsSync(filename)) {
        entries[c.name] = { import: filename };
        outputs.push(new HtmlWebpackPlugin({
          filename: `${c.name}.html`,
          template: 'src/myPages/page.html',
          templateParameters:
          {
            script: `script-${c.name}.js`,
          },
          inject: false,
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