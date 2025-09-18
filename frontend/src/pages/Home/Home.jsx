import React, { useEffect, useState } from "react";
import MovieCard from "../../components/movieCard/MovieCard";
// import { FaSearch } from "react-icons/fa";
import { searchMovies } from "../../api/api";
import { getPopularMovies } from "../../api/api";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadPopularMovie = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (error) {
        setError("Failed to load Movies.");
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovie();
  }, []);

  return (
    <div className="lg:mt-10 md:mt-6 flex justify-center">
      {loading ? (
        <div> Loading . . . </div>
      ) : (
        <div className="grid xl:grid-cols-6 lg:grid-cols-4  sm:grid-cols-3 grid-cols-2 xl:gap-6 lg:gap-5 sm:gap-4 gap-3">
          {movies.map((film) => (
            <MovieCard
              key={film.id}
              title={film.title}
              release_date={film.release_date}
              poster={film.poster_path}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
