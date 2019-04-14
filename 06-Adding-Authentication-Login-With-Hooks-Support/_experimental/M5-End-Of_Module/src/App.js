import React from "react";
import Home from "./Home";
import Speakers from "./SpeakersWithAxios";

export const ConfigContext = React.createContext();

const pageToShow = pageName => {
  if (pageName === "Home") return <Home />;
  if (pageName === "Speakers") return <Speakers />;
  return <div>Not Found</div>;
};

const configValue = {
    showSignMeUp: true,
    showSpeakerSpeakingDays: true
};

const App = ({ pageName, userInfo }) => {
  console.log('App.js:userInfo',userInfo ? userInfo.returnStatus : 'Null');
  return (
      <ConfigContext.Provider value={configValue} >
        <div>{pageToShow(pageName)}</div>
      </ConfigContext.Provider>
  )
};

export default App;
