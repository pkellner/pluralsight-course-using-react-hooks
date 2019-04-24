import React from "react";
import Home from "./Home";
import Speakers from "./Speakers";
import Login from "./Login";

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
  configValue.loggedInUserEmail = userInfo ? userInfo.email : '';
  return (
    <ConfigContext.Provider value={configValue}>
      <div>{pageToShow(pageName)}</div>
    </ConfigContext.Provider>
  );
};

export default App;
