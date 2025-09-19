import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({handleSearchMovie, handleSubmit, searchedMovie}) => {


  return (
    <span className="md:fixed sticky md:top-2 lg:top-5 md:left-50  top-14 z-100 ">
      {/* search bar for faviourite and searched movies */}
      <form onSubmit={handleSubmit} className="flex justify-center ">
        <span className="flex items-center 
        lg:w-[40rem]  
        md:min-w-[22rem]  
        bg-gray-200 border-2 border-gray-400 max-w-lg rounded-full overflow-hidden">
          {/* Input */}
          <input
            type="text"
            placeholder="Search"
            name="search"
            autoComplete="off"
            value={searchedMovie}
            onChange={handleSearchMovie}
            className="flex-grow px-4 py-2 text-sm md:text-base outline-none"
          />

          {/* Search Button */}
          <button
            type="submit"
            className="flex items-center justify-center w-12 h-10 bg-gray-300 hover:bg-gray-400 transition-colors"
          >
            <FaSearch className="text-gray-600" />
          </button>
        </span>
      </form>
    </span>
  );
};

export default SearchBar;
