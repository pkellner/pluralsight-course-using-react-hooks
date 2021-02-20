const speakersReducer = (state, action) => {
  function updateFavorite(favoriteValue) {
    return state.speakerList.map((item, index) => {
      if (item.id === action.id) {
        return { ...item, favorite: favoriteValue };
      }
      return item;
    });
  }

  function updateRecord(record) {
    return state.speakerList.map((rec) => {
      return rec.id === record.id ? record : rec;
    });
  }

  switch (action.type) {
    case 'setSpeakerList': {
      return {
        ...state,
        speakerList: action.data,
        isLoading: false,
        hasErrored: false,
      };
    }
    case 'update': {
      return { ...state, speakerList: updateRecord(action.speakerRec) };
    }

    case 'favorite': {
      return { ...state, speakerList: updateFavorite(true) };
    }
    case 'unfavorite': {
      return { ...state, speakerList: updateFavorite(false) };
    }
    case 'incrementFavoriteClickCount': {
      return { ...state, favoriteClickCount: state.favoriteClickCount + 1 };
    }
    case 'errored': {
      return { ...state, hasErrored: true, error: action.error };
    }
    default:
      return state;
  }
};
export default speakersReducer;
