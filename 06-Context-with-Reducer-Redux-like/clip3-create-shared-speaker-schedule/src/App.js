import React from 'react';
import Home from './Home';
import Speakers from './Speakers';
import Schedule from './Schedule';
import { GlobalProvider } from './GlobalState';

export const ConfigContext = React.createContext();


const pageToShow = (pageName) => {
  if (pageName === 'Home') return <Home />;
  if (pageName === 'Speakers') return <Speakers />;
  if (pageName === 'Schedule') return <Schedule />;
  return <div>Not Found</div>;
};

const configValue = {
  showSignMeUp: true,
  showSpeakerSpeakingDays: true,
};

const App = ({ pageName }) => {
  return (
    <ConfigContext.Provider value={configValue}>
      <GlobalProvider>
        <div>{pageToShow(pageName)}</div>
      </GlobalProvider>
    </ConfigContext.Provider>
  );
};

export default App;
