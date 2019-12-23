import axios from 'axios';

import * as actionTypes from './actionTypes';

export const auth = (email, password) =>{
        return dispatch =>{
            dispatch(authStart());
            const authData = {
                email: email,
                password: password,
                returnSecureToken: true
            };
            let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA6du4aZpOsjsO36_cDCy2zyDFae_mT8e8';
            axios.post(url, authData)
                .then(response => {
                    dispatch(authSuccess(response.data))
                    console.log(response.data)
                }
                )
                .catch(err =>{
                    dispatch(authFail(err))
                })
        }
}

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId: userId
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};