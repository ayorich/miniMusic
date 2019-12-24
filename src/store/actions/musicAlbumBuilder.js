import * as actionTypes from './actionTypes';
import axios from 'axios';


export const viewAlbum = albumID => {
    // console.log(albumID)
    return dispatch => {
        dispatch(setAlbumDataStart());
        axios(
            `https://deezerdevs-deezer.p.rapidapi.com/album/${albumID}`,
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
            dispatch(albumDetails());
            dispatch(setAlbumDataSuccess());
            // console.log(response);
        })
            .catch(err => {
                dispatch(setAlbumDataFailed(err));
                console.log(err);
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
    const albumDetails = JSON.parse(localStorage.getItem('album'));
    // console.log(albumDetails);
    const cover_xl = albumDetails.cover_xl;
    const title = albumDetails.title;
    const albumID = albumDetails.id;
    const album = {
        cover_xl: cover_xl,
        title: title,
        id: albumID
    }
    const newKey = {
        ...albumDetails,
        album: album,
    }
    // console.log(newKey);

    return {
        type: actionTypes.VIEW_ALBUM_DETAILS,
        payload: newKey
    }
}

export const init= ()=>{
    return dispatch => {
        dispatch(albumDetails());
        dispatch(setAlbumDataSuccess());
    }
}


