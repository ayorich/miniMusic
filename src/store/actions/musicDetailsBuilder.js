import * as actionTypes from './actionTypes';

export const selectMusic = selectedMusic => {
    localStorage.setItem('songID', selectedMusic.id);
    return{
        type:actionTypes.SELECTED_MUSIC,
        payload: selectedMusic
    }
}


