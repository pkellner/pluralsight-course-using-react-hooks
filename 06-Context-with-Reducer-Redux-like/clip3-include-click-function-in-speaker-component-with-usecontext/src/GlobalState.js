import React, { createContext, useMemo, useEffect, useReducer } from 'react';
import speakersReducer from './speakersReducer';
import axios from 'axios';
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
    toggleSpeakerFavorite,
  } = useSpeakerDataManager();

  const provider = {
    toggleSpeakerFavorite,
    isLoading: isLoading,
    speakerList,
  };

  return (
    <GlobalContext.Provider value={provider}>{children}</GlobalContext.Provider>
  );
};
