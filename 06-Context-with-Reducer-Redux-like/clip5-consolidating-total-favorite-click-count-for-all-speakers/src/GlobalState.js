import React from 'react';
import useSpeakerDataManager from './useSpeakerDataManager';

export const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
  const {
    isLoading,
    speakerList,
    toggleSpeakerFavorite,
  } = useSpeakerDataManager();

  const provider = {
    isLoading,
    speakerList,
    toggleSpeakerFavorite,
  };

  return (
    <GlobalContext.Provider value={provider}>{children}</GlobalContext.Provider>
  );
};
