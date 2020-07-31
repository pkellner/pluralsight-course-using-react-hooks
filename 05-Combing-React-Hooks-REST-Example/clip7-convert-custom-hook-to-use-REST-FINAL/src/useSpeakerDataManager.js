import speakersReducer from './speakersReducer';
import SpeakerData from './SpeakerData';
import { useEffect, useReducer } from 'react';
import * as axios from 'axios';

function useSpeakerDataManager() {
  const [{ isLoading, speakerList }, dispatch] = useReducer(speakersReducer, {
    isLoading: true,
    speakerList: [],
  });

  function toggleSpeakerFavorite(speakerRec) {
    const updateData = async function () {
      try {
        axios.put(
          `http://localhost:4000/xspeakers/${speakerRec.id}`,
          speakerRec,
        );
        speakerRec.favorite === true
          ? dispatch({ type: 'unfavorite', id: speakerRec.id })
          : dispatch({ type: 'favorite', id: speakerRec.id });
      } catch (error) {
        
        console.log('useSpeakersManager failure axios.put', error);
      }
    };
    updateData();
  }

  useEffect(() => {
    const fetchData = async function () {
      //try {
        let result = await axios.get('http://localhost:4000/speakers');
        dispatch({ type: 'setSpeakerList', data: result.data });
      // } catch (error) {
      //   console.log('useSpeakersManager failure axios.get', error);
      // }
    };
    fetchData();
    return () => {
      console.log('cleanup');
    };
  }, []);
  return { isLoading, speakerList, toggleSpeakerFavorite };
}
export default useSpeakerDataManager;
