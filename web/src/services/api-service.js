import axios from "axios";

const https = axios.create({
  baseURL: "https://api.themoviedb.org",
});

https.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
);

const apiKey = {
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNjljZTA1ODczNTU1N2VjNjdjMzg0ZDgwYjU0NDAxNiIsIm5iZiI6MTczNDAyNzkwNC44NTMsInN1YiI6IjY3NWIyYTgwNWM0MmE4YzZlZDhkMTRhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vdTv1C9fu0ugGQS1laMeqpP-7ev9nt__eJflTayG__8",
  },
};

const trendingMovies = (page) =>
  https.get(`/3/trending/movie/week?page=${page.toString()}`, apiKey);

export { trendingMovies };
