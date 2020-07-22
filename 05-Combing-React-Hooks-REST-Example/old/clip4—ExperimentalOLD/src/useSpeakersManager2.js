import speakersReducer from "./speakersReducer";
import SpeakerData from "./SpeakerData";
import { useEffect, useReducer, useState } from "react";

const useSpeakersManager = () => {
  const [speakerList, dispatch] = useReducer(speakersReducer, []);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    new Promise(function (resolve) {
      setTimeout(function () {
        resolve();
      }, 1000);
    }).then(() => {
      setIsLoading(false);
      dispatch({
        type: "setSpeakerList",
        data: SpeakerData,
      });
    });
    return () => {
      console.log("cleanup");
    };
  }, []); // [speakingSaturday, speakingSunday]);
  return {
    speakerList,
    dispatch,
    isLoading,
  };
};

export default useSpeakersManager;
