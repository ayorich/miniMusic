import * as actionTypes from './actionTypes';
import axios from 'axios';


export const viewAlbum = albumID => {
    // console.log(albumID)
    return dispatch => {
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
            dispatch(albumDetails(response.data));
            dispatch(setAlbumData(response.data));
            // console.log(response);
        })
            .catch(err => {
                dispatch(setAlbumDataFailed(err));
                console.log(err);
            });
    };
}


export const setAlbumData = data => {
    // console.log(data)
    return {
        type: actionTypes.GET_ALBUM_TRACKS,
        payload: data
    }
}

export const setAlbumDataFailed = () => {
    return {
        type: actionTypes.GET_ALBUM_TRACKS_FAILED
    }
}

export const albumDetails = albumDetails => {
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
        displayType:true  //change display between ALBUM DISPLAY(TRUE) AND LIST DISPLAY DETAILS(FALSE)

    }
    // console.log(newKey);

    return {
        type: actionTypes.VIEW_ALBUM_DETAILS,
        payload: newKey
    }
}