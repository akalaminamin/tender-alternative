import React, { useEffect, useContext } from "react";
import { getGiphy } from "../../store/Actions/GiphyAction/GiphyAction";
import giphyContext from "../../store/contexts/GiphyContext/GiphyContext";
import Loader from "../Loader/Loader";
const FeaturedCard = () => {
  const { state, dispatch } = useContext(giphyContext);
  const { AllGiphy, loader, error } = state;
  useEffect(() => {
    getGiphy({ dispatch });
  }, []);
  return (
    <div className="container mt-5">
      <h1 className="text-gray-800 text-2xl font-bold mb-6">Featured GIFs</h1>
      {error ? (
        <h2 className="text-red-700">Something is wrong! please try again</h2>
      ) : null}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        {loader ? (
          <Loader />
        ) : (
          AllGiphy.map((gip) => (
            <div
              className="flex flex-col text-center cursor-pointer"
              key={gip.id}
            >
              <div className="w-full h-52 shadow-lg">
                <img
                  className="w-full h-full object-cover"
                  src={gip?.images?.fixed_height?.url}
                  alt="trend image"
                />
              </div>
              <h2 className="text-gray-700 font-semibold text-xl py-3">
                {gip.title}
              </h2>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FeaturedCard;
