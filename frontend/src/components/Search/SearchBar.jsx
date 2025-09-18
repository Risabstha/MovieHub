import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const [searchedMovie, setSearch] = useState("");
  
  const handleSearchMovie = (e) => {
    const { value } = e.target;
    setSearch(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchedMovie);
    setSearch("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex justify-center  ">
        <div className="flex items-center lg:w-[40rem]  md:min-w-[20rem]   max-w-lg border border-gray-500 rounded-full overflow-hidden">
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
            className="flex items-center justify-center w-12 h-10 bg-gray-100 border-l border-gray-500 hover:bg-gray-200 transition-colors"
          >
            <FaSearch className="text-gray-600" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
