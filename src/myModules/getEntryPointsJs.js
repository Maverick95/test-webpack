const path = require('path');
const fs = require('fs');

const _source = 'myPages';
const _filename = 'index.ts';


const getEntryPoints = () => {

  const entries = {};

  const dirSource = path.resolve('src', _source);

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

  console.log(entries);

  return entries;

};

module.exports = getEntryPoints;