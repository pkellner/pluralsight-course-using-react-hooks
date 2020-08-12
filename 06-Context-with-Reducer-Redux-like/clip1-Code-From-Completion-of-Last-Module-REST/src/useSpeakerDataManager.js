import speakersReducer from './speakersReducer';
import { useEffect, useReducer } from 'react';
import axios from 'axios';

function useSpeakerDataManager() {
  const [{ isLoading, speakerList }, dispatch] = useReducer(speakersReducer, {
    isLoading: true,
    speakerList: [],
  });

  function toggleSpeakerFavorite(speakerRec) {
    const updateData = async function () {
      axios.put(`http://localhost:4000/speakers/${speakerRec.id}`, speakerRec);
      speakerRec.favorite === true
        ? dispatch({ type: 'unfavorite', id: speakerRec.id })
        : dispatch({ type: 'favorite', id: speakerRec.id });
    };
    updateData();
  }

  useEffect(() => {
    const fetchData = async function () {
      let result = await axios.get('http://localhost:4000/speakers');
      dispatch({ type: 'setSpeakerList', data: result.data });
    };
    fetchData();

    return () => {
      console.log('cleanup');
    };
  }, []);

  return { isLoading, speakerList, toggleSpeakerFavorite };
}
export default useSpeakerDataManager;
