import React, { createContext } from 'react';
import useSpeakerDataManager from './useSpeakerDataManager';

export const GlobalContext = createContext({
  isLoading: true,
  speakerList: [],
  favoriteClickCount: 0,
});

console.log(`GlobalState.js`);

export const GlobalProvider = ({ children }) => {
  const {
    isLoading,
    speakerList,
    favoriteClickCount,
    toggleSpeakerFavorite,
    incrementFavoriteClickCount,
  } = useSpeakerDataManager();

  const provider = {
    isLoading,
    speakerList,
    favoriteClickCount,
    toggleSpeakerFavorite,
    incrementFavoriteClickCount,
  };

  return (
    <GlobalContext.Provider value={provider}>{children}</GlobalContext.Provider>
  );
};
