import { createContext, useEffect, useState } from "react";

export const MovieContext = createContext();

function MovieProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites =
      JSON.parse(localStorage.getItem("favorites")) || [];

    setFavorites(savedFavorites);
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "favorites",
      JSON.stringify(favorites)
    );
  }, [favorites]);

  const addFavorite = (movie) => {
    const exists = favorites.some(
      (fav) => fav.title === movie.title
    );

    if (!exists) {
      setFavorites((prev) => [...prev, movie]);
    }
  };

  const removeFavorite = (title) => {
    setFavorites((prev) =>
      prev.filter((movie) => movie.title !== title)
    );
  };

  return (
    <MovieContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}

export default MovieProvider;