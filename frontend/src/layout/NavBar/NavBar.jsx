import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import SearchBar from "../../components/Search/SearchBar";

const NavBar = () => {
  const location = useLocation();
  const [threeDot, setThreeDot] = useState(false);
  const handleThreeDot = () => {
    threeDot ? setThreeDot(false) : setThreeDot(true);
  };

  return (
    <nav className="sticky top-0 bg-gray-200 z-50">
      <div
        className="hidden md:flex md:justify-between md:items-center 
      lg:min-h-15 lg:h-20  
      md:h-15"
      >
        <div className="flex gap-x-2 ml-10 text-lg">
          <img src="./logo.png" width={30} height={30}></img>
          <Link to={"/"} className="hover:text-blue-200 font-semibold">
            MoviesHub
          </Link>
        </div>

        <div>
          <SearchBar />
        </div>

        <ul
          className="flex 
        xl:mr-20    lg:mr-10     md:mr-5 
        lg:gap-x-10    md:gap-x-5      
        text-lg font-sans "
        >
          <li
            className={`hover:text-blue-400  font-semibold ${
              location.pathname === "/" && "border-b-1 border-green-300"
            }`}
          >
            <Link to="/" className="flex h-full px-3 py-1  w-full ">
              Home
            </Link>
          </li>
          <li
            className={`hover:text-blue-400  font-semibold ${
              location.pathname.includes("/favorite") &&
              "border-b-1 border-green-300"
            }`}
          >
            <Link to="/favorite" className="flex h-full px-3 py-1  w-full ">
              Favorite
            </Link>
          </li>
        </ul>
      </div>

      {/* mobile view */}
      <div className="md:hidden flex justify-between items-center p-2 border-b-1 border-gray-600 h-12">
        <div className="flex gap-x-2 ml-2 text-lg">
          <img src="./logo.png" width={30} height={30}></img>
          <Link to={"/"} className="hover:text-blue-200 font-semibold">
            MoviesHub
          </Link>
        </div>
        <div className="text-xl mr-2" onClick={handleThreeDot}>
          <PiDotsThreeOutlineVerticalFill />
        </div>
      </div>

      {/* drop down => hover le kaam garirako dropdowm menu ma!!*/}
      {threeDot && (
        <div className="absolute top-12 left-0 w-full bg-gray-100 md:hidden ">
          <ul className="flex flex-col text-lg font-sans w-full ">
            <li
              className={` ${
                location.pathname === "/" && "bg-gray-200 text-blue-600"
              }`}
            >
              <Link
                to="/"
                className="flex w-full px-4 py-3  font-semibold"
                onClick={() => setThreeDot(false)}
              >
                Home
              </Link>
            </li>
            <li
              className={` ${
                location.pathname.includes("/favorite") &&
                "bg-gray-200 text-blue-600"
              }`}
            >
              <Link
                to="/favorite"
                className="flex w-full px-4 py-3 font-semibold"
                onClick={() => setThreeDot(false)}
              >
                Favorite
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
