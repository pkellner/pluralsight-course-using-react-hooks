import path from 'path';
import fs from 'fs';

const { promisify } = require('util');
const readFile = promisify(fs.readFile);
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function handler(req, res) {
  const jsonFile = path.resolve('./', 'db.json');
  try {
    const readFileData = await readFile(jsonFile);
    await delay(1000);
    const speakers = JSON.parse(readFileData).speakers;
    if (!speakers)
      res.status(404).send('Error: Request failed with status code 404');
    //res.status(200).json(speakers); keeps json minified but harder to read
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(JSON.stringify(speakers, null, 2));
    console.log(`GET /api/speakers status: 200`);
  } catch (e) {
    console.log('/api/speakers error:', e);
  }
}
