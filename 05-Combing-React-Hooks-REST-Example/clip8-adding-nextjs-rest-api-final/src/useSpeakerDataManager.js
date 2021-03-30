import speakersReducer from './speakersReducer';
import SpeakerData from './SpeakerData';
import { useEffect, useReducer } from 'react';

function useSpeakerDataManager() {
  const [{ isLoading, speakerList }, dispatch] = useReducer(speakersReducer, {
    isLoading: true,
    speakerList: [],
  });

  function toggleSpeakerFavorite(speakerRec) {
    speakerRec.favorite === true
      ? dispatch({ type: 'unfavorite', id: speakerRec.id })
      : dispatch({ type: 'favorite', id: speakerRec.id });
  }

  useEffect(() => {
    new Promise(function (resolve) {
      setTimeout(function () {
        resolve();
      }, 1000);
    }).then(() => {
      dispatch({
        type: 'setSpeakerList',
        data: SpeakerData,
      });
    });
    return () => {
      console.log('cleanup');
    };
  }, []);
  return { isLoading, speakerList, toggleSpeakerFavorite };
}
export default useSpeakerDataManager;
