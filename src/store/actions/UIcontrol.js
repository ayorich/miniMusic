import * as actionTypes from './actionTypes';



export const showSearchbar = () => {
    return {
        type: actionTypes.SEARCH_BAR_UI_SHOW
    };
};


export const hideSearchbar = () => {
    return {
        type: actionTypes.SEARCH_BAR_UI_HIDE
    };
};
