import * as actionTypes from '../actions/actionTypes'


const initialState = [];

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SELECTED_MUSIC:
            return [action.payload]
        default:
            return state;
    }
};

export default reducer;