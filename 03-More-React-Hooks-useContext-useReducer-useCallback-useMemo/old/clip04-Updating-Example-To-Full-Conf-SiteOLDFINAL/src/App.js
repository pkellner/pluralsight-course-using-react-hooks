import React from 'react';
import Home from './Home';
import Speakers from './Speakers';

const pageToShow = (pageName) => {
  if (pageName === 'Home') return <Home />;
  if (pageName === 'Speakers') return <Speakers />;
  return <div>Not Found</div>;
};

const App = ({ pageName }) => {
  return <div>{pageToShow(pageName)}</div>;
};

export default App;
