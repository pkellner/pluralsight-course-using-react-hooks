const speakersReducer = (state, action) => {

  switch (action.type) {
    case "loadspeakers": {
      return action.data;
    }
    case "favorite": {
      debugger;
      let map = state.map((item, index) => {
        if (item.id === action.sessionId) {
          // let speakerToUpdate = Object.assign(item);
          // speakerToUpdate.favorite = 1;
          item.favorite = true;
          return item;
          // return speakerToUpdate;
        }
        return item;
      });
      debugger;
      return map;
    }
    case "unfavorite": {
      return state.map((item, index) => {
        if (item.id === action.sessionId) {
          // let speakerToUpdate = Object.assign(item);
          // speakerToUpdate.favorite = 1;
          item.favorite = false;
          return item;
          // return speakerToUpdate;
        }
        return item;
      });
    }
    // case 'decrement': return state - 1;
    // case 'reset': return 0;
    default:
      return state;
  }
};
export default speakersReducer;
