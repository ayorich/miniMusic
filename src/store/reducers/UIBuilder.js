import * as actionTypes from "../actions/actionTypes";

const initialState = {
        // loading:null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_DATA_LOADING:
      return {
        ...initialState,
        spinnerLoading: action.payload
      };

    default:
      return state;
  }
};

export default reducer;
