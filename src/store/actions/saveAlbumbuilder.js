import * as actionTypes from './actionTypes';
import { firebaseInstance as axios } from '../../axios-base';

export const saveAlbum = (albumData, token) =>{
        return dispatch =>{
           dispatch(saveAlbumStart());
            axios.post('/albums.json?auth=' + token, albumData)
                .then(response => {
                    console.log(response)
                    dispatch(saveAlbumSuccess())
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
        error: error
    };
}

export const fetchAlbum = (token, userId) => {
    return dispatch => {
        dispatch(fetchAlbumsStart()); 
        // const queryParams=`?auth="${token}"&orderBy="userId"&equalTo="${userId}"`;
        const queryParams = '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"';

        axios.get('/albums.json' + queryParams)
            .then(res => {
                const fetchedAlbums = [];
                for (let key in res.data) {
                    fetchedAlbums.push({
                        ...res.data[key],
                        id: key
                    });
                }
                dispatch(fetchAlbumsSuccess(fetchedAlbums));
            })
            .catch(err => {
                dispatch(fetchAlbumsFailed(err));
            });
    };
};



export const fetchAlbumsStart = () => {
    return{
        type: actionTypes.FETCH_ALBUMS_START

    }
}

export const fetchAlbumsSuccess = (fetchedAlbums) => {
    return {
        type: actionTypes.FETCH_ALBUMS_SUCCESS,
        payload: fetchedAlbums

    }
}

export const fetchAlbumsFailed = () => {
    return {
        type: actionTypes.FETCH_ALBUMS_FAILED

    }
}