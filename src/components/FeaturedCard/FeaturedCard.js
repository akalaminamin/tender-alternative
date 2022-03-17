import React, { useEffect, useContext, useState } from "react";
import { getGiphy } from "../../store/Actions/GiphyAction/GiphyAction";
import giphyContext from "../../store/contexts/GiphyContext/GiphyContext";
import Loader from "../Loader/Loader";
import Paginate from "../Paginate/Paginate";
import { Link } from "react-router-dom";
const FeaturedCard = () => {
  const { state, dispatch } = useContext(giphyContext);
  const { AllGiphy, loader, error } = state;

  // pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerpage] = useState(9);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currenGiphy = AllGiphy.slice(indexOfFirstItem, indexOfLastItem);

  // get all giphy
  useEffect(() => {
    getGiphy({ dispatch });
  }, []);

  // selected page function
  const selectedPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="container mt-5">
        <h1 className="text-gray-800 text-2xl font-bold mb-6">Featured GIFs</h1>
        {error ? (
          <h2 className="text-red-700">Something is wrong! please try again</h2>
        ) : null}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          {loader ? (
            <Loader />
          ) : (
            currenGiphy.map((gip) => (
              <div
                className="flex flex-col text-center cursor-pointer"
                key={gip.id}
              >
                <Link to={`/view/${gip.id}`}>
                  <div className="w-full h-52 shadow-lg">
                    <img
                      className="w-full h-full object-cover rounded-md"
                      src={gip?.images?.fixed_height?.url}
                      alt="trend image"
                    />
                  </div>
                  <h2 className="text-gray-700 font-semibold text-xl py-3 hover:text-blue-500">
                    {gip.title}
                  </h2>
                </Link>
              </div>
            ))
          )}
        </div>
        <Paginate
          selectedPage={selectedPage}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          totalItems={AllGiphy.length}
        />
      </div>
    </>
  );
};

export default FeaturedCard;
