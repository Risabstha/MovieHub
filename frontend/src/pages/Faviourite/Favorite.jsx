import React, { useContext } from "react";
import MovieCard from "../../components/movieCard/MovieCard";
import { FavmovieContext } from "../../stores/FavContext";

const Favorite = () => {
  const {favourites,   AddFavourite, RemoveFavorite, checkFavourite } = useContext(FavmovieContext);
  // if(favourites){
  // }

  return (
    <div>
 
      {/* <h2>No Faviourite Movies Yet.</h2> */}
      <div className="grid xl:grid-cols-6 lg:grid-cols-4  sm:grid-cols-3 grid-cols-2 xl:gap-6 lg:gap-5 sm:gap-4 gap-3">
                {favourites.map((film) => (
                  <MovieCard
                    key={film.id}
                    title={film.title}
                    release_date={film.release_date}
                    poster={film.poster_path}
                  />
                ))}
              </div>
    </div>
  );
};

export default Favorite;
