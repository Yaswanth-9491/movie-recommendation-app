# 🎬 Movie Recommendation App

A modern Movie Recommendation App built with **React**, **Vite**, and **TMDB API**. Users can browse popular movies, search for movies, explore genres, view detailed movie information, watch trailers, and save favorite movies.

## 🚀 Features

### 🏠 Home Page

* View popular movies from TMDB
* Responsive movie card layout
* Beautiful modern UI

### 🔍 Search Movies

* Search movies by title
* Instant movie results from TMDB API

### 🎭 Genre Filtering

* Browse movies by genre
* Categories include:

  * Action
  * Comedy
  * Horror
  * Romance
  * Science Fiction

### ❤️ Favorites

* Add movies to favorites
* Remove movies from favorites
* Favorites stored using Local Storage
* Favorites persist after page refresh

### 🎬 Movie Details Page

* Movie poster
* Rating
* Release date
* Runtime
* Overview
* Top cast
* Crew information

### 🎥 Trailer Section

* Watch official movie trailers directly within the app
* Embedded YouTube trailers

## 🛠️ Technologies Used

* React
* Vite
* React Router DOM
* Axios
* Context API
* Local Storage
* CSS3
* TMDB API

## 📂 Project Structure

```text
src
│
├── api
│   └── tmdb.js
│
├── components
│   ├── MovieCard.jsx
│   ├── Navbar.jsx
│   └── SearchBar.jsx
│
├── context
│   └── MovieContext.jsx
│
├── pages
│   ├── Home.jsx
│   ├── Favorites.jsx
│   ├── Genres.jsx
│   └── MovieDetails.jsx
│
├── services
│   └── movieService.js
│
├── styles
│   ├── Home.css
│   ├── MovieCard.css
│   ├── Navbar.css
│   ├── Favorites.css
│   ├── Genres.css
│   └── MovieDetails.css
│
└── App.jsx
```

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
```

Navigate to the project:

```bash
cd movie-recommendation-app
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

## 🔑 Environment Variables

Create a `.env` file in the root directory:

```env
VITE_TMDB_API_KEY=YOUR_TMDB_API_KEY
```

## 📸 Screenshots

Add screenshots of:

* Home Page
* Search Results
* Genre Page
* Favorites Page
* Movie Details Page

## 🌟 Future Improvements

* Actor profile photos
* Similar movies section
* React Query integration
* Infinite scrolling
* Dark/Light theme toggle
* User authentication
* Personalized recommendations

## 🙏 Acknowledgements

* TMDB API for movie data
* React Team
* Vite Team

## 📄 License

This project is created for learning and portfolio purposes.
