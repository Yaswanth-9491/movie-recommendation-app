import { useState } from "react";

import MovieCard from "../components/MovieCard";

import { getMoviesByGenre } from "../services/movieService";

import "../styles/Genres.css";

function Genres() {
  const [movies, setMovies] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");

  const handleGenreClick = async (genreId, genreName) => {
    try {
      const data = await getMoviesByGenre(genreId);

      setMovies(data);
      setSelectedGenre(genreName);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="genres-page">
      <h1>Browse Movies By Genre</h1>

      <div className="genre-buttons">
        <button
          onClick={() =>
            handleGenreClick(28, "Action")
          }
        >
          Action
        </button>

        <button
          onClick={() =>
            handleGenreClick(35, "Comedy")
          }
        >
          Comedy
        </button>

        <button
          onClick={() =>
            handleGenreClick(27, "Horror")
          }
        >
          Horror
        </button>

        <button
          onClick={() =>
            handleGenreClick(10749, "Romance")
          }
        >
          Romance
        </button>

        <button
          onClick={() =>
            handleGenreClick(
              878,
              "Science Fiction"
            )
          }
        >
          Science Fiction
        </button>
      </div>

      {selectedGenre && (
        <h2 className="genre-title">
          {selectedGenre} Movies
        </h2>
      )}

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
    </div>
  );
}

export default Genres;