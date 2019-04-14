import React from "react";
import Home from "./Home";
import Login from "./Login";
import Speakers from "./SpeakersWithAxios";

export const ConfigContext = React.createContext();

const pageToShow = pageName => {
  if (pageName === "Home") return <Home />;
  if (pageName === "Speakers") return <Speakers />;
  if (pageName === "Login") return <Login />;
  return <div>Not Found</div>;
};

const configValue = {
  showSignMeUp: true,
  showSpeakerSpeakingDays: true
};

const App = ({ pageName, userInfo }) => {
  console.log("App.js:userInfo.email", userInfo ? userInfo.email : "Null");
  configValue.loggedInUserEmail = userInfo ? userInfo.email : null;
  return (
    <ConfigContext.Provider value={configValue}>
      <div>{pageToShow(pageName)}</div>
    </ConfigContext.Provider>
  );
};

export default App;
