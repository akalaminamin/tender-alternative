import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const SearchBar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`search/${search}`);
    setSearch("");
  };
  return (
    <>
      <div className="container h-[40px] flex justify-center px-4 sm:px-6 lg:px-8 sticky top-0 mb-16">
        <form className="z-50 w-11/12">
          <div className="relative w-full">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="search-input"
              placeholder="Search for GIFs"
            />
            <div className="absolute top-[18px] right-3 cursor-pointer">
              <button onClick={handleSubmit} type="submit">
                <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default SearchBar;
