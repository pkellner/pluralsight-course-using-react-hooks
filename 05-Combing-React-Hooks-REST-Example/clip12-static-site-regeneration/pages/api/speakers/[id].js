//import speakerData from '../../../src/SpeakerData';

import path from 'path';
import fs from 'fs';

const { promisify } = require('util');
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function handler(req, res) {
  const method = req?.method;
  const id = parseInt(req?.query.id);
  const recordFromBody = req?.body;

  if (method != 'PUT') {
    res.send(501).send(`Method ${method} not implemented`);
  } else {
    const jsonFile = path.resolve('./', 'db.json');
    try {
      const readFileData = await readFile(jsonFile);
      await delay(1000);
      const speakers = JSON.parse(readFileData).speakers;
      if (!speakers) {
        res.status(404).send('Error: Request failed with status code 404');
      } else {
        const newSpeakersArray = speakers.map(function (rec) {
          return rec.id === id ? recordFromBody : rec;
        });
        writeFile(
          jsonFile,
          JSON.stringify({ speakers: newSpeakersArray }, null, 2),
        );
        res.status(200).json(recordFromBody);
        console.log(`PUT /api/speakers/${id} status: 200`);
      }
    } catch (e) {
      console.log(`/api/speakers/${id} error:`, e);
    }
  }
}
