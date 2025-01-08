import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Favorite from "./components/favorite/favorite.jsx";
import MovieDetails from "./components/movieDetails/movie-details.jsx";

const HomePage = lazy(() => import("./pages/home-page"));
const UserPage = lazy(() => import("./pages/user-page"));
const SearchResults = lazy(() => import("./components/serachMovies/serach-movies.jsx"));

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/watchlist" element={<UserPage />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/movie/:movieId" element={<MovieDetails />} />
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
