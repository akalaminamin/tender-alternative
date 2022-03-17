import { CLOSE_LOADER, ERROR_MESSAGE, SET_LOADER } from "../../types";
import { FETCH_DATA } from "../../types/GiphyTypes";

const GiphyReducer = (state, { type, payload }) => {
  if (type === SET_LOADER) {
    return {
      ...state,
      loader: true,
    };
  } else if (type === CLOSE_LOADER) {
    return {
      ...state,
      loader: false,
    };
  } else if (type === FETCH_DATA) {
    return {
      ...state,
      AllGiphy: payload,
    };
  } else if (type === ERROR_MESSAGE) {
    return {
      ...state,
      error: payload,
    };
  }
};

export default GiphyReducer;
