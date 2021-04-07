import App from '../src/App';
import path from 'path';
import fs from 'fs';
import React from 'react';

export async function getServerSideProps() {
  const { promisify } = require('util');
  const readFile = promisify(fs.readFile);
  const jsonFile = path.resolve('./', 'db.json');
  let initialSpeakersData;
  try {
    const readFileData = await readFile(jsonFile);
    initialSpeakersData = JSON.parse(readFileData).speakers;
  } catch (e) {
    console.log('/api/speakers error:', e);
  }

  return { props: { initialSpeakersData } };
}

function speakers({ initialSpeakersData }) {
  return <App pageName="Speakers" />;
}

export default speakers;
