import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import {
  getMovieDetails,
  getMovieCredits,
  getMovieVideos,
} from "../services/movieService";

import "../styles/MovieDetails.css";

function MovieDetails() {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [credits, setCredits] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movieData = await getMovieDetails(id);
        const creditsData = await getMovieCredits(id);
        const videosData = await getMovieVideos(id);

        setMovie(movieData);
        setCredits(creditsData);
        setVideos(videosData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  if (!movie || !credits) {
    return <h1>Loading...</h1>;
  }

  const trailer = videos.find(
    (video) =>
      video.type === "Trailer" &&
      video.site === "YouTube"
  );

  return (
    <div className="movie-details">
      <Link to="/" className="back-btn">
        ← Back to Home
      </Link>

      <div className="details-container">
        <img
          className="details-poster"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />

        <div className="details-info">
          <h1>{movie.title}</h1>

          <p>
            ⭐ {movie.vote_average.toFixed(1)}
          </p>

          <p>
            Release Date: {movie.release_date}
          </p>

          <p>
            Runtime: {movie.runtime} min
          </p>

          <p>{movie.overview}</p>
        </div>
      </div>

      <div className="cast-section">
        <h2>Top Cast</h2>

        <div className="cast-grid">
          {credits.cast
            .slice(0, 8)
            .map((actor) => (
              <div key={actor.id}>
                <h4>{actor.name}</h4>
                <p>{actor.character}</p>
              </div>
            ))}
        </div>
      </div>

      <div className="crew-section">
        <h2>Crew</h2>

        {credits.crew
          .filter(
            (person) =>
              person.job === "Director" ||
              person.job === "Writer"
          )
          .map((person) => (
            <p key={person.id}>
              {person.job}: {person.name}
            </p>
          ))}
      </div>

      <div className="trailer-section">
        <h2>Trailer</h2>

        {trailer ? (
          <iframe
            width="100%"
            height="500"
            src={`https://www.youtube.com/embed/${trailer.key}`}
            title="Movie Trailer"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        ) : (
          <p>No trailer available.</p>
        )}
      </div>
    </div>
  );
}

export default MovieDetails;