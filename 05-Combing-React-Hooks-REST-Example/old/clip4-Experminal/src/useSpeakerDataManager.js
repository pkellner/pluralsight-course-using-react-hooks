import speakersReducer from './speakersReducer';

function useSpeakerDataManager(data) {
  const [{ isLoading, speakerList }, dispatch] = useReducer(speakersReducer, {
    isLoading: true,
    speakerList: [],
  });

  useEffect(() => {
    new Promise(function (resolve) {
      setTimeout(function () {
        resolve();
      }, 1000);
    }).then(() => {
      dispatch({ type: 'setSpeakerList', payload: data });
    });
    return () => {
      console.log('cleanup');
    };
  }, []);
  return { isLoading, speakerList, dispatch };
}

export default useSpeakerDataManager;
