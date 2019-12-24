import axios from 'axios';

import * as actionTypes from './actionTypes';

export const auth = (email, password, isSignup) =>{
        return dispatch =>{
            dispatch(authStart());
            const authData = {
                email: email,
                password: password,
                returnSecureToken: true
            };
            // console.log(isSignup)
                //SIGN UP URL
            let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA6du4aZpOsjsO36_cDCy2zyDFae_mT8e8';
            if(isSignup){
                //SIGN IN URL
                url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA6du4aZpOsjsO36_cDCy2zyDFae_mT8e8'
            }

            axios.post(url, authData)
                .then(response => {
                    dispatch(authSuccess(response.data.idToken, response.data.localId))
                    console.log(response.data)
                }
                )
                .catch(err =>{
                    console.log(err.response.data)
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

export const setAuthRedirectPath = (path) => {
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path: path
    };
};
