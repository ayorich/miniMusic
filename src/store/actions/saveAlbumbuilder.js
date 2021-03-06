import * as actionTypes from './actionTypes';
import { firebaseInstance as axios } from '../../axios-base';

export const saveAlbum = (albumData, token) =>{
        return dispatch =>{
           dispatch(saveAlbumStart());
            axios.post('/albums.json?auth=' + token, albumData)
                .then(response => {
                    dispatch(saveAlbumSuccess());
                }).catch(error => {
                    dispatch(saveAlbumFailed(error));
                } )

        }
}
export const saveAlbumStart = () => {
    return{
        type: actionTypes.SAVE_ALBUM_START
    }
}

export const saveAlbumSuccess =()=>{
    return{
        type: actionTypes.SAVE_ALBUM_SUCCESS,
    }
}

export const saveAlbumFailed = (error) => {
    return {
        type: actionTypes.SAVE_ALBUM_FAILED,
        payload: error
    };
}

