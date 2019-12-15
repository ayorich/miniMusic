import * as actionTypes from './actionTypes';
import axios from 'axios';

export const searchData = userInput => {
    return dispatch => {
        axios(
          `https://deezerdevs-deezer.p.rapidapi.com/search?q=${userInput}`,
          {
            method: "GET",
            headers: {
              "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
              "x-rapidapi-key":
                "be6326ad16msh9adf8c06d24540ep11afa1jsnb2ffbffa84a0"
            }
          }
        ).then(response => {
            dispatch(setData(response.data));
          console.log(response.data);
          // console.log(response);
          })
          .catch(err => {
            dispatch(setDataFailed(err));
            console.log(err);
          });
    };
   
}

export const setData = data => {
    return{
        type: actionTypes.FETCH_DATA,
        payload:data
    }
}

export const setDataFailed = () => {
    return{
        type: actionTypes.FETCH_DATA_FAILED
    }
}