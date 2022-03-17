import React from "react";
const Paginate = ({ totalItems, itemsPerPage, selectedPage, currentPage }) => {
  let pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <div className="">
      <nav className="container text-center py-11">
        <ul class="inline-flex items-center -space-x-px">
          {pageNumber.map((number, index) => (
            <li key={index}>
              <button
                onClick={() => selectedPage(number)}
                class={
                  number === currentPage
                    ? "pagination bg-blue-700 text-white hover:bg-blue-800 hover:text-white"
                    : "pagination"
                }
              >
                {number}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Paginate;
