import React, { useReducer } from "react";
import giphyContext from "../../contexts/GiphyContext/GiphyContext";
import GiphyReducer from "../../Reducers/GiphyReducer/GiphyReducer";
const GiphyProvider = ({ children }) => {
  const [state, dispatch] = useReducer(GiphyReducer, {
    AllGiphy: [],
    loader: false,
    error: "",
  });
  return (
    <giphyContext.Provider value={{ state, dispatch }}>
      {children}
    </giphyContext.Provider>
  );
};

export default GiphyProvider;
