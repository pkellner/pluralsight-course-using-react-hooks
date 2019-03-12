import React from "react";
import Home from "./Home";
import Speakers from "./Speakers";

export const ConfigContext = React.createContext();

const pageToShow = pageName => {
  if (pageName === "Home") return <Home />;
  if (pageName === "Speakers") return <Speakers />;
  return <div>Not Found</div>;
};

const App = ({ pageName }) => {
  const configValue = {
    showSignMeUp: true,
    showSpeakerSpeakingDays: true
  };

  return (
    <div>
      <ConfigContext.Provider value={configValue}>
        {pageToShow(pageName)}
      </ConfigContext.Provider>
    </div>
  );
};

export default App;
