import React from 'react';
import useSpeakerDataManager from './useSpeakerDataManager';

export const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
  const {
    isLoading,
    speakerList,
    favoriteClickCount,
    toggleSpeakerFavorite,
    incrementFavoriteClickCount,
    hasErrored,
    error,
  } = useSpeakerDataManager();

  const provider = {
    isLoading,
    speakerList,
    favoriteClickCount,
    toggleSpeakerFavorite,
    incrementFavoriteClickCount,
    hasErrored,
    error,
  };

  return (
    <GlobalContext.Provider value={provider}>{children}</GlobalContext.Provider>
  );
};
