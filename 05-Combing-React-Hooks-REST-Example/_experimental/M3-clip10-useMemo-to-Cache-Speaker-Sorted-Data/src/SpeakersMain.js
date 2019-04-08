import React from "react";
import useAxiosFetch from "./useAxiosFetch";
import SpeakersWithAxios from "./SpeakersWithAxios";

export const SpeakersMain = () => {
  const { data, isLoading, hasErrored, errorMessage } = useAxiosFetch(
    "http://localhost:4000/speakers",
    1000,
    []
  );

  return (
    <SpeakersWithAxios
      data={data}
      isLoading={isLoading}
      hasErrored={hasErrored}
      errorMessage={errorMessage}
    />
  );
};

export default SpeakersMain;
