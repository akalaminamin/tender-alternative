import React, { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="mb-10">
      <div className="text-xl pl-4 py-3 bg-white md:hidden block">
        <span onClick={() => setShow(!show)}>
          {/* <FiMenu /> */}
        </span>
      </div>
      <header
        className={`text-gray-600 body-font ${
          !show ? "hidden" : ""
        } bg-white shadow-md border-b h-80 md:h-16 px-3 md:flex items-start !pl-0 md:items-center transition-all origin-left duration-300 ease-in`}
      >
        <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-start md:items-center">
          <Link to="/">
            <h2 className="uppercase font-inter hidden md:block font-bold text-lg">
              TENDER
            </h2>
          </Link>
          <nav className="md:ml-auto flex items-start md:items-center flex-wrap text-base justify-start cursor-pointer flex-col md:flex-row space-y-4 md:space-y-0">
            <Link
              to="/"
              className="nav-link mt-3 md:mt-0"
              onClick={() => setShow(!show)}
            >
              Home
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
