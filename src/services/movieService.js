import { tmdb } from "../api/tmdb";

export const getPopularMovies = async () => {
  const response = await tmdb.get("/movie/popular");

  return response.data.results;
};

export const searchMovies = async (query) => {
  const response = await tmdb.get("/search/movie", {
    params: {
      query,
    },
  });

  return response.data.results;
};

export const getMovieDetails = async (id) => {
  const response = await tmdb.get(`/movie/${id}`);
  return response.data;
};

export const getMovieCredits = async (id) => {
  const response = await tmdb.get(`/movie/${id}/credits`);
  return response.data;
};

export const getMoviesByGenre = async (
  genreId
) => {
  const response = await tmdb.get(
    "/discover/movie",
    {
      params: {
        with_genres: genreId,
      },
    }
  );

  return response.data.results;
};

export const getMovieVideos = async (id) => {
  const response = await tmdb.get(
    `/movie/${id}/videos`
  );

  return response.data.results;
};