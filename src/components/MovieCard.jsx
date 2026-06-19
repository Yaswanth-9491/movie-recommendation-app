import { Link } from "react-router-dom";
import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";

import "../styles/MovieCard.css";

function MovieCard({ id, title, rating, poster }) {
  const {
    favorites,
    addFavorite,
    removeFavorite,
  } = useContext(MovieContext);

  const isFavorite = favorites.some(
    (movie) => movie.title === title
  );

  return (
    <div className="movie-card">
      <Link to={`/movie/${id}`}>
        <img src={poster} alt={title} />
      </Link>

      <div className="movie-info">
        <Link
          to={`/movie/${id}`}
          style={{
            textDecoration: "none",
            color: "white",
          }}
        >
          <h3>{title}</h3>
        </Link>

        <p>⭐ {rating.toFixed(1)}</p>

        {isFavorite ? (
          <button
            onClick={() => removeFavorite(title)}
            className="remove-btn"
          >
            Remove Favorite
          </button>
        ) : (
          <button
            onClick={() =>
              addFavorite({
                title,
                rating,
                poster,
              })
            }
          >
            Add to Favorites
          </button>
        )}
      </div>
    </div>
  );
}

export default MovieCard;