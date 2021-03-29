import App from '../src/App';

import path from 'path';
import fs from 'fs';

export async function getServerSideProps() {
  // Fetch data from external API
  // This code is running inside the same server that is running API Routes for REST calls, we
  // need to go to the same file for data that the REST server goes to get it's data. If this were a
  // real company app, The REST server would be external to our NextJS server and we would use calls like this
  // to get the data:
  //
  //   const res = await fetch(`https://.../data`)
  //   const data = await res.json()
  //

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

  // Pass data to the page via props
  return { props: { initialSpeakersData } };
}

function speakers(props) {
  return <App pageName="Speakers" {...props} />;
}

export default speakers;
