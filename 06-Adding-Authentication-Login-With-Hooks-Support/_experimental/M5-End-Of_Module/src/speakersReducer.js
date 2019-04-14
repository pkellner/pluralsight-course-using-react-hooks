const speakersReducer = (state, action) => {
    function updateFavorite(favoriteValue) {
        return state.map((item, index) => {
            if (item.id === action.sessionId) {
                if (favoriteValue === null) {
                    item.favoriteChanging = true;
                } else {
                    item.favorite = favoriteValue;
                    item.favoriteChanging = false;
                }
                return item;
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
        case "favoritechanging": {
            return updateFavorite(null);
        }
        default:
            return state;
    }
};
export default speakersReducer;