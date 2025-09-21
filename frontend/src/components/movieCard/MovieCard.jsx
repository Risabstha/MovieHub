import React, { useContext } from "react";
import { FaHeart } from "react-icons/fa";
import { FavmovieContext } from "../../stores/FavContext";

const MovieCard = ({movieProp}) => {

  const FavouriteMovie = useContext(FavmovieContext);
  const {  AddFavourite, RemoveFavorite, checkFavourite } = FavouriteMovie; // FavMovieContext ko value lai destructure gareko

  const checkFav = checkFavourite(movieProp.id);  // favourite movie ho vane true return garxa

  const handleFaviouriteMovie = (e) =>
  {
    {checkFav? RemoveFavorite(movieProp.id) : AddFavourite(movieProp) } // true: removefavourite, false : addfavourite
  }


  return (
    <div>
      <div
        // grid-rows-[1fr_auto] → defines two rows:
        // First row = 1fr (takes up all remaining space).
        // Second row = auto (just enough space for its content).
        //  16:9 ratio
        className=" group grid grid-rows-[1fr_auto] 
        h-[320px]  w-[180px]
        relative"
      >
        {/* Poster */}
        <div className=" relative ">
          <button
            type="button"
            className={`absolute  right-3 top-3 cursor-pointer bg-gray-900  p-1 rounded-full
            opacity-0 group-hover:opacity-100 transition-opacity duration-300
            ${checkFav ? "text-red-500" : "text-white "}`}
            onClick={(e) => handleFaviouriteMovie(e)}
          >
            <FaHeart />
          </button>

          <img
            src={`https://image.tmdb.org/t/p/w500${movieProp.poster_path}`}
            alt={movieProp.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Movie Info */}
        <div className="flex flex-col justify-center px-2 py-1 ">
          <p className=" text-[14px] font-semibold ">{movieProp.title}</p>
          <p className="text-[13px] text-gray-500">
            {movieProp.release_date?.split("-")[0]}
          </p>{" "}
          {/* release date lai - bata split garxa */}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
