import axios from "axios";

const https = axios.create({
  baseURL: "https://api.themoviedb.org",
});

https.interceptors.response.use(
  (response) => response.data,
  (error) => {
    console.error("API Error:", error.response?.data || error.message);
    Promise.reject(error);
  }
);

const apiKey = {
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNjljZTA1ODczNTU1N2VjNjdjMzg0ZDgwYjU0NDAxNiIsIm5iZiI6MTczNDAyNzkwNC44NTMsInN1YiI6IjY3NWIyYTgwNWM0MmE4YzZlZDhkMTRhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vdTv1C9fu0ugGQS1laMeqpP-7ev9nt__eJflTayG__8",
  },
};

const getMovieDetails = (movieId) => https.get(`/3/movie/${movieId}`, apiKey);

const trendingMovies = (page = 1) =>
  https.get(`/3/trending/movie/week?page=${page.toString()}`, apiKey);

const searchMovies = (query, page = 1) =>
  https.get(`/3/search/movie?query=${query}&page=${page}`, apiKey);

const discoverMovies = (genre, page = 1) =>
  https.get(
    `/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&release_date.gte=2024-12-01&sort_by=popularity.desc&vote_count.gte=6&with_genres=${genre}&year=2024&page=${page}`,
    apiKey
  );

const nowPlaying = (page = 1) =>
  https.get(`/3/movie/now_playing?language=en-US&page=${page}`, apiKey);

const topRated = (page = 1) =>
  https.get(`/3/movie/top_rated?language=en-US&page=${page}`, apiKey);

const upcoming = (page = 1) =>
  https.get(`/3/movie/upcoming?language=en-US&page=${page}`, apiKey);

const popularMovies = (page = 1) =>
  https.get(`/3/movie/popular?language=en-US&page=${page}`, apiKey);

const getMovieVideos = (movieId) =>
  https.get(`/3/movie/${movieId}/videos`, apiKey);

// const searchMovies = () =>
//   https.get(`/3/discover/movie?&with_genres=16`, apiKey);

export {
  trendingMovies,
  searchMovies,
  getMovieDetails,
  discoverMovies,
  nowPlaying,
  popularMovies,
  getMovieVideos,
  topRated,
  upcoming,
};

// Consulta API de los usuarios

const userApi = axios.create({
  baseURL: "http://127.0.0.1:3000",
});

userApi.interceptors.response.use(
  (response) => response.data,
  (error) => {
    console.error("API Error:", error.response?.data || error.message);
    throw Promise.reject(error);
  }
);

const getUserMovies = () => userApi.get("/movies/");

const addMovieUser = (movie) =>
  userApi.post("/movies/", { ...movie, id: movie.id.toString() });

const deleteUserMovie = (movieId) => userApi.delete(`/movies/${movieId}`);

const getFavoriteMovies = () => userApi.get("/favoriteMovies/");

const deleteFavoriteMovie = (movieId) =>
  userApi.delete(`/favoriteMovies/${movieId}`);

const addFavoriteMovie = (movie) =>
  userApi.post("/favoriteMovies/", { ...movie, id: movie.id.toString() });

export {
  getUserMovies,
  addMovieUser,
  deleteUserMovie,
  getFavoriteMovies,
  deleteFavoriteMovie,
  addFavoriteMovie,
};
