import React, { createContext, useReducer } from 'react';
import speakersReducer from './speakersReducer';

// Initial state
const initialState = {
  isloading: true,
  speakerList: [],
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(speakersReducer, initialState);

  function setSpeakersList(speakers) {
    dispatch({
      type: 'setSpeakersList',
      payload: speakers,
    });
  }

  // Actions
  function favoriteSpeaker(id) {
    dispatch({
      type: 'favorite',
      id,
    });
  }

  function unFavoriteSpeaker(id) {
    dispatch({
      type: 'unfavorite',
      id,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        speakerList: state.speakerList,
        favoriteSpeaker,
        unFavoriteSpeaker,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
