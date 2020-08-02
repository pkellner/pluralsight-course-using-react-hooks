import useAxios from "axios-hooks";

const useSpeakersManager = () => {
  const [{ data, loading }] = useAxios("http://localhost:4000/speakers");

  return {
    speakerList: loading === false ? data : [],
    isLoading: loading,
  };
};

export default useSpeakersManager;
