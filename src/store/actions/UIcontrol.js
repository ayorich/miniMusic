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


export const btnSaving = () => {
    return {
        type: actionTypes.BTN_UI_SAVING
    };
};

export const btnToSave = () => {
    return {
        type: actionTypes.BTN_UI_TO_SAVE
    };
};