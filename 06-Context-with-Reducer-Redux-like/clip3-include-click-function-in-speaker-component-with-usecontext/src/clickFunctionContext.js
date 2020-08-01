import React, { createContext, useState, useCallback, useContext } from 'react';
import { GlobalContext } from './GlobalState';

export const ClickFuncContext = createContext();

export const ClickFuncProvider = ({ children }) => {
  
  const { toggleSpeakerFavorite } = useContext(GlobalContext);

  return (
    <ClickFuncContext.Provider value={{toggleSpeakerFavorite: useCallback(toggleSpeakerFavorite,[])}}>
      {children}
    </ClickFuncContext.Provider>
  );
};
