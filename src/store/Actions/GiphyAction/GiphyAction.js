import axios from "axios";
import { CLOSE_LOADER, ERROR_MESSAGE, SET_LOADER } from "../../types";
import { FETCH_DATA } from "../../types/GiphyTypes";

export const getGiphy = async ({ dispatch }) => {
  try {
    dispatch({ type: SET_LOADER });
    const response = await axios.get("https://api.giphy.com/v1/gifs/trending", {
      params: {
        api_key: "7sjuTLOBnXyMYjyjwFIljFbYuP23jW7s",
      },
    });
    dispatch({ type: CLOSE_LOADER });
    dispatch({ type: FETCH_DATA, payload: response.data.data });
  } catch (error) {
    dispatch({ type: ERROR_MESSAGE, payload: error.message });
  }
};
