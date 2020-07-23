import speakersReducer from './speakersReducer';
import { useEffect, useReducer } from 'react';

function useSpeakerDataManager(data) {
  const [{ isLoading, speakerList }, dispatch] = useReducer(speakersReducer, {
    isLoading: true,
    speakerList: [],
  });

  const updateSpeakerRecord = (speakerRec) => {
    speakerRec.favorite === true
      ? dispatch({ type: 'favorite', sessionId: speakerRec.id })
      : dispatch({ type: 'unfavorite', sessionId: speakerRec.id });
  };

  useEffect(() => {
    new Promise(function (resolve) {
      setTimeout(function () {
        resolve();
      }, 1000);
    }).then(() => {
      dispatch({ type: 'setSpeakerList', payload: data });
    });
    return () => {
      console.log('cleanup');
    };
  }, []);
  return { isLoading, speakerList, updateSpeakerRecord };
}

export default useSpeakerDataManager;
