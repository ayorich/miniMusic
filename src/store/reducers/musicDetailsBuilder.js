import * as actionTypes from '../actions/actionTypes'


const initialState = [];

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SELECTED_MUSIC:
            return [action.payload]
        case actionTypes.VIEW_ALBUM_DETAILS:
            return [action.payload]
        default:
            return state;
    }
};

export default reducer;