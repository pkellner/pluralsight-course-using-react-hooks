import speakersReducer from "./speakersReducer";
import SpeakerData from "./SpeakerData";
import { useEffect, useReducer, useState } from "react";
import useAxios from "axios-hooks";

const useSpeakersManager = () => {
  const [{ data, loading }] = useAxios("http://localhost:4000/speakers");

  return {
    speakerList: loading === false ? data : [],
    isLoading: loading,
  };
};

export default useSpeakersManager;
