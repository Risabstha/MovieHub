import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useTheme } from "../../stores/ThemeProvider";

const SearchBar = ({handleSearchMovie, handleSubmit, searchedMovie}) => {

  const {theme} = useTheme();
  return (
    // desktop ko lagi fixed search bar, mobile ko lagi sticky with top-14 , z index 100
    <span className="md:fixed md:top-2 lg:top-5 md:left-50 sticky top-14 z-100 ">
      {/* search bar for faviourite and searched movies */}
      <form onSubmit={handleSubmit} className="flex justify-center ">
        <span className={`flex items-center 
        lg:w-[40rem]  
        md:min-w-[22rem]  
         border-2 border-gray-400 max-w-lg rounded-full overflow-hidden
        ${theme === "dark" ?"bg-[#1b1b1b]" :"bg-[#dcdada]"}`}>
          {/* Input */}
          <input
            type="text"
            placeholder="Search"
            name="search"
            autoComplete="off"
            value={searchedMovie}     // search bar empty after search
            onChange={handleSearchMovie}
            className="flex-grow px-4 py-2 text-sm md:text-base outline-none"
          />

          {/* Search Button */}
          <button
            type="submit"
            className={`flex items-center justify-center w-12 h-10  transition-colors
              ${theme === "dark" ?"-[#101010] hover:bg-[#151515]" :"bg-[#a7a7a7] hover:bg-gray-400bg"}`} 
          >
            <FaSearch className="text-gray-600" />
          </button>
        </span>
      </form>
    </span>
  );
}

export default SearchBar;
