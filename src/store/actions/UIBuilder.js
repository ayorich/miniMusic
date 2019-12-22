import * as actionTypes from "./actionTypes";

export const searchLoading = data => {
    console.log(data)
  return {
    type: actionTypes.SEARCH_DATA_LOADING,
    payload: data
  };
};


