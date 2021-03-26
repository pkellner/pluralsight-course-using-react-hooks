import path from "path";
import fs from "fs";
const { promisify } = require("util");

const writeFile = promisify(fs.writeFile);
const readFile = promisify(fs.readFile);
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function userHandler(req, res) {

  const id = req?.query?.id;
  const method = req?.method;
  const putPostOrDeleteRecord = req?.body;
  const jsonFile = path.resolve("./", "db.json");


  switch (method) {
    case "GET":
      // Get data from your database
      //res.status(200).json({ id, name: `User ${id}` });
      break;
    case "PUT":
      try {
        await delay(500);
        const readFileData = await readFile(jsonFile);
        const speakers = JSON.parse(readFileData).speakers;
        const newSpeakersArray = speakers.map(function (rec) {
          console.log(`rec.id:${rec.id}   id:${id}`);
          if (rec.id == id) {
            console.log("new rec",putPostOrDeleteRecord);
            return putPostOrDeleteRecord;
          } else {
            return rec;
          }
        });
        //console.log("newSpeakersArray",newSpeakersArray);
        writeFile(
          jsonFile,
          JSON.stringify(
            {
              speakers: newSpeakersArray,
            },
            null,
            2
          )
        );
        res.status(200).json(putPostOrDeleteRecord);
      } catch (e) {
        console.log("/api/speakers PUT error:", e);
      }
      break;

    default:
      res.setHeader("Allow", ["GET", "PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
