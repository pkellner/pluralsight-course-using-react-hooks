import speakersReducer from './speakersReducer';
import { useEffect, useReducer } from 'react';
import axios from 'axios';

function useSpeakerDataManager(data) {
  const [{ isLoading, speakerList }, dispatch] = useReducer(speakersReducer, {
    isLoading: true,
    speakerList: [],
  });

  const updateSpeakerRecord = (speakerRec) => {
    axios
      .put(`http://localhost:4000/speakers/${speakerRec.id}`, speakerRec)
      .then(function (response) {
        speakerRec.favorite === true
          ? dispatch({ type: 'favorite', sessionId: speakerRec.id })
          : dispatch({ type: 'unfavorite', sessionId: speakerRec.id });
      })
      .catch(function (error) {
        console.log('useSpeakersManager failure axios.put', error);
      });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        let result = await axios.get('http://localhost:4000/speakers');
        dispatch({ type: 'setSpeakerList', payload: result.data });
      } catch (error) {
        console.log('useSpeakersManager failure axios.get', error);
      }
    };
    fetchData();

    return () => {
      console.log('cleanup');
    };
  }, []);
  return { isLoading, speakerList, updateSpeakerRecord };
}

export default useSpeakerDataManager;
