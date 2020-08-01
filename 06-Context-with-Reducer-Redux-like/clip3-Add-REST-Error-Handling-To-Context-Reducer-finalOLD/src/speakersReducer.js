const speakersReducer = (state, action) => {
  function updateFavorite(favoriteValue) {
    return state.speakerList.map((item) => {
      if (item.id === action.sessionId) {
        return { ...item, favorite: favoriteValue };
      }
      return item;
    });
  }

  switch (action.type) {
    case 'setSpeakerList':
      return {
        ...state,
        isLoading: false,
        hasErrored: false,
        speakerList: action.payload,
      };
    case 'favorite': {
      return { ...state, hasErrored: false, speakerList: updateFavorite(true) };
    }
    case 'unfavorite': {
      return {
        ...state,
        hasErrored: false,
        speakerList: updateFavorite(false),
      };
    }
    case 'speakerListError':
      return {
        ...state,
        isLoading: false,
        hasErrored: true,
        errorMessage: action.error,
      };
    case 'favoriteError':
      return {
        ...state,
        isLoading: false,
        hasErrored: true,
        errorMessage: action.error,
      };
    default:
      return state;
  }
};

export default speakersReducer;
