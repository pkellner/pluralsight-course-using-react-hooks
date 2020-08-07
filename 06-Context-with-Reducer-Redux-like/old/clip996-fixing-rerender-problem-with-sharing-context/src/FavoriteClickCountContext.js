import React, { createContext, useState, useCallback, useContext } from 'react';
import { GlobalContext } from './GlobalState';

export const FavoriteClickCountContext = createContext();

export const FavoriteClickCountProvider = ({ children }) => {
  const { incrementFavoriteClickCount } = useContext(GlobalContext);
  const withCallbackFunction = useCallback(incrementFavoriteClickCount, []);
  return (
    <FavoriteClickCountContext.Provider value={withCallbackFunction}>
      {children}
    </FavoriteClickCountContext.Provider>
  );
};
