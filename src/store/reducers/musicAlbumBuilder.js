import * as actionTypes from '../actions/actionTypes'


const initialState = {
    loading:false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_ALBUM_TRACKS_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.GET_ALBUM_TRACKS_SUCCESS:
            return {
                ...state,
                album: action.payload,
                loading:false

            }

        case actionTypes.GET_ALBUM_TRACKS_FAILED:
            return {};
        default:
            return state;
    }
};

export default reducer;