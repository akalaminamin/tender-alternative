import React, { useContext, useEffect } from "react";
import Loader from "../Loader/Loader";
import { getGiphy } from "../../store/Actions/GiphyAction/GiphyAction";
import giphyContext from "../../store/contexts/GiphyContext/GiphyContext";
const TrendCard = () => {
  const { state, dispatch } = useContext(giphyContext);
  const { AllGiphy, loader, error } = state;
  useEffect(() => {
    getGiphy({ dispatch });
  }, []);
  return (
    <div className="container">
      <h1 className="text-gray-800 text-2xl font-bold mb-6">
        Trending Tenor Searches
      </h1>
      {error ? (
        <h2 className="text-red-700">Something is wrong! please try again</h2>
      ) : null}
      <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-5">
        {loader ? (
          <Loader />
        ) : (
          AllGiphy.slice(0, 9).map((gip) => (
            <div
              className="flex flex-col text-center cursor-pointer"
              key={gip.id}
            >
              <div className="w-full h-36 shadow-lg">
                <img
                  className="w-full h-full"
                  src={gip?.images?.fixed_height?.url}
                  alt="trend image"
                />
              </div>
              <h2 className="text-gray-700 font-semibold text-md py-3 hover:text-blue-500">
                {gip.title}
              </h2>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TrendCard;
