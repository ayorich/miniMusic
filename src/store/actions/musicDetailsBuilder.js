import * as actionTypes from './actionTypes';

export const selectMusic = selectedMusic => {
    // console.log(selectedMusic);
    return{
        type:actionTypes.SELECTED_MUSIC,
        payload: selectedMusic
    }
}


