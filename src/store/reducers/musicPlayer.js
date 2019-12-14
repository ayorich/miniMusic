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
                play: true
            }
        default:
            return state;
    }
};

export default reducer;