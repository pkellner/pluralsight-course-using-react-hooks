import speakersReducer from './speakersReducer';
import { useEffect, useReducer } from 'react';
import axios from 'axios';

function useSpeakerDataManager() {
  const [{ isLoading, speakerList }, dispatch] = useReducer(speakersReducer, {
    isLoading: true,
    speakerList: [],
  });
  
  function updateRecord(rec) {
    dispatch({
      type:
    })
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        let result = await axios.get('http://localhost:4000/speakers');
        dispatch({ type: 'setSpeakerList', payload: result.data });
      } catch (err) {
        console.log('useSpeakersManager failure');
      }
    };
    fetchData();
  }, []);

  // const updateRecord = (speakerRec) => {
  //   axios
  //     .put(`http://localhost:4000/speakers/${speakerRec.id}`, speakerRec)
  //     .then(function (response) {
  //       updateDataRecord(toggledRec);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // };

  return { isLoading, speakerList, updateRecord, dispatch };
}

export default useSpeakerDataManager;
