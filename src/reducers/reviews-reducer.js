import * as types from '../utils/Consts';

let REVIEWS_INITIAL_STATE = {
  list: [],
  isLoading: false,
};

function sagas(state = REVIEWS_INITIAL_STATE, action) {
  switch (action.type) {
    case types.FETCH_REVIEWS:
      return {
        ...state,
        isLoading: true,
      };
    case types.FETCH_REVIEWS_SUCCESS:
      let list = action.data;
      return {
        ...state,
        isLoading: false,
        list,
      };
    case types.FETCH_REVIEWS_FAIL:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
}

export default sagas;
