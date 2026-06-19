import { useContext, useEffect, useState } from "react";

import { MovieContext } from "../context/MovieContext";

import "../styles/Home.css";

import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";

import {
  getPopularMovies,
  searchMovies,
} from "../services/movieService";

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const { favorites } = useContext(MovieContext);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);

      try {
        const data = await getPopularMovies();
        setMovies(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  const handleSearch = async (query) => {
    setLoading(true);

    try {
      if (!query.trim()) {
        const data = await getPopularMovies();
        setMovies(data);
      } else {
        const data = await searchMovies(query);
        setMovies(data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home">
      <div className="hero">
        <h1>Discover Amazing Movies</h1>

        <p>
          Search and explore thousands of movies from around the world.
        </p>

        <SearchBar onSearch={handleSearch} />
      </div>

      {loading ? (
        <h2>Loading...</h2>
      ) : movies.length === 0 ? (
        <h2>No Movies Found</h2>
      ) : (
        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              rating={movie.vote_average}
              poster={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;