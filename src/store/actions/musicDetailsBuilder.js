import * as actionTypes from './actionTypes';

export const selectMusic = selectedMusic => {
    return{
        type:actionTypes.SELECTED_MUSIC,
        payload: selectedMusic
    }
}


