import * as actionTypes from './actionTypes';
import { searchInstance as axios } from '../../axios-base';


export const viewAlbum = albumID => {
    return dispatch => {
        dispatch(setAlbumDataStart());
        axios(
            `/album/${albumID}`,
            {
                method: "GET",
                headers: {
                    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                    "x-rapidapi-key":
                        "be6326ad16msh9adf8c06d24540ep11afa1jsnb2ffbffa84a0"
                }
            }
        ).then(response => {
            localStorage.setItem('album', JSON.stringify(response.data));
                dispatch(albumInit());;
        })
            .catch(err => {
                dispatch(setAlbumDataFailed(err));
            });
    };
}

export const setAlbumDataStart = () =>{
    return{
        type: actionTypes.GET_ALBUM_TRACKS_START
    }
}
export const setAlbumDataSuccess = () => {
    const albumData = JSON.parse(localStorage.getItem('album'));
    return {
        type: actionTypes.GET_ALBUM_TRACKS_SUCCESS,
        payload: albumData
    }
}

export const setAlbumDataFailed = () => {
    return {
        type: actionTypes.GET_ALBUM_TRACKS_FAILED
    }
}

export const albumDetails = () => {
    //ACTION TO DISPLAY DATA TO CENTER LAYOUT 
    const albumDetails = JSON.parse(localStorage.getItem('album'));
    let newKey=null;
    if(albumDetails){
        const cover_xl = albumDetails.cover_xl;
        const title = albumDetails.title;
        const albumID = albumDetails.id;
         const album = {
            cover_xl: cover_xl,
            title: title,
            id: albumID
        }
         newKey = {
            ...albumDetails,
            album: album,
        }
    }

    return {
        type: actionTypes.VIEW_ALBUM_DETAILS,
        payload: newKey
    }
}

export const albumInit= ()=>{
    return dispatch => {
        dispatch(setAlbumDataSuccess());
        dispatch(albumDetails());
    }
}


