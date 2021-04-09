import speakersReducer from './speakersReducer';
import { useContext, useEffect, useReducer } from 'react';
import axios from 'axios';

import { InitialSpeakersDataContext } from '../pages/speakers';

function useSpeakerDataManager() {
  const initialSpeakersData = useContext(InitialSpeakersDataContext);

  const [
    {
      isLoading,
      speakerList,
      favoriteClickCount,
      hasErrored,
      error,
      imageRerenderIdentifier,
    },
    dispatch,
  ] = useReducer(speakersReducer, {
    isLoading: false,
    speakerList: initialSpeakersData,
    favoriteClickCount: 0,
    hasErrored: false,
    error: null,
    imageRerenderIdentifier: 0,
  });

  function incrementFavoriteClickCount() {
    dispatch({ type: 'incrementFavoriteClickCount' });
  }

  function forceImageRerender() {
    dispatch({ type: 'forceImageRerender' });
  }

  function toggleSpeakerFavorite(speakerRec) {
    const updateData = async function () {
      await axios.put(`/api/speakers/${speakerRec.id}`, {
        ...speakerRec,
        favorite: !speakerRec.favorite,
      });
      speakerRec.favorite === true
        ? dispatch({ type: 'unfavorite', id: speakerRec.id })
        : dispatch({ type: 'favorite', id: speakerRec.id });
    };

    updateData();
  }

  useEffect(() => {
    const fetchData = async function () {
      try {
        let result = await axios.get('/api/speakers');
        dispatch({ type: 'setSpeakerList', data: result.data });
      } catch (e) {
        dispatch({ type: 'errored', error: e });
      }
    };
    fetchData();

    return () => {
      console.log('cleanup');
    };
  }, []);

  return {
    isLoading,
    speakerList,
    favoriteClickCount,
    incrementFavoriteClickCount,
    toggleSpeakerFavorite,
    hasErrored,
    error,
    forceImageRerender,
    imageRerenderIdentifier,
  };
}
export default useSpeakerDataManager;
