import React from 'react';
import Home from './Home';
import Speakers from './Speakers';

export const ConfigContext = React.createContext();

import { GlobalProvider } from './GlobalState';
import { ClickFuncProvider } from './clickFunctionContext';

const pageToShow = (pageName) => {
  if (pageName === 'Home') return <Home />;
  if (pageName === 'Speakers') return <Speakers />;
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
        <ClickFuncProvider>
          <div>{pageToShow(pageName)}</div>
        </ClickFuncProvider>
      </GlobalProvider>
    </ConfigContext.Provider>
  );
};

export default App;
