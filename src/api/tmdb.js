import axios from "axios";

const API_KEY = "243ed44b65f8883698184527fda7938e";

export const tmdb = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: API_KEY,
  },
});