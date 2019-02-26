import React from "react";
import Home from "./Home";
import Speakers from "./Speakers";

function App({ pageName }) {
  if (pageName === "Home") return <Home />;
  if (pageName === "Speakers") return <Speakers />;

  return <div>Not Found</div>;
}

export default App;
