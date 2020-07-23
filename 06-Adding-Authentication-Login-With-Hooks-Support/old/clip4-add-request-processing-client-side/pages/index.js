import React from "react";
import App from "../src/App";
import ls from "local-storage";

const Index = ({ user, isServer }) => {
  const isBrowser = typeof window !== "undefined";

  // this means running on first page load and inside the browser so should store in local storage
  if (isServer && isBrowser) {
    ls.set("userInfo", user);
  }
  return (
    <div>
      <App pageName="Home" userInfo={user} />
    </div>
  );
};

Index.getInitialProps = async ({ req }) => {
  const isServer = !!req;
  if (isServer) {
    return { user: req.user, isServer };
  } else {
    try {
      const user = ls.get("userInfo");
      return { user, isServer };
    } catch (e) {
      return { isServer };
    }
  }
};

export default Index;
