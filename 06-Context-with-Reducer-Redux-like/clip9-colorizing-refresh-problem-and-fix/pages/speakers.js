import App from '../src/App';

import path from 'path';
import fs from 'fs';
import React from 'react';

export const InitialSpeakersDataContext = React.createContext();

// export async function getServerSideProps() {
//   // Fetch data from external API
//   // This code is running inside the same server that is running API Routes for REST calls, we
//   // need to go to the same file for data that the REST server goes to get it's data. If this were a
//   // real company app, The REST server would be external to our NextJS server and we would use calls like this
//   // to get the data:
//   //
//   //   const res = await fetch(`https://.../data`)
//   //   const data = await res.json()
//   //
//
//   const { promisify } = require('util');
//   const readFile = promisify(fs.readFile);
//   const jsonFile = path.resolve('./', 'db.json');
//   let initialSpeakersData;
//   try {
//     const readFileData = await readFile(jsonFile);
//     initialSpeakersData = JSON.parse(readFileData).speakers;
//   } catch (e) {
//     console.log('/api/speakers error:', e);
//   }
//
//   // Pass data to the page via props
//   return { props: { initialSpeakersData } };
// }

export async function getStaticProps(context) {
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

  if (!initialSpeakersData) {
    return {
      notFound: true,
    };
  }

  return {
    props: { initialSpeakersData }, // will be passed to the page component as props
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 3600, // In seconds
  };
}

function speakers({ initialSpeakersData }) {
  return (
    <InitialSpeakersDataContext.Provider value={initialSpeakersData}>
      <App pageName="Speakers" />
    </InitialSpeakersDataContext.Provider>
  );
}

export default speakers;
