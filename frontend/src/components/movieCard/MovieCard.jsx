import React from "react";

const MovieCard = (movieProp) => {
  function handleFaviouriteMovie() {}
  return (
    <div>
      <div
        // grid-rows-[1fr_auto] → defines two rows:
        // First row = 1fr (takes up all remaining space).
        // Second row = auto (just enough space for its content).
        //  16:9 ratio
        className="grid grid-rows-[1fr_auto] 
        h-[320px]  w-[180px]
        relative"
      >
        {/* Poster */}
        <div className=" relative ">
          <div
            className="absolute right-6 top-3 cursor-pointer "
            onClick={(e) => handleFaviouriteMovie(e)}
          >
            ♥
          </div>
          <img
            src={`https://image.tmdb.org/t/p/w500${movieProp.poster}`}
            alt={movieProp.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Movie Info */}
        <div className="flex flex-col justify-center px-2 py-1 ">
          <p className=" text-[14px] font-semibold ">{movieProp.title}</p>
          <p className="text-[13px] text-gray-500">{movieProp.release_date?.split("-")[0]}</p>  {/* release date lai - bata split garxa */}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
