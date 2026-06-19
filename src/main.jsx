import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";

import MovieProvider from "./context/MovieContext";

createRoot(document.getElementById("root")).render(
  <HashRouter>
    <MovieProvider>
      <App />
    </MovieProvider>
  </HashRouter>
);