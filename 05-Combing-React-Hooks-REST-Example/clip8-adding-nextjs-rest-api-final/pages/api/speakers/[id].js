import path from 'path';
import fs from 'fs';
const { promisify } = require('util');

const writeFile = promisify(fs.writeFile);
const readFile = promisify(fs.readFile);
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function userHandler(req, res) {
  const id = parseInt(req?.query?.id);
  const method = req?.method;
  const recordFromBody = req?.body;
  const jsonFile = path.resolve('./', 'db.json');

  if (method != 'PUT') {
    res.status(501).send(`Method ${method} not implemented`);
  }

  try {
    await delay(1000);
    const readFileData = await readFile(jsonFile);
    const speakers = JSON.parse(readFileData).speakers;
    const newSpeakersArray = speakers.map(function (rec) {
      return rec.id === id ? recordFromBody : rec;
    });
    writeFile(
      jsonFile,
      JSON.stringify(
        {
          speakers: newSpeakersArray,
        },
        null,
        2,
      ),
    );
    res.status(200).json(recordFromBody);
    console.log(`PUT   /api/speakers/${id} status: 200`);
  } catch (e) {
    console.log('/api/speakers PUT error:', e);
  }
}

// import path from 'path';
// import fs from 'fs';
// const { promisify } = require('util');
//
// const writeFile = promisify(fs.writeFile);
// const readFile = promisify(fs.readFile);
// const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
//
// export default async function userHandler(req, res) {
//   const id = parseInt(req?.query?.id);
//   const method = req?.method;
//   const recordFromBody = req?.body;
//   const jsonFile = path.resolve('./', 'db.json');
//
//   async function getSpeakersData() {
//     const readFileData = await readFile(jsonFile);
//     return JSON.parse(readFileData).speakers;
//   }
//
//   switch (method) {
//     case 'GET':
//       const speakers = await getSpeakersData();
//       const speaker = speakers.find((rec) => rec.id === id);
//       if (speaker) {
//         res.status(200).json(speaker);
//       } else {
//         res.status(404).send('speaker not found');
//       }
//       console.log(`GET /api/speakers/${id} status: 200`);
//       break;
//     case 'PUT':
//       try {
//         await delay(1000);
//         const speakers = await getSpeakersData();
//         const newSpeakersArray = speakers.map(function (rec) {
//           return rec.id === id ? recordFromBody : rec;
//         });
//         writeFile(
//           jsonFile,
//           JSON.stringify(
//             {
//               speakers: newSpeakersArray,
//             },
//             null,
//             2,
//           ),
//         );
//         res.status(200).json(recordFromBody);
//         console.log(`PUT /api/speakers/${id} status: 200`);
//       } catch (e) {
//         console.log('/api/speakers PUT error:', e);
//       }
//       break;
//
//     default:
//       res.setHeader('Allow', ['GET', 'PUT']);
//       res.status(405).end(`Method ${method} Not Allowed`);
//   }
// }
