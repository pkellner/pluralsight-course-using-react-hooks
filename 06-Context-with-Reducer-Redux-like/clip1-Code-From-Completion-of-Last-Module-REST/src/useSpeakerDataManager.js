import speakersReducer from './speakersReducer';
import axios from 'axios';
import { useEffect, useReducer } from 'react';

// all code in this module does not contain the server-side or static
// site generation code from the end of the last module. It all relies
// on the useEffect hook to load speakers data.

function useSpeakerDataManager() {
  const [{ isLoading, speakerList }, dispatch] = useReducer(speakersReducer, {
    isLoading: true,
    speakerList: [],
  });

  function toggleSpeakerFavorite(speakerRec) {
    const updateData = async function () {
      axios.put(`/api/speakers/${speakerRec.id}`, {
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
      let result = await axios.get('/api/speakers');
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
