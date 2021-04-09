import React from 'react';
import Home from './Home.js';
import Speakers from './Speakers';

const App = ({ pageName }) => {
  if (pageName === 'Home') return <Home></Home>;
  if (pageName === 'Speakers') return <Speakers></Speakers>;
  return <div>Not Found</div>;
};

export default App;
