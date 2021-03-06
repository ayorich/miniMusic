import * as actionTypes from './actionTypes';
import { searchInstance as axios } from '../../axios-base';

export const searchData = userInput => {
    return dispatch => {
      dispatch(setDatastart());
        axios(
          `/search?q=${userInput}`,
          {
            method: "GET",
            headers: {
              "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
              "x-rapidapi-key":
                "be6326ad16msh9adf8c06d24540ep11afa1jsnb2ffbffa84a0"
            }
          }
        ).then(response => {
          dispatch(setDatasuccess(response.data));

          })
          .catch(err => {
            dispatch(setDataFailed(err));
          });
    };
   
}


const axiosRequest = (proxyurl, url) => axios(`${proxyurl}${url}`,
  {
    method: "GET",
    headers: {
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
      "x-rapidapi-key":
        "be6326ad16msh9adf8c06d24540ep11afa1jsnb2ffbffa84a0",
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'application/json',

    }
  }
)

export const getnextList = url => {
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  return dispatch => {
      dispatch(setDatastart());
    axiosRequest(proxyurl, url).then(response => {
      dispatch(setDatasuccess(response.data));
    })
      .catch(err => {
        dispatch(setDataFailed(err));
      });
  };
}

export const getprevList = url => {
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  return dispatch => {
      dispatch(setDatastart());
    axiosRequest(proxyurl, url).then(response => {
      dispatch(setDatasuccess(response.data));
    })
      .catch(err => {
        dispatch(setDataFailed(err));
      });
  };
}
export const setDatastart = () => {
  return {
    type: actionTypes.FETCH_DATA_START
  }
}

export const setDatasuccess = data => {
  return {
    type: actionTypes.FETCH_DATA_SUCCESS,
    payload: data
  }
}

export const setDataFailed = () => {
  return {
    type: actionTypes.FETCH_DATA_FAILED
  }
}
