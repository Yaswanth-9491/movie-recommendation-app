import {  Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Genres from "./pages/Genres";
import Favorites from "./pages/Favorites";
import MovieDetails from "./pages/MovieDetails";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/genres" element={<Genres />}/>
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </>
  );
}

export default App;
