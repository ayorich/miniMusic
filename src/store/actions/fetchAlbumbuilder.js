import * as actionTypes from './actionTypes';
import { firebaseInstance as axios } from '../../axios-base';


export const fetchAlbum = (token, userId) => {
    // console.log(token, userId)
    return dispatch => {
        dispatch(fetchAlbumsStart());
        // const queryParams=`?auth="${token}"&orderBy="userId"&equalTo="${userId}"`;
        const queryParams = '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"';
        axios('/albums.json' + queryParams,
            {
                method: "GET",
                headers: {
                    'Access-Control-Allow-Credentials': true,
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': 'application/json',

                }
            }
        ).then(res => {
                const fetchedAlbums = [];
                for (let key in res.data) {
                    fetchedAlbums.push({
                        ...res.data[key],
                        id: key
                    });
                }
                // console.log(fetchedAlbums)
                dispatch(fetchAlbumsSuccess(fetchedAlbums))
            }).catch(error => {
                // console.log(error.error)
                dispatch(fetchAlbumsFailed(error));
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

export const fetchAlbumsFailed = (error) => {
    return {
        type: actionTypes.FETCH_ALBUMS_FAILED,
        payload: error

    }
}