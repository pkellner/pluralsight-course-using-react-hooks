import speakersReducer from './speakersReducer';
import { useEffect, useReducer } from 'react';
import axios from 'axios';

function useSpeakerDataManager() {
  const [
    { isLoading, speakerList, favoriteClickCount, forceUpdateIdentifier },
    dispatch,
  ] = useReducer(speakersReducer, {
    isLoading: true,
    speakerList: [],
    favoriteClickCount: 0,
    forceUpdateIdentifier: 0,
  });

  console.log(`useSpeakerDataManager: forceUpdateIdentifier:${forceUpdateIdentifier}`);


  function forceUpdate() {
    dispatch({ type: 'forceUpdate' });
  }

  function incrementFavoriteClickCount() {
    dispatch({ type: 'incrementFavoriteClickCount' });
  }

  function toggleSpeakerFavorite(speakerRec) {
    const updateData = async function () {
      const newSpeakerRec = { ...speakerRec, favorite: !speakerRec.favorite };
      axios.put(`/api/speakers/${speakerRec.id}`, newSpeakerRec);
      speakerRec.favorite === true
        ? dispatch({ type: 'unfavorite', id: speakerRec.id })
        : dispatch({ type: 'favorite', id: speakerRec.id });
    };
    updateData();
  }

  useEffect(() => {
    const fetchData = async function () {
      let result = await axios.get('/api/speakers');
      dispatch({ type: 'setSpeakerList', data: result.data });
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
    forceUpdateIdentifier,
    forceUpdate,
    incrementFavoriteClickCount,
    toggleSpeakerFavorite,
  };
}
export default useSpeakerDataManager;
