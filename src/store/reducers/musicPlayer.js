import * as actionTypes from '../actions/actionTypes'


const initialState = {
        url:null,
        play: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_PLAYER:
            return {
               url: action.payload,
                play: false
            }
        case actionTypes.STOP_MUSIC:
            return{
                ...state,
                play: false
            }
        case actionTypes.TOGGLE_PLAY:
            return {
                ...state,
                play: action.payload
            }
        default:
            return state;
    }
};

export default reducer;