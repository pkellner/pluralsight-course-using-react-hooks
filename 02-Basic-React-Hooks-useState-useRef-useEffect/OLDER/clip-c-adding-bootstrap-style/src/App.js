import React, { useEffect } from "react";
import Home from "./Home";
import Speakers from "./Speakers";



const pageToShow = pageName => {
  if (pageName === "Home") return <Home />;
  if (pageName === "Speakers") return <Speakers />;
  return <div>Not Found</div>;
};

export const ConfigContext = React.createContext();

const App = ({ pageName }) => {

  const configValue = {
    showSignMeUp: true,
    showSpeakerSpeakingDays: true
  };
  return (
    <ConfigContext.Provider value={configValue}>
      <div>{pageToShow(pageName)}</div>
    </ConfigContext.Provider>
  );
};

export default App;
