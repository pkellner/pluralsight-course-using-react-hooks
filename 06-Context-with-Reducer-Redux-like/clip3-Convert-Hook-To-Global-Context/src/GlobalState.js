import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
  return <GlobalContext.Provider value="">{children}</GlobalContext.Provider>;
};
