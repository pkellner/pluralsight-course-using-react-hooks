const speakersReducer = (state, action) => {
    function updateFavorite(favoriteValue) {
        return state.map((item, index) => {
            if (item.id === action.sessionId) {
                item.favorite = favoriteValue;
            }
            return item;
        });
    }
    switch (action.type) {
        case "setSpeakerList": {
            return action.data;
        }
        case "favorite": {
            return updateFavorite(true);
        }
        case "unfavorite": {
            return updateFavorite(false);
        }
        default:
            return state;
    }
};
export default speakersReducer;