import * as actionTypes from './actionTypes';
import { firebaseInstance as axios } from '../../axios-base';


export const fetchAlbum = (token, userId) => {
    // console.log(token, userId)
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
                // console.log(fetchedAlbums)
                dispatch(fetchAlbumsSuccess(fetchedAlbums));
            })
            .catch(err => {
                dispatch(fetchAlbumsFailed(err));
            });
    };
};



export const fetchAlbumsStart = () => {
    return {
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