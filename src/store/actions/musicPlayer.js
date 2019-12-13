import * as actionTypes from './actionTypes';

export const updatePlayer = (url) => {
    console.log(url);
    return {
        type: actionTypes.UPDATE_PLAYER,
        payload: url
    }
}

export const stopMusic = () => {
    return{
        type:actionTypes.STOP_MUSIC
    }
}

export const togglePlayer = (playState) => {
    return{
        type: actionTypes.TOGGLE_PLAY,
        payload: playState
    }
}