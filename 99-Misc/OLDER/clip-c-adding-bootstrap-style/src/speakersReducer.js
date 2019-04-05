const speakersReducer = (state, action) => {
  //console.log(`speakersReducer:action:${action.type}`);
  switch (action.type) {

    case "loadspeakers": {
      return action.data;
    }
    case "favorite": {
      return state.map((item, index) => {
        if (item.id === action.sessionId) {
          item.favorite = true;
          return item;
        }
        return item;
      });
    }
    case "unfavorite": {
      return state.map((item, index) => {
        if (item.id === action.sessionId) {
          item.favorite = false;
          return item;
        }
        return item;
      });
    }
    default:
      return state;
  }
};
export default speakersReducer;
