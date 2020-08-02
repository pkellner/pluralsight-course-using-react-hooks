import React, {createContext} from 'react';
import useSpeakerDataManager from './useSpeakerDataManager';

const initialState = {
  isloading: true,
  speakerList: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const {
    isLoading,
    speakerList,
    favoriteClickCount,
    toggleSpeakerFavorite,
    incrementFavoriteClickCount
  } = useSpeakerDataManager();

  const provider = {
    toggleSpeakerFavorite: toggleSpeakerFavorite,
    isLoading: isLoading,
    speakerList,
    incrementFavoriteClickCount,
    favoriteClickCount
  };

  return (
    <GlobalContext.Provider value={provider}>{children}</GlobalContext.Provider>
  );
};
