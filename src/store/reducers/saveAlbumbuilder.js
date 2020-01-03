import * as actionTypes from '../actions/actionTypes'


const initialState = {
    albums: [],
    loading: false,
    error:null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SAVE_ALBUM_START:
            return{
                ...state,
                loading: true
            }
        case actionTypes.SAVE_ALBUM_SUCCESS:
            return {
                ...state,
                loading: false,
                
            }
        case actionTypes.SAVE_ALBUM_FAILED:
            return {
                ...state,
                loading: false,
                error:action.payload
            }
        default:
            return state;
    }
};

export default reducer;