import React, { createContext, useContext, useEffect, useState } from "react";
// Favorite.jsx, MovieCard.jsx
export const FavmovieContext = createContext();
const FavContext = ({ children }) => {

  // favourite movies store garne
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    try {
      // local storage ma json format ma data store gareko xa 
      const stored = localStorage.getItem("favourites");    
      if (stored) setFavourites(JSON.parse(stored));
    } catch (error) {
      console.error("Failed to parse favourites from localStorage", error);
    }
  }, []);

  useEffect(() => {
    // fav movies lai browser local storage ma store garna 
    localStorage.setItem("favourites", JSON.stringify(favourites)); // favourite array lai json ma convert garxa
  }, [favourites]); 

  // console.log(favourites);

  // favourites state ma value halne 
  const AddFavourite = (movie) => {
    setFavourites((prev) => {
      //if (prev.find((film) => film.id === movie.id)) return; // ensure no duplicate movies, no need for now 
      return [...prev, movie];
    });
  };

  const RemoveFavorite = (movieId) => {
    setFavourites((prev) => prev.filter((film) => film.id !== movieId));
  };

  const checkFavourite = (movieId) => {
    return favourites.some((movie) => movie.id === movieId);
  };

  const values = {
    favourites,
    AddFavourite,
    RemoveFavorite,
    checkFavourite,
  };
  return (
    <FavmovieContext.Provider value={values}>
      {children}
    </FavmovieContext.Provider>
  );
};

export default FavContext;
