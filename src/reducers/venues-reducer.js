import * as types from '../utils/Consts';

let VENUES_INITIAL_STATE = {
  list: [],
  isLoading: false,
};

function sagas(state = VENUES_INITIAL_STATE, action) {
  switch (action.type) {
    case types.FETCH_VENUES:
      console.log(state);
      return {
        ...state,
        isLoading: true,
      };
    case types.FETCH_VENUES_SUCCESS:
      let list = action.data;
      return {
        ...state,
        isLoading: false,
        list,
      };
    case types.FETCH_VENUES_FAIL:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
}

export default sagas;
