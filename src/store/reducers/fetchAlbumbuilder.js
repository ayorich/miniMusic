import * as actionTypes from '../actions/actionTypes'


const initialState = {
    albums: [],
    loading: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_ALBUMS_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.FETCH_ALBUMS_SUCCESS:
            return {
                ...state,
                albums: action.payload,
                loading: false
            }

        case actionTypes.FETCH_ALBUMS_FAILED:
            return {
                ...state,
                loading: false
            }
        default:
            return state;
    }
};

export default reducer;