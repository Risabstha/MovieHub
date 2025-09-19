import React, { createContext, useContext, useEffect, useState } from "react";

export const FavmovieContext = createContext();
const FavContext = ({ children }) => {

  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
   try {
      const stored = localStorage.getItem("favourites");
      if (stored) setFavourites(JSON.parse(stored));
    } catch (error) {
      console.error("Failed to parse favourites from localStorage", error);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favourites",JSON.stringify(favourites)); // favourite array lai json ma convert garxa
  }, [favourites]);

console.log(favourites)

  const AddFavourite = (movie) => {
    setFavourites((prev) => {
     if (prev.find((film) => film.id === movie.id)) return ;       // ensure no duplicate movies
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
  }
  return (
      <FavmovieContext.Provider value={values}>{children}</FavmovieContext.Provider>
  );
};      

export default FavContext;
