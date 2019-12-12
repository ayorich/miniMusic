import * as actionTypes from '../actions/actionTypes'


const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_DATA:
      return [action.payload]
        
    case actionTypes.FETCH_DATA_FAILED:
      return null;
    default:
      return state;
  }
};

export default reducer;