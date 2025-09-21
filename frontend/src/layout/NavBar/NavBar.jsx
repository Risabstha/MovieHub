import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import ThemeToggle from "../../components/ThemeToggle";
import { useTheme } from "../../stores/ThemeProvider";

const NavBar = () => {
  const location = useLocation();
  const {theme} = useTheme() 

  const [threeDot, setThreeDot] = useState(false); // flag : if threeDot is clicked: true, else false.
  const handleThreeDot = () => {
    threeDot ? setThreeDot(false) : setThreeDot(true);
  };

  return (
    <nav className={`sticky top-0 md:z-50 z-200 ${theme === "dark" ?"bg-[#1b1b1b]" :"bg-[#dcdada]"}`}>
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

        <div className=" flex lg:gap-x-8    md:gap-x-4">
          {/* nav options */}
          <ul
            className="flex 
          
          lg:gap-x-8    md:gap-x-4      
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

          <div className="xl:mr-8    lg:mr-6     md:mr-2 " >
            <ThemeToggle />
          </div>
        </div>
      </div>

      {/* mobile view , this will be hidden when screen size(width) > md*/}
      <div className="md:hidden flex justify-between items-center p-2 border-b-1 border-gray-600 h-12">
        <div className="flex gap-x-2 ml-2 text-lg">
          <img src="./logo.png" width={30} height={30}></img>
          <Link to={"/"} className="hover:text-blue-200 font-semibold">
            MoviesHub
          </Link>
        </div>
         <div className="xl:mr-8    lg:mr-6     md:mr-2 " title={`Dark Mode `}>
            <ThemeToggle />
          </div>
        <div className="text-xl mr-2" onClick={handleThreeDot}>
          <PiDotsThreeOutlineVerticalFill />
        </div>
      </div>

      {/* drop down => hover le kaam garirako dropdowm menu ma!!*/}
      {threeDot && (
        <div className={`absolute top-12 left-0 w-full  ${theme === "dark" ?"bg-[#1b1b1b]" :"bg-[#dcdada]"} md:hidden `}>
          <ul className="flex flex-col text-lg font-sans w-full ">
            <li
              className={` ${
                location.pathname === "/" && " text-blue-600"
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
                " text-blue-600"
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
