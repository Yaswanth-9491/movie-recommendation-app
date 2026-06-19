import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";

import MovieCard from "../components/MovieCard";

import "../styles/Favorites.css";

function Favorites() {
  const { favorites } = useContext(MovieContext);

  return (
    <div className="favorites">
      <h1>Favorite Movies</h1>

      {favorites.length === 0 ? (
        <p>No favorite movies yet.</p>
      ) : (
        <div className="favorites-grid">
          {favorites.map((movie, index) => (
            <MovieCard
              key={index}
              title={movie.title}
              rating={movie.rating}
              poster={movie.poster}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;