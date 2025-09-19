import React, { useContext, useState } from "react";
import MovieCard from "../../components/movieCard/MovieCard";
import { FavmovieContext } from "../../stores/FavContext";
import SearchBar from "../../components/Search/SearchBar";

const Favorite = () => {
  const { favourites, AddFavourite, RemoveFavorite, checkFavourite } =
    useContext(FavmovieContext);

    const [searchedMovie, setSearch] = useState('');
    const [movie, setMovie] = useState('');
    const handleSearchMovie =(e)=>
    {
       const {value}  = e.target;
       setSearch(value);
    }
  
    const handleSubmit = (e) =>{
        e.preventDefault();
        setMovie(searchedMovie);
    }
  return (
    <div>
      {/* <h2>No Faviourite Movies Yet.</h2> */}
      <SearchBar
          handleSearchMovie={handleSearchMovie}
          handleSubmit={handleSubmit}
          searchedMovie={searchedMovie}/>
      <div className="lg:mt-6 md:mt-6 mt-5 flex justify-center">
      <div className="grid xl:grid-cols-6 lg:grid-cols-4  sm:grid-cols-3 grid-cols-2 xl:gap-6 lg:gap-5 sm:gap-4 gap-3">
        {favourites.map((film) => (
          film.title.toLowerCase().startsWith(searchedMovie.toLowerCase()) &&
          <MovieCard key={film.id} movieProp={film} />
        ))}
      </div></div>
    </div>
  );
};

export default Favorite;
