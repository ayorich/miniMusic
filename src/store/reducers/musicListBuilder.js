import * as actionTypes from '../actions/actionTypes'


const initialState = {
  loading: false,
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_DATA_START:
      return {
        ...state,
        loading: true
      }
    case actionTypes.FETCH_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        next: action.payload.next,
        prev: action.payload.prev,
        loading: false
      }
    case actionTypes.FETCH_DATA_FAILED:
      return {};
    default:
      return state;
  }
};

export default reducer;