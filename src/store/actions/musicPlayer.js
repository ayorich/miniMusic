import * as actionTypes from './actionTypes';

export const updatePlayer = (url) => {
    console.log(url);
    return {
        type: actionTypes.UPDATE_PLAYER,
        payload: url
    }
}
