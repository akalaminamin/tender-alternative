import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Loader from "../../components/Loader/Loader";
import Paginate from "../../components/Paginate/Paginate";
const SearchResult = () => {
  const { inputvalue } = useParams();
  const [giphy, setGiphy] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  // pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerpage] = useState(9);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currenGiphy = giphy.slice(indexOfFirstItem, indexOfLastItem);
  // selected page function
  const selectedPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  useEffect(async () => {
    try {
      setLoading(true);
      const response = await axios.get("https://api.giphy.com/v1/gifs/search", {
        params: {
          api_key: "7sjuTLOBnXyMYjyjwFIljFbYuP23jW7s",
          q: inputvalue,
          limit: 500,
        },
      });
      setGiphy(response.data.data);
      setLoading(false);
      setIsError(false);
    } catch (error) {
      setLoading(false);
      setIsError(true);
      setTimeout(() => setIsError(false), 400);
    }
  }, [inputvalue]);
  return (
    <>
      <div className="container mt-5 min-h-screen">
        <h1 className="text-gray-800 text-2xl font-bold mb-6">{inputvalue}</h1>
        <h1 className="text-gray-800 text-2xl font-semibold mb-6">GIFs</h1>
        {isError ? (
          <h2 className="text-red-700">Something is wrong! please try again</h2>
        ) : null}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          {loading ? (
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
                      className="w-full h-full object-cover"
                      src={gip?.images?.fixed_height?.url}
                      alt="trend image"
                    />
                  </div>
                  <h2 className="text-gray-700 font-semibold text-lg py-3 hover:text-blue-500">
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
          totalItems={giphy.length}
        />
      </div>
    </>
  );
};

export default SearchResult;
