const path = require('path');
const fs = require('fs');

interface WebpackEntry {
  import: string;
}

type WebpackEntries = {
  [page:string] : WebpackEntry,
};

const _source: string = 'myPages';
const _filename: string = 'index.js';


const getEntryPoints = (): WebpackEntries => {

  const entries: WebpackEntries = {};

  const dirSource = path.resolve(__dirname, 'src', _source);
  
  if (fs.existsSync(dirSource)) {

    const contents = fs.readdirSync(dirSource, {withFileTypes: true}).filter((d) => d.isDirectory);

    // For each directory, look for index.js file name.

    contents.forEach(c => {

      const filename = path.resolve(dirSource, c.name, _filename);

      if (fs.existsSync(filename)) {
        entries[c.name] = { import: filename };
      }

    });

  }

  return entries;

};

export default getEntryPoints;