import React from 'react';
import App from '../src/App';

// all code in this module does not contain the server-side or static
// site generation code from the end of the last module. It all relies
// on the useEffect hook to load speakers data.

function speakers() {
  return <App pageName="Speakers" />;
}

export default speakers;
