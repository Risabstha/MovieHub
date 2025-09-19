import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";

const NavBar = () => {
  const location = useLocation();

  const [threeDot, setThreeDot] = useState(false); // flag : if threeDot is clicked: true, else false.
  const handleThreeDot = () => {
    threeDot ? setThreeDot(false) : setThreeDot(true);
  };

  return (
    <nav className="sticky top-0 bg-gray-200 md:z-50 z-200">
      {/* desktop nav view ,   this will be hidden when screen size < md (768px) */}
      <div
        className="hidden md:flex md:justify-between md:items-center 
        lg:h-20  
        md:h-15"
      >
        {/* Logo and web app name , when clicked reloads the page.*/}
        <div
          className="flex gap-x-2 ml-10 text-lg"
          onClick={() => window.location.reload()}
        >
          <img src="./logo.png" width={30} height={30}></img>
          <Link to={"/"} className="hover:text-blue-900 font-semibold">
            MoviesHub
          </Link>
        </div>

        {/* nav options */}
        <ul
          className="flex 
          xl:mr-20    lg:mr-10     md:mr-5 
          lg:gap-x-10    md:gap-x-5      
          text-lg font-sans "
        >
          <li
            className={`hover:text-blue-700  font-semibold ${
              location.pathname === "/" && "border-b-1 border-green-700"
            }`}
          >
            <Link to="/" className="flex h-full px-3 py-1  w-full ">
              Home
            </Link>
          </li>
          <li
            className={`hover:text-blue-700  font-semibold ${
              location.pathname.includes("/favorite") &&
              "border-b-1 border-green-700"
            }`}
          >
            <Link to="/favorite" className="flex h-full px-3 py-1  w-full ">
              Favorite
            </Link>
          </li>
        </ul>
      </div>

      {/* mobile view , this will be hidden when screen size(width) > md*/}
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
