import speakersReducer from "./speakersReducer";
import {useEffect, useReducer} from "react";
import axios from "axios";

const useSpeakersManager = () => {
  const [state, dispatch] = useReducer(speakersReducer, {
    isLoading: true,
    data: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        let result = await axios.get("http://localhost:4000/speakers");
        dispatch({ type: "setSpeakerList", payload: result.data });
      } catch (err) {
        console.log("useSpeakersManager failure");
      }
    };
    fetchData();
  }, []);

  const favoriteRecord = (speaker, favoriteValue) => {
    dispatch({
      type: favoriteValue === true ? "favorite" : false,
      replacerecord: record,
    });
  };

  return { ...state };
};

export default useSpeakersManager;
