import React from 'react';
import Home from './Home';
import Speakers from './Speakers';

export const ConfigContext = React.createContext();

const pageToShow = (pageName) => {
  if (pageName === 'Home') return <Home />;
  if (pageName === 'Speakers') return <Speakers />;
  return <div>Not Found</div>;
};

const App = ({ pageName }) => {
  const configValue = {
    showSignMeUp: true,
    showSpeakerSpeakingDays: true,
  };

  return (
    <ConfigContext.Provider value={configValue}>
      <div>{pageToShow(pageName)}</div>
    </ConfigContext.Provider>
  );
};

export default App;
