import path from 'path';
import fs from 'fs';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const _source: string = 'myPages';
const _template: string = 'page';
const _filename: string = 'index';
const _filetype: string = 'tsx';

interface WebpackBundleSet {
  
  entries: {
    [x: string]: { import: string },
  },
  
  outputs: HtmlWebpackPlugin[],

}

const getEntryPoints = (): WebpackBundleSet => {

  const set: WebpackBundleSet = {
    entries: {},
    outputs: [],
  };

  const dirSource = path.resolve('src', _source);

  if (fs.existsSync(dirSource)) {

    const pages = fs.readdirSync(
      dirSource, { withFileTypes: true })
      .filter((d) => d.isDirectory);

    // For each directory, look for index.js file name.

    pages.forEach(p => {

      const filename = path.resolve(dirSource, p.name, `${_filename}.${_filetype}`);

      if (fs.existsSync(filename)) {
        set.entries[p.name] = { import: filename };
        set.outputs.push(new HtmlWebpackPlugin({
          filename: `${p.name}.html`,
          template: path.resolve('src', _source, `${_template}.html`),
          templateParameters:
          {
            script: `script-${p.name}.js`,
          },
          inject: false,
        }));
      }

    });

  }

  return set;

};

module.exports = getEntryPoints;