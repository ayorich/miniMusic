import * as actionTypes from '../actions/actionTypes'


const initialState ={
    displayType: false, //change display between ALBUM DISPLAY(TRUE) AND LIST DISPLAY DETAILS(FALSE),
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SELECTED_MUSIC:
            return {
                ...state,
                song:action.payload,
                displayType: false
            }
        case actionTypes.VIEW_ALBUM_DETAILS:
            return {
                ...state,
                song:action.payload,
                displayType: true
            }
        default:
            return state;
    }
};

export default reducer;