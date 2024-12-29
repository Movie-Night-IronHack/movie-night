import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import * as MovieApi from "../../services/movie-api-service";
import RenderCard from "../renderCard/render-card";
import NavBar from "../ui/navbar/navbar";
import PageLayout from "../layouts/page-layout";

function SearchResults() {
  const [movies, setMovies] = useState([]);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  useEffect(() => {
    if (query) {
      MovieApi.searchMovies(query)
        .then((response) => {
          setMovies(response.results || []);
        })
        .catch((error) =>
          console.error("Error fetching search results:", error)
        );
    }
  }, [query]);

  const handleWatch = (movie) => {
    MovieApi.getUserMovies()
      .then((userMovies) => {
        const isAlreadyAdded = userMovies.some(
          (userMovie) => userMovie.id === movie.id
        );

        if (!isAlreadyAdded) {
          MovieApi.addMovieUser(movie)
            .then(() => {
              setMovies((prevList) =>
                prevList.filter((m) => m.id !== movie.id)
              );
            })
            .catch((error) => console.error("Error adding movie:", error));
        } else {
          console.log("Movie is already in the watchlist.");
        }
      })
      .catch((error) => console.error("Error fetching user movies:", error));
  };

  return (
    <>
      <NavBar />
      <PageLayout>
        <div className="container mt-4">
          <h2>Search Results for "{query}"</h2>
          <div className="d-flex flex-wrap gap-3">
            {movies.length > 0 ? (
              movies.map((movie) => (
                <RenderCard
                  key={movie.id}
                  movie={movie}
                  onWatchList={handleWatch}
                />
              ))
            ) : (
              <p>No results found.</p>
            )}
          </div>
        </div>
      </PageLayout>
    </>
  );
}

export default SearchResults;
