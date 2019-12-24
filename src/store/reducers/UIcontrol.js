import * as actionTypes from '../actions/actionTypes';

const initialState = {
    searchBar: true
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SEARCH_BAR_UI_SHOW:
            return {
                ...state,
                searchBar: true
            }
        case actionTypes.SEARCH_BAR_UI_HIDE:
            return {
                ...state,
                searchBar: false
            }
        default:
            return state;
        }
    }


export default reducer;