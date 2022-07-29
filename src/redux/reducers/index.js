import { FETCH_TEXT_TRANSFORM } from "../consts";

const initialState = {
  results: [],
};

const rootReducer = function (state = initialState, action) {
  switch (action.type) {
    case FETCH_TEXT_TRANSFORM:
      return { ...state, results: [action.payload, ...state.results] };
    case 'test_store':
      return { ...state, results: [action.payload, ...state.results] };
    default:
      return state;
  }
};

export default rootReducer;
