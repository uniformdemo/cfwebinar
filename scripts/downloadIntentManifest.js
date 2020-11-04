const fetch = require('node-fetch');
const fs = require('fs');

require('dotenv').config();

const url = process.env.NEXT_PUBLIC_UNIFORM_INTENTS;

if (!url) {
  console.warn(
    'NEXT_PUBLIC_UNIFORM_INTENTS env not defined. Skipping intent data download; your app will likely not start up.'
  );
  return;
}

fetch(url)
  .then((response) => response.text())
  .then((text) => {
    fs.writeFile('./lib/intentManifest.json', text, () => {
      console.log('lib/intentManifest.json has been updated from Uniform Optimize');
    });
  });
