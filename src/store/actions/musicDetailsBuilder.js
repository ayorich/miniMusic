import * as actionTypes from './actionTypes';

export const selectMusic = selectedMusic => {
    // console.log(selectedMusic);
    const newKey = {
        ...selectedMusic,
        displayType: false

    }
    // console.log(newKey);

    return{
        type:actionTypes.SELECTED_MUSIC,
        payload: newKey
    }
}


