import * as actionTypes from '../actions/actionTypes'


const initialState = [];

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_ALBUM_TRACKS:
            return [action.payload]

        case actionTypes.GET_ALBUM_TRACKS_FAILED:
            return [];
        default:
            return state;
    }
};

export default reducer;