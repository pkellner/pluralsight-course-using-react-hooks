import speakersReducer from './speakersReducer';
import { useEffect, useReducer } from 'react';

function useSpeakerDataManager(data) {
  const [{ isLoading, speakerList }, dispatch] = useReducer(speakersReducer, {
    isLoading: true,
    speakerList: [],
  });

  const toggleSpeakerFavorite = (speakerRec) => {
    speakerRec.favorite === true
      ? dispatch({ type: 'unfavorite', id: speakerRec.id })
      : dispatch({ type: 'favorite', id: speakerRec.id });
  };

  useEffect(() => {
    new Promise(function (resolve) {
      setTimeout(function () {
        resolve();
      }, 1000);
    }).then(() => {
      dispatch({ type: 'setSpeakerList', data: data });
    });
    return () => {
      console.log('cleanup');
    };
  }, []);
  return { isLoading, speakerList, toggleSpeakerFavorite };
}

export default useSpeakerDataManager;
