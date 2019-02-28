const speakersReducer = (state, action) => {
  switch (action.type) {
    case "loadspeakers": {
      return action.data;
    }
    case "favorite": {
      debugger;
      const x = state.map((item,index) => {
        if (item.id === action.sessionId){
          let speakerToUpdate = Object.assign(item);
          speakerToUpdate.favorite = 1;
          return speakerToUpdate;
          //return state[index].favorite = 1;
        } else {
          return item;
        }
      });
      return x;
    }
    case "unfavorite": {
      return state.map((item,index) => {
        if (item.id === action.sessionId){
          return (Object.assign(state[index])).favorite = 0;
          //return state[index].favorite = 0;
        } else {
          return item;
        }
      });
    }
    // case 'decrement': return state - 1;
    // case 'reset': return 0;
    default:
      return state;
  }
};
export default speakersReducer;
