import React, { useEffect, useState } from "react";
import MovieCard from "../../components/movieCard/MovieCard";
import { searchMovies } from "../../api/api";
import { getPopularMovies } from "../../api/api";
import SearchBar from "../../components/Search/SearchBar";
import SearchSuggestion from "../../components/SearchSuggestion/SearchSuggestion";

const Home = () => {
  const [movies, setMovies] = useState([]); // stores movies (both searched movie and popular movies)
  const [isFound, setFound] = useState(true); // searched/ popular movies found?
  const [error, setError] = useState(null); // if any error occurs they are stored here
  const [loading, setLoading] = useState(true); // true during promise pending state

  const [searchedMovie, setSearch] = useState(""); // movie search bar values stored
  const [prevSearch, setPrevSearch] = useState(""); // stores the searched value for search query indicator or search feedback message.
  const [prevSearchShow, setPrevSearchShow] = useState(false); // flag for showing prevSearch

  // handles value changes on input field
  const handleSearchMovie = (e) => {
    const { value } = e.target;
    setSearch(value);
    setPrevSearch(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!searchedMovie.trim()) return;
    if (loading) return;
    setLoading(true);
    try {
      const res = await searchMovies(searchedMovie);  // searchMovies : searched gareko movies fetch garna 
      setMovies(res); // array ho yo.
      if (res && res.length > 0) {    // yedi array(res) empty xaina vane 
        setFound(true); // movies found then true
        setPrevSearchShow(true);  // search suggestion ko lagi
      } else {
        setFound(false);
      }
    } catch (error) {
      console.log(error);
      setError("Failed to search Movie");
    } finally {
      setLoading(false);
      setSearch("");      // set search yaha empty garinxa tesaile prevSearch use gareko search feedback ko lagi
    }
  };

  // gets the popular movies
  useEffect(() => {
    const loadPopularMovie = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (error) {
        console.log(error);
        setError("Failed to load Movies.");
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovie();
  }, []);

  return (
    <div className="flex flex-col">
      
        <SearchBar
          handleSearchMovie={handleSearchMovie}
          handleSubmit={handleSubmit}
          searchedMovie={searchedMovie}
        />


      {/* if searched movies are found the display them otherwise display Loading (during promise pending) */}
      {isFound ? (
        // flex justify-center : movies card centered
        <div className="lg:mt-6 md:mt-6 mt-5 flex justify-center">  
          {loading ? (
            <div> Loading . . . </div>
          ) : (
            <div>
              {/* if the search is sucessfull show this search feedback */}
              {prevSearchShow && <SearchSuggestion prevSearch={prevSearch} />}

              <div className="grid xl:grid-cols-6 lg:grid-cols-4  sm:grid-cols-3 grid-cols-2 xl:gap-6 lg:gap-5 sm:gap-4 gap-3">
                {movies.map((film) => (
                  <MovieCard
                    key={film.id}
                    movieProp={film}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="flex h-[30vh] justify-center items-center text-2xl ">
          {" "}
          No movies found
        </div>
      )}

      {error && `${error}`}


    </div>
  );
};

export default Home;
